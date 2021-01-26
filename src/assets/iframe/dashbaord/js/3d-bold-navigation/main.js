jQuery(document).ready(function($){
	function toggleNav(bool, navid) {
		$('#'+navid+ ', .cd-overlay').toggleClass('is-visible', bool);
		$('main').toggleClass('scale-down', bool);
		$('body').toggleClass('navigation-visible', bool);
	}
    
	//open navigation clicking the menu icon
	$('.cd-nav-trigger').on('click', function(event){
		event.preventDefault();
		var id_nav = $(this).attr('href').split("#")
		toggleNav(true, id_nav[1]);
	});
    
	//close the navigation
	$('.cd-close-nav, .cd-overlay').on('click', function(event){
		event.preventDefault();
		var id_nav = $('nav.cd-nav-container.is-visible').attr('id');
		toggleNav(false, id_nav);
	});

});