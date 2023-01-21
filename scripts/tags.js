// Tag animation

const aboutZone = document.querySelector(".about-me");
const allTags = Array.from(document.querySelectorAll(".tag"));
const allTagsInfos = Array.from(document.querySelectorAll(".tag-desc"));

aboutZone.addEventListener("mousemove", (e) => {

    allTags.forEach(tag => {
        
        let movingValue = tag.getAttribute("data-value");
        let x = (e.clientX * movingValue) / 250;
        let y = (e.clientY * movingValue) / 250;

        tag.style.transform = `translate(${x}px, ${y}px)`;
    })
})

allTags.forEach((tag, tagIndex) => {
    
    tag.addEventListener("click", () => {

        // Was the tag active before click ?
        const isActive = tag.classList.contains("active");

        // Remove all previous actives tags
        allTags.forEach((tag, tagIndex) => {
            tag.classList.remove("active");
            allTagsInfos[tagIndex].classList.remove('active');
        })


        // If the current tag wasn't active before, we make it active
        if (!isActive) {
            tag.classList.add("active");
            allTagsInfos[tagIndex].classList.add('active');
        }
        
    })
})