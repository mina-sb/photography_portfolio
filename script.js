let menuBtn = document.querySelector("#menu-btn");
let menu = document.querySelector(".menu");

menuBtn.onclick = () => {
  if (menu.classList.contains("close")) {
    menu.classList.replace("close", "open");
    menuBtn.classList.replace("bx-menu", "bx-x");
  } else {
    menu.classList.replace("open", "close");
    menuBtn.classList.replace("bx-x", "bx-menu");
  }
};
