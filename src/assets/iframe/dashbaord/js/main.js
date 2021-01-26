$(document).ready(function () {


    $(".menu-item").hover(function () {
        $(this).children("a").stop().addClass("open");
       // $(".menu-item .sub-menu").stop().slideUp()
        $(this).find(".sub-menu").stop().slideDown();

       // $(this).find(".sub-menu").stop().slideToggle();
    }, function () {
        $(this).find(".sub-menu").stop().slideUp();

        $(this).children("a").removeClass("open");
    });


	
	/*collapse 768*/
	 $('.nav-tabs').tabCollapse();
	
	 $('.mainmenu .dropdown').hover(function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
    }, function () {
        // $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    });

    // Fullscreen
    function toggleFullScreen() {
        if ((document.fullScreenElement && document.fullScreenElement !== null) ||
            (!document.mozFullScreen && !document.webkitIsFullScreen)) {
            if (document.documentElement.requestFullScreen) {
                document.documentElement.requestFullScreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullScreen) {
                document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
        }
    }

    $('.toggle-fullscreen').click(function () {
        toggleFullScreen();
    });

  
      
        $('.second-menu').owlCarousel({
            items: 6,
            nav: true,
            mouseDrag: true,
            responsiveClass: true,
			rtl: true,
			dots: false,
		
            responsive: {
                0:{
                    items: 1
					
                },
                480:{
                    items: 3
                },
                769:{
                    items: 6
                }
            },

            navText: ["<i class='glyphicon glyphicon-chevron-right'></i>", "<i class='glyphicon glyphicon-chevron-left'></i>"],

        });

    
      
         
      //  $('#rootwizard').bootstrapWizard();
        $('.date').datepicker();


      	$('#rootwizard').bootstrapWizard({
      	    onNext: function (tab, navigation, index) {


				    // Set the name for the next tab
                    $('#tab3').html('Hello, ' +$('#name').val());

                    }, onTabShow: function(tab, navigation, index) {
                    var $total = navigation.find('li').length;
                    var $current = index+1;
                    var $percent =($current/$total) * 100;
                    $('#rootwizard .progress-bar').css({width: $percent+'%'});
                    }
      	});




      	$('.main-carousel').slick({
      	    rtl: true,
      	    centerMode: true,
      	   draggable:false,
      	    centerPadding: '80px',

      	    slidesToShow: 1,
      	    slidesToScroll: 1,
      	    nextArrow: '<div class="right-angle"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
      	    prevArrow: '<div class="left-angle"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
      	    responsive: [
              {
                  breakpoint: 1200,
                  settings: {
                      centerMode: true,
                      centerPadding: '10px',

                      slidesToShow: 1,
                      slidesToScroll: 1,
                  }
              },
              {
                  breakpoint: 900,
                  settings: {
                      centerMode: true,
                      centerPadding: '10px',

                      slidesToShow: 1,
                      slidesToScroll: 1,
                  }
              }
      	    ]
      	});


      	$(".main-carousel .slick-center").next().addClass("slick-NP-next-main");
      	$(".main-carousel .slick-center").prev().addClass("slick-NP-prev-main");
      	$('.main-carousel').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      	    setTimeout(function () {
      	    $(".main-carousel .slick-slide").each(function () {
      	        var cl = $(this).attr("class").split(" ");
      	        var newcl = [];
      	        for (var i = 0; i < cl.length; i++) {
      	            r = cl[i].search(/^slick-NP/);
      	            if (r) newcl[newcl.length] = cl[i];
      	        }
      	        $(this).removeClass().addClass(newcl.join(" "));
      	    });


      	    $(".main-carousel .slick-center").next().addClass("slick-NP-next-main");
      	    $(".main-carousel .slick-center").prev().addClass("slick-NP-prev-main");
      	    }, 200);

      	});
      	if ($("#goals .chart-item").length <= 8  )  {

      	    $('.goals').slick({
      	        rtl: true,
      	   //     centerMode: true,
      	        draggable:true,
      	        centerPadding: '20px',

      	        slidesToShow: 7,
      	        slidesToScroll: 7,
      	        nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
      	        prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      	        responsive: [
                  {
                      breakpoint: 1200,
                      settings: {
                          centerMode: true,
                          centerPadding: '10px',

                          slidesToShow: 5,
                          slidesToScroll: 5,
                      }
                  },
                  {
                      breakpoint: 900,
                      settings: {
                          centerMode: true,
                          centerPadding: '10px',

                          slidesToShow: 3,
                          slidesToScroll: 3,
                      }
                  }
      	        ]
      	    });

      	}
      	else {

      	    $('.goals').slick({
      	        rtl: true,
      	        centerMode: true,
      	          draggable:true,
      	        centerPadding: '20px',

      	        slidesToShow: 5,
      	        slidesToScroll: 7,
      	        nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
      	        prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      	        responsive: [
                  {
                      breakpoint: 1200,
                      settings: {
                          centerMode: true,
                          centerPadding: '10px',

                          slidesToShow: 5,
                          slidesToScroll: 5,
                      }
                  },
                  {
                      breakpoint: 900,
                      settings: {
                          centerMode: true,
                          centerPadding: '10px',

                          slidesToShow: 3,
                          slidesToScroll: 3,
                      }
                  }
      	        ]
      	    });


      	}

      	$('#Sectors').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      	    //event.preventDefault();


      	    setTimeout(function () {
      	        $("#Sectors .slick-slide").each(function () {
      	            var cl = $(this).attr("class").split(" ");
      	            var newcl = [];
      	            for (var i = 0; i < cl.length; i++) {
      	                r = cl[i].search(/^slick-NP/);
      	                if (r) newcl[newcl.length] = cl[i];
      	            }
      	            $(this).removeClass().addClass(newcl.join(" "));
      	        });

      	    }, 200);

      	    setTimeout(function () {

      	        $("#Sectors .slick-center").nextUntil(".slick-center").addClass("slick-NP-next-center");
      	        $("#Sectors .slick-center").prevUntil(".slick-NP-next-center").addClass("slick-NP-prev-center");


      	        $("#Sectors .slick-NP-next-center").each(function (i) {
      	          
      	            $(this).addClass("slick-NP-next-" + i)


      	        });

      	        $($("#Sectors .slick-NP-prev-center").get().reverse()).each(function (i) {

      	            $(this).addClass("slick-NP-prev-" + i)


      	        });
      

      	    }, 230);


      	});



      	$("#Sectors .slick-center").nextUntil(".slick-center").addClass("slick-NP-next-center");
      	$("#Sectors .slick-center").prevUntil(".slick-NP-next-center").addClass("slick-NP-prev-center");


      	$("#Sectors .slick-NP-next-center").each(function (i) {

      	    $(this).addClass("slick-NP-next-" + i)


      	});

      	$($("#Sectors .slick-NP-prev-center").get().reverse()).each(function (i) {

      	    $(this).addClass("slick-NP-prev-" + i)


      	});



      	$('#goals').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      	    //event.preventDefault();
      	    if ($("#goals .chart-item").length >= 8) {
      	

      	 

      	    setTimeout(function () {
      	        $("#goals .slick-slide").each(function () {
      	            var cl = $(this).attr("class").split(" ");
      	            var newcl = [];
      	            for (var i = 0; i < cl.length; i++) {
      	                r = cl[i].search(/^slick-NP/);
      	                if (r) newcl[newcl.length] = cl[i];
      	            }
      	            $(this).removeClass().addClass(newcl.join(" "));
      	        });

      	    }, 200);
      	    setTimeout(function () {



      	        $("#goals .slick-center").nextUntil(".slick-center").addClass("slick-NP-next-center");
      	        $("#goals .slick-center").prevUntil(".slick-NP-next-center").addClass("slick-NP-prev-center");


      	        $("#goals .slick-NP-next-center").each(function (i) {

      	            $(this).addClass("slick-NP-next-" + i)


      	        });


      	        $($("#goals .slick-NP-prev-center").get().reverse()).each(function (i) {

      	            $(this).addClass("slick-NP-prev-" + i)


      	        });
      	    }, 230);


      	    }

      	    $(".chart-desc-item").fadeOut();
      	    var descShow = $("#goals .chart-item.slick-center").attr("data-desc");

      	    $("." + descShow).fadeIn();
      

      	});

      	if ($("#goals .chart-item").length >= 8) {

      	$("#goals .slick-center").nextUntil(".slick-center").addClass("slick-NP-next-center");
      	$("#goals .slick-center").prevUntil(".slick-NP-next-center").addClass("slick-NP-prev-center");


      	$("#goals .slick-NP-next-center").each(function (i) {

      	    $(this).addClass("slick-NP-next-" + i)


      	});

      	$($("#goals .slick-NP-prev-center").get().reverse()).each(function (i) {

      	    $(this).addClass("slick-NP-prev-" + i)


      	});





      	}










      	$(".chart-desc-item").fadeOut();
      	var descShow = $(".goals .chart-item.slick-center").attr("data-desc");

      	$("." + descShow).fadeIn();


      	$('.performance-indicators').slick({
      	    rtl: true,
      	    arrows: false,

      	    slidesToShow: 6,
      	    nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
      	    prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      	    responsive: [
              {
                  breakpoint: 1200,
                  settings: {

                      arrows: false,
                    //  centerMode: true,
                      slidesToShow: 4,
                  }
              },
              {
                  breakpoint: 900,
                  settings: {

                      arrows: false,
                    //  centerMode: true,
                      slidesToShow: 3
                  }
              },


      	    {
      	    breakpoint: 460,
    settings: {

      	    arrows: false,
      	 //   centerMode: true,
      	    slidesToShow: 1
      	}
}
      	    ]
      	});

      	$('.performance-indicators-left').click(function () {
      	    $('.performance-indicators').slick('slickPrev');
      	})

      	$('.performance-indicators-right').click(function () {
      	    $('.performance-indicators').slick('slickNext');
      	})

      	$('.C-chart-bar').each(function () {
      	    //jQuery(this).appear(function() {
      	    $(this).find('.fill').animate({
      	        height: $(this).attr('data-value')
      	    }, 3000);
      	    var percent = $(this).attr('data-value');
      	    $(this).find('.value').html('<span>' + percent + '</span>');


      	    var percent = $(this).attr("data-value");
      	    percent = percent.slice(0, -1);
      	    percent = parseInt(percent);
      	    if (percent > 100) {

      	        $(this).find('.value').animate({
      	            bottom: "100%"
      	        }, 3000);
      	    }
      	   

      	    else

      	    {
      	        $(this).find('.value').animate({
      	            bottom: $(this).attr('data-value')
      	        }, 3000);

      	    }
      	   

      	});



            $('.C-chart').each(function () {
                //jQuery(this).appear(function() {
                $(this).find('.fill').animate({
                    height: $(this).attr('data-value')
                }, 3000);
                var percent = $(this).attr('data-value');
                $(this).find('.value').html('<span>' + percent + '</span>');
            });


            $(".C-chart-bar").each(function () {
                var percent = $(this).attr("data-value");
                percent = percent.slice(0, -1);
                percent = parseInt(percent);

                if (percent > 120 ) {
                    $(this).find(".fill").addClass("color-10");

                }
                if (percent <= 120 && percent > 95) {
                    $(this).find(".fill").addClass("color-9");

                }
                if (percent <= 95 && percent > 80) {
                    $(this).find(".fill").addClass("color-8");

                }


                if (percent <= 80) {
                    $(this).find(".fill").addClass("color-7");

                }
            });

                $(".C-chart-circle").each(function () {
                    var percent = $(this).attr("data-value");
                    percent = percent.slice(0, -1);
                    percent = parseInt(percent);

                    if (percent > 120 ) {
                        $(this).find(".value").addClass("color-10");

                    }
                    if (percent <= 120 && percent > 95) {
                        $(this).find(".value").addClass("color-9");

                    }
                    if (percent <= 95 && percent > 80) {
                        $(this).find(".value").addClass("color-8");

                    }


                    if (percent <= 80) {
                        $(this).find(".value").addClass("color-7");

                    }


          


                });


    
             

                if ($(window).width() > 992 && $("#goals .chart-item").length <= 8) {

                    $(".chart-desc-cont").addClass("dynamic-hover");
                    $('#goals .chart-item').mousemove(function (event) {
                        var descShow = $(this).attr("data-desc");

                        var left = event.pageX - $(this).offset().left + 50;
                        var top = event.pageY - $(this).offset().top + 50;
                        $("."+descShow).css({ top: top, left: left }).show();
                       // console.log(left, top);
                    });
                    $('#utilities').mouseout(function () {
                        $('#gas-electric-hover').hide();
                    });



                    




                    $("#goals .slick-slide").each(function () {
                        var cl = $(this).attr("class").split(" ");
                        var newcl = [];
                        for (var i = 0; i < cl.length; i++) {
                            r = cl[i].search(/^slick-NP/);
                            if (r) newcl[newcl.length] = cl[i];
                        }
                        $(this).removeClass().addClass(newcl.join(" "));
                    });


                }



         
});



