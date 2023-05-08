//import LocomotiveScroll from 'locomotive-scroll';

//import Splitting from 'splitting';

/* Prevent scroling when menu is open */

// const navButton = document.querySelector('.w-nav-button');

// navButton.addEventListener('click', function () {
//   if (navButton.classList.contains('w--open')) {
//     document.body.style.overflow = 'auto';
//   } else {
//     document.body.style.overflow = 'hidden';
//   }
// });

//Splitting();

Webflow.push(function () {
  // check is the CMS editor is there
  if (Webflow.env('editor') !== true) {
    // code here
  }
});

const navIcon = document.querySelector('.w-nav-button');
const navClose = document.querySelector('.kestral-hamburger');
const navLinks = document.querySelectorAll('.w-nav-link');

navIcon.addEventListener('click', function () {
  document.body.style.overflow = 'hidden';
});

navClose.addEventListener('click', function () {
  document.body.style.overflow = '';
});

navLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    document.body.style.overflow = '';
  });
});

/* Extract hero images from collection, randomise and apply to #heroimg element */
// Get all the image URLs
const imageElements = document.querySelectorAll('.hero-collection-item [data-src]');
const imageUrls = Array.from(imageElements).map((element) => element.dataset.src);

// Select a random URL
const randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];

// Apply the random image URL as the background for #heroimg
const heroImgElement = document.getElementById('heroimg');
heroImgElement.style.backgroundImage = `url(${randomImageUrl})`;

// const scroll = new LocomotiveScroll({
//   el: document.querySelector('[data-scroll-container]'),
//   smooth: true,
// });
