import { renderProducts } from "../app.js/renderProducts.js";
import { userCart } from "../cart.js";
import { products } from "../data.js";

const params = new URLSearchParams(document.location.search);
const id = params.get("id");

const currentProduct = products.find((elem) => elem.id === Number(id));

const relatedProducts = [...products].filter(elem => elem.tags.includes(currentProduct.tags[0]))

console.log(relatedProducts)

const product = document.querySelector(".product");
const productImage = product.querySelector(".product__image");
const name = product.querySelector(".product__name");
const rating = product.querySelector(".product__rating");
const price = product.querySelector(".product__price");
const description = product.querySelector(".product__description");
const renderColor = product.querySelector(".product__render-color");
const renderSize = product.querySelector(".product__render-size");
const productSizeWrapp = document.querySelector(".product__size");
const productQuantityStock = product.querySelector(".product__quantity-stock");
const changeStock = product.querySelector(".product__changeSctock");
const productInfoCategory = document.querySelector(".product__info-catogory");
const renderTags = document.querySelector(".product__renderTags");
const adedInCart = document.querySelector(".product__aded-in-cart");
const renderInfoAdedProduct = document.querySelector(
  ".product__render-title-addInfo",
);
const productRenderAddInfoText = document.querySelector(
  ".product__render-addInfo-text",
);
const reviews = document.querySelector(".product__reviewsAboutProduct");

let productColor = currentProduct?.colors?.[0];
let productSize = currentProduct?.variants?.[0]?.size;
let productQuantity = 1;
let textRenderAdedInfoText = currentProduct.fullDescription;

productRenderAddInfoText.innerText = textRenderAdedInfoText;
reviews.innerHTML = `Reviews (${currentProduct.reviews.length})`;

function renderProduct() {
  if (!currentProduct) return;
  const currentVariant = getCurrentVariant();
  productImage.src = currentProduct.image;
  productImage.alt = currentProduct.title;

  name.textContent = currentProduct.title;
  rating.textContent = currentProduct.rating;
  price.textContent = `$${currentVariant.price}`;
  description.textContent = currentProduct.description;
  productQuantityStock.textContent = currentVariant.stock;
  changeStock.innerText = productQuantity;
  productInfoCategory.innerText = `Category: ${currentProduct.category[0].toUpperCase() + currentProduct.category.slice(1)}`;

  const plusBtn = product.querySelector(".adedQuantityBtn");

  if (productQuantity >= currentVariant.stock) {
    plusBtn?.classList.add("disabled");
  } else {
    plusBtn?.classList.remove("disabled");
  }

  renderColorsList();
  renderSizeList();
  renderTagsProduct();
}
function renderTagsProduct() {
  renderTags.textContent = `Tags: ${currentProduct.tags.join(", ")}`;
}

function renderColorsList() {
  if (!currentProduct.colors) return;

  renderColor.innerHTML = "";

  currentProduct.colors.forEach((elem) => {
    const li = document.createElement("li");

    li.innerText = elem;
    li.classList.add("product__color-item");
    li.dataset.color = elem;

    if (elem === productColor) {
      li.classList.add("activeItem");
    }

    renderColor.append(li);
  });
}

function renderSizeList() {
  if (
    !currentProduct?.variants?.length ||
    currentProduct.variants[0].size.includes("One Size")
  ) {
    productSizeWrapp.remove();
    return;
  }
  renderSize.innerHTML = "";

  currentProduct.variants.forEach((elem) => {
    const li = document.createElement("li");

    li.innerText = elem.size;
    li.classList.add("product__sizes-item");
    li.dataset.size = elem.size;

    if (elem.size === productSize) {
      li.classList.add("activeItem");
    }

    renderSize.append(li);
  });
}
product.addEventListener("click", (e) => {
  const changeColor = e.target.closest(".product__color-item");
  const changeSize = e.target.closest(".product__sizes-item");
  const adedQuantityBtn = e.target.closest(".adedQuantityBtn");
  const deleteQuantity = e.target.closest(".deleteQuantity");

  if (changeColor) {
    productColor = changeColor.dataset.color;
  }

  if (changeSize) {
    productSize = changeSize.dataset.size;
    productQuantity = 1;
  }

  const currentVariant = getCurrentVariant();

  if (adedQuantityBtn && productQuantity < currentVariant.stock) {
    productQuantity++;
  }

  if (deleteQuantity && productQuantity > 1) {
    productQuantity--;
  }

  renderProduct();
});
renderInfoAdedProduct.addEventListener("click", (e) => {
  const title = e.target.closest(".product__descriptionAboutProduct");
  const adedInfo = e.target.closest(".product__addInfoAboutProduct");
  const reviews = e.target.closest(".product__reviewsAboutProduct");
  productRenderAddInfoText.innerHTML = "";

  const tabs = document.querySelectorAll('.product__descriptionAboutProduct , .product__addInfoAboutProduct , .product__reviewsAboutProduct')
  
  tabs.forEach( tab => tab.classList.remove('activeItem') )

  if (title) {
    title.classList.add('activeItem')
    productRenderAddInfoText.innerHTML = `${currentProduct.fullDescription}`;
  }
  if (adedInfo) {
     adedInfo.classList.add('activeItem')
    productRenderAddInfoText.innerHTML = `${currentProduct.additionalInfo}`;
  }
  if (reviews) {
     reviews.classList.add('activeItem')
    const ul = document.createElement("ul");
    ul.classList.add("product__reviews-list");

    currentProduct.reviews.forEach((item , index) => {
      const li = document.createElement("li");
      li.classList.add("product__review-item");

      if(index === 0){
         adedInfo.classList.add('activeItem')
      }
      li.innerHTML = `
        <div class="product__review-top">
          <h4 class="product__review-author">${item.author}</h4>
          <span class="product__review-rating">
            ${"★".repeat(item.rating)}${"☆".repeat(5 - item.rating)}
          </span>
        </div>

        <p class="product__review-text">
          ${item.text}
        </p>
      `;

      ul.append(li);
    });

    productRenderAddInfoText.append(ul);
  }
});

adedInCart.addEventListener("click", () => {
  const adedUser = { ...currentProduct, quantity: productQuantity , color: productColor };
  userCart.addProduct(adedUser);
  console.log(userCart.getProducts());
});

function getCurrentVariant() {
  return currentProduct.variants.find((elem) => {
    return elem.size === productSize;
  });
}

renderProduct();
renderProducts(relatedProducts , '.product__render' )
