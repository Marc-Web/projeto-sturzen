$('.owl-carousel').owlCarousel({
    loop:true,
    margin:5,
    nav: true,
    navText: ["Anterior", "Próximo"],
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
