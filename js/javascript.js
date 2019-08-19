










var carousel = $("#carousel").flipster({
    style:"carousel",
    spacing:-0.5,
    scrollwheel:false,
    autoplay:false,
    loop:true,
    fadeIn:1000,
    buttons:true
}); 



$(document).ready(function() {

    
    $(".slider").slick({
    autoplay:true,
    autoplaySpeed:10000,
    speed:600,
    slidesToShow:1,
    slidesToScroll:1,
    pauseOnHover:false,
    dots:false,
    pauseOnDotsHover:true,
    cssEase:'linear',
   // fade:true,
    draggable:false,
    prevArrow:'<button class="PrevArrow"></button>',
    nextArrow:'<button class="NextArrow"></button>', 
  });
    
    
    
    
    
    
   /* Smooth scroll and Scroll spy (https://github.com/ChrisWojcik/single-page-nav) 
    ---------------------------------------------------------------------------------*/ 
    $('.templatemo-nav').singlePageNav({
        offset: $(".templatemo-nav").height(), /*current(70) An offset in pixels above the target element when scrolling*/
        filter: ':not(.external)',
        updateHash: false,
        speed: 500
    });
    
    
    
    /* start navigation top js
    make navbar fixed on top when scroll down
*/
    $(window).scroll(function(){
        if($(this).scrollTop()>0){
            $(".templatemo-nav").addClass("sticky");
        }
        else{
            $(".templatemo-nav").removeClass("sticky");
        }
    });
    
    
    /* Hide mobile menu after clicking on a link
        (hide link with links when user clsck on link)
    -----------------------------------------------*/
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });
    /* end navigation top js */

    
    
    


  
   


   
    
    

    
});
    
    
    
  

