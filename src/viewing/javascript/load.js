$(document).ready(function(){   
   window.data = null;
   window.errorMessage = null;

   $('#btnFileChooser').change(function (e) { 
      window.data = null;
      window.errorMessage = null;
      
      var reader = new FileReader();

      reader.onload = function(event) {
         window.data = JSON.parse(event.target.result);
         console.log(window.data);
      };
      
      reader.onerror = function(event) {
         window.errorMessage  = event.target.error.message;
      };
      
      reader.readAsText(this.files[0]);
   }); 
});