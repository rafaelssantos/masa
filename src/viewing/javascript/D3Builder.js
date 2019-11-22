class D3Builder extends ChartBuilder{
    constructor(){
        super();
    }

    buildParallelCord(id, title, yAxes){
        var chart = d3.parcoords()(id)
            .data(data)
            .render()
            .createAxes();
            
        return chart;
    }
} 