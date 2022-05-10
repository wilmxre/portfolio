let section = document.querySelectorAll('section');
let nav = document.querySelectorAll('nav a');

// change active section on navigation bar
const changeActive = () => {
  window.onscroll = () => {
    section.forEach((sectionChild) => {
      let id = sectionChild.getAttribute('id');
      let height = sectionChild.offsetHeight;
      let top = window.scrollY;
      let offset = sectionChild.offsetTop - 150;

      if (top >= offset && top < offset + height) {
        nav.forEach((navChild) => {
          navChild.classList.remove('active');
          document.querySelector('nav a[class*=' + id + ']').classList.add('active');
        });
      }
    });
  };
}

// scroll to specific section
const scrollInto = () => {
  nav.forEach((navElement) => {
    navElement.addEventListener('click', (e) => {
      let hash = e.target.classList[0];

      section.forEach((sectionElement => {
        if (sectionElement.id === hash) {
          sectionElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }));

    });
  });
}

// reveal elements on active section
const reveal = () => {
  let reveals = document.querySelectorAll('.reveal');

  for (let i = 0; i < reveals.length; i++) {
    let height = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let visible = 150;

    // > 0 for removing active class, when you scroll pass the section (before it only removed it when you scrolled up pass the section)
    if (elementTop < height - visible && elementTop > 0) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}

const KEY_UP = 'ArrowUp';
const KEY_LEFT = 'ArrowLeft';
const KEY_DOWN = 'ArrowDown';
const KEY_RIGHT = 'ArrowRight';
const SPACE = ' ';

// scroll on page with arrows or space
const scrollWithKeys = () => {
  window.addEventListener('keydown', (e) => {
    // e.preventDefault();
    section.forEach((item, index) => {
      if (item.childNodes[1].classList.length == 3) {
        switch (e.key) {
          case KEY_UP:
          case KEY_LEFT:
            if (index > 0) {
              section[index - 1].scrollIntoView({
                behavior: 'smooth'
              });
            }
            break;

          case KEY_DOWN:
          case KEY_RIGHT:
          case SPACE:
            if (index < section.length - 1) {
              section[index + 1].scrollIntoView({
                behavior: 'smooth'
              });
              break;
            }
          default:
        }
      }

    });
  });
}

// scroll to specific section with the mousewheel
const scrollWithWheel = (e) => {
  let delta = 0;
  if (e.wheelDelta) {
    delta = e.wheelDelta;
  } else {
    delta = e.deltaY * -1;
  }

  e.preventDefault();

  section.forEach((item, index) => {
    if (item.childNodes[1].classList.length == 3) {
      switch (true) {
        case delta > 0:
          if (index > 0) {
            section[index - 1].scrollIntoView({
              behavior: 'smooth'
            });
          }
          break;
        case delta < 0:
          if (index < section.length - 1) {
            section[index + 1].scrollIntoView({
              behavior: 'smooth'
            });
          }
          break;
        default:
      }
    }
  });
}


let hello = document.querySelector('.hello');
let helloText = "Hello, my name is";

// typewriting effect
function typeWriter(element, speed, text) {
  element.innerHTML = "";

  let i = 0;
  let timer = setInterval(() => {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}

// add links to elements
const addLink = (elem, link) => {
  elem.href = link;
}

// add images to elements
const addBgImg = (elem, imgSrc) => {
  elem.style = 'background-image: url("' + imgSrc + '");'
}

const addImg = (elem, imgSrc) => {
  elem.src = imgSrc;
}

const linkArray = [
  'https://wilmxre.github.io/admin-dashboard/',
  'https://wilmxre.github.io/calculator/',
  'https://wilmxre.github.io/etch-a-sketch/',
  'https://wilmxre.github.io/landing-page/',
  'https://santagoshop.github.io/home/',
  'https://wilmxre.github.io/rock-paper-scissors/',
  'https://wilmxre.github.io/sign-up-form/',
  'https://wilmxre.github.io/smartphone-store/',
  'https://wilmxre.github.io/admin-dashboard/',
  'https://wilmxre.github.io/admin-dashboard/',
  'https://wilmxre.github.io/admin-dashboard/',
  'https://wilmxre.github.io/admin-dashboard/'
];

const imgArray = [
  './photos/admin-dashboard.png',
  './photos/calculator.png',
  './photos/etch-a-sketch.png',
  './photos/landing-page.png',
  './photos/products-catalog.png',
  './photos/rps.png',
  './photos/sign-up-form.png',
  './photos/smartphone-store.png',
  './photos/admin-dashboard.png',
  './photos/admin-dashboard.png',
  './photos/admin-dashboard.png',
  './photos/admin-dashboard.png'
];

const containerWork = document.querySelector("#work > ul");

// add items to work section
const addWorkItems = () => {
  let itemsCount = 12;
  let width = window.innerWidth;

  switch (true) {
    case width < 1575 && width > 1210:
      itemsCount = 9;
      break;
    case width < 1210 && width >= 850:
      itemsCount = 6;
      break;
    case width < 850:
      itemsCount = 3;
      break;
    default:
  }

  for (let i = 0; i < itemsCount; i++) {
    const workItem = document.createElement('li');
    workItem.classList.add('work-item');

    const workItemText = document.createElement('a');
    workItemText.classList.add('text-element');
    workItemText.textContent = `View-${i}`;
    workItem.appendChild(workItemText);

    const workItemImg = document.createElement('img');
    workItemImg.classList.add('img-element');
    workItem.appendChild(workItemImg);

    containerWork.appendChild(workItem);
  }
  const a = document.querySelectorAll("#work > ul  > li")

  let i = 0;
  while (true) {
    addLink(a[i].childNodes[0], linkArray[i]);
    addImg(a[i].childNodes[1], imgArray[i++]);
    // addBgImg(a[i], imgArray[i++]);

    if (i == itemsCount) return;
  }
}

// sleep function
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

document.addEventListener("DOMContentLoaded", () => {
  sleep(400).then(() => typeWriter(hello, 100, helloText));
});

// function calls
window.onload = () => {
  changeActive();
  scrollInto();
  scrollWithKeys();
  reveal();
  // typeWriter(hello, 100, helloText);
  addWorkItems();
  window.addEventListener('scroll', reveal);
  window.addEventListener('wheel', scrollWithWheel, { passive: false });
}

window.onbeforeunload = function () {
  document.querySelector("#wilmxre > div").style.display = 'none';
  document.querySelector("body > header > nav > a.wilmxre").classList.add('active');
  window.scrollTo(0, 0);
}
