$(window).scroll(function() {
  if ($(".navbar").offset().top > 50) {
    $(".navbar-fixed-top").addClass("top-nav-collapse");
    $(".github-ribbon a img").fadeIn("slow", "swing");
  } else {
    $(".navbar-fixed-top").removeClass("top-nav-collapse");
    $(".github-ribbon a img").fadeOut("slow", "swing");
  }
});

$(function() {
  $(".page-scroll a").bind("click", function(event) {
    var $anchor;
    $anchor = $(this);
    $("html, body").stop().animate({
      scrollTop: $($anchor.attr("href")).offset().top
    }, 700, "easeInOutExpo");
    event.preventDefault();
  });
});

$(document).ready(function() {
  return $('.screenshot-link').magnificPopup({
    type: 'image',
    mainClass: 'mfp-with-zoom',
    zoom: {
      enabled: true,
      duration: 300,
      easing: 'ease-in-out',
      opener: function(openerElement) {
        if (openerElement.is('img')) {
          return openerElement;
        } else {
          return openerElement.find('img');
        }
      }
    }
  });
});
