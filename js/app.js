
















$(document).ready(function(){

  // INITIALIZE AOS - slide on scroll.
  AOS.init({
    // use aos slide in one time 'unrepeatable'.
    once: true
  });


  // skills Slider
  $('#skillsSlider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });

  // smooth scroll when use navbar links
  jQuery('.nav-link').click(function(e){
    var jump = $(this).attr('href');
    var new_position = $(jump).offset();
    $('html, body').stop().animate({ scrollTop: new_position.top }, 1000);
    e.preventDefault();
  });

  // on scroll [ fixed navbar and background color , change active navabar links]
  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();

      // resize and change background color on scroll
    if (scroll >= 500) {
        $(".navbar").addClass("bg-dark");
        $(".navbar").css("padding-top", "1%");
      }
      if (scroll < 500) {
        $(".navbar").removeClass("bg-dark");
        $(".navbar").css("padding-top", "3%");
      }

      // change active class on scroll
      var scrollPos = $(document).scrollTop();
      $('.nav-link').each(function () {
        var currLink = $(this);
        currLink.removeClass("active");
          var refElement = $(currLink.attr("href"));
          // 150px for fixed navbar
          if (refElement.position().top - 100 <= scrollPos && refElement.position().top + refElement.height() + 100 > scrollPos) {
              $('.nav-link').removeClass("active");
              currLink.addClass("active");
          }
          else{
              currLink.removeClass("active");
          }
      });
  });


  // the sameHeight functions makes all the selected elements of the same height
  $.fn.sameHeight = function() {
    var selector = this;
    var heights = [];

    // Save the heights of every element into an array
    selector.each(function(){
        var height = $(this).height();
        heights.push(height);
    });

    // Get the biggest height
    var maxHeight = Math.max.apply(null, heights);
    // Show in the console to verify
    // console.log(heights,maxHeight);

    // Set the maxHeight to every selected element
    selector.each(function(){
        $(this).height(maxHeight);
    }); 
};

// call the sameHeight function and pass it to html element.
$('.details p').sameHeight();

$(window).resize(function(){
  // Do it when the window resizes too
  $('.details p').sameHeight();
});

});
// JQuery;
