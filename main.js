function redirigir (url){
    window.location.href = url;
}


//Galeria
new Splide( '#galeria', {
    perPage: 4,
    perMove: 1
} ).mount();

//Galeria
new Splide( '#galeria-2', {
    perPage: 2,
    perMove: 1
} ).mount();