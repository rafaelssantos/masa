$(document).ready(function(){

   $('#btnFileChooser').change(function (e) { 
      window.chartJSErrorMessage = null;
      
      var reader = new FileReader();
   
      reader.onload = function(event) {
         if(window.chartJSBuilder == undefined){
            window.chartJSBuilder = new ChartJSBuilder();
         }
         if(window.highChartsBuilder == undefined){
            window.highChartsBuilder = new HighChartsBuilder();
         }

         window.chartData = JSON.parse(event.target.result);
         window.radarChart = window.chartJSBuilder.buildRadar('Scores', '#radar-canvas', window.chartData.scoreLabels);
         window.horizontalChart = window.chartJSBuilder.buildHorizontalBar('Scores', '#horizontal-canvas', window.chartData.scoreLabels);
         window.chartJSBuilder.bindLegends(window.radarChart, window.horizontalChart);
      };
      
      reader.onerror = function(event) {
         window.chartJSErrorMessage  = event.target.error.message;
      };
      
      reader.readAsText(this.files[0]);
   });

   
   $('#btnLoad').click(function (e) { 
      if(window.chartJSBuilder != undefined){
         if(window.radarChart != undefined){
            window.chartJSBuilder.clear(window.radarChart);

            for(var i = 0; i < window.chartData.data.length; i++){
               window.chartJSBuilder.add(window.radarChart, window.chartData, i);
            }
         }
         if(window.horizontalChart != undefined){
            window.chartJSBuilder.clear(window.horizontalChart);

            for(var i = 0; i < window.chartData.data.length; i++){
               window.chartJSBuilder.add(window.horizontalChart, window.chartData, i);
               
            }
         }
      }

      if(window.highChartsBuilder != undefined){
         window.parallelCoord = window.highChartsBuilder.buildParallelCoord('Scores', '#parallel-coord-div', window.chartData.scoreLabels);
      }
    
   });


   $('#btnClear').click(function (e) { 
      if(window.chartJSBuilder != undefined){
         if(window.radarChart != undefined){
            window.chartJSBuilder.clear(window.radarChart);
         }
         if(window.horizontalChart != undefined){
            window.chartJSBuilder.clear(window.horizontalChart);
         }
      }
   });
});