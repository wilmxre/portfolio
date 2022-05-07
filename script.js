let section = document.querySelectorAll("section");
let nav = document.querySelectorAll("nav a");

const changeActive = () => {
  window.onscroll = () => {
    section.forEach((child) => {
      let id = child.getAttribute("id");
      let height = child.offsetHeight;
      let top = window.scrollY;
      let offset = child.offsetTop - 150;

      if (top >= offset && top < offset + height) {
        nav.forEach((child) => {
          child.classList.remove("active");
          document.querySelector("nav a[href*=" + id + "]").classList.add("active");
        });
      }
    });
  };
}

changeActive()