$(document).ready(function(){

   $('#btnFileChooser').change(function (e) { 
      window.errorMessage = null;
      
      var reader = new FileReader();
   
      reader.onload = function(event) {
         if(window.chartManager == undefined){
            window.chartManager = new ChartManager();
         }

         window.chartData = JSON.parse(event.target.result);
         window.radarChart = window.chartManager.buildRadarChart('All scores', '#radar-canvas', window.chartData.attributeLabels);
      };
      
      reader.onerror = function(event) {
         window.errorMessage  = event.target.error.message;
      };
      
      reader.readAsText(this.files[0]);
   });

   
   $('#btnUpdate').click(function (e) { 
      if(window.chartManager != undefined && window.radarChart != undefined){
         window.chartManager.removeAll(window.radarChart);

         for(var i = 0; i < window.chartData.data.length; i++){
            window.chartManager.addDataset(window.radarChart, window.chartData, i);
         }
      }
   });


   $('#btnClear').click(function (e) { 
      if(window.chartManager != undefined && window.radarChart != undefined){
        window.chartManager.removeAll(window.radarChart);
      }
   });
});