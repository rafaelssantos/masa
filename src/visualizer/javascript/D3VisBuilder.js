class D3VisBuilder extends ChartBuilder{
    constructor(){
        super();
    }

    buildParCoord(id){
        var chart = d3.parcoords()(id)
            .composite("darken")
            .alpha(0.5)
            .mode("queue")
            
        return chart;
    }


    updateData(chart, data){
        chart.data(data)
        // .hideAxis(0)
        .render()
        .createAxes()
        .brushMode("1D-axes")
        .reorderable();
    }
} 