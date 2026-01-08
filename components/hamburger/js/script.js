const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const bg = document.querySelector('.bg');

hamburger.addEventListener('click', () =>{
  hamburger.classList.toggle('is-open')
  nav.classList.toggle('is-open');
  bg.classList.toggle('is-open');
});