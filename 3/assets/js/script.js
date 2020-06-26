// TRANSIÇÃO DO MENU

$(window).scroll(function() {
  
	if ($(window).scrollTop() > 100 ){
    
 		$('.bg').addClass('down');
    
  } else {
    
		$('.bg').removeClass('down');

 	};   	
});

$('.scroll').on('click', function(e){		
		e.preventDefault()
    
  $('html, body').animate({
      scrollTop : $(this.hash).offset().top
    }, 1500);
});

// SCROLL TO TOP

$(function(){
	$(document).on( 'scroll', function(){
		if ($(window).scrollTop() > 100) {
			$('.smoothscroll-top').addClass('show');
		} else {
			$('.smoothscroll-top').removeClass('show');
		}
	});
	$('.smoothscroll-top').on('click', scrollToTop);
});

function scrollToTop() {
	verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
	element = $('body');
	offset = element.offset();
	offsetTop = offset.top;
	$('html, body').animate({scrollTop: offsetTop}, 600, 'linear').animate({scrollTop:25},200).animate({scrollTop:0},150) .animate({scrollTop:0},50);
}

// HOVER DINAMICO POR SESSÃO

function addClass(el) {
    menu.removeClass('active');
    $(el).addClass('active');
};

var menu = $('.navbar-nav a');
var sectionPositions = $('section').map(function(){
    return $(this).position().top;
});
var sections = $('section');
$(document).on('scroll', function () {
    var scroll = $(document).scrollTop();
    var currentElement;
    $(sectionPositions).each(function (i) {
        if (scroll > this - 100) currentElement = menu[i];
    });
    currentElement && addClass(currentElement);
});
menu.on('click', function () {
    addClass(this);
});

// ROLAGEM SUAVE

$('.navbar-nav a').on('click', function(e) {
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top;
			
	$('html, body').animate({ 
		scrollTop: targetOffset - 100
	}, 500);
});

// ROLAGEM SUAVE SETA

$('.hc-arrow-down a').on('click', function(e) {
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top;
			
	$('html, body').animate({ 
		scrollTop: targetOffset - 100
	}, 500);
});