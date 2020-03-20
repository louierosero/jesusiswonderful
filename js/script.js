var mySwiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Mobile Menu
$(document).ready(function(){
  $('#nav-icon').click(function(){
		$(this).toggleClass('open');
	});
});
