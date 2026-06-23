let activeIndexDots = 0;

export function renderProducts(arr, className , activeDots = true) {
  const mobileProductsRender = document.querySelector(`${className}`);

  arr.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("group-products__item");
    li.innerHTML = `
            <img src="${item.image}" alt="${item.title}"> 
            <div class='group-products__info-product'> 
                <span> ${item.title} </span> 
                <span class="group-products__price">$ ${item.price} </span> 
            </div>
                          <button data-id=${item.id} class="group-products__add-product baseBtn-black"> Add to cart  </button>
        `;

        // <img src="../images/icons/ion_cart.svg" />

    mobileProductsRender.append(li);
  });

  if(activeDots){
      renderDots(arr, mobileProductsRender)
  }
}



function renderDots(arr, productsRender) {
  const section = productsRender.closest(".group-products");
  const dots = section.querySelector(".group-products__render-dots");

  if (!dots) return;

  const lengthDots = Math.ceil(arr.length / 2);
  dots.innerHTML = "";

  for (let i = 0; i < lengthDots; i++) {
    const span = document.createElement("span");
    span.classList.add("group-products__dots");
    span.dataset.index = i;

    if (i === 0) {
      span.classList.add("activeDots");
    }

    dots.append(span);
  }

  dots.onclick = (e) => {
    const dot = e.target.closest(".group-products__dots");
    if (!dot) return;

    const slideWidth = 330;
    const activeIndexDots = Number(dot.dataset.index);

    productsRender.style.transform =
      `translateX(-${slideWidth * activeIndexDots}px)`;

    dots.querySelectorAll(".group-products__dots").forEach((item) => {
      item.classList.remove("activeDots");
    });

    dot.classList.add("activeDots");
  };
}