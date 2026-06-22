import { renderProducts } from "./renderProducts.js";
import {products } from "../data.js";
const adedProductBtn = document.querySelector('.group-products__add-product')

import "./commentsSlider.js";

const mobile = [...products].filter( elem => elem.category === 'mobile' )
const watch = [...products].filter( elem => elem.category === 'watch' )

const sections = [
  {
    productsRender: mobile,
    productsRenderHTML: ".group-products__render-phone",
  },
  {
    productsRender: watch,
    productsRenderHTML: ".group-products__render-watch",
  },
];

sections.forEach((item) => {
  renderProducts(item.productsRender, item.productsRenderHTML);
});
