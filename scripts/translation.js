// Get the button
// Listen on click
// Change everything according to the current state (check local storage) and store to localStorage the current language of the website

const translateBtn = document.querySelector("nav .lang");
const translateBtnPic = document.querySelector("nav .lang img");

// Get the current language of the page (default is fr)
let lang = localStorage.getItem("lang");
if (lang === null) {
    lang = "fr";
    localStorage.setItem("lang", lang);
}

// Initial load
window.addEventListener("DOMContentLoaded", () => {
    
    // Get everything
    const page = Array.from(document.querySelectorAll("*"));

    // FR --> EN
    if (lang === "en") {

        // Update infos
        lang = 'en';
        translateBtnPic.setAttribute("src", "/assets/icons/fr_flag.svg");
        translateBtnPic.setAttribute("alt", "french flag");

        // En
        fetch("../assets/texts/en.json")
        .then(res => res = res.json())
        .then (data => {

            page.forEach(element => {
                const elementLang = element.getAttribute("data-lang");
                if (elementLang !== null) {
                    element.innerHTML = data[elementLang];
                }
            })

        })
        // .catch (err => console.log(err));
    }

    // EN --> FR
    else {

        // Update infos
        lang = 'fr';
        translateBtnPic.setAttribute("src", "/assets/icons/us_flag.svg");
        translateBtnPic.setAttribute("alt", "usa flag");

        // Fr
        fetch("../assets/texts/fr.json")
        .then(res => res = res.json())
        .then (data => {

            page.forEach(element => {
                const elementLang = element.getAttribute("data-lang");
                if (elementLang !== null) {
                    element.innerHTML = data[elementLang];
                }
            })

        })
        // .catch (err => console.log(err));

    }
})


translateBtn.addEventListener("click", () => {

    // Get everything
    const page = Array.from(document.querySelectorAll("*"));

    // FR --> EN
    if (lang === "fr") {

        // Update infos
        lang = 'en';
        translateBtnPic.setAttribute("src", "/assets/icons/fr_flag.svg");
        translateBtnPic.setAttribute("alt", "french flag");

        // En
        fetch("../assets/texts/en.json")
        .then(res => res = res.json())
        .then (data => {

            page.forEach(element => {
                const elementLang = element.getAttribute("data-lang");
                if (elementLang !== null) {
                    element.innerHTML = data[elementLang];
                }
            })

        })
        // .catch (err => console.log(err));
    }

    // EN --> FR
    else {

        // Update infos
        lang = 'fr';
        translateBtnPic.setAttribute("src", "/assets/icons/us_flag.svg");
        translateBtnPic.setAttribute("alt", "usa flag");

        // Fr
        fetch("../assets/texts/fr.json")
        .then(res => res = res.json())
        .then (data => {

            page.forEach(element => {
                const elementLang = element.getAttribute("data-lang");
                if (elementLang !== null) {
                    element.innerHTML = data[elementLang];
                }
            })

        })
        // .catch (err => console.log(err));

    }

    // Update the lang
    localStorage.setItem("lang", lang);
})


