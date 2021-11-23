window.onload = function () {
  var dataPoints1 = [];
  var stockChart = new CanvasJS.StockChart("chartContainer",{
    theme: "light2",
    exportEnabled: false,
    title:{
      text:"Verrier Token"
    },
    charts: [{
      axisY: {
        prefix: "$"
      },
      data: [{
        type: "candlestick",
        yValueFormatString: "$#,###.00",
        dataPoints : dataPoints1
      }]
    }],

    navigator: {
        enabled: false
    },

    rangeSelector: {

      inputFields: {
        enabled: false
      },

      buttons: [
       {
         label: "1 Week",
         range: 7,
         rangeType: "day"
       }, 
       {
         label: "14 Days",
         range: 14,
         rangeType: "day"
       },
       {
         label: "1 Month",
         range: 1,
         rangeType: "month"
       },
       {
         label: "3 Month",
         range: 3,
         rangeType: "month"
       },
       {
         label: "6 Month",
         range: 6,
         rangeType: "month"
       },
       {
         label: "1 Year",
         range: 1,
         rangeType: "year"
       },
       {
         label: "All",
         rangeType: "all"
       },
      ],

      selectedRangeButtonIndex: 2
   }

  });

  $.getJSON("https://canvasjs.com/data/docs/ethusd2018.json", function(data) {
    for(var i = 0; i < data.length; i++){
      dataPoints1.push({x: new Date(data[i].date), y: [Number(data[i].open), Number(data[i].high), Number(data[i].low), Number(data[i].close)]});
    }
    stockChart.render();
  });
}