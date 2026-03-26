AOS.init();

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

const navlinks = document.querySelectorAll(".navlink");
const tags = document.querySelectorAll(".tag");
const pricingTabs = document.querySelectorAll(".tab");

function changeActiveStatus(elements, activeClass = "active") {
  elements.forEach((el) => {
    el.addEventListener("click", function () {
      elements.forEach((item) => {
        item.classList.remove(activeClass);
        this.classList.add(activeClass);
      });
    });
  });
}


changeActiveStatus(navlinks)
changeActiveStatus(tags);
changeActiveStatus(pricingTabs);