function openMenu() {
    $('.js-menu-container1').addClass('ocultar');
    $('.js-menu-container2').removeClass('ocultar');
  }
  function closeMenu() {
    $('.js-menu-container1').removeClass('ocultar');
    $('.js-menu-container2').addClass('ocultar');
  }

  // Document Ready
jQuery(document).ready(function($){ 

    $('.js-menu-button').click(function(){
      openMenu();
    });
  
    $('.js-menu-close').click(function(){
      closeMenu();
    });
  
  });