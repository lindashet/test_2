/*!
 * 提示
 */
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
/*!
 * 輪播
 */
$(document).on('ready', function() {
    $('.single-item').slick({
        dots: true,
        arrows: false,
    });
    $(".rapidLinks.slider").slick({
        infinite: false,
        speed: 300,
        slidesToShow: 7,
        slidesToScroll: 7,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 5,

            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          }
        ]
    });
    $(".application.slider").slick({
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,

            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    });
    $(".product_type.slider").slick({
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
  });
  $('.multiple-items').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3
  });
  $('.tool-items').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
    ]
  });
  $('.member-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });
});
/*!
 * 關閉cookies
 */
$(function() {
  $(".cookies .btn").click(function(){
    $(".cookies").fadeOut();
  });
});
/*!
 * 進階搜尋
 */
$(function() {
    $("#clickhere").click(function(){
      $(".help-checkbox").slideToggle();
    });
});
/*!
 * goToTop
 */
$(document).ready(function(){
	$("#goToTop").hide()
	$(window).on("scroll",function() {
        if ($(this).scrollTop() > 50 ) {
            $('#goToTop').fadeIn();
        } else {
            $('#goToTop').fadeOut();
        }
    });
    $("#goToTop a").on("click",function() {
        $("html, body").animate({scrollTop: 0}, 800);
		return false;
     });
});

