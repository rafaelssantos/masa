class D3VisBuilder extends ChartBuilder{
    constructor(){
        super();
    }

    buildParCoord(id, data){
        var chart = d3.parcoords()(id)
            .data(data)
            // .hideAxis(0)
            .render()
            .createAxes()
            .composite("darken")
            .alpha(0.5)
            .mode("queue")
            .brushMode("1D-axes")
            .reorderable();
            
        return chart;
    }
} 