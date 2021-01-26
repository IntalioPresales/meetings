$( document ).ready(function() {
    
    // CounterUp Plugin
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    
    setTimeout(function() {
        toastr.options = {
            closeButton: true,
            progressBar: true,
            showMethod: 'fadeIn',
            hideMethod: 'fadeOut',
            timeOut: 1000
        };
        toastr.success('لديك تنبيه جديد');
    }, 1200);

    
});


$( document ).ready(function() {
    var hiddenMailOptions = function() {
        if($('.checkbox-mail:checked').length) {
			var par_tbl = $(this).parents('table').find('.mail-hidden-options');
            $(par_tbl).css('display', 'inline-block');
        } else {
			var par_tbl = $(this).parents('table').find('.mail-hidden-options');
            $(par_tbl).css('display', 'none');
        };
    };
    
    hiddenMailOptions();
    
    $('.check-mail-all').click(function () {
		var parent_table = $(this).parents('table').find('.checkbox-mail')
        $(parent_table).click();
    });
    
    $('.checkbox-mail').each(function() {
        $(this).click(function() {
            if($(this).closest('tr').hasClass("checked")){
                $(this).closest('tr').removeClass('checked');
                hiddenMailOptions();
            } else {
                $(this).closest('tr').addClass('checked');
                hiddenMailOptions();
            }
        });
    });
    
 
});



//calender
$(document).ready(function() {

    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    
    $('#calendar').fullCalendar({
			isRTL:true,
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
            editable: false,
            droppable: false, // this allows things to be dropped onto the calendar
			eventLimit: true, // allow "more" link when too many events
			events: [
				{
					title: 'Regulatory development meeting',
					start: new Date(year, month, day-8)
				},
				{
					title: 'Frequent rally',
					start: new Date(year, month, day-5),
					end: new Date(year, month, day-2)
				},
				{
					id: 999,
					title: 'Frequent rally...',
					start: new Date(year, month, day)
				},
				{
					id: 999,
					title: 'Frequent rally',
					start: new Date(year, month, day+7)
				},
				{
					title: 'Conference',
					start: new Date(year, month, day+3),
					end: new Date(year, month, day+6)
				},
				{
					title: 'The final meeting',
					start: new Date(year, month, day+5)
				},
				{
					title: 'Breakfast',
					start: new Date(year, month, day+7)
				},
				{
					title: 'Directors meeting',
					start: new Date(year, month, day+10)
				},
				{
					title: 'The second conference',
					start: new Date(year, month, day+10)
				},
				{
					title: 'Dinner',
					start: new Date(year, month, day+13)
				},
				{
					title: 'Meeting ',
					start: new Date(year, month, day+15)
				},
				{
					title: 'France conferrence',
					url: 'https://portal.moi.gov.qa/wps/portal/MOIInternet/MOIHome',
					start: new Date(year, month, day+18)
				}
			]
		});
    
	
	//reports
	$('#slider1').owlCarousel({
		rtl:true,
    center: false,
    items:4,
    loop:false,
    margin:10,
	nav:false,
	dots:false,
    responsive:{
			1700:{
				items:4
			},
			 1400:{
				items:4
			},
			1050:{
				items:4
			},
			400:{
				items:1
				},
			
			0:{
				items:1
			}
		}
		
	});
	 
	$(window).resize(function(){
		
		$('#slider1').owlCarousel({
			rtl:true,
			center: false,
			items:4,
			loop:false,
			margin:10,
			nav:false,
			dots:false,
			responsive:{
				1700:{
					items:4
				},
				 1400:{
					items:3
				},
				1050:{
					items:2
				},
				400:{
					items:1
					},
				
				0:{
					items:1
				}
			}
		});
	});
});