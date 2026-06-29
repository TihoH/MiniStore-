import { userCart as cart } from "../cart.js";

const renderProducts = document.querySelector(".cart__render-products");
const cartProduct = document.querySelector(".cart__render-products");


function renderCartProducts() {
  const cartIds = JSON.parse(localStorage.getItem("cartIds")) || [];
  const cartProduct = document.querySelector(".cart__render-products");
  renderProducts.innerHTML = "";

  cartIds?.forEach((product) => {
    const li = document.createElement("li");
    const adedProduct = document.querySelector(".product__changeSctock");

    li.innerHTML = `
          <div class="product__image-title"> 
            <img class="cart__product-image" src="${product.image}"> 
            <div> 
              <span class="cart__product-name"> ${product.title}</span> 
              <span class="cart__product-price"> $${product?.variants?.[0].price}</span> 
            </div>
          </div>
          <div> ${renderButtons(product)} </div>
          <div class="cart__product-over-price">
            <span> ${renderOverPriceProduct(product)} $ </span> 
            <span class="cart__deleteProduct" data-id="${product.id}"> x </span>
          </div>

      `;
    li.classList.add("cart__product");

    renderProducts.append(li);
  });
}

cartProduct.addEventListener("click", (e) => {
  let cartIds = JSON.parse(localStorage.getItem("cartIds")) || [];
  const deleteProduct = e.target.closest(".cart__deleteProduct");
  const deleteQuantity = e.target.closest('.deleteQuantity')
  const adedProduct = e.target.closest(".adedQuantityBtn");

  if (deleteProduct) {
    const id = Number(deleteProduct.dataset.id);
    cart.deleteProduct(id);
  }
  if (adedProduct) {
    const id = Number(adedProduct.dataset.id);
    let findProduct = cartIds.find((item) => item.id === id);
    if (findProduct) {
      cart.addProduct(findProduct);
    }
    
  }
  if(deleteQuantity){
    const id = Number(deleteQuantity.dataset.id);
    cart.decreaseProduct(id)
  }

  renderCartProducts();
});

function renderButtons(product) {
  return `      
      <div class="product__stock">
          <div>
            <span class="product__quantity-stock"></span>
          </div>
          <div class="product__stock-increment">
            <button data-id="${product.id}" class="deleteQuantity">-</button>
            <button data-id="${product.id}" class="product__changeSctock">${product.quantity} </button>
            <button data-id="${product.id}" class="adedQuantityBtn" >+</button>
          </div>
      </div>`;
}

function renderOverPriceProduct(product){
  return product?.variants?.[0].price * product.quantity
}

renderCartProducts();
