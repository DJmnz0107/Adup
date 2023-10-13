
document.addEventListener('DOMContentLoaded', function (e) {


    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        if (event.matches) {
            modoOscuro();

        }
    });

    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', event => {
        if (event.matches) {
            modoClaro();
        }

    });

    load();

});


function load() {


    let mode = localStorage.getItem("mode");
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches || mode == 'claro' || mode == '' || mode == null) {
        modoClaro();
    }


    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches || mode == 'oscuro') {
        modoOscuro();

    }

    let estado = localStorage.getItem('estado');
    if (estado == 'active' || estado == null) {
        document.documentElement.style.setProperty('--animation', 'none');

    }
}

function modoOscuro() {

    document.documentElement.style.setProperty('--color-background', '#212529');
    document.documentElement.style.setProperty('--color-navbar', '#FFFFFF');
    document.documentElement.style.setProperty('--color-navbar-hover', '#1770ff');
    document.documentElement.style.setProperty('--color-letra', '#FFFFFF');
    document.documentElement.style.setProperty('--color-fondo', '#0D6EFD');
    document.documentElement.style.setProperty('--color-input', '#474E53');
    document.documentElement.style.setProperty('---color-background', '#636669');


    localStorage.setItem('mode', 'oscuro');
    localStorage.setItem('estado', 'active');

    document.getElementById("oscuro").style.setProperty("display", "none");
    document.getElementById("claro").style.setProperty("display", "block");
    document.getElementById("oscuro1").style.setProperty("display", "none");
    document.getElementById("claro1").style.setProperty("display", "flex");

    var image = document.getElementById('logoMenu');
    if (image.src.match("../imgs/black-trans11.png")) {
      image.src = "../imgs/white-trans11.png";
    } 
    else {
      image.src = "../imgs/white-trans11.png";
    }

    var image = document.getElementById('logoMenu1');
    if (image.src.match("../imgs/black-trans11.png")) {
      image.src = "../imgs/white-trans11.png";
    } 
    else {
      image.src = "../imgs/white-trans11.png";
    }
};

function modoClaro() {

    document.documentElement.style.setProperty('--color-background', '#FFFFFF');
    document.documentElement.style.setProperty('--color-navbar', '#000000');
    document.documentElement.style.setProperty('--color-navbar-hover', '#1770ff');
    document.documentElement.style.setProperty('--color-letra', '#000000');
    document.documentElement.style.setProperty('--color-fondo', '#0D6EFD');
    document.documentElement.style.setProperty('--color-input', '#FFFFFF');
    document.documentElement.style.setProperty('---color-background', '#ececec');


    localStorage.setItem('mode', 'claro');
    localStorage.setItem('estado', 'active');
    document.getElementById("claro").style.setProperty("display", "none");
    document.getElementById("oscuro").style.setProperty("display", "block");
    document.getElementById("claro1").style.setProperty("display", "none");
    document.getElementById("oscuro1").style.setProperty("display", "flex");


    var image = document.getElementById('logoMenu');
    if (image.src.match("../imgs/white-trans11.png")) {
      image.src = "../imgs/black-trans11.png";
    } 
    else {
      image.src = "../imgs/black-trans11.png";
    }

    var image = document.getElementById('logoMenu1');
    if (image.src.match("../imgs/white-trans11.png")) {
      image.src = "../imgs/black-trans11.png";
    } 
    else {
      image.src = "../imgs/black-trans11.png";
    }
}