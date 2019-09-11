var deadline = 'Jul 29 2019 12:00:00 GMT-0300';

var schedule = [
    ['Sep 11 2019 15:10:00 GMT-0300', 'Sep 11 2019 15:30:00 GMT-0300'], 
    ['Sep 11 2019 12:30:00 GMT-0300', 'Sep 11 2019 12:45:00 GMT-0300'],
    ['Sep 11 2019 12:45:00 GMT-0300', 'Sep 11 2019 13:00:00 GMT-0300'],
    ['Sep 11 2019 13:30:00 GMT-0300', 'Sep 11 2019 14:00:00 GMT-0300'],
    ['Jul 30 2019 17:24:00 GMT-0300', 'Jul 30 2019 17:29:00 GMT-0300'],
    ['Jul 30 2019 17:30:00 GMT-0300', 'Jul 30 2019 17:35:00 GMT-0300'],
    ['Jul 30 2019 17:36:00 GMT-0300', 'Jul 30 2019 17:41:00 GMT-0300'],
    ['Jul 30 2019 17:42:00 GMT-0300', 'Jul 30 2019 17:56:00 GMT-0300']
];

var eventos = ['Desayuno Turno 1', 'Desayuno Turno 2', 'Desayuno Turno 3', 'Almuerzo Turno 1', 'Almuerzo Turno 2', 'Almuerzo Turno 3', 'Evento Espacial', 'Evento Especial'];

var eventoIndex = 0;

var inicioDesayuno1 = Date.parse(schedule[0][0]);
var inicioAlmuerzo1 = Date.parse(schedule[3][0]);

var clockIsRunning = false;

var contEventos = 1;

console.log('nuevo evento ' + contEventos);

var relojPrincipal = document.getElementById('relojPrincipal');
var relojWidget = document.getElementById('widget');
var horarioPrincipal = document.getElementById('horarioPrincipal');
var cajaSegundos = document.getElementById('cajaSegundos');
var ampm = document.getElementById('ampm');
var segundos = document.getElementById('segundos');
var relojFecha = document.getElementById('relojFecha');
var nombreEvento = document.getElementById('nombreEvento');

var fotoLogo = document.getElementById('fotoLogo');
var slide = document.getElementById('slides');



//relojPrincipal.style.visibility = "hidden";
fotoLogo.style.visibility = "hidden";
slide.style.visibility = "hidden";


//console.log(clockIsRunning);

//clockIsRunning = !!clockIsRunning;

//console.log(clockIsRunning);

// if (clockIsRunning) {
//     console.log('consola ok ' + clockIsRunning);

// } else {
//     console.log('consola nok ' + clockIsRunning);
// }

