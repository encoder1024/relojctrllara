<!DOCTYPE html>

<html lang="en">
	<head>
	 	<meta charset="utf-8">

 		<title>RelojCtrl</title>
	 	<meta name="description" content="The HTML5 Herald">
  		<meta name="author" content="SitePoint">
		<!--META HTTP-EQUIV="REFRESH" CONTENT="5;URL=http://relojctrllara.test"-->
	  	<link rel="stylesheet" href="css/styles.css?">

	  	<script src="http://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

	</head>

	<body>
		<div class="main" id="main">

		  	<div class="tl clear" id="tl">
	 	  		<!--img src="img/logo-sinmargen.jpg" class="logoMy" id="fotoLogo"-->
	                 	<!--?php
						$PHPvariable = "<script> document.write(schedule) </script>";
						echo "PHPvariable = ".$PHPvariable;
						?--> 
		  	</div>
			<div class="tr clear" id="tr">
				<div class="contenedor" id="relojPrincipal">
					<div class="widget" id="widget">
						<div class="fecha" id="relojFecha">
					    	<p id="diaSemana" class="diaSemana"></p>
					      	<p id="dia" class="dia"></p>
					      	<p>de</p>
					      	<p id="mes" class="mes"></p>
					      	<p>del</p>
					      	<p id="anio" class="anio"></p>
					    </div>
					    <div class="reloj" id="horarioPrincipal">
					      	<p id="horas" class="horas"></p>
					      	<p>:</p>
					      	<p id="minutos" class="minutos"></p>
					      	<p>:</p>
					      	<div class="cajaSegundos" id="cajaSegundos">
					        	<p id="ampm" class="ampm"></p>
					        	<p id="segundos" class="segundos"></p>
					      	</div>
					    </div>
					    <span class="reloj" id="nombreEvento">Nombre del Evento </span>
					</div>

				</div>
			</div>
			<div class="bl clear" id="bl">

				<!-- Slideshow container -->
				<!--div class="slideshow-container" id="slides">

				  <div class="mySlides fade">

				    <img src="img/slide00.jpg" style="width:100%; margin-top: 2%;">

				  </div>

				  <div class="mySlides fade">

				    <img src="img/slide01.jpg" style="width:100%; margin-top: 2%;">

				  </div>

				  <div class="mySlides fade">

				    <img src="img/slide02.jpg" style="width:100%; margin-top: 2%;">

				  </div>

	  			  <div class="mySlides fade">

				    <img src="img/slide03.jpg" style="width:100%; margin-top: 2%;">

				  </div>

	  			  <div class="mySlides fade">

				    <img src="img/slide04.jpg" style="width:100%; margin-top: 2%;">

				  </div>

				</div-->
			</div>
			<div id="cuadrobr" class="br">
				<div id="clockdiv">
				    <span id="minuto" class="minutes">0</span>
				    <span class="smalltext"> min</span>

				</div>
			</div>

		</div>
 		<!--div class="widget" id="relojGrande">
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
		</div-->
			
		<script type="text/javascript"> //con este script traigo la variable con los eventos de la DB desde PHP(web.php) al scope del JavaScript 
		    var eventosDb = {!! json_encode($eventosDb->toArray()) !!};
		    console.log(eventosDb);
		</script>
		<script type="text/javascript" src="js/moment.js"></script>
		<script src="js/scripts.js"></script>
		<script src="js/countDown.js"></script>
		<script src="js/slide.js"></script>

	</body>
	
</html>