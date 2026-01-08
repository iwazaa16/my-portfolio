const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
const mask = document.getElementById('mask');

hamburger.addEventListener('click',()=> {
  hamburger.classList.toggle('active');
  nav.classList.toggle('active');
  mask.classList.toggle('active');
});

mask.addEventListener('click',()=> {
  hamburger.classList.remove('active');
  nav.classList.remove('active');
  mask.classList.remove('active');
});