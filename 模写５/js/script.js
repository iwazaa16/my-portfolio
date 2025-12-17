const bg = document.querySelector('.bg-fixed');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target.dataset.bg;
      bg.style.backgroundImage = `url(${img})`;
    }
  });
}, {
  threshold: 0.5
});

document.querySelectorAll('.sec').forEach(sec => {
  observer.observe(sec);
});
