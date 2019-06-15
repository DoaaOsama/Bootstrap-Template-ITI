window.setInterval(() => {
    // debugger;
    var active =  document.querySelector(".headline-clip__words__active-word");
    if(parseInt(active.clientWidth) <= 5){
        active.classList.remove("headline-clip__words__active-word");
        active = active.nextElementSibling;
        if(active == null){
            active = document.querySelector(".headline-clip__words-container").children[0];
        }
        active.classList.add("headline-clip__words__active-word");
    }
    
},150);

// Instantiate the Bootstrap carousel
//   $('#multiple-carousel').carousel({
//     interval: 10000
//   })
  
//   $('.multi-carousel .carousel-item').each(function(){
//       var next = $(this).next();
//       if (!next.length) {
//       next = $(this).siblings(':first');
//       }
//       next.children(':first-child').clone().appendTo($(this));
      
//       if (next.next().length>0) {
//       next.next().children(':first-child').clone().appendTo($(this));
//       }
//       else {
//         $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
//       }
//   });
  


