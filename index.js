'use strict';

const hamburger = document.querySelector('.nav-hamburger');
const navMenu = document.querySelector('.nav-menu-container');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  if (navMenu.classList.contains('active')) {
    hamburger.src = 'images/icon-close.svg';
    document.body.style.position = 'fixed';
  } else {
    hamburger.src = 'images/icon-hamburger.svg';
    document.body.style.position = '';
  }
});
