$(document).ready(function(){
   var data = null;
   
   var radarChart = null;
   var horizontalChart = null;
   var parCoord = null;

   let chartJSBuilder = new ChartJSBuilder();
   let d3VisBuilder = new D3VisBuilder();



   $('#btnFileChooser').change(function (e) {   
      let fileReader = new FileReader();

      fileReader.onload = function(event) {
         data = JSON.parse(event.target.result);

         radarChart = chartJSBuilder.buildRadar('#radar-canvas', 'Scores', data.yAxes);
         horizontalChart = chartJSBuilder.buildHorizontalBars('#horizontal-canvas', 'Scores', data.yAxes);
         
         chartJSBuilder.vinculateLegend(radarChart, horizontalChart);
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
      
      if(data != null){
         parCoord = d3VisBuilder.buildParCoord("#par-coord-div", data.json);
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