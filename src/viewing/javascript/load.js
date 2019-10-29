function initRadarChart(dataset){
   console.log(dataset);

   var color = Chart.helpers.colors;
   var config = {
      type: 'radar',
      data: {
         labels: dataset.attributeLabels,
         datasets: [{
            label: dataset.scoreLabels[0],
            // backgroundColor: window.chartColors.blue,
            // backgroundColor: color(window.chartColors.red).alpha(0.2).rgbString(),
            borderColor: window.chartColors.red,
            pointBackgroundColor: window.chartColors.red,
            data: dataset.data[0]
         }]
      },
      options: {
         legend: {
            position: 'top',
         },
         title: {
            display: true,
            text: 'All scores'
         },
         scale: {
            ticks: {
               beginAtZero: true
            }
         }
      }
   };
   window.radarChar =  new Chart($('#canvas'), config);
}




$(document).ready(function(){   
   $('#btnFileChooser').change(function (e) { 
      window.errorMessage = null;
      
      var reader = new FileReader();
   


      reader.onload = function(event) {
         var data = JSON.parse(event.target.result);
         initRadarChart(data);
      };
      


      reader.onerror = function(event) {
         window.errorMessage  = event.target.error.message;
      };
      


      reader.readAsText(this.files[0]);
   }); 
});