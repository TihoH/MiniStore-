import { products } from "../data.js";

const params = new URLSearchParams(document.location.search);
const id = params.get("id");

const currentProduct = products.find((elem) => elem.id === Number(id));

const product = document.querySelector(".product");
const productImage = product.querySelector(".product__image");
const name = product.querySelector(".product__name");
const rating = product.querySelector(".product__rating");
const price = product.querySelector(".product__price");
const description = product.querySelector(".product__description");
const renderColor = product.querySelector(".product__render-color");
const renderSize = product.querySelector(".product__render-size");
const productQuantityStock = product.querySelector(".product__quantity-stock");
const changeStock = product.querySelector(".product__changeSctock");
const productInfoCategory = document.querySelector('.product__info-catogory')
const renderTags = document.querySelector('.product__renderTags')

let productColor = currentProduct?.colors?.[0];
let productSize = currentProduct?.variants?.[0]?.size;
let productQuantity = 1;

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
  productInfoCategory.innerText = `Category: ${currentProduct.category[0].toUpperCase() + currentProduct.category.slice(1)}`

  renderColorsList();
  renderSizeList();
  renderTagsProduct()
}
function renderTagsProduct() {
  renderTags.textContent = `Tags: ${currentProduct.tags.join(", ") }`;
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
  if (!currentProduct.variants) return;

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
  const currentVariant = getCurrentVariant();

  if (changeColor) {
    productColor = changeColor.dataset.color;
    renderColorsList();
  }

  if (changeSize) {
    productSize = changeSize.dataset.size;
    const currentVariant = getCurrentVariant();
    price.textContent = `$${currentVariant.price}`;
    productQuantity = 1;
    renderSizeList();
    renderProduct();
  }
  if (adedQuantityBtn) {
    if (productQuantity < currentVariant.stock ) {
      productQuantity++;
    } else {
      adedQuantityBtn.classList.add("disabled");
    }
  }
  if (deleteQuantity && productQuantity >= 0 ) {
    productQuantity--;
  }

  renderProduct();
});

function getCurrentVariant() {
  return currentProduct.variants.find((elem) => {
    return elem.size === productSize;
  });
}

renderProduct();
