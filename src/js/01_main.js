$('.slider').slick({
   dots:false,
   slidesToShow:4,
   slidesToScroll:1,
   infinite: true,
   variableWidth: false,
   responsive:[
      {
         breakpoint: 1025,
         settings: {
            arrows: false
         }
      }
   ]
});