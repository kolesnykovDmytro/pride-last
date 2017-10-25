  $(document).ready(function(){

      $(".loader_inner").fadeOut();$(".loader").delay(400).fadeOut("slow");

      $(document).on('click', '[data-lightbox]', lity);

      $("a[rel='m_PageScroll2id']").mPageScroll2id({
        offset:30
    });

      $('#video-btn').click(function(func){

      $('.section .over').css('transform','translate(100%, 0%) matrix(1, 0, 0, 1, 0, 0)');
      $('.under').css('transform','translate(0%, 0%) matrix(1, 0, 0, 1, 0, 0)');

    });
  
  })

    var $top_mnu=$('.top_mnu');var $sandwich=$('.sandwich');$('.toggle_mnu').click(function(){$top_mnu.fadeToggle(600);$('.top_mnu li a').toggleClass('fadeInUp animated');$sandwich.toggleClass("active");});

    let tl = new TimelineMax()

    tl
      .fromTo('.loader__inside', 1, {scale: 0.1},{scale: 1})

    var rellax = new Rellax('.rellax', {
      center: true
    });


    var elm = document.querySelector('#main-header');
    var ms = new MenuSpy(elm);

    var ms = new MenuSpy(elm,{

    // menu selector
    menuItemSelector: 'a[href^="#"]',

    // CSS class for active item
    activeClass   : 'active',

    // amount of space between your menu and the next section to be activated.
    threshold     : 15,

    // timeout to apply browser's hash location.
    hashTimeout   : 600,

    // called every time a new menu item activates.
    callback      : null
  });