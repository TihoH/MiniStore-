import { renderProducts } from "../app.js/renderProducts.js";
import { products } from "../data.js";

const groupList = document.querySelector(".shop__filters");
const renderCategoriesList = document.querySelector(".shop__render-filterCategories");
const renderTagsList = document.querySelector(".shop__render-filterTags");
const renderBrandsList = document.querySelector(".shop__render-filterBrands");
const renderProductList = document.querySelector(".shop__list");

let sliceStart = 0;
let sliceEnd = 8;

let selectedCategory = "all";
let selectedTag = "all";
let selectedBrand = 'all'

const productsAll = [...products];

function updateProducts() {
  let result = [...productsAll];

  if (selectedCategory !== "all") {
    result = result.filter((item) => item.category === selectedCategory);
  }

  if (selectedTag !== "all") {
    result = result.filter((item) => item.tags.includes(selectedTag));
  }

    if (selectedBrand !== "all") {
    result = result.filter((item) => item.brand === selectedBrand);
  }

  result = result.slice(sliceStart, sliceEnd);

  renderProductList.innerHTML = "";
  renderProducts(result, ".shop__list", false);
}

groupList.addEventListener("click", (e) => {
  const filteredValue = e.target.closest(".shop__render-item");
  if (!filteredValue) return;

  if (filteredValue.dataset.category) {
    selectedCategory = filteredValue.dataset.category;
  }

  if (filteredValue.dataset.tag) {
    selectedTag = filteredValue.dataset.tag;
  }

   if (filteredValue.dataset.brand) {
    selectedBrand = filteredValue.dataset.brand ;
  }

  updateProducts();
  
});

function renderFiltered(list) {
  list.innerHTML = "";

  const filteredCategories = [
    "All",
    ...new Set(
      productsAll.map(
        (item) => item.category[0].toUpperCase() + item.category.slice(1),
      ),
    ),
  ];

  filteredCategories.forEach((item) => {
    const li = document.createElement("li");

    li.classList.add("shop__render-item");
    li.dataset.category = item.toLowerCase();
    li.textContent = item;

    list.append(li);
  });
}

function renderTags(list) {
  list.innerHTML = "";

  const tags = [
    "all",
    ...new Set(productsAll.flatMap((product) => product.tags)),
  ];

  tags.forEach((tag) => {
    const li = document.createElement("li");

    li.classList.add("shop__render-item");
    li.dataset.tag = tag;
    li.textContent = tag[0].toUpperCase() + tag.slice(1);

    list.append(li);
  });
}

function renderBrands(list) {
  list.innerHTML = "";

  const brands = [
    "all",
    ...new Set(productsAll.map((brand) => brand.brand)),
  ];

  brands.forEach((brand) => {
    const li = document.createElement("li");

    li.classList.add("shop__render-item");
    li.dataset.brand = brand;
    li.textContent = brand[0].toUpperCase() + brand.slice(1);

    list.append(li);
  });
}

renderFiltered(renderCategoriesList);
renderTags(renderTagsList);
renderBrands(renderBrandsList);
updateProducts();