function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime){

  	var clock = document.getElementById(id);

    var cuadroBl = document.getElementById('bl');
    var cuadroBr = document.getElementById('cuadrobr');
    var cuadroTl = document.getElementById('tl');
    var cuadroTr = document.getElementById('tr');

    var min = document.getElementById('minuto');
    console.log(clock);
    console.log(min);

  	//clock.style.display = "block";



  	function updateClock(){
  		var t = getTimeRemaining(endtime);

      //       if (t.minutes == 1) {
      //   clock.innerHTML = '0' + ( t.minutes + 1) + '<br>' + 'min';
      //   nombreEvento.innerHTML = eventos[eventoIndex];
      // } else 

      if (t.minutes < 9){ 
          clock.innerHTML = '0' + ( t.minutes + 1) + '<br>' + 'min';
          cuadroBr.style.background = "green";
          nombreEvento.innerHTML = eventos[eventoIndex];
      } else {
  			clock.innerHTML = (t.minutes + 1) + '<br>' + 'min';
        cuadroBr.style.background = "green";
        nombreEvento.innerHTML = eventos[eventoIndex];
  		}
  		if(t.total<=0){
    		clearInterval(timeinterval);
        clock.innerHTML = (t.minutes) + '<br>' + 'min';
        cuadroBr.style.background = "gray";
        clockIsRunning = !clockIsRunning;
  		}
	  }

	  updateClock(); // run function once at first to avoid delay
	  var timeinterval = setInterval(updateClock,1000);

    function checkEvent(){
      console.log('checkEvent inicio' + clockIsRunning);
       if (!clockIsRunning) {
          clearInterval(primerEventoDetected);
          
          // iterate over each element in the schedule
          for(var i=0; i<schedule.length; i++){
            var startDate = schedule[i][0];
            var endDate = schedule[i][1];

            // put dates in milliseconds for easy comparisons
            var startMs = Date.parse(startDate);
            var endMs = Date.parse(endDate);
            var currentMs = Date.parse(new Date());

            // if current date is between start and end dates, display clock
            if(endMs > currentMs && currentMs >= startMs ){
                clockIsRunning = !clockIsRunning;
                initializeClock('clockdiv', endDate);
                console.log('nuevo evento ' + contEventos);
                contEventos = contEventos + 1;
                cuadroTl.style.display = "block";
                cuadroTr.style.display = "block";
                cuadroBr.style.display = "block";
                cuadroBl.style.display = "block";
                //cuadroTr.style.position = "absolute"; //TODO
                cuadroTr.style.top = "0%"; //TODO
                cuadroTr.style.left = "30%";
                cuadroTr.style.bottom = "70%";
                cuadroTr.style.marginRight = "0%";
                cuadroTr.style.border = "10px solid black";
                cuadroTr.style.margin = "auto";
                horarioPrincipal.style.fontSize = "3em";
                ampm.style.fontSize = "2rem";
                segundos.style.fontSize = "2rem";
                cuadroTr.style.width = "90%";
                relojPrincipal.style.width = "100%";
                relojPrincipal.style.maxWidth = "1000px";
                relojWidget.style.width = "50%";
                relojFecha.style.fontSize = "2.5em";
                nombreEvento.style.display = "block";
                //nombreEvento.value = "eventos[i]";
                eventoIndex = i;
                //nombreEvento.setAttribute("value", eventos[i]);

            } else if(currentMs > (inicioDesayuno1 - 15*60*1000) && currentMs < inicioDesayuno1) {
                cuadroTl.style.display = "none";
                //cuadroTr.style.display = "none";
                cuadroBr.style.display = "none";
                cuadroBl.style.display = "none";
                cuadroTr.style.display = "block"; //TODO
                cuadroTr.style.top = "20%"; //TODO
                cuadroTr.style.left = "0%";
                cuadroTr.style.bottom = "0%";
                cuadroTr.style.marginRight = "-50%";
                cuadroTr.style.border = "0px solid black";
                cuadroTr.style.margin = " 0 auto 0 auto";
                horarioPrincipal.style.fontSize = "48em";
                ampm.style.fontSize = ".5em";
                segundos.style.fontSize = ".5em";
                cuadroTr.style.width = "100%";
                relojPrincipal.style.width = "100%";
                relojPrincipal.style.maxWidth = "3500px";
                relojWidget.style.width = "100%";
                relojFecha.style.fontSize = "6em";
                nombreEvento.style.display = "none";

            } else if(currentMs > (inicioAlmuerzo1 - 15*60*1000) && currentMs < inicioAlmuerzo1) {
                cuadroTl.style.display = "none";
                //cuadroTr.style.display = "none";
                cuadroBr.style.display = "none";
                cuadroBl.style.display = "none";
                cuadroTr.style.display = "block"; //TODO
                cuadroTr.style.top = "20%"; //TODO
                cuadroTr.style.left = "0%";
                cuadroTr.style.bottom = "0%";
                cuadroTr.style.marginRight = "-50%";
                cuadroTr.style.border = "0px solid black";
                cuadroTr.style.margin = " 0 auto 0 auto";
                horarioPrincipal.style.fontSize = "48em";
                ampm.style.fontSize = ".5em";
                segundos.style.fontSize = ".5em";
                cuadroTr.style.width = "100%";
                relojPrincipal.style.width = "100%";
                relojPrincipal.style.maxWidth = "3500px";
                relojWidget.style.width = "100%";
                relojFecha.style.fontSize = "6em";
                nombreEvento.style.display = "none";
            } else {
                cuadroTl.style.display = "none";
                cuadroTr.style.display = "none";
                cuadroBr.style.display = "none";
                cuadroBl.style.display = "block";
                cuadroBl.style.border = "0px solid black";
            }

            console.log('ahora:' + currentMs + 'start-15min:' + (startMs - 15*60*1000)); 
          }  
      } 
    }

    var eventinterval = setInterval(checkEvent,1000);

}

