


$('li.finish a').click(function () {
    console.log('helo')
    $('.pager.wizard').hide();
    // toastr.options = {
    //     closeButton: true,
    //     progressBar: true,
    //     showMethod: 'fadeIn',
    //     hideMethod: 'fadeOut',
    //     timeOut: 10000,
    //     rtl: true
    // };
    // toastr.success('تم حفظ المعلومات');
    iziToast.show({
        id: null,
        class: '',
        title: 'The project was created',
        titleColor: '',
        titleSize: '20',
        titleLineHeight: '',
        message: '',
        messageColor: '',
        messageSize: '',
        messageLineHeight: '',
        backgroundColor: '',
        theme: 'light', // dark
        color: 'green', // blue, red, green, yellow
        icon: 'fa fa-check',
        iconText: '',
        iconColor: '',
        iconUrl: null,
        image: '',
        imageWidth: 50,
        maxWidth: null,
        zindex: null,
        layout: 1,
        balloon: false,
        close: true,
        closeOnEscape: false,
        closeOnClick: false,
        displayMode: 0, // once, replace
        position: 'center', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
        target: '',
        targetFirst: true,
        timeout: 4500,
        rtl: true,
        animateInside: true,
        drag: true,
        pauseOnHover: true,
        resetOnHover: false,
        progressBar: true,
        progressBarColor: '',
        progressBarEasing: 'linear',
        overlay: false,
        overlayClose: false,
        overlayColor: 'rgba(0, 0, 0, 0.6)',
        transitionIn: 'fadeInUp',
        transitionOut: 'fadeOut',
        transitionInMobile: 'fadeInUp',
        transitionOutMobile: 'fadeOutDown',
        buttons: {},
        inputs: {},
        onOpening: function () { },
        onOpened: function () { },
        onClosing: function () { },
        onClosed: function () { }
    });
    setTimeout(function () {
        // location.reload();
        window.location.href = "index.html";
    }, 5500);
});

/*on select change*/
$('#mubadarSelect').change(function () {

    $('.DespText').slideDown();
    setTimeout(function () {
        $('.GoalsList').slideDown();
    }, 1000);
});

$('.GoalsList li, .MangList li').click(function () {

    //$('body').css({'cursor' : 'wait'});
    $(this).toggleClass('activeSelected');
    $(this).append("<i class='fa fa-times UlClose'></i>");


});



// <select id="select-to"></select>

var REGEX_EMAIL = '([a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@' +
    '(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)';

var formatName = function (item) {
    return $.trim((item.first_name || '') + ' ' + (item.last_name || ''));
};

$('#select-to').selectize({
    persist: false,
    maxItems: null,
    valueField: 'email',
    labelField: 'name',
    searchField: ['first_name', 'last_name', 'email'],
    sortField: [
        { field: 'first_name', direction: 'asc' },
        { field: 'last_name', direction: 'asc' }
    ],
    options: [
        { email: 'tadqeeq@sab.gov.qa', first_name: '', last_name: 'Relevant audit departments' },
        { email: 'makhater@sab.gov.qa', first_name: '', last_name: 'Quality and risk management' },
        { email: 'RRaed@Mazen.com', first_name: '', last_name: 'Department of Standards and Methodology' },
        { email: 'maayir@sab.gov.qa', first_name: '', last_name: 'Training and Capacity Development Committee' },
        { email: 'maaloumat@sab.gov.qa', first_name: '', last_name: 'Information Systems Management' },
        { email: 'itisalat@sab.gov.qa', first_name: '', last_name: 'Liaison office' },
        { email: 'wahadat@sab.gov.qa', first_name: '', last_name: 'All units and departments concerned' },

    ],
    render: {
        item: function (item, escape) {
            var name = formatName(item);
            return '<div>' +
                (name ? '<span class="name">' + escape(name) + '</span>' : '') +
                (item.email ? '<span class="email">' + escape(item.email) + '</span>' : '') +
                '</div>';
        },
        option: function (item, escape) {
            var name = formatName(item);
            var label = name || item.email;
            var caption = name ? item.email : null;
            return '<div>' +
                '<span class="label">' + escape(label) + '</span>' +
                (caption ? '<span class="caption">' + escape(caption) + '</span>' : '') +
                '</div>';
        }
    },
    createFilter: function (input) {
        var regexpA = new RegExp('^' + REGEX_EMAIL + '$', 'i');
        var regexpB = new RegExp('^([^<]*)\<' + REGEX_EMAIL + '\>$', 'i');
        return regexpA.test(input) || regexpB.test(input);
    },
    create: function (input) {
        if ((new RegExp('^' + REGEX_EMAIL + '$', 'i')).test(input)) {
            return { email: input };
        }
        var match = input.match(new RegExp('^([^<]*)\<' + REGEX_EMAIL + '\>$', 'i'));
        if (match) {
            var name = $.trim(match[1]);
            var pos_space = name.indexOf(' ');
            var first_name = name.substring(0, pos_space);
            var last_name = name.substring(pos_space + 1);

            return {
                email: match[2],
                first_name: first_name,
                last_name: last_name
            };
        }
        alert('Invalid email address.');
        return false;
    }
});



