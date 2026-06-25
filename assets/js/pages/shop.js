import {
  renderPaginationList,
  renderProducts,
} from "../app.js/renderProducts.js";
import { products } from "../data.js";

const groupList = document.querySelector(".shop__filters");
const renderCategoriesList = document.querySelector(
  ".shop__render-filterCategories",
);
const renderTagsList = document.querySelector(".shop__render-filterTags");
const renderBrandsList = document.querySelector(".shop__render-filterBrands");
const renderProductList = document.querySelector(".shop__list");
const shop__searchInput = document.querySelector(".shop__search-input");
const paginationArrowNext = document.querySelector('.pagination__arrow--next')
const paginationArrowPrev = document.querySelector('.pagination__arrow--prev')

let selectedCategory = "all";
let selectedTag = "all";
let selectedBrand = "all";
let searchValue = "";
let currentPage = 1;
const productsPerPage = 8;
let pagesCount = 1;

const productsAll = [...products];

function updateProducts() {
  let result = [...productsAll];

  if (searchValue !== "") {
    result = result.filter((item) => {
      return (
        item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.category.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.tags.some((tag) =>
          tag.toLowerCase().includes(searchValue.toLowerCase()),
        )
      );
    });
  }

  if (selectedCategory !== "all") {
    result = result.filter((item) => item.category === selectedCategory);
  }

  if (selectedTag !== "all") {
    result = result.filter((item) => item.tags.includes(selectedTag));
  }

  if (selectedBrand !== "all") {
    result = result.filter((item) => item.brand === selectedBrand);
  }

  renderPaginationList(result , currentPage ,  productsPerPage);
  pagesCount = Math.ceil(result.length / productsPerPage);
  const sliceStart = (currentPage - 1) * productsPerPage;
  const sliceEnd = currentPage * productsPerPage;

  result = result.slice(sliceStart, sliceEnd);

  renderProductList.innerHTML = "";
  renderProducts(result, ".shop__list", false, true);
}

shop__searchInput.addEventListener("input", (e) => {
  searchValue = e.target.value;
  updateProducts();
});

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
    selectedBrand = filteredValue.dataset.brand;
  }

  updateProducts();
  renderFilters();
});

function renderFilters() {
  renderFiltered(renderCategoriesList);
  renderTags(renderTagsList);
  renderBrands(renderBrandsList);
}

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

    if (li.dataset.category === selectedCategory) {
      li.classList.add("activeItem");
    }

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
    if (li.dataset.tag === selectedTag) {
      li.classList.add("activeItem");
    }

    list.append(li);
  });
}

function renderBrands(list) {
  list.innerHTML = "";

  const brands = ["all", ...new Set(productsAll.map((brand) => brand.brand))];

  brands.forEach((brand) => {
    const li = document.createElement("li");

    li.classList.add("shop__render-item");
    li.dataset.brand = brand;
    li.textContent = brand[0].toUpperCase() + brand.slice(1);

    if (li.dataset.brand === selectedBrand) {
      li.classList.add("activeItem");
    }

    list.append(li);
  });
}

paginationArrowNext.addEventListener( 'click' , () => {
   if (currentPage >= pagesCount) return;
  currentPage++
updateProducts()
  
} )
paginationArrowPrev.addEventListener("click", () => {
  if (currentPage <= 1) return;

  currentPage--;
  
  updateProducts();
});


renderFiltered(renderCategoriesList);
renderTags(renderTagsList);
renderBrands(renderBrandsList);
updateProducts();
