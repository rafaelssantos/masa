
function load(event){
   window.fileData = event.target.result;
}



function error(event){
   if(event.target.error.name == "NotReadableError") {
      window.loadError = true;
   }

}




$(document).ready(function(){
   window.fileData = null;

   $('#csvFileChooser').change(function (e) { 
      window.loadError = false;

      var fileReader = new FileReader();
      fileReader.onload = load;
      fileReader.onerror = error;
      fileReader.readAsText(this.files[0]);
   }); 
});