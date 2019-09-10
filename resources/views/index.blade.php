<!DOCTYPE html>

<html lang="en">
	<head>
	 	 <meta charset="utf-8">

	 	 <title>RelojCtrl</title>
	 	 <meta name="description" content="The HTML5 Herald">
	  	<meta name="author" content="SitePoint">

	  	<link rel="stylesheet" href="css/styles.css?v=1.0">

	  	<script src="http://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

	</head>

	<body>

	  	<div class="tl clear" id="tl">
 	  		<img src="img/logo-sinmargen.jpg" class="logoMy">
                 	<!--?php
					$PHPvariable = "<script> document.write(schedule) </script>";
					echo "PHPvariable = ".$PHPvariable;
					?--> 
	  	</div>
		<div class="tr clear" id="tr">
			<div class="contenedor">
				<div class="widget">
					<div class="fecha">
				    	<p id="diaSemana" class="diaSemana"></p>
				      	<p id="dia" class="dia"></p>
				      	<p>de</p>
				      	<p id="mes" class="mes"></p>
				      	<p>del</p>
				      	<p id="anio" class="anio"></p>
				    </div>
				    <div class="reloj">
				      	<p id="horas" class="horas"></p>
				      	<p>:</p>
				      	<p id="minutos" class="minutos"></p>
				      	<p>:</p>
				      	<div class="cajaSegundos">
				        	<p id="ampm" class="ampm"></p>
				        	<p id="segundos" class="segundos"></p>
				      	</div>
				    </div>
				</div>
			</div>
		</div>
		<div class="bl clear" id="bl">

			<!-- Slideshow container -->
			<div class="slideshow-container">

			  <div class="mySlides fade">

			    <img src="img/img1.png" style="width:100%; margin-top: 2%;">

			  </div>

			  <div class="mySlides fade">

			    <img src="img/img4.png" style="width:100%; margin-top: 2%;">

			  </div>

			  <div class="mySlides fade">

			    <img src="img/img3.png" style="width:100%; margin-top: 2%;">

			  </div>

  			  <div class="mySlides fade">

			    <img src="img/paisaje01.jpg" style="width:100%; margin-top: 2%;">

			  </div>

  			  <div class="mySlides fade">

			    <img src="img/paisaje02.jpg" style="width:100%; margin-top: 2%;">

			  </div>

			</div>
		</div>
		<div id="cuadrobr" class="br clear">
			<div id="clockdiv">
			    <span id="minuto" class="minutes">0</span>
			    <span class="smalltext"> min</span>
			</div>
		</div>
{{-- 		<div class="widget" id="relojGrande">
			<div class="reloj">
		      	<p id="horas" class="horas"></p>
		      	<p>:</p>
		      	<p id="minutos" class="minutos"></p>
		      	<p>:</p>
		      	<div class="cajaSegundos">
		        	<p id="ampm" class="ampm"></p>
		        	<p id="segundos" class="segundos"></p>
		      	</div>
		    </div>
		</div> --}}
			

		<script src="js/scripts.js"></script>
		<script src="js/countDown.js"></script>
		<script src="js/slide.js"></script>
	</body>
	
</html>