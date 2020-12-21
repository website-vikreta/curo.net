// hero slider
$('.hero-slider').slick({
    dots: false,
    prevArrow: $(".hero-slider-wrapper .btn-left"),
    nextArrow: $(".hero-slider-wrapper .btn-right"),
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});
$('.hero-slider-new').slick({
    dots: true,
    prevArrow: $(".hero-slider-wrapper .btn-left"),
    nextArrow: $(".hero-slider-wrapper .btn-right"),
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});