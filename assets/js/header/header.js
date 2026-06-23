import { userCart } from "../cart.js";

const headerLinkItem = document.querySelectorAll(".header__links-items li a");
const headerCartLenth = document.querySelector('.header__cart-lenth')
const currentPath = window.location.pathname;

function activeLink() {
  headerLinkItem.forEach((elem) => {
    if (elem.getAttribute("href") === currentPath){
        elem.classList.add("activeLink");
    }
  });
}


export function updateCartLength() {
  headerCartLenth.textContent = `${userCart.lengthCart()}`;
}




updateCartLength()
activeLink();

