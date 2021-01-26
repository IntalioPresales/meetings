$(document).ready(function () {
    
    $(".Search-user-text").keyup(function () {

        var index;
        var myVal;
        var UserNameVal;

        myVal = $(".Search-user-text").val().toLowerCase();
        //$(".C-checkbox-radio-columns label").each(function () {
        $("div.subUsers").each(function () {
           UserNameVal = $(this).text().toLowerCase();
            index = UserNameVal.indexOf(myVal);
            if (index >= 0) {
                $(this).html(UserNameVal.replace(myVal, "<mark class='mark-search'>" + myVal + "</mark>"));
                //$(this).parent().show();
                $(this).closest("li").removeClass('searchedOff');
            }
            else {
                //$(this).parent().hide();
                $(this).closest("li").addClass('searchedOff');
            }
        });
    });
    $(".Search-user-select").change(function () {

        $(".C-checkbox-radio-columns input:checkbox").each(function () {
            var attr = $(this).attr('checked');
            if ($('.Search-user-select').val() == 'all') {
                $(this).parent().removeClass('filteredOff');
            }
            else if ($('.Search-user-select').val() == 'selected') {
                if (typeof attr !== typeof undefined && attr !== false) {
                    $(this).parent().removeClass('filteredOff');
                }
                else {
                    $(this).parent().addClass('filteredOff');
                }
            }
            else if ($('.Search-user-select').val() == 'unselected') {
                if (typeof attr == typeof undefined || attr == false) {
                    $(this).parent().removeClass('filteredOff');
                }
                else {
                    $(this).parent().addClass('filteredOff');
                }
            }

        });

    });
});
var prm = Sys.WebForms.PageRequestManager.getInstance();

prm.add_endRequest(function () {

    $(".Search-user-text").keyup(function () {
       
        var index;
        var myVal;
        var UserNameVal;
        
        myVal = $(".Search-user-text").val().toLowerCase();
        $(".C-checkbox-radio-columns label").each(function () {
            UserNameVal = $(this).text().toLowerCase();
            index = UserNameVal.indexOf(myVal);
            if (index >= 0) {
                $(this).html(UserNameVal.replace(myVal, "<mark class='mark-search'>" + myVal + "</mark>"));
                //$(this).parent().show();
                $(this).parent().removeClass('searchedOff');
            }
            else {
                //$(this).parent().hide();
                $(this).parent().addClass('searchedOff');
            }
        });
    });
    $(".Search-user-select").change(function () {

        $(".C-checkbox-radio-columns input:checkbox").each(function () {
            var attr = $(this).attr('checked');
            if ($('.Search-user-select').val() == 'all') {
                $(this).parent().removeClass('filteredOff');
            }
            else if ($('.Search-user-select').val() == 'selected') {
                if (typeof attr !== typeof undefined && attr !== false) {
                    $(this).parent().removeClass('filteredOff');
                }
                else {
                    $(this).parent().addClass('filteredOff');
                }
            }
            else if ($('.Search-user-select').val() == 'unselected') {
                if (typeof attr == typeof undefined || attr == false) {
                    $(this).parent().removeClass('filteredOff');
                }
                else {
                    $(this).parent().addClass('filteredOff');
                }
            }

        });

    });
});