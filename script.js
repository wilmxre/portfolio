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


const reveal = () => {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let height = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let visible = 150;

    if (elementTop < height - visible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.onload = () => {
  window.addEventListener("scroll", reveal);
  changeActive();
  reveal();
}