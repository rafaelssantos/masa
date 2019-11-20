<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">


  <title>Meta Attribute-based Selection Approach (MASA)</title>


  <link rel="stylesheet" href="css/reset.css">
  <link rel="stylesheet" href="css/header.css">
  <link rel="stylesheet" href="css/content.css">

  <!-- Library -->
  <script src="javascript/lib/jquery/jquery-3.4.1.min.js"></script>  
  <script src="javascript/lib/chart-js-2.8.0/Chart.min.js"></script>
  <script src="javascript/lib/chart-js-2.8.0/utils.js"></script>
  <script src="javascript/lib/highcharts/highcharts.js"></script>
  <script src="javascript/lib/highcharts/modules/data.js"></script>
  <script src="javascript/lib/highcharts/modules/parallel-coordinates.js"></script>

  <!--  -->
  <script type="text/javascript" src="javascript/ChartBuilder.js"></script>
  <script type="text/javascript" src="javascript/ChartJSBuilder.js"></script>
  <script type="text/javascript" src="javascript/HighChartsBuilder.js"></script>

  <script type="text/javascript" src="javascript/load.js"></script>


</head>


<body>
  <header>
    <div class='title-container'></div>
    <h1><span class='full-title'>Meta Feature Selection Approach</span><span class='acronym-title'>MFSA</span></h1>
  </header>
  <div class='content'>
    <div class='toolbar-container'>
      <input type="file" id='btnFileChooser' accept='.json'>
      <button id='btnLoad'>Load</button><button id='btnClear'>Clear</button>
    </div>
    <div class='charts-div'>
      <div class='charts-div-top'>
        <div class='radar-div chart-container'>
          <canvas id='radar-canvas'></canvas>
        </div>
        <div class='horizontal-div chart-container'>
          <canvas id='horizontal-canvas'></canvas>
        </div>
      </div>
      <div class='charts-div-bottom'>
        <div id='parallel-coord-div'></div>
      </div>
    </div>

	</div>


  </div>
   

</body>
</html>