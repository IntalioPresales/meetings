function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/////// CHART 1 //////////////
var random_number_1 = getRandomInt(30, 100);
var random_number_2 = getRandomInt(30, 100);
var random_number_3 = getRandomInt(30, 100);
var random_number_4 = getRandomInt(30, 100);
var random_number_5 = getRandomInt(30, 100);
var random_number_6 = getRandomInt(1, 5);
var total_number = 8940 + random_number_6;
var total = random_number_1 + random_number_2 + random_number_3 + random_number_4 + random_number_5;
var percentage = Math.trunc((total / 5));
document.getElementById("chart1-percentage").textContent = percentage + '\%';
document.getElementById("chart1-numbers").textContent = random_number_6;
document.getElementById("chart1-total").textContent = total_number;
if (percentage < 60) {
  document.getElementById("chart1-image").src = "images/executive_dashboard/red_dot.png";
} else {
  document.getElementById("chart1-image").src = "images/executive_dashboard/green_dot.png";
}

setInterval(function () {
  // method to be executed;
  random_number_1 = getRandomInt(30, 100);
  random_number_2 = getRandomInt(30, 100);
  random_number_3 = getRandomInt(30, 100);
  random_number_4 = getRandomInt(30, 100);
  random_number_5 = getRandomInt(30, 100);
  random_number_6 = getRandomInt(1, 5);
  total_number = total_number + random_number_6;
  var total = random_number_1 + random_number_2 + random_number_3 + random_number_4 + random_number_5;
  var percentage = Math.trunc((total / 5));
  document.getElementById("chart1-percentage").textContent = percentage + '\%';
  document.getElementById("chart1-numbers").textContent = random_number_6;
  document.getElementById("chart1-total").textContent = total_number;
  if (percentage < 60) {
    document.getElementById("chart1-image").src = "images/executive_dashboard/red_dot.png";
  } else {
    document.getElementById("chart1-image").src = "images/executive_dashboard/green_dot.png";
  }
  chart1.updateOptions({
    series: [{
      data: [random_number_1, random_number_2, random_number_3, random_number_4, random_number_5]
    }, {
      data: [100 - random_number_1, 100 - random_number_2, 100 - random_number_3, 100 - random_number_4, 100 - random_number_5]
    }],
  });
}, 14000);

var chart1_options = {
  chart: {
    height: 350,
    type: 'bar',
    stacked: true,
    stackType: '100%'
  },
  plotOptions: {
    bar: {
      horizontal: true,
    }
  },
  stroke: {
    width: 1,
    colors: ['#fff']
  },
  series: [{
    name: '  Participation ',
    data: [random_number_1, random_number_2, random_number_3, random_number_4, random_number_5]
  }, {
    name: '  InActive ',
    data: [100 - random_number_1, 100 - random_number_2, 100 - random_number_3, 100 - random_number_4, 100 - random_number_5]
  }],
  title: {
    text: '',
    align: 'left',
    margin: 0,
    offsetX: 390,
    offsetY: 0,
    floating: false,
    style: {
      fontSize: '24px',
      color: '#263238',
      direction: 'rtl',
    },
  },
  xaxis: {
    type: 'category',
    categories: ['Sarah Smith-en', 'Mazen Farah-en', 'Maria Miller-en', 'Dani Jones-en', 'Elsy Brawn-en'],
    labels: {
      show: true,
      rotate: -45,
      rotateAlways: false,
      hideOverlappingLabels: true,
      showDuplicates: false,
      trim: true,
      minHeight: undefined,
      maxHeight: 120,
      style: {
        colors: [],
        fontSize: '10px',
        fontFamily: 'Helvetica, Arial, sans-serif',
        cssClass: 'apexcharts-xaxis-label',
      },
      offsetX: 0,
      offsetY: 0,
      format: undefined,
      formatter: undefined,
      datetimeFormatter: {
        year: 'yyyy',
        month: "MMM 'yy",
        day: 'dd MMM',
        hour: 'HH:mm',
      },
    }
  },
  yaxis: {
    labels: {
      show: true,
      minWidth: 0,
      maxWidth: 100,
      style: {
        color: 'undefined',
        fontSize: '12px',
        fontFamily: 'Helvetica, Arial, sans-serif',
        cssClass: 'apexcharts-yaxis-label',
      },
      offsetX: -30,//rtl
      offsetY: 0,
      rotate: 0,
    }
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + "% إنتهاء"
      }
    }
  },
  fill: {
    opacity: 1

  },

  legend: {
    position: 'top',
    horizontalAlign: 'left',
    offsetX: 30,
  },
  colors: ['#0DBBEC', '#8E1838']
}
var chart1 = new ApexCharts(
  document.querySelector("#chart1"),
  chart1_options
);
chart1.render();
////////////////////////////////////////////////////////////
///// CHART 2 //////
var chart2_options = {
  chart: {
    height: 280,
    type: "radialBar",
  },

  series: [30.01],
  colors: ["#277dcc"],
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: "70%",
        background: "#FFFFFF"
      },
      track: {
        dropShadow: {
          enabled: true,
          top: 2,
          left: 0,
          blur: 4,
          opacity: 0.15
        }
      },
      dataLabels: {
        name: {
          offsetY: -10,
          color: "#2E0D0D",
          fontSize: "13px",
          show: false
        },
        value: {
          offsetY: 0,
          color: "#2E0D0D",
          fontSize: "30px",
          show: true
        }
      }
    }
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "vertical",
      gradientToColors: ["#00deff"],
      stops: [0, 100]
    }
  },
  stroke: {
    lineCap: "round"
  },
  labels: ["نسبة الإنجاز"]
};
var chart2 = new ApexCharts(document.querySelector("#chart2"), chart2_options);
chart2.render();
var number = 30;
function generateRandomDecimel() {
  var min = 0.0200,
    max = 0.190,
    highlightedNumber = Math.random() * (max - min) + min;
  return highlightedNumber;
};
//Update chart2 progress
setInterval(function () {
  number = number + generateRandomDecimel();
  chart2.updateOptions({
    series: [number.toFixed(2)],
  });
}, 3900);
//Update chart2 time
d = new Date();
h = d.getHours();
m = d.getMinutes();
s = d.getSeconds();
var hour_eod = (24 * 60 * 60) - (h * 60 * 60);
var minute_eod = (24 * 60 * 60) - (h * 60 * 60) - (m * 60);
var second_eod = (24 * 60 * 60) - (h * 60 * 60) - (m * 60) - s;
document.getElementById("chart2-total").textContent = 'Last Year';
setInterval(function () {
  d = new Date();
  h = d.getHours();
  m = d.getMinutes();
  s = d.getSeconds();
  var hour_eod = (24 * 60 * 60) - (h * 60 * 60);
  var minute_eod = (24 * 60 * 60) - (h * 60 * 60) - (m * 60);
  var second_eod = (24 * 60 * 60) - (h * 60 * 60) - (m * 60) - s;
  document.getElementById("chart2-total").textContent = 'Last Year';
}, 1000);
////////////////////////////////////////////////////////////
///// CHART 3 //////
var chart3_options = {
  chart: {
    height: 280,
    type: "radialBar",
  },

  series: [63.07],
  colors: ["#fe018a"],
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: "70%",
        background: "#FFFFFF"
      },
      track: {
        dropShadow: {
          enabled: true,
          top: 2,
          left: 0,
          blur: 4,
          opacity: 0.15
        }
      },
      dataLabels: {
        name: {
          offsetY: -10,
          color: "#2E0D0D",
          fontSize: "13px",
          show: false
        },
        value: {
          offsetY: 0,
          color: "#2E0D0D",
          fontSize: "30px",
          show: true
        }
      }
    }
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "vertical",
      gradientToColors: ["#ffa800"],
      stops: [0, 100]
    }
  },
  stroke: {
    lineCap: "round"
  },
  labels: ["نسبة الإنجاز"]
};
var chart3 = new ApexCharts(document.querySelector("#chart3"), chart3_options);
chart3.render();
var chart3_number = 11;
//Update chart3 progress
setInterval(function () {
  chart3_number = chart3_number + generateRandomDecimel();
  chart3.updateOptions({
    series: [chart3_number.toFixed(2)],
  });
}, 10000);
//Update chart3 date
// moment.locale('ar_SA');
document.getElementById("chart3-total").textContent = 'during ' + moment().endOf('year').fromNow(true);
////////////////////////////////////////////////////////////
///// CHART 4 //////
var chart4_options = {
  chart: {
    height: 600,
    type: 'area',
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    curve: 'smooth',
    lineCap: 'butt',
    /* colors: ['#fff', '#008FFB'], */
    width: 5,
    dashArray: 0,
  },
  colors: ['#00deff', '#ffa800', '#e20fb8', '#ffa800', '#FF9800'],
  series: [{
    name: 'Room 301',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'Room 302',
    data: [11, 32, 45, 32, 34, 52, 41]
  }, {
    name: 'Room 303',
    data: [16, 52, 15, 16, 65, 70, 62]
  }],

  xaxis: {
    type: 'datetime',
    categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00"],
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
  fill: {
    colors: undefined,
    opacity: 0.6,
    type: 'solid',
    gradient: {
      shade: 'light',
      type: "horizontal",
      shadeIntensity: 0.8,
      gradientToColors: undefined,
      inverseColors: true,
      opacityFrom: 0,
      opacityTo: 1,
      stops: [0, 50, 100],
      colorStops: []
    }
  }
}
var chart4 = new ApexCharts(document.querySelector("#chart4"), chart4_options);
chart4.render();
