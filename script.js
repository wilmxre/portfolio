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

    if (elementTop < height - visible) {
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
const addImg = (elem, imgSrc) => {
  elem.src = imgSrc;
}

// generate random number
let includesIt = [];

const uniqueRandom = (n) => {
  let random = Number((Math.random() * (n - 1)).toFixed());

  if (!includesIt.includes(random)) {
    includesIt.push(random);
    return random;
  }

  else {
    if (includesIt.length < n) {
      return uniqueRandom(n);

    } else {
      return false;
    }
  }
}

const linkArray = [
  'https://github.com/wilmxre/admin-dashboard/',
  'https://github.com/wilmxre/calculator/',
  'https://github.com/wilmxre/etch-a-sketch/',
  'https://github.com/wilmxre/landing-page/',
  'https://github.com/santagoshop/home',
  'https://github.com/wilmxre/rock-paper-scissors/',
  'https://github.com/wilmxre/sign-up-form/',
  'https://github.com/wilmxre/smartphone-store/',
  'https://github.com/wilmxre/admin-dashboard/',
  'https://github.com/wilmxre/admin-dashboard/',
  'https://github.com/wilmxre/admin-dashboard/',
  'https://github.com/wilmxre/admin-dashboard/'
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

// generate work section items
const generateItems = (count) => {

  let width = window.innerWidth;

  switch (true) {
    case width < 1575 && width > 1210:
      count = 9;
      break;
    case width < 1210 && width >= 850:
      count = 6;
      break;
    case width < 850:
      count = 3;
      break;
    default:
  }

  for (let i = 0; i < count; i++) {
    const workItem = document.createElement('li');
    workItem.classList.add('work-item');

    const elementWrapper = document.createElement('div');
    elementWrapper.classList.add('element-wrapper');

    const workItemText = document.createElement('a');
    workItemText.classList.add('text-element');
    workItemText.textContent = `View`;
    elementWrapper.appendChild(workItemText);
    workItem.appendChild(elementWrapper);

    const workItemImg = document.createElement('img');
    workItemImg.classList.add('img-element');
    elementWrapper.appendChild(workItemImg);

    const workItemOverlay = document.createElement('div');
    workItemOverlay.classList.add('overlay');
    elementWrapper.appendChild(workItemOverlay);

    let randomIndex = uniqueRandom(count);

    addImg(workItemImg, imgArray[randomIndex]);
    addLink(workItemText, linkArray[randomIndex]);
    workItem.appendChild(elementWrapper);

    containerWork.appendChild(workItem);
  }

  // fillWithContent(count);
}

// fill work section items with content
const fillWithContent = (itemsCount) => {
  const a = document.querySelectorAll("#work > ul  > li")

  let i = 0;
  while (true) {
    let randomIndex = uniqueRandom(itemsCount);
    console.log(randomIndex);
    addLink(a[i].childNodes[0].childNodes[0], linkArray[randomIndex]);
    addImg(a[i++].childNodes[0].childNodes[1], imgArray[randomIndex]);

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

const numberOfItems = 12;
// function calls
window.onload = () => {
  changeActive();
  scrollInto();
  scrollWithKeys();
  reveal();
  generateItems(numberOfItems);
  window.addEventListener('scroll', reveal);
  window.addEventListener('wheel', scrollWithWheel, { passive: false });
}

// got to top of page when website is refreshed
window.onbeforeunload = function () {
  document.querySelector("#wilmxre > div").style.display = 'none';
  document.querySelector("body > header > nav > a.wilmxre").classList.add('active');
  window.scrollTo(0, 0);
}
