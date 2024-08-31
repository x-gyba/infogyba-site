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
