$(document).ready(function(){
    //top-slider
    $('#hero-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items:1,
        dots:false,
        navText:['PREV','NEXT'],
        smartSpeed:1000,
        responsive:{
            0:{
               nav:false
            },
            768:{
              nav:true
            },
        
        }
    })


    //product  slider
    $('#product-slider').owlCarousel({
        loop:true,
        margin:0,
         nav:false,
        dots:true,
        smartSpeed:1000,
        margin:24,
        responsive:{
            0:{
           items:1,
           dots:false,
           margin:0
            },
            768:{
              items:2
            },
        1140:{
        items:2,
        center:true,
        }
        }
    });


    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        items:1,
        smartSpeed:800,
    })
})

function animateValue(id){
    var obj = document.getElementById(id);
    var current = parseInt(obj.innerHTML);

    var intervel = setInterval(function(){
        obj.innerHTML = current++;
        if(current === 161){
            clearInterval(intervel);
        }
      },20);
     }

animateValue('value');