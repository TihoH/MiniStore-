const headerLinkItem = document.querySelectorAll(".header__links-items li a");

const currentPath = window.location.pathname;

function activeLink() {
  headerLinkItem.forEach((elem) => {
    if (elem.getAttribute("href") === currentPath){
        elem.classList.add("activeLink");
    }
  });
}

activeLink();

