// Get the slider
// Change the slider position according to mouse events

const slider = document.querySelector(".cont-testimonies");

let isActive = false;
let startingMousePosX;
let scrollLeft;

// On mouse leave and mouse up (outside the slider or mouse up), stop scrolling
slider.addEventListener('mouseleave', () => {
    isActive = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isActive = false;
    slider.classList.remove('active');
});

// Get the mouse position on mouse down and scroll on mouse move
slider.addEventListener('mousedown', (e) => {
    isActive = true;
    slider.classList.add('active');
    startingMousePosX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});


// On mouse move, prevent default and scroll the slider
slider.addEventListener('mousemove', (e) => {
    if(!isActive) return;
    e.preventDefault(); 
    const x = e.pageX - slider.offsetLeft;
    const sliding = (x - startingMousePosX) * 1; // multiplier to increase the scroll speed
    slider.scrollLeft = scrollLeft - sliding; // scroll the slider
});