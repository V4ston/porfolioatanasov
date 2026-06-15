var ready = (callback) => {

    if (document.readyState != "loading") callback();

    else document.addEventListener("DOMContentLoaded", callback);

}

ready(() => {

    document.querySelector(".header").style.height = window.innerHeight + "px";

})

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

const discover = document.getElementsByClassName("discover");
const immagini = document.getElementsByClassName("immagini");

for (let i = 0; i < discover.length; i++) {
    discover[i].classList.add('d-none');
}

let visible = false;

for (let j = 0; j < immagini.length; j++) {

    immagini[j].addEventListener("click", function () {

        if (visible == false) {

            discover[j].classList.remove('d-none');
            immagini[j].style.boxShadow = "0 0 15px 5px rgba(0, 128, 0, 0.6)";
            visible = true;
        }
        else {

            for (let i = 0; i < discover.length; i++) {
                discover[i].classList.add('d-none');
                immagini[i].style.boxShadow = "none";
            }
            visible = false;
        }

    });
}

/*document.addEventListener("DOMContentLoaded", function() {

    setTimeout(function() {

        var demoModal = new bootstrap.Modal(document.getElementById('demo-modal'));

        demoModal.show();

    }, 500);

});*/