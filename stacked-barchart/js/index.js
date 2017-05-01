$(function () {
        $('#container').highcharts({
          colors: ['#ffc726','#173862'],
            chart: {
                type: 'column'
            },
            title: {
                text: 'DPRK Negotiations with U.S. and Multilateral By Type and Leader'
            },
            xAxis: {
              max:2,
                categories: ['Kim il-Sung', 'Kim jong-Il', 'Kim jong-Un']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Total Negotiations'
                },
                stackLabels: {
                    enabled: false,
                    style: {
                        fontWeight: 'bold',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                    }
                }
            },
            legend: {
                align: 'right',
                x: -70,
                verticalAlign: 'top',
                y: 20,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColorSolid) || 'white',
                borderColor: '#CCC',
                borderWidth: 1,
                shadow: false
            },
            tooltip: {
                formatter: function() {
                    return '<b>Under '+ this.x +'</b><br/>'+
                        this.series.name +' Negotiations: '+ this.y +'<br/>'+
                        'Total: '+ this.point.stackTotal;
                }
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                        style: {
                            textShadow: '0 0 3px black, 0 0 3px black'
                        }
                    }
                }
            },
            series: [{
                name: 'Multilateral',
                data: [0, 115, 5,]
            }, {
                name: 'US-DPRK',
                data: [10, 40, 0]

            }]
        });
    });
