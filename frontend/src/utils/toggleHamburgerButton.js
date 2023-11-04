function toggleHamburgerMenu() {
  const button = document.querySelector(".humburger-button");
  if (button) {
    button.addEventListener("click", function () {
      const menu = document.querySelector(".nav-menu");

      if (menu.style.maxHeight === "0px" || menu.style.maxHeight === "") {
        menu.style.maxHeight = "200px";
      } else {
        menu.style.maxHeight = "0px";
      }
    });
  }
}

export default toggleHamburgerMenu;
