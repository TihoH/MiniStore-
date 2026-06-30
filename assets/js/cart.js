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
            ? { ...item, quantity: item.quantity + 1  }
            : item,
        );
        updateCartLength();
        localStorage.setItem("cartIds", JSON.stringify(cart));
        return;
      }
      cart.push({...product });
      localStorage.setItem("cartIds", JSON.stringify(cart));
      updateCartLength();
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
      cart = cart.filter((item) => item.id != id);
      localStorage.setItem("cartIds", JSON.stringify(cart));
      updateCartLength();
    },

    decreaseProduct: (id) => {
      cart = cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0);
      localStorage.setItem("cartIds", JSON.stringify(cart));
      updateCartLength();
    },
    fullPriceCart: () => {
      return cart.reduce((acc, elem) => {
                console.log(elem)
        acc = acc + elem.price.price * elem.quantity;

        return acc;
      }, 0);
    },
  };
}

export const userCart = cartUser();

document.addEventListener("click", (e) => {
  const adedInCartBtn = e.target.closest(".group-products__add-product");
  if (!adedInCartBtn) return;

  const idProduct = Number(adedInCartBtn.dataset.id);
  const findProduct = allProducts.find((elem) => elem.id === idProduct);
  

  if (!findProduct) return;
  console.log(findProduct)
  userCart.addProduct({...findProduct , price: findProduct.variants[0] });
  updateCartLength();
});
