
    /* Functions */
function CalculateEndedBrackets(IsSuumaition) {

    var nCounter = $(".hdnEqCounter").val();
    var counter = parseInt(nCounter);
    if (IsSuumaition == true)
        counter++;
    else
        counter--;
    $(".hdnEqCounter").val(counter);
    if (counter == 0) {

        $(".EqEndBrackets").css('color', 'black');
        $(".EqEndBrackets").val(")");
        $(".EqEndBrackets").attr('disabled', 'disabled');

    } else {

        $(".EqEndBrackets").css('color', 'red');
        $(".EqEndBrackets").val(")" + counter);
        $(".EqEndBrackets").removeAttr('disabled');

    }

}
function CalculateEndedBracketsAfterLoading() {


    var nCounter = $(".hdnEqCounter").val();
    var counter = parseInt(nCounter);
    $(".hdnEqCounter").val(counter);
    if (counter == 0) {

        $(".EqEndBrackets").css('color', 'black');
        $(".EqEndBrackets").val(")");
        $(".EqEndBrackets").attr('disabled', 'disabled');

    } else {

        $(".EqEndBrackets").css('color', 'red');
        $(".EqEndBrackets").val(")" + counter);
        $(".EqEndBrackets").removeAttr('disabled');

    }

}
function EnableEqBttns(IsDisable) {
    //if (IsDisable == true)
    //    $(".arithmetic").attr('disabled', 'disabled');
    //else
    //    $(".arithmetic").removeAttr('disabled');
    $(".arithmetic").removeAttr('disabled');
}
function DeletenotNeededTxt() {
    var str = $(".EqEquation").val();
    $(".hdnEqParameters").val('');
}
function ATHM(obj) {
    DeletenotNeededTxt();
    var str = $(".EqEquation").val();
    var PositionIndex = $('.EqEquation').prop("selectionStart");
    var result = '';
    if (obj.val() == "(")
        result = str.splice(PositionIndex, 0, obj.val() + ' ');
    else
        result = str.splice(PositionIndex, 0, ' ' + obj.val() + ' ');
    $(".EqEquation").val(result);
    //$(".arithmetic").attr('disabled', 'disabled');
    $(".EqEquation").focus();
    $(".hdnEqPressType").val('0');
    $('.hdnEqNumerics').val('');
}
/* End Functions */
/* Events */