$(window).load(function () {

    $(".pie-chart-tiny").each(function () {

        var percent = $(this).attr("data-percent");

        var percent = parseInt(percent)


  

        if (percent > 120) {
            $(this).parent(".item").addClass("pie-chart-color-1")

        }
        if (percent <= 120 && percent > 95) {
            $(this).parent(".item").addClass("pie-chart-color-2")

        }
        if (percent <= 95 && percent > 80) {
            $(this).parent(".item").addClass("pie-chart-color-3")

        }


        if (percent <= 80) {
           $(this).parent(".item").addClass("pie-chart-color-4")

        }


        if (percent > 100) {

            $(this).attr("data-percent", "99")

        }
  

    });


$("#loading").delay(1500).fadeOut(1500);



$('.pie-chart-tiny').easyPieChart({
   // easing: 'easeOutBounce',
    size: 150,
    lineCap: "butt",
    lineWidth: 10



});



$('.filter-red').click(function () {

    $('.performance-indicators').slick('slickUnfilter');

    $('.performance-indicators').slick('slickFilter', '.pie-chart-color-4');
});




$('.filter-yellow').click(function () {

    $('.performance-indicators').slick('slickUnfilter');

    $('.performance-indicators').slick('slickFilter', '.pie-chart-color-3');
});




$('.filter-green').click(function () {

     $('.performance-indicators').slick('slickUnfilter');

    $('.performance-indicators').slick('slickFilter', '.pie-chart-color-2');
});



$('.filter-blue').click(function () {

     $('.performance-indicators').slick('slickUnfilter');

    $('.performance-indicators').slick('slickFilter', '.pie-chart-color-1');
});






$('.filter-all').click(function () {


    $('.performance-indicators').slick('slickUnfilter');

});
$(".filter-item").click(function () {

    $(".filter-item").removeClass("active")
    $(this).addClass("active");


});

});



/*scrolling header*/
function headerStyle() {
    if ($('.mainmenu').length) {
        var windowpos = $(window).scrollTop();
        if (windowpos >= 50) {
            $('.mainmenu').addClass('fixedNav animated slideInDown');
            $("body").addClass("fixedBody");
            $(".steps-cont").addClass("steps-cont-fixed animated slideInUp");

            



        } else {
            $('.mainmenu').removeClass('fixedNav animated slideInDown');
            $("body").removeClass("fixedBody");
            $(".steps-cont").removeClass("steps-cont-fixed animated slideInUp");


        }
    }
}



$(document).on('scroll', function () {


    headerStyle();


});



    $( window ).resize(function() {
        if ($(window).width() > 992 && $("#goals .chart-item").length <= 8) {
            $("#goals .slick-slide").each(function () {
                var cl = $(this).attr("class").split(" ");
                var newcl = [];
                for (var i = 0; i < cl.length; i++) {
                    r = cl[i].search(/^slick-NP/);
                    if (r) newcl[newcl.length] = cl[i];
                }
                $(this).removeClass().addClass(newcl.join(" "));
            });


        }




});






