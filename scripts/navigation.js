// Handle the navigation menu (open/close responsive menu)

const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
});