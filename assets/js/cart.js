import { products } from "./data.js";
import { updateCartLength } from "./header/header.js";
const headerCartLenth = document.querySelector(".header__cart-lenth");

const allProducts = [...products].map((item) => ({ ...item, quantity: 1 }));

export function cartUser() {
  let cart = JSON.parse(localStorage.getItem("cartIds")) || [];

  return {
    addProduct: (product) => {
      const findProductsInCart = cart.find((item) => item.id === product.id);

      if (findProductsInCart) {
        cart = cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item,
        );
      localStorage.setItem("cartIds", JSON.stringify(cart));
        return;
      }
      cart.push(product);
      localStorage.setItem("cartIds", JSON.stringify(cart));
    },

    lengthCart() {
      const count = cart.reduce((sum, item) => {
        return sum + item.quantity;
      }, 0);

      return ` (${count}) `;
    },
    getProducts: () => {
      return cart;
    },
    deleteProduct: (id) => {
      cart = cart.filter( item => item.id != id )
      localStorage.setItem("cartIds", JSON.stringify(cart));

    }
  };
}

export const userCart = cartUser();

document.addEventListener("click", (e) => {
  const adedInCartBtn = e.target.closest(".group-products__add-product");
  if (!adedInCartBtn) return;

  const idProduct = Number(adedInCartBtn.dataset.id);
  const findProduct = allProducts.find((elem) => elem.id === idProduct);

  if (!findProduct) return;
  userCart.addProduct(findProduct);
  updateCartLength();
  console.log(userCart.getProducts());
});
