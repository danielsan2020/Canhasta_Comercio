(function ($) { 'use strict';
	

  // e-commerce touchspin
  $('input[name=\'product-quantity\']').TouchSpin();

  const numberOfproductos = document.getElementById('number-of-productos');
  const groupproductos = document.getElementsByClassName('bootstrap-touchspin');
  
  //Evento cada que se da click en botón o toca la pantalla móvil
  const countEvent = button => {
    button.addEventListener('touchstart', e => {
        countproductos();
    });
    button.addEventListener('click', e => {
        countproductos();
    });
  };

  //Un evento por cada botón de + y -
  for(let i=0; i<groupproductos.length;i++) {
    countEvent(groupproductos[i].children[0].children[0])
    countEvent(groupproductos[i].children[4].children[0])
  };

  let productosCounter = 0;

  //Actualiza los productos
  const countproductos = () => {
    productosCounter = 0;
    for(let i=0; i<groupproductos.length; i++){
        const num = parseInt(groupproductos[i].children[2].value);
        productosCounter += num;
      };
      numberOfproductos.innerHTML = productosCounter;
  }
  countproductos();

  //
  const cartButtons = document.getElementsByClassName('cart-button');

  for(let i=0;i<cartButtons.length;i++){
    cartButtons[i].addEventListener('click', e => {
      let el = e.target.localName === 'i' ? e.target.parentNode : e.target;
      let modalId = el.parentNode.parentNode.getElementsByTagName('span')[0].attributes[3].value;
      modalId = modalId.replace('#', '');
      const modalEl = document.getElementById(modalId);
      let inputValue = modalEl.getElementsByTagName('input')[0];
      inputValue.value++;
      countproductos();
    });
  };

	// Video Lightbox
	// $(document).on('click', '[data-toggle="lightbox"]', function(event) {
	//     event.preventDefault();
	//     $(this).ekkoLightbox();
  //   });
    


// Instagram Feed
  
  // if(($('#instafeed').length)!==0){
  // 	var userFeed = new Instafeed({
  // 	    get: 'user',
  // 	    userId: '623597756',
  // 	    resolution:'low_resolution',
  // 	    accessToken: '623597756.02b47e1.3dbf3cb6dc3f4dccbc5b1b5ae8c74a72'
  // 	});
  // 	userFeed.run();

  // }
	

// Count Down JS
$('#simple-timer').syotimer({
    year: 2019,
    month: 5,
    day: 9,
    hour: 20,
    minute: 30
});


// Revolution Slider Init
  var tpj=jQuery;
      var revapi26;
      tpj(document).ready(function() {
        if(tpj('#home_slider').revolution === undefined){
          revslider_showDoubleJqueryError('#home_slider');
        }else{
          revapi26 = tpj('#home_slider').show().revolution({
            sliderType:'standard',
            jsFileLocation:'revolution/js/',
            sliderLayout:'fullscreen',
            dottedOverlay:'none',
            delay:4000,
            navigation: {
              keyboardNavigation:'off',
              keyboard_direction: 'horizontal',
              mouseScrollNavigation:'off',
              mouseScrollReverse:'default',
              onHoverStop:'off',
              touch:{
                touchenabled:'on',
                touchOnDesktop:'off',
                swipe_threshold: 75,
                swipe_min_touches: 1,
                swipe_direction: 'horizontal',
                drag_block_vertical: false
              },
              arrows: {
                style: 'zeus',
                enable:true,
                hide_under:778,
                hide_onleave:false,
                      tmp: '<div class=\'tp-arr-allwrapper\'><div class=\'tp-arr-imgholder\'></div></div>'
              },
              bullets: {
                enable:true,
                hide_onmobile:false,
                style:'bullet-bar',
                hide_onleave:false,
                direction:'horizontal',
                h_align:'center',
                v_align:'bottom',
                h_offset:0,
                v_offset:30,
                space:5,
                tmp:''
              }
            },
            responsiveLevels:[1240,1024,778,480],
            visibilityLevels:[1240,1024,778,480],
            gridwidth:[1240,1024,778,480],
            gridheight:[868,768,960,720],
            lazyType:'none',
            parallax: {
              type:'scroll',
              origo:'slidercenter',
              speed:2000,
              levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55]
            },
            shadow:0,
            spinner:'off',
            stopLoop:'off',
            stopAfterLoops:-1,
            stopAtSlide:-1,
            shuffle:'off',
            autoHeight:'off',
            fullScreenAutoWidth:'off',
            fullScreenAlignForce:'off',
            fullScreenOffsetContainer: '',
            fullScreenOffset: '60px',
            hideThumbsOnMobile:'off',
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            debugMode:false,
            fallbacks: {
              simplifyAll:'off',
              nextSlideOnWindowFocus:'off',
              disableFocusListener:false
            }
          });
        }
      }); /*ready*/
        

      // Material Select Initialization
      /* not used
      $(document).ready(function() {
        $('.mdb-select').materialSelect();
      });
      */




})(jQuery);
