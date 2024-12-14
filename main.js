function redirigir (url){
    window.location.href = url;
}

//Galeria-bestsellers
new Splide('#galeria', {
    perPage: 4,            
    perMove: 1,            
    breakpoints: {
    780: {               
        perPage: 2,        
    },
    },
}).mount();

//Galeria-experiencias
new Splide('#galeria-2', {
    perPage: 2,            
    perMove: 1,            
    breakpoints: {
    780: {               
        perPage: 1,        
    },
    },
}).mount();


//Obtener el header
const header = document.querySelector('header');
const logo = document.querySelector('#logo img');

//Escuchar el evento de scroll
window.addEventListener('scroll', function () {
    if (window.scrollY > window.innerHeight) {
        header.className = 'scrolled';
        logo.src = "img-friends/logo central perk.webp";
    } else {
        header.className = '';
        logo.src = "img-friends/logoverde.jpg";
    }
});