$(document).ready(function () {
    // CalculateEndedBracketsAfterLoading();
   
    EnableEqBttns(true);
    $(".EqStartBrackets").click(function () {
        CalculateEndedBrackets(true);
        ATHM($(this));
    });
    $(".EqEndBrackets").click(function () {
        CalculateEndedBrackets(false);
        var str = $(".EqEquation").val();
        $(".EqEquation").val(str + ") ");
        var PositionIndex = $('.EqEquation').prop("selectionStart");
        var result = str.splice(PositionIndex, 0, ") ");
        $(".EqEquation").val(result);
        EnableEqBttns(false);
        $(".EqEquation").focus();
        $(".hdnEqPressType").val('0');
    });
    $(".arithmetic").click(function () {
        ATHM($(this));
    });
});
$(function () {
    //var items = [
    //    '@abc1', '@a002', '@a003',
    //    '@b001', '@b002', '@b003',
    //    '@c001', '@c002', '@c003'];
    function split(val) {
        return val.split(/ \s*/);
    }
    function extractLast(term) {
        return split(term).pop();
    }
    $(".EqEquation")
        .autocomplete({
            minLength: 1,
            _resizeMenu: function () {
                this.menu.element.outerWidth(100);
            },
            source: function (request, response) {
                response($.ui.autocomplete.filter(
                    items, extractLast(request.term)));
            },
            focus: function () {
                return false;
            },
            select: function (event, ui) {
                var sRemovalValue = $(".hdnEqParameters").val();
                var terms = split(sRemovalValue);
                // remove the current input
                terms.pop();
                // add the selected item
                terms.push(ui.item.value);
                // add placeholder to get the space at the end
                terms.push("");
                var strResultBefore = $(".EqEquation").val();
                //strResultBefore = strResultBefore.replace(sRemovalValue, '');
                var strResultAfter = strResultBefore.substring(strResultBefore.lastIndexOf(sRemovalValue) + sRemovalValue.length, strResultBefore.length);
                strResultBefore = strResultBefore.substring(0, strResultBefore.lastIndexOf(sRemovalValue));
                strResultBefore = strResultBefore + strResultAfter;
                var PositionIndex = $('.EqEquation').prop("selectionStart");
                var result = strResultBefore.splice(PositionIndex - sRemovalValue.length, 0, terms.join(" "));
                $(".EqEquation").val(result);
                DeletenotNeededTxt();
                EnableEqBttns(false);
                $(".hdnEqPressType").val('0');
                return false;
            }
        });
                 
    $(".EqEquation").on('keydown', function (event) {
        if (event.keyCode == 8) {
            if ($(".hdnEqPressType").val() == '#') {
                if ($('.hdnEqNumerics').val() != '') {
                    var str = $('.hdnEqNumerics').val();
                    $('.hdnEqNumerics').val(str.substring(0, str.length - 1));
                }
                if ($('.hdnEqNumerics').val() == '') {
                    $(".hdnEqPressType").val('0');
                    EnableEqBttns(true);
                }
            }
            else if ($(".hdnEqPressType").val() == '@') {
                if ($('.hdnEqParameters').val() != '') {
                    var str = $('.hdnEqParameters').val();
                    $('.hdnEqParameters').val(str.substring(0, str.length - 1));
                }
                if ($('.hdnEqParameters').val() == '') {
                    $(".hdnEqPressType").val('0');
                    EnableEqBttns(true);
                }
            }
        }
    });
    $(".EqEquation").mouseup(function (e) { e.preventDefault(); });
    String.prototype.splice = function (idx, rem, str) {
        return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
    };
    $(".EqEquation").on('keypress', function (event) {
        
        if ($(".hdnEqPressType").val() == '0') {
            var pattHash = new RegExp("^#");
            var pattTag = new RegExp("^@");
            if (pattHash.test(event.key)) {
                $(".hdnEqPressType").val('#');
                $('.hdnEqNumerics').val('#');
            }
            else if (pattTag.test(event.key)) {
                $(".hdnEqPressType").val('@');
                $('.hdnEqParameters').val('@');
                $(".Equation2").autocomplete("disable");
            }
            else
                return false;
        }
        else if ($(".hdnEqPressType").val() == '#') {
            if (event.keyCode == 46) {
                var nFloat;
                if ($('.hdnEqNumerics').val() == '#')
                    return false;
                else
                    nFloat = $('.hdnEqNumerics').val() + event.key;
                nFloat = nFloat.substring(1, nFloat.length);
                if (!isNaN(nFloat))
                    $('.hdnEqNumerics').val('#' + nFloat);
                else
                    return false;
            }
            else if (event.keyCode < 48 || event.keyCode > 57) {
                return false;
            }
            else {
                $('.hdnEqNumerics').val($('.hdnEqNumerics').val() + event.key);
                EnableEqBttns(false);
            }
        }
        else if ($(".hdnEqPressType").val() == '@') {
            if ((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode - 32 >= 65 && event.keyCode - 32 <= 90))
                $('.hdnEqParameters').val($('.hdnEqParameters').val() + event.key);
            else
                return false;
        }
    });
});
var prm = Sys.WebForms.PageRequestManager.getInstance();

prm.add_endRequest(function () {
    $(document).ready(function () {
        CalculateEndedBracketsAfterLoading();
        EnableEqBttns(true);
        $(".EqStartBrackets").click(function () {
            CalculateEndedBrackets(true);
            ATHM($(this));
        });
        $(".EqEndBrackets").click(function () {
            CalculateEndedBrackets(false);
            var str = $(".EqEquation").val();
            $(".EqEquation").val(str + ") ");
            var PositionIndex = $('.EqEquation').prop("selectionStart");
            var result = str.splice(PositionIndex, 0, ") ");
            $(".EqEquation").val(result);
            EnableEqBttns(false);
            $(".EqEquation").focus();
            $(".hdnEqPressType").val('0');
        });
        $(".arithmetic").click(function () {
            ATHM($(this));
        });
    });
    $(function () {
        //var items = [
        //    '@abc1', '@a002', '@a003',
        //    '@b001', '@b002', '@b003',
        //    '@c001', '@c002', '@c003'];
        function split(val) {
            return val.split(/ \s*/);
        }
        function extractLast(term) {
            return split(term).pop();
        }
        $(".EqEquation")
            .autocomplete({
                minLength: 1,
                _resizeMenu: function () {
                    this.menu.element.outerWidth(100);
                },
                source: function (request, response) {
                    response($.ui.autocomplete.filter(
                        items, extractLast(request.term)));
                },
                focus: function () {
                    return false;
                },
                select: function (event, ui) {
                    var sRemovalValue = $(".hdnEqParameters").val();
                    var terms = split(sRemovalValue);
                    // remove the current input
                    terms.pop();
                    // add the selected item
                    terms.push(ui.item.value);
                    // add placeholder to get the space at the end
                    terms.push("");
                    var strResultBefore = $(".EqEquation").val();
                    //strResultBefore = strResultBefore.replace(sRemovalValue, '');
                    var strResultAfter = strResultBefore.substring(strResultBefore.lastIndexOf(sRemovalValue) + sRemovalValue.length, strResultBefore.length);
                    strResultBefore = strResultBefore.substring(0, strResultBefore.lastIndexOf(sRemovalValue));
                    strResultBefore = strResultBefore + strResultAfter;
                    var PositionIndex = $('.EqEquation').prop("selectionStart");
                    var result = strResultBefore.splice(PositionIndex - sRemovalValue.length, 0, terms.join(" "));
                    $(".EqEquation").val(result);
                    DeletenotNeededTxt();
                    EnableEqBttns(false);
                    $(".hdnEqPressType").val('0');
                    return false;
                }
            });
        $(".EqEquation").on('keydown', function (event) {
            if (event.keyCode == 8) {
                if ($(".hdnEqPressType").val() == '#') {
                    if ($('.hdnEqNumerics').val() != '') {
                        var str = $('.hdnEqNumerics').val();
                        $('.hdnEqNumerics').val(str.substring(0, str.length - 1));
                    }
                    if ($('.hdnEqNumerics').val() == '') {
                        $(".hdnEqPressType").val('0');
                        EnableEqBttns(true);
                    }
                }
                else if ($(".hdnEqPressType").val() == '@') {
                    if ($('.hdnEqParameters').val() != '') {
                        var str = $('.hdnEqParameters').val();
                        $('.hdnEqParameters').val(str.substring(0, str.length - 1));
                    }
                    if ($('.hdnEqParameters').val() == '') {
                        $(".hdnEqPressType").val('0');
                        EnableEqBttns(true);
                    }
                }
            }
        });
        $(".EqEquation").mouseup(function (e) { e.preventDefault(); });
        String.prototype.splice = function (idx, rem, str) {
            return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
        };
        $(".EqEquation").on('keypress', function (event) {
            if ($(".hdnEqPressType").val() == '0') {
                var pattHash = new RegExp("^#");
                var pattTag = new RegExp("^@");
                if (pattHash.test(event.key)) {
                    $(".hdnEqPressType").val('#');
                    $('.hdnEqNumerics').val('#');
                }
                else if (pattTag.test(event.key)) {
                    $(".hdnEqPressType").val('@');
                    $('.hdnEqParameters').val('@');
                    $(".Equation2").autocomplete("disable");
                }
                else
                    return false;
            }
            else if ($(".hdnEqPressType").val() == '#') {
                if (event.keyCode == 46) {
                    var nFloat;
                    if ($('.hdnEqNumerics').val() == '#')
                        return false;
                    else
                        nFloat = $('.hdnEqNumerics').val() + event.key;
                    nFloat = nFloat.substring(1, nFloat.length);
                    if (!isNaN(nFloat))
                        $('.hdnEqNumerics').val('#' + nFloat);
                    else
                        return false;
                }
                else if (event.keyCode < 48 || event.keyCode > 57) {
                    return false;
                }
                else {
                    $('.hdnEqNumerics').val($('.hdnEqNumerics').val() + event.key);
                    EnableEqBttns(false);
                }
            }
            else if ($(".hdnEqPressType").val() == '@') {
                if ((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode - 32 >= 65 && event.keyCode - 32 <= 90))
                    $('.hdnEqParameters').val($('.hdnEqParameters').val() + event.key);
                else
                    return false;
            }
        });
    });
});
/* End Events */
