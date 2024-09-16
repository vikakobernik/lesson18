$(document).ready(function(){
    $('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,  
    arrows: true, 
    autoplay: true,  
    autoplaySpeed: 3000,
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="slick-next">Next</button>'
    });
});
