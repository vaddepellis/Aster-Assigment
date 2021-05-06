/* reCaptcha    */
// function scaleCaptcha(elementWidth) {
//     // Width of the reCAPTCHA element | 640 
//     var reCaptchaWidth = 800;
//     // Get the containing element's width
//       var containerWidth = $('.container').width();
    
//     // Only scale the reCAPTCHA if it won't fit inside the container
//     if(reCaptchaWidth > containerWidth) {
//       // Calculate the scale
//       var captchaScale = containerWidth / reCaptchaWidth;
//       // Apply the transformation
//       $('.g-recaptcha').css({
//         'transform':'scale('+captchaScale+')'
//       });
//     }
//   }
  
//   $(function() { 
   
//     // Initialize scaling
//     scaleCaptcha();
    
//     // Update scaling on window resize
//     // Uses jQuery throttle plugin to limit strain on the browser
//     $(window).resize( $.throttle( 100, scaleCaptcha ) );  
//   });

/* reCaptcha */

/*  Testomonial */
$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:2,
        itemsDesktop:[1000,2],
        itemsDesktopSmall:[979,2],
        itemsTablet:[768,2],
        itemsMobile:[650,1],
        pagination:true,
        navigation:false,
        slideSpeed:1000,
        autoPlay:true
    });
});

/* testomonial */


/* recaptcha */

