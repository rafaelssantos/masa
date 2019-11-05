class ChartManager{
    constructor(){
        this.initSettings();
        this.initColors();
    }

    initColors(){
        this.colors = {
            red: 'rgb(255, 99, 132)',
            orange: 'rgb(255, 159, 64)',
            darkOrange: 'rgb(255,140,0)',
            yellow: 'rgb(255, 205, 86)',
            green: 'rgb(75, 192, 192)',
            blue: 'rgb(54, 162, 235)',
            purple: 'rgb(153, 102, 255)',
            grey: 'rgb(201, 203, 207)',
            brown: 'rgb(165,42,42)',
            lightGreen: 'rgb(144,238,144)',
            cyan: 'rgb(0,255,255)',
            darkBlue: 'rgb(0,0,139)'
        };

        this.colorNames = Object.keys(this.colors);
    }


    initSettings(){
        Chart.defaults.global.defaultFontSize = 14;
    }

    get colors(){
        return this._colors;
    }


    set colors(values){
        this._colors = values;
    }



    get colors(){
        return this._colors;
    }


    set colors(values){
        this._colors = values;
    }
    



    buildHorizontalChart(title, elementId, scoreLabels){
        var config = {
            type: 'horizontalBar',
            data: {
                labels: scoreLabels
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
      
        return new Chart($(elementId), config);
    }



    buildRadarChart(title, elementId, scoreLabels, otherChart){
        var config = {
            type: 'radar',
            data: {
                labels: scoreLabels
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
        return new Chart($(elementId), config);
    }


    vinculateLegends(chart1, chart2){
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


    addDataset(chart, attributeData, index) {
        var attrColorName = this.colorNames[chart.config.data.datasets.length % this.colorNames.length];
        var attrColor = this.colors[attrColorName];
        var dataset = {
            label: attributeData.attributeLabels[index],
            borderColor: attrColor,
            backgroundColor: Chart.helpers.color(attrColor).alpha(0.2).rgbString(),
            pointStyle: 'rect',
            pointBackgroundColor: attrColor,
            data: attributeData.data[index],
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