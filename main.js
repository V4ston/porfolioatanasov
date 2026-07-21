var ready = (callback) => {

    if (document.readyState != "loading") callback();

    else document.addEventListener("DOMContentLoaded", callback);

}

ready(() => {

    document.querySelector(".header").style.height = window.innerHeight + "px";

})

///

const DarkLight = document.querySelector(".mode-navbar");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light-mode");

    const img = DarkLight.tagName === 'BUTTON' ? DarkLight.querySelector('img') : DarkLight;
    img.src = "./images/LightMode-removebg-preview.png";
}

DarkLight.addEventListener("click", function (e) {
    e.preventDefault();
    document.body.classList.toggle("light-mode");

    const img = DarkLight.tagName === 'BUTTON' ? DarkLight.querySelector('img') : DarkLight;

    if (document.body.classList.contains("light-mode")) {
        img.src = "./images/LightMode-removebg-preview.png";
        localStorage.setItem("theme", "light");
    } else {
        img.src = "./images/DarkMode-removebg-preview.png";
        localStorage.setItem("theme", "dark");
    }
});

///

const discover = document.getElementsByClassName("discover");
const immagini = document.getElementsByClassName("immagini");
const titolettino = document.getElementsByClassName("titolettino");

for (let i = 0; i < discover.length; i++) {
    discover[i].classList.add('d-none');
}

for (let j = 0; j < immagini.length; j++) {

    immagini[j].addEventListener("click", function () {
        
        for (let k = 0; k < titolettino.length; k++) {
            titolettino[k].style.color = "";
        }
        for (let i = 0; i < immagini.length; i++) {
            immagini[i].style.boxShadow = "none";
        }

        let boxDestinazione;
        let slittamento;

        if (j < 9) { 
            boxDestinazione = document.getElementById("testo-linguaggi");
            slittamento = 0;
        } 
        else if (j < 15) { 
            boxDestinazione = document.getElementById("testo-strumenti");
            slittamento = 1;
        } 
        else { 
            boxDestinazione = document.getElementById("testo-lingue");
            slittamento = 2;
        }

        boxDestinazione.textContent = discover[j].textContent;
        immagini[j].style.boxShadow = "0 0 15px 5px rgba(0, 128, 0, 0.6)";
        titolettino[j + slittamento].style.color = "rgba(0, 128, 0, 1)";
    });
}