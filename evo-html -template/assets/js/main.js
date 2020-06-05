(function ($) {
    "use strict";



    // SmoothScroll

    var scroll = new SmoothScroll('a[href*="#"]', {
      speed: 800,
      speedAsDuration: true
    });

     // parallax JS
    var scene = document.getElementById('parallax-shape');
    var parallaxInstance = new Parallax(scene);
    

     // wow JS
      new WOW().init();

    // sticky header

    $(window).on('scroll', function(){
      if($(window).scrollTop()){

        $('header').addClass('header-sticky');
      }
      
      else
      {
        $('header').removeClass('header-sticky');
      }
      
    })


     // offcanvas menu
     
    $(".menu-icon img").on('click', function(){
      $(".offcanvas-menu").addClass("active");
      $(".offcanvas-overlay").addClass("active");
    });

    $(".close-icon, .offcanvas-overlay").on('click', function(){
      $(".offcanvas-menu").removeClass("active");
      $(".offcanvas-overlay").removeClass("active");
    });


    // typed JS
    var typed = new Typed(".type", {
      strings: [
        "Designer.",
        "Founder."
      ],
      typeSpeed: 70,
      backSpeed: 70,
      loop: true,
      cursorChar: '',
    });


  
  

    // about hover 3d
    $(".about").hover3d({
      selector: ".about-left-shape",
      shine: false,
      sensitivity: 24,
    });

    // about hover 3d
    $(".about").hover3d({
      selector: ".about-bg-shape",
      shine: false,
      sensitivity: 29,
    })
    
    // qualification hover 3d
    $(".qualification-area").hover3d({
      selector: ".quali-shape",
      shine: false,
      sensitivity: 20,
    });

    //experince hover 3d
    $(".experince").hover3d({
      selector: ".experience-shape",
      shine: false,
      sensitivity: 30,
    });

    //contact hover 3d
    $(".contact").hover3d({
      selector: ".contact-shape-1",
      shine: false,
      sensitivity: 30,
    });

    //contact hover 3d
    $(".contact").hover3d({
      selector: ".contact-shape-2",
      shine: false,
      sensitivity: 30,
    });

    //blog-area hover 3d
    $(".blog-area").hover3d({
      selector: ".blog-shape",
      shine: false,
      sensitivity: 30,
    });

    // circle progressbar 

    // uiux-progress

    $('#uiux-progress').circleProgress({
     value: 0.73,
      size: 200,
      fill: "#6928d9",
      thickness: 10,
      emptyFill: "#15154c",
      startAngle: -1.55,
    }).on('circle-animation-progress', function(event, progress) {
      $(this).find('.percentage').html(Math.round(73 * progress) + '<i>%</i>');
    });

   // development progress

  $('#development').circleProgress({
      value: 0.85,
      size: 200,
      fill: "#1573ff",
      thickness: 10,
      emptyFill: "#15154c",
      startAngle: -1.55,
    }).on('circle-animation-progress', function(event, progress) {
      $(this).find('.percentage').html(Math.round(85 * progress) + '<i>%</i>');
    });

    // branding progress

    $('#branding').circleProgress({
     value: 0.48,
      size: 200,
      fill: "#16ffdb",
      thickness: 10,
      emptyFill: "#15154c",
      startAngle: -1.55,
    }).on('circle-animation-progress', function(event, progress) {
      $(this).find('.percentage').html(Math.round(48 * progress) + '<i>%</i>');
    });

    // product-design progress

    $('#product-design').circleProgress({
     value: 0.69,
      size: 200,
      fill: "#baff26",
      thickness: 10,
      emptyFill: "#15154c",
      startAngle: -1.55,
    }).on('circle-animation-progress', function(event, progress) {
      $(this).find('.percentage').html(Math.round(69 * progress) + '<i>%</i>');
    });
    

    // Owl-Carousel
    
    $('.brand-logo').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });


   // portfolio isotop

    var $grid = $('.portfolio-colum').isotope({
      itemSelector: '.single-portfolio',
      percentPosition: true,
      masonry: {
         columnWidth: 1
      }
    });


    $('.portfolio-menu').on( 'click', 'li', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });


    // portfolio menu js

    $('.portfolio-menu li').on('click',function(){
      $('li').removeClass('active');
      $(this).addClass('active')
    });


    // fancy box js

    $('[data-fancybox="gallery"]').fancybox({
      animationEffect: "zoom-in-out",
      transitionEffect: "slide",
     
    });





   

 

})(jQuery);	    