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

    $(".faq-wrapper__item").click(function() {
        if ($(this).hasClass('active')) {
          $('.btn-close').removeClass('active');
          $(this).find('.faq-wrapper__item-content').hide(500);
          $(this).removeClass('active');
        } else {
          $('.faq-wrapper__item-content').hide(500);
          $('.faq-wrapper__item').removeClass('active');
          $('.btn-close').removeClass('active');
          $(this).find('.btn-close').addClass('active');
          $(this).find('.faq-wrapper__item-content').show(500);
          $(this).addClass('active');
        }
      });
      $('.menu').on('click', function() {
        $('.line-top, .line-bottom').toggleClass('active')
        $('.mobile').toggleClass('active')
      })
      $('.close-btn').on('click', function() {
        $('.line-top, .line-bottom').removeClass('active')
        $('.mobile').removeClass('active')
      })
})