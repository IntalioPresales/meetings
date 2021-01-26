
var Grid = "";

function GetPermitionsWithKeyName(keyName, GridID) {
    debugger;
    Grid = GridID;
    $.ajax({
        type: "POST",
        url: "/CodeFiles/Base/GetPermitonsBykeyName.aspx/GetPermitonsDetailsBykeyName",
        data: JSON.stringify({ KeyName: keyName }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: OnGetPermitionsWithKeyNameSuccess,
        failure: function (response) {
            //alert(response.d);
        },
        error: function (response) {
           // alert(response.d);

        }
    });
}


function OnGetPermitionsWithKeyNameSuccess(response) {
    debugger;
    var permtion = response.d;
    var radGrid = Grid;
    var table = "";
    if (radGrid!="")
    var table = radGrid.get_masterTableView();
   
    for (var i = 0; i < $(permtion).length; i++) {

        var item = permtion[i];
        if (item.IsAdd == false) {
            $('*[data-Type=' + item.keyName + '-IsAdd]').hide();
         
        }
        if (item.IsUpdate == false) {
            $('*[data-Type=' + item.keyName + '-IsUpdate]').hide();
            $('.'+item.keyName + '-IsUpdate').hide();
            if (radGrid != "") {
                var column = table.getColumnByUniqueName(item.keyName + '-IsUpdate');
                table.hideColumn(column.get_element().cellIndex);
            }
           
        }
        if (item.IsDelete == false) {
            $('*[data-Type=' + item.keyName + '-IsDelete]').hide();
            $('.' + item.keyName + '-IsDelete').hide();
            if (radGrid != "") {
                var column = table.getColumnByUniqueName(item.keyName + '-IsDelete');
                table.hideColumn(column.get_element().cellIndex);
            }
        }
        if (item.IsView == false) {
            $('.' + item.keyName + '-IsView').hide();
            $('*[data-Type=' + item.keyName + '-IsView]').hide();
            if (radGrid != "") {
                var column = table.getColumnByUniqueName(item.keyName + '-IsView');
                table.hideColumn(column.get_element().cellIndex);
            }
        }
    }
}


function GetPermitionsForLevelPage(planID,LevelNum, GridID) {
    Grid = GridID;
    $.ajax({
        type: "POST",
        url: "/CodeFiles/Base/GetPermitonsBykeyName.aspx/GetPermitionsForLevelPage",
        data: JSON.stringify({ planID: planID, LevelNum: LevelNum }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: OnGetPermitionsForLevelPageSuccess,
        failure: function (response) {
           // alert(response.d);
        },
        error: function (response) {
           // alert(response.d);

        }
    });
}

function OnGetPermitionsForLevelPageSuccess(response) {
    var permtion = response.d;
    var radGrid = Grid;
    var table = "";
    if (radGrid != "")
        var table = radGrid.get_masterTableView();

    for (var i = 0; i < $(permtion).length; i++) {

        var item = permtion[i];
        if (item.IsAdd == false) {
            $('*[data-Type=levels-IsAdd]').hide();

        }
        if (item.IsUpdate == false) {
            $('*[data-Type=levels-IsUpdate]').hide();
            $('.levels-IsUpdate').hide();
            if (radGrid != "") {
                var column = table.getColumnByUniqueName('levels-IsUpdate');
                table.hideColumn(column.get_element().cellIndex);
            }

        }
        if (item.IsDelete == false) {
            $('*[data-Type=levels-IsDelete]').hide();
            $('.levels-IsDelete').hide();
            if (radGrid != "") {
                var column = table.getColumnByUniqueName('levels-IsDelete');
                table.hideColumn(column.get_element().cellIndex);
            }
        }
        if (item.IsView == false) {
            $('.' + item.keyName + 'levels-IsView').hide();
            $('*[data-Type=levels-IsView]').hide();
            if (radGrid != "") {
                var column = table.getColumnByUniqueName('levels-IsView');
                table.hideColumn(column.get_element().cellIndex);
            }
        }
    }
}

function GetPermitonsRoleDetailsForPrgrams(keyName, GridID) {
    debugger;
    Grid = GridID;
    $.ajax({
        type: "POST",
        url: "/CodeFiles/Base/GetPermitonsBykeyName.aspx/GetPermitonsRoleDetailsForPrgrams",
        data: JSON.stringify({ KeyName: keyName }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: OnGetPermitonsRoleDetailsForPrgramsSuccess,
        failure: function (response) {
            //alert(response.d);
        },
        error: function (response) {
            // alert(response.d);

        }
    });
}



function OnGetPermitonsRoleDetailsForPrgramsSuccess(response) {
    
    var permtion = response.d;
    var radGrid = Grid;
    var table = "";
    if (radGrid != "")
        var table = radGrid.get_masterTableView();

    for (var i = 0; i < $(permtion).length; i++) {

        var item = permtion[i];
        if (item.IsUpdate == false) {
            $('*[data-Type=' + item.keyName + '-IsUpdate]').hide();
            $('.' + item.keyName + '-IsUpdate').hide();
            if (radGrid != "") {
                var column = table.getColumnByUniqueName(item.keyName + '-IsUpdate');
                table.hideColumn(column.get_element().cellIndex);
            }

        }
        if (item.IsDelete == false) {
            $('*[data-Type=' + item.keyName + '-IsDelete]').hide();
            $('.' + item.keyName + '-IsDelete').hide();
            if (radGrid != "") {
                var column = table.getColumnByUniqueName(item.keyName + '-IsDelete');
                table.hideColumn(column.get_element().cellIndex);
            }
        }
        if (item.IsView == false) {
            $('.' + item.keyName + '-IsView').hide();
            $('*[data-Type=' + item.keyName + '-IsView]').hide();
            if (radGrid != "") {
                var column = table.getColumnByUniqueName(item.keyName + '-IsView');
                table.hideColumn(column.get_element().cellIndex);
            }
        }
    }
}


function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}




