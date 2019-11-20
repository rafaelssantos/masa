class HighChartsBuilder extends ChartBuilder{
    constructor(){
       super();
    }


    buildParallelCoord(title, containerId, scoreLabels){
        var chart = Highcharts.chart(containerId.substring[1], {
            chart: {
                type: 'spline',
                parallelCoordinates: true,
                parallelAxes: {
                    lineWidth: 2
                }
            },
            title: {
                text: title
            },
            plotOptions: {
                series: {
                    animation: false,
                    marker: {
                        enabled: false,
                        states: {
                            hover: {
                                enabled: false
                            }
                        }
                    },
                    states: {
                        hover: {
                            halo: {
                                size: 0
                            }
                        }
                    },
                    events: {
                        mouseOver: function () {
                            this.group.toFront();
                        }
                    }
                }
            },
            tooltip: {
                pointFormat: '<span style="color:{point.color}">\u25CF</span>' +
                    '{series.name}: <b>{point.formattedValue}</b><br/>'
            },
            xAxis: {
                categories: [
                    'Training date',
                    'Miles for training run',
                    'Training time',
                    'Shoe brand',
                    'Running pace per mile',
                    'Short or long',
                    'After 2004'
                ],
                offset: 10
            },
            yAxis: [{
                type: 'datetime',
                tooltipValueFormat: '{value:%Y-%m-%d}'
            }, {
                min: 0,
                tooltipValueFormat: '{value} mile(s)'
            }, {
                type: 'datetime',
                min: 0,
                labels: {
                    format: '{value:%H:%M}'
                }
            }, {
                categories: [
                    'Other',
                    'Adidas',
                    'Mizuno',
                    'Asics',
                    'Brooks',
                    'New Balance',
                    'Izumi'
                ]
            }, {
                type: 'datetime'
            }, {
                categories: ['&gt; 5miles', '&lt; 5miles']
            }, {
                categories: ['Before', 'After']
            }],
            series: [1]
        });
        return chart;
    }
}