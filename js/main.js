function openMenu() {
    $('.js-menu-container1').addClass('ocultar');
    $('.js-menu-container2').removeClass('ocultar');
  }
  function closeMenu() {
    $('.js-menu-container1').removeClass('ocultar');
    $('.js-menu-container2').addClass('ocultar');
  }
  function openMenu2() {
    $('.tiptext').addClass('mostrar');
    $('.menu-button3').removeClass('ocultar');  
    $('.menu-button2').addClass('ocultar'); 
    $('.icono2').addClass('oscuro');  
    $('.cont__icono').addClass('oscuro');  

  }
  function closeMenu2() {
    $('.tiptext').removeClass('mostrar');
    $('.menu-button3').addClass('ocultar');  
    $('.menu-button2').removeClass('ocultar'); 
    $('.icono2').removeClass('oscuro');  
    $('.cont__icono').removeClass('oscuro'); 
 
  }


  // Document Ready
jQuery(document).ready(function($){ 

    $('.js-menu-button').click(function(){
      openMenu();
    });
  
    $('.js-menu-close').click(function(){
      closeMenu();
    });

    $('.menu-button2').click(function(){
         
      openMenu2(); 
    });
    
    $('.menu-button3').click(function(){
      
      closeMenu2();      

    });
  
  });