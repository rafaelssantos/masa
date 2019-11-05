$(document).ready(function(){

   $('#btnFileChooser').change(function (e) { 
      window.errorMessage = null;
      
      var reader = new FileReader();
   
      reader.onload = function(event) {
         if(window.chartManager == undefined){
            window.chartManager = new ChartManager();
         }

         window.chartData = JSON.parse(event.target.result);
         window.radarChart = window.chartManager.buildRadarChart('All scores', '#radar-canvas', window.chartData.scoreLabels);
         window.horizontalChart = window.chartManager.buildHorizontalChart('#0', '#horizontal-canvas', window.chartData.scoreLabels);
         window.chartManager.vinculateLegends(window.radarChart, window.horizontalChart);
      };
      
      reader.onerror = function(event) {
         window.errorMessage  = event.target.error.message;
      };
      
      reader.readAsText(this.files[0]);
   });

   
   $('#btnUpdate').click(function (e) { 
      if(window.chartManager != undefined){
         if(window.radarChart != undefined){
            window.chartManager.removeAll(window.radarChart);

            for(var i = 0; i < window.chartData.data.length; i++){
               window.chartManager.addDataset(window.radarChart, window.chartData, i);
               
            }
         }
         if(window.horizontalChart != undefined){
            window.chartManager.removeAll(window.horizontalChart);

            for(var i = 0; i < window.chartData.data.length; i++){
               window.chartManager.addDataset(window.horizontalChart, window.chartData, i);
               
            }
         }
      }
   });


   $('#btnClear').click(function (e) { 
      if(window.chartManager != undefined){
         if(window.radarChart != undefined){
            window.chartManager.removeAll(window.radarChart);
         }
         if(window.horizontalChart != undefined){
            window.chartManager.removeAll(window.horizontalChart);
         }
      }
   });
});