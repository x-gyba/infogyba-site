let menuList = document.getElementById("nav-menu");

function toggleMenu() {
  if (menuList.classList.contains("show")) {
    menuList.style.maxHeight = "0px";
    menuList.classList.remove("show");
  } else {
    menuList.style.maxHeight = "300px";
    menuList.classList.add("show");
  }
}

/* back to Top */
const backToTopButton = document.getElementById("backtop");
window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

backToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
