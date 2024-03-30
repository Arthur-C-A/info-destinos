import { barcelona, roma, paris, londres } from './ciudades.js'

// Obtener los elementos del DOM
let links = document.querySelectorAll('a')
let titleElement = document.getElementById('titulo')
let subTitleElement = document.getElementById('subtitulo')
let pElement = document.getElementById('parrafo')
let precioElement = document.getElementById('precio')

console.log(links);

//agregar un event Click a cada link

links.forEach((link) =>{
    link.addEventListener('click', function(){
        links.forEach((link) => {
            link.classList.remove('active')
        })

        //Agregar la clase 'active' a la que corresponda
        this.classList.add('active'); 

        //Obtener contenido segun el enlace

        let contenido = obtenerContenido(this.textContent)

        titleElement.innerHTML = contenido.titulo
        subTitleElement.innerHTML = contenido.subtitulo
        pElement.innerHTML = contenido.parrafo
        precioElement.innerHTML = contenido.precio

    })
})


//Función para traer la información desde ciudades.js

function obtenerContenido(link){
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    };
    return contenido[link];
}