function primerEvento(){
      console.log('Primer control Evento ' + clockIsRunning);
    // iterate over each element in the schedule

    for(var i=0; i<schedule.length; i++){

      //var clock = document.getElementById(id);

      var cuadroBl = document.getElementById('bl');
      var cuadroBr = document.getElementById('cuadrobr');
      var cuadroTl = document.getElementById('tl');
      var cuadroTr = document.getElementById('tr');

      var min = document.getElementById('minuto');

      var startDate = schedule[i][0];
      var endDate = schedule[i][1];
      console.log(startDate, endDate);
      // put dates in milliseconds for easy comparisons
      var startMs = Date.parse(startDate);
      var endMs = Date.parse(endDate);
      var currentMs = Date.parse(new Date());
      console.log(startMs, currentMs, endMs);

      // if current date is between start and end dates, display clock
      if(endMs > currentMs && currentMs >= startMs ){
          //clockIsRunning = !clockIsRunning;
          initializeClock('clockdiv', endDate);
          console.log('nuevo evento ' + contEventos);
          contEventos = contEventos + 1;
          eventoIndex = i;
          
      } else if(currentMs > (inicioDesayuno1 - 15*60*1000) && currentMs < inicioDesayuno1) {
          cuadroTl.style.display = "none";
          //cuadroTr.style.display = "none";
          cuadroBr.style.display = "none";
          cuadroBl.style.display = "none";
          cuadroTr.style.display = "block"; //TODO
          cuadroTr.style.top = "20%"; //TODO
          cuadroTr.style.left = "0%";
          cuadroTr.style.bottom = "0%";
          cuadroTr.style.marginRight = "-50%";
          cuadroTr.style.border = "0px solid black";
          cuadroTr.style.margin = " 0 auto 0 auto";
          horarioPrincipal.style.fontSize = "48em";
          ampm.style.fontSize = ".5em";
          segundos.style.fontSize = ".5em";
          cuadroTr.style.width = "100%";
          relojPrincipal.style.width = "100%";
          relojPrincipal.style.maxWidth = "3500px";
          relojWidget.style.width = "100%";
          relojFecha.style.fontSize = "6em";
          nombreEvento.style.display = "none";

      } else if(currentMs > (inicioAlmuerzo1 - 15*60*1000) && currentMs < inicioAlmuerzo1) {
          cuadroTl.style.display = "none";
          //cuadroTr.style.display = "none";
          cuadroBr.style.display = "none";
          cuadroBl.style.display = "none";
          cuadroTr.style.display = "block"; //TODO
          cuadroTr.style.top = "20%"; //TODO
          cuadroTr.style.left = "0%";
          cuadroTr.style.bottom = "0%";
          cuadroTr.style.marginRight = "-50%";
          cuadroTr.style.border = "0px solid black";
          cuadroTr.style.margin = " 0 auto 0 auto";
          horarioPrincipal.style.fontSize = "48em";
          ampm.style.fontSize = ".5em";
          segundos.style.fontSize = ".5em";
          cuadroTr.style.width = "100%";
          relojPrincipal.style.width = "100%";
          relojPrincipal.style.maxWidth = "3500px";
          relojWidget.style.width = "100%";
          relojFecha.style.fontSize = "6em";
          nombreEvento.style.display = "none";
      } else {
          cuadroTl.style.display = "none";
          cuadroTr.style.display = "none";
          cuadroBr.style.display = "none";
          cuadroBl.style.display = "block";
          cuadroBl.style.border = "0px solid black";

      }
    }  

}

var primerEventoDetected = setInterval(primerEvento,1000);