$('#select-to2').selectize({
    persist: false,
    maxItems: 1,
    valueField: 'email',
    labelField: 'name',
    searchField: ['first_name', 'last_name', 'email'],
    sortField: [
        { field: 'first_name', direction: 'asc' },
        { field: 'last_name', direction: 'asc' }
    ],
    options: [
        { email: 'maayir@sab.gov.qa', first_name: '', last_name: 'Methodologies and Standards Development Committee' },
        { email: 'raqaba@sab.gov.qa', first_name: '', last_name: 'Director of Compliance Control Department' },
        { email: 'makhater@sab.gov.qa', first_name: '', last_name: 'Quality and Risk Manager' },
        { email: 'tamyiz@sab.gov.qa', first_name: '', last_name: 'Director of the Center of Excellence for Training and Development' },
        { email: 'tanmiah@sab.gov.qa', first_name: '', last_name: 'Training and Capacity Development Committee' },
        { email: 'electronic@sab.gov.qa', first_name: '', last_name: 'Electronic Connectivity Committee' },
        { email: 'maaloumat@sab.gov.qa', first_name: '', last_name: 'Director of Information Systems Department' },
        { email: 'siyasat@sab.gov.qa', first_name: '', last_name: 'Policy and Procedures Development Committee' },
        { email: 'hr@sab.gov.qa', first_name: '', last_name: 'Human Resources Director' },

    ],
    render: {
        item: function (item, escape) {
            var name = formatName(item);
            return '<div>' +
                (name ? '<span class="name">' + escape(name) + '</span>' : '') +
                (item.email ? '<span class="email">' + escape(item.email) + '</span>' : '') +
                '</div>';
        },
        option: function (item, escape) {
            var name = formatName(item);
            var label = name || item.email;
            var caption = name ? item.email : null;
            return '<div>' +
                '<span class="label">' + escape(label) + '</span>' +
                (caption ? '<span class="caption">' + escape(caption) + '</span>' : '') +
                '</div>';
        }
    },
    createFilter: function (input) {
        var regexpA = new RegExp('^' + REGEX_EMAIL + '$', 'i');
        var regexpB = new RegExp('^([^<]*)\<' + REGEX_EMAIL + '\>$', 'i');
        return regexpA.test(input) || regexpB.test(input);
    },
    create: function (input) {
        if ((new RegExp('^' + REGEX_EMAIL + '$', 'i')).test(input)) {
            return { email: input };
        }
        var match = input.match(new RegExp('^([^<]*)\<' + REGEX_EMAIL + '\>$', 'i'));
        if (match) {
            var name = $.trim(match[1]);
            var pos_space = name.indexOf(' ');
            var first_name = name.substring(0, pos_space);
            var last_name = name.substring(pos_space + 1);

            return {
                email: match[2],
                first_name: first_name,
                last_name: last_name
            };
        }
        alert('Invalid email address.');
        return false;
    }
});



