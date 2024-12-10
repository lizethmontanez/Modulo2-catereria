function redirigir (url){
    window.location.href = url;
}


//Galeria
new Splide( '#galeria', {
    perPage: 4,
    perMove: 1
} ).mount();