$(document).ready(function() {
    $('.location-inp').on('click', function() {
        $('.select-first').toggleClass('active');
    })
    $('.location-inp-second').on('click', function() {
        $('.select-second').toggleClass('active');
    })

    $('.new-wrapper').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        slidesPerRow: 1,
        variableWidth: true,
        infinite: false,
        centerPadding: '0px',
        cssEase: 'linear',
        focusOnSelect: true,
        prevArrow:"<button type='button' class='slick-prev'></button>",
        nextArrow:"<button type='button' class='slick-next'></button>",
      });

})