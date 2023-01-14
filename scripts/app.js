// Tag animation

const aboutZone = document.querySelector(".about-me");
const allTags = Array.from(document.querySelectorAll(".tag"));

console.log(aboutZone);
console.log(allTags);

aboutZone.addEventListener("mousemove", (e) => {

    allTags.forEach(tag => {
        
        let movingValue = tag.getAttribute("data-value");
        let x = (e.clientX * movingValue) / 250;
        let y = (e.clientY * movingValue) / 250;

        tag.style.transform = `translate(${x}px, ${y}px)`;
    })
})

allTags.forEach(tag => {
    tag.addEventListener("click", () => {
        tag.classList.toggle("active");
    })
})