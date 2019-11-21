class ChartJSBuilder extends ChartBuilder{
    constructor(){
       super();
    }    



    buildHorizontalBar(id, title, yAxes){
        var config = {
            type: 'horizontalBar',
            data: {
                labels: yAxes
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
                    display: true,
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
      
        return new Chart($(id), config);
    }



    buildRadar(id, title, yAxes){
        let config = {
            type: 'radar',
            data: {
                labels: yAxes
            },
            options: {
                legend: {
                    position: 'bottom'
                },
                title: {
                    display: true,
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
        return new Chart($(id), config);
    }


    vinculateLegend(chart1, chart2){
        chart1.options.legend.onClick = function(e, legendItem){
            let index = legendItem.datasetIndex;
            chart1.data.datasets[index].hidden = !chart1.data.datasets[index].hidden;
            chart2.data.datasets[index].hidden = !chart2.data.datasets[index].hidden;
            chart1.update();
            chart2.update();
        }

        chart2.options.legend.onClick = function(e, legendItem){
            let index = legendItem.datasetIndex;
            chart1.data.datasets[index].hidden = !chart1.data.datasets[index].hidden;
            chart2.data.datasets[index].hidden = !chart2.data.datasets[index].hidden;
            chart1.update();
            chart2.update();
        }
    }


    add(chart, values, xAXis) {
        let attrColorName = this.colorNames[chart.config.data.datasets.length % this.colorNames.length];
        let attrColor = this.colors[attrColorName];
        let dataset = {
            label: xAXis,
            borderColor: attrColor,
            backgroundColor: Chart.helpers.color(attrColor).alpha(0.2).rgbString(),
            pointStyle: 'rect',
            pointBackgroundColor: attrColor,
            data: values,
        };

        chart.config.data.datasets.push(dataset);
        chart.update();
    }


    clear(chart) {
        let n = chart.config.data.datasets.length;
        chart.config.data.datasets.splice(0, n);
        chart.update();
    }
}