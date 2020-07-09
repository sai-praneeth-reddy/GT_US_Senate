Highcharts.chart('container', {
    chart: {
        type: 'bar'
    },
    title: {
        text: '10 Most Popular Senators'
    },
    xAxis: {
        categories: ['Bernie Sanders','John Barrasso', 'Patrick Leahy', 'John Thune',
										 'Brian Schatz','Amy Klobuchar','Angus King','Mazie Hirono',
                     'Mike Rounds','Mike Enzi']
    },
    yAxis: {
        min: 0, max:100,
        title: {
            text: 'Americas Most Popular Senators'
        }
    },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: [{
        name: 'No Opinion',
        data: [8,12,15,14,19,15,12,14,15,17]
    }, {
        name: 'Disapprove',
        data:[28, 26, 23, 27, 23,
        27, 31, 29, 29, 27]
    }, {
        name: 'Approve',
        data: [
        64, 62, 62, 59, 58,
        58, 57, 57, 56, 56
      ]
    }]
});