$('#select-to3').selectize({
    persist: false,
    maxItems: null,
    valueField: 'email',
    // labelField: 'name',
    searchField: ['email'],

    options: [
        { email: 'Training and development programs' },
        { email: 'Audit and oversight departments' },
        { email: 'Employees' },
        { email: 'Scientific Research' },
        { email: 'Electronic Connectivity Committee' },
        { email: 'Methodologies and Standards Development Committee' },

    ],
    render: {
        item: function (item, escape) {
            var name = formatName(item);
            return '<div>' +
                (name ? '<span class="name">' + escape(name) + '</span>' : '') +
                (item.email ? '<span class="email">' + escape(item.email) + '</span>' : '') +
                '</div>';
        },
        option: function (item, escape) {
            var name = formatName(item);
            var label = name || item.email;
            var caption = name ? item.email : null;
            return '<div>' +
                '<span class="label">' + escape(label) + '</span>' +
                (caption ? '<span class="caption">' + escape(caption) + '</span>' : '') +
                '</div>';
        }
    },
    createFilter: function (input) {
        var regexpA = new RegExp('^' + REGEX_EMAIL + '$', 'i');
        var regexpB = new RegExp('^([^<]*)\<' + REGEX_EMAIL + '\>$', 'i');
        return regexpA.test(input) || regexpB.test(input);
    },
    create: function (input) {
        if ((new RegExp('^' + REGEX_EMAIL + '$', 'i')).test(input)) {
            return { email: input };
        }
        var match = input.match(new RegExp('^([^<]*)\<' + REGEX_EMAIL + '\>$', 'i'));
        if (match) {
            var name = $.trim(match[1]);
            var pos_space = name.indexOf(' ');
            var first_name = name.substring(0, pos_space);
            var last_name = name.substring(pos_space + 1);

            return {
                email: match[2],
                first_name: first_name,
                last_name: last_name
            };
        }
        alert('Invalid email address.');
        return false;
    }
});

$('#select-to3-new-request').selectize({
    persist: false,
    maxItems: null,
    valueField: 'email',
    // labelField: 'name',
    searchField: ['email'],

    options: [
        { email: 'The Ministry of Public Works' },
        { email: 'Civil Aviation Corporation' },
        { email: 'Municipal' },
        { email: 'Ministry of Tourism' },
        { email: '2022 Committee' },
        { email: 'Ministry of Energy and Industry' },
        { email: 'Ministry of Finance' },
        { email: 'Ministry of Communications and Communications' },
        { email: 'Ministry of Economy and Trade' },
        { email: 'Ministry of Public Health' },
        { email: 'The Ministry of Education and Higher Education' },
    ],
    render: {
        item: function (item, escape) {
            var name = formatName(item);
            return '<div>' +
                (name ? '<span class="name">' + escape(name) + '</span>' : '') +
                (item.email ? '<span class="email">' + escape(item.email) + '</span>' : '') +
                '</div>';
        },
        option: function (item, escape) {
            var name = formatName(item);
            var label = name || item.email;
            var caption = name ? item.email : null;
            return '<div>' +
                '<span class="label">' + escape(label) + '</span>' +
                (caption ? '<span class="caption">' + escape(caption) + '</span>' : '') +
                '</div>';
        }
    },
    createFilter: function (input) {
        var regexpA = new RegExp('^' + REGEX_EMAIL + '$', 'i');
        var regexpB = new RegExp('^([^<]*)\<' + REGEX_EMAIL + '\>$', 'i');
        return regexpA.test(input) || regexpB.test(input);
    },
    create: function (input) {
        if ((new RegExp('^' + REGEX_EMAIL + '$', 'i')).test(input)) {
            return { email: input };
        }
        var match = input.match(new RegExp('^([^<]*)\<' + REGEX_EMAIL + '\>$', 'i'));
        if (match) {
            var name = $.trim(match[1]);
            var pos_space = name.indexOf(' ');
            var first_name = name.substring(0, pos_space);
            var last_name = name.substring(pos_space + 1);

            return {
                email: match[2],
                first_name: first_name,
                last_name: last_name
            };
        }
        alert('Invalid email address.');
        return false;
    }
});




$('#select-to4').selectize({
    persist: false,
    maxItems: null,
    valueField: 'email',
    // labelField: 'name',
    searchField: ['email'],

    options: [
        { email: 'Development and upgrading supervisory work' },
        { email: 'Institutional excellence' },
        { email: 'Cooperation and communication' },


    ],
    render: {
        item: function (item, escape) {
            var name = formatName(item);
            return '<div>' +
                (name ? '<span class="name">' + escape(name) + '</span>' : '') +
                (item.email ? '<span class="email">' + escape(item.email) + '</span>' : '') +
                '</div>';
        },
        option: function (item, escape) {
            var name = formatName(item);
            var label = name || item.email;
            var caption = name ? item.email : null;
            return '<div>' +
                '<span class="label">' + escape(label) + '</span>' +
                (caption ? '<span class="caption">' + escape(caption) + '</span>' : '') +
                '</div>';
        }
    },
    createFilter: function (input) {
        var regexpA = new RegExp('^' + REGEX_EMAIL + '$', 'i');
        var regexpB = new RegExp('^([^<]*)\<' + REGEX_EMAIL + '\>$', 'i');
        return regexpA.test(input) || regexpB.test(input);
    },
    create: function (input) {
        if ((new RegExp('^' + REGEX_EMAIL + '$', 'i')).test(input)) {
            return { email: input };
        }
        var match = input.match(new RegExp('^([^<]*)\<' + REGEX_EMAIL + '\>$', 'i'));
        if (match) {
            var name = $.trim(match[1]);
            var pos_space = name.indexOf(' ');
            var first_name = name.substring(0, pos_space);
            var last_name = name.substring(pos_space + 1);

            return {
                email: match[2],
                first_name: first_name,
                last_name: last_name
            };
        }
        alert('Invalid email address.');
        return false;
    }
});

$('#select-to5').selectize({
    persist: false,
    maxItems: null,
    valueField: 'email',
    // labelField: 'name',
    searchField: ['email'],

    options: [
        { email: 'Development and upgrading supervisory work' },
        { email: 'Institutional excellence' },
        { email: 'Cooperation and communication' },
    ],
    render: {
        item: function (item, escape) {
            var name = formatName(item);
            return '<div>' +
                (name ? '<span class="name">' + escape(name) + '</span>' : '') +
                (item.email ? '<span class="email">' + escape(item.email) + '</span>' : '') +
                '</div>';
        },
        option: function (item, escape) {
            var name = formatName(item);
            var label = name || item.email;
            var caption = name ? item.email : null;
            return '<div>' +
                '<span class="label">' + escape(label) + '</span>' +
                (caption ? '<span class="caption">' + escape(caption) + '</span>' : '') +
                '</div>';
        }
    },
    createFilter: function (input) {
        var regexpA = new RegExp('^' + REGEX_EMAIL + '$', 'i');
        var regexpB = new RegExp('^([^<]*)\<' + REGEX_EMAIL + '\>$', 'i');
        return regexpA.test(input) || regexpB.test(input);
    },
    create: function (input) {
        if ((new RegExp('^' + REGEX_EMAIL + '$', 'i')).test(input)) {
            return { email: input };
        }
        var match = input.match(new RegExp('^([^<]*)\<' + REGEX_EMAIL + '\>$', 'i'));
        if (match) {
            var name = $.trim(match[1]);
            var pos_space = name.indexOf(' ');
            var first_name = name.substring(0, pos_space);
            var last_name = name.substring(pos_space + 1);

            return {
                email: match[2],
                first_name: first_name,
                last_name: last_name
            };
        }
        alert('Invalid email address.');
        return false;
    }
});



$('.input-group.date').datepicker({
});


// var p = document.getElementById('tab4click');
// p.onclick = function () {
//     document.getElementById('tab4row').style.display = 'none';
//     document.getElementById('tab4loading').style.display = 'unset';
//     document.getElementById('tab4loadingtext').style.display = 'unset';
//     setTimeout(function () {
//         document.getElementById('tab4row').style.display = 'unset';
//         document.getElementById('tab4loading').style.display = 'none';
//         document.getElementById('tab4loadingtext').style.display = 'none';
//     }, 3000);
//     return false;
// };

function sendToMaliyaClicked() {
    document.getElementById('sendToMaliyaButton').style.display = 'none';
    document.getElementById('tab4row').style.display = 'none';
    document.getElementById('tab4loading').style.display = 'unset';
    document.getElementById('tab4loadingtext').style.display = 'unset';
    setTimeout(function () {
        document.getElementById('tab4row').style.display = 'unset';
        document.getElementById('tab4loading').style.display = 'none';
        document.getElementById('tab4loadingtext').style.display = 'none';
        document.getElementById('sendToMaliyaText').style.display = 'none';
    }, 3000);
}

function confirmMalia() {
    $("#nextButton").click();
}