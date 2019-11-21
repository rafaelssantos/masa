$(document).ready(function(){
   var data = null;
   
   var radarChart = null;
   var horizontalChart = null;
   var parallelCoordChart = null;

   let chartJSBuilder = new ChartJSBuilder();


   $('#btnFileChooser').change(function (e) {   
      let fileReader = new FileReader();

      fileReader.onload = function(event) {
         data = JSON.parse(event.target.result);

         radarChart = chartJSBuilder.buildRadar('Scores', '#radar-canvas', data.yAxes);
         horizontalChart = chartJSBuilder.buildHorizontalBar('Scores', '#horizontal-canvas', data.yAxes);
         
         chartJSBuilder.bindLegends(radarChart, horizontalChart);
      };
      

      fileReader.readAsText(this.files[0]);
   });


   
   $('#btnLoad').click(function (e) {
      if(radarChart != null){
         chartJSBuilder.clear(radarChart);

         for(let i = 0; i < data.xAxes.length; i++){
            chartJSBuilder.add(radarChart, data.values[i], data.xAxes[i]);
         }
      }


      if(horizontalChart != null){
         chartJSBuilder.clear(horizontalChart);

         for(let i = 0; i < data.xAxes.length; i++){
            chartJSBuilder.add(horizontalChart, data.values[i], data.xAxes[i]);
         }
      }    
   });


   $('#btnClear').click(function (e) {
      if(radarChart != null){
         chartJSBuilder.clear(radarChart);
      }
      if(horizontalChart != null){
         chartJSBuilder.clear(horizontalChart);
      }
   });
});