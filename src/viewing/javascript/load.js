$(document).ready(function(){

   $('#btnFileChooser').change(function (e) { 
      window.errorMessage = null;
      
      var reader = new FileReader();
   
      reader.onload = function(event) {
         if(window.chartManager == undefined){
            window.chartManager = new ChartManager();
         }

         window.chartData = JSON.parse(event.target.result);
         window.chart = window.chartManager.buildRadarChart('All scores', '#canvas', window.chartData.attributeLabels);
      };
      
      reader.onerror = function(event) {
         window.errorMessage  = event.target.error.message;
      };
      
      reader.readAsText(this.files[0]);
   });

   
   $('#btnRun').click(function (e) { 
      if(window.chartManager != undefined && window.chart != undefined){
         window.chartManager.removeAll(window.chart);

         for(var i = 0; i < window.chartData.data.length; i++){
            window.chartManager.addDataset(window.chart, window.chartData, i);
         }
      }
   });


   $('#btnClear').click(function (e) { 
      if(window.chartManager != undefined && window.chart != undefined){
        window.chartManager.removeAll(window.chart);
      }
   });
});