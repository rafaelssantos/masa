class ChartJSBuilder extends ChartBuilder{
    constructor(){
       super();
    }    



    buildHorizontalBar(title, containerId, labels){
        var config = {
            type: 'horizontalBar',
            data: {
                labels: labels
            },
            options: {
                elements: {
                    rectangle: {
                        borderWidth: 2,
                    }
                },
                responsive: true,
                legend: {
                    position: 'bottom'
                },
                title: {
                    display: false,
                    text: title
                },
                scales: {
                    xAxes: [{
                        display: true,
                        ticks: {
                            suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                            // OR //
                            beginAtZero: true   // minimum value will be 0.
                        }
                    }]
                }
            }
        }
      
        return new Chart($(containerId), config);
    }



    buildRadar(title, containerId, labels){
        var config = {
            type: 'radar',
            data: {
                labels: labels
            },
            options: {
                legend: {
                    position: 'bottom'
                },
                title: {
                    display: false,
                    text: title
                },
                aspectRatio: 1,
                responsive: true,
                scale: {
                    ticks: {
                        beginAtZero: true
                    }
                },
                tooltips: {
                    enabled: true,
                    callbacks: {
                        label: function(tooltipItem, data) {
                            return data.datasets[tooltipItem.datasetIndex].label + ' : ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                        }
                    }
                }
            }
         };
        return new Chart($(containerId), config);
    }


    bindLegends(chart1, chart2){
        chart1.options.legend.onClick = function(e, legendItem){
            var index = legendItem.datasetIndex;
            chart1.data.datasets[index].hidden = !chart1.data.datasets[index].hidden;
            chart2.data.datasets[index].hidden = !chart2.data.datasets[index].hidden;
            chart1.update();
            chart2.update();
        }

        chart2.options.legend.onClick = function(e, legendItem){
            var index = legendItem.datasetIndex;
            chart1.data.datasets[index].hidden = !chart1.data.datasets[index].hidden;
            chart2.data.datasets[index].hidden = !chart2.data.datasets[index].hidden;
            chart1.update();
            chart2.update();
        }
    }


    addDataset(chart, attData, attIndex) {
        var attrColorName = this.colorNames[chart.config.data.datasets.length % this.colorNames.length];
        var attrColor = this.colors[attrColorName];
        var dataset = {
            label: attData.attributeLabels[attIndex],
            borderColor: attrColor,
            backgroundColor: Chart.helpers.color(attrColor).alpha(0.2).rgbString(),
            pointStyle: 'rect',
            pointBackgroundColor: attrColor,
            data: attData.data[attIndex
            ],
        };

        chart.config.data.datasets.push(dataset);
        chart.update();
    }


    removeAll(chart) {
        var n = chart.config.data.datasets.length;
        chart.config.data.datasets.splice(0, n);
        chart.update();
    }
}