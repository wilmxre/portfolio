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
  elem.target = '_blank';
}

// add images to elements
const addImg = (elem, imgSrc) => {
  elem.src = imgSrc;
}


// generate random number
class UniqueRandomGen {
  constructor(arr, n) {
    this.arr = arr;
    this.n = n;
  }

  random = () => {
    let random = Number((Math.random() * (this.n - 1)).toFixed());

    if (!this.arr.includes(random)) {
      this.arr.push(random);
      return random;
    }

    else {
      if (this.arr.length < this.n) {
        return this.random(this.n);

      } else {
        return false;
      }
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
  '',
  '',
  '',
  '',
  ''
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
  './photos/id1.png',
  './photos/id2.png',
  './photos/id3.png',
  './photos/id4.png',
  './photos/id5.png'
];

let animationArr = [];

const containerWork = document.querySelector("#work > ul");
const numberOfItems = 12;

// check width of window and return the correct item number per page
const checkWidth = () => {
  let width = window.innerWidth;

  switch (true) {
    case width < 1575 && width > 1210:
      animationArr = [
        'slide-in-tl',
        'slide-in-top',
        'slide-in-tr',
        'slide-in-left',
        'scale-in-center',
        'slide-in-right',
        'slide-in-bl',
        'slide-in-bottom',
        'slide-in-br'];
      return 9;
    case width < 1210 && width >= 850:
      animationArr = [
        'slide-in-tl',
        'slide-in-tr',
        'slide-in-left',
        'slide-in-right',
        'slide-in-bl',
        'slide-in-br'];
      return 6;
    case width < 850:
      animationArr = [
        'slide-in-top',
        'scale-in-center',
        'slide-in-bottom'
      ];
      return 3;
    default:
      animationArr = [
        'slide-in-tl',
        'slide-in-top',
        'slide-in-top',
        'slide-in-tr',
        'slide-in-left',
        'scale-in-center',
        'scale-in-center',
        'slide-in-right',
        'slide-in-bl',
        'slide-in-bottom',
        'slide-in-bottom',
        'slide-in-br'];
      return numberOfItems;
  }
}

let genArr = [];
// generate work section items
const generateItems = (count) => {
  const rand = new UniqueRandomGen(genArr, count);

  for (let i = 0; i < count; i++) {
    const workItem = document.createElement('li');
    workItem.classList.add('work-item');

    const elementWrapper = document.createElement('div');
    elementWrapper.classList.add('element-wrapper');

    const workItemText = document.createElement('a');
    workItemText.classList.add('text-element');
    workItemText.textContent = `View`;
    elementWrapper.appendChild(workItemText);

    const workItemImg = document.createElement('img');
    workItemImg.classList.add('img-element', 'hidden');
    elementWrapper.appendChild(workItemImg);

    const workItemOverlay = document.createElement('div');
    workItemOverlay.classList.add('overlay');
    elementWrapper.appendChild(workItemOverlay);

    let randomIndex = rand.random();
    if (!(randomIndex in imgArray)) {
      addImg(workItemImg, './photos/placeholder-image.png')
      workItemText.textContent = 'Soon!';
    }
    else {
      addImg(workItemImg, imgArray[randomIndex]);
      addLink(workItemText, linkArray[randomIndex]);
    }

    workItem.appendChild(elementWrapper);
    containerWork.appendChild(workItem);
  }

  // Reveal work items when the section is active
  window.addEventListener('scroll', function () {
    if (window.scrollY >= window.innerHeight) {

      document.querySelectorAll("#work > ul > li > div > img").forEach((element, index) => {
        setTimeout(() => {
          element.classList.remove('hidden');
          element.parentNode.parentNode.classList.add('box-shadow', 'fade-in', animationArr[index], 'fade-in');
        }, index * 0); //replace 0 with bigger number for delay
      });

    }

  });

}

// sleep function
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}



// replace work sections randomly, one by one
replaceItems = () => {
  let includesIt = [];
  let includesIt2 = [];
  const loadedItems = document.querySelectorAll("#work > ul > li.work-item");
  let i = 1;
  loadedItems.forEach((element, index) => {
    setTimeout(() => {
      const rand1 = new UniqueRandomGen(includesIt, checkWidth());
      const rand2 = new UniqueRandomGen(includesIt2, imgArray.length);

      randomCurrent = rand1.random();
      randomTotal = rand2.random();

      console.log(randomCurrent, randomTotal) // L O G <--------------


      loadedItems[randomCurrent].childNodes[0].childNodes[0].src =
        linkArray[randomTotal];
      loadedItems[randomCurrent].childNodes[0].childNodes[1].src =
        imgArray[randomTotal];
      loadedItems[randomCurrent].childNodes[0].childNodes[0].textContent =
        i++;


      if (index == loadedItems.length - 1) {
        sleep(200).then(() => replaceItems());
        console.log('***')
      }
    }, index * 2000);
  });
}

// check if the user is on work section
const workSectionChecker = () => {
  document.addEventListener('scroll', () => {
    if (window.scrollY) {
      sleep(2000).then(() => {
        replaceItems();
      })
    }
  }, { once: true });
}

workSectionChecker();


// function calls
document.addEventListener("DOMContentLoaded", () => {
  sleep(400).then(() => typeWriter(hello, 100, helloText));
});

window.onload = () => {
  changeActive();
  scrollInto();
  scrollWithKeys();
  reveal();
  generateItems(checkWidth());
  window.addEventListener('scroll', reveal);
  window.addEventListener('wheel', scrollWithWheel, { passive: false });
}

// got to top of page when website is refreshed
window.onbeforeunload = function () {
  document.querySelector("#wilmxre > div").style.display = 'none';
  document.querySelector("body > header > nav > a.wilmxre").classList.add('active');
  window.scrollTo(0, 0);
}
