// Constantes
const listaMascotas = document.querySelector(".listaMascotas");
const mascotas = document.getElementById("nombre");

// Listeners
initApp();

document.addEventListener("load", initAPP)

// Funciones
function initApp() {
    // console.log("Hola, mundo");

    listaMascotas.addEventListener("click", obtenerMascota)
}

function obtenerMascota(e) {

    if(e.target.classList.contains("agregarCarrito")) {
        const curso = e.target.parentElement;

        extraerDatos(mascota);
    }

}

function extraerDatos(mascota) {
    const mascotaElegida = {
        nombre: mascota.querySelector("h2").textContent,
    }

    // console.log(mascotaElegida)
    pintarMascota(mascotaElegida)
}

function pintarMascota(mascota) {
    let container = document.createElement("div");
    let nombre = document.createElement("p");
    let precio = document.createElement("p");

    nombre = mascota.nombre;

    console.log(nombre);

    cursos.appendChild(container)
}




/*
	Add to cart fly effect with jQuery. - May 05, 2013
	(c) 2013 @ElmahdiMahmoud - fikra-masri.by
	license: https://www.opensource.org/licenses/mit-license.php
*/   

$('.add-to-cart').on('click', function () {
    var cart = $('.shopping-cart');
    var imgtodrag = $(this).parent('.item').find("img").eq(0);
    if (imgtodrag) {
        var imgclone = imgtodrag.clone()
            .offset({
            top: imgtodrag.offset().top,
            left: imgtodrag.offset().left
        })
            .css({
            'opacity': '0.5',
                'position': 'absolute',
                'height': '150px',
                'width': '150px',
                'z-index': '100'
        })
            .appendTo($('body'))
            .animate({
            'top': cart.offset().top + 10,
                'left': cart.offset().left + 10,
                'width': 75,
                'height': 75
        }, 1000, 'easeInOutExpo');
        
        setTimeout(function () {
            cart.effect("shake", {
                times: 2
            }, 200);
        }, 1500);

        imgclone.animate({
            'width': 0,
                'height': 0
        }, function () {
            $(this).detach()
        });
    }
});