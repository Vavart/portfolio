// Handle the navigation menu (open/close responsive menu)

const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const body = document.querySelector('body');

// Open/close the responsive menu
burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navLinks.classList.toggle('active');
    body.classList.toggle('nav-active');
});

// Close the responsive menu when the window is resized above 596px (the optimized way)
new ResizeObserver(entries => {
    if (entries[0].contentRect.width > 596){
        burger.classList.remove('active');
        navLinks.classList.remove('active');
        body.classList.remove('nav-active');
    }
  }).observe(document.body)