// var deadline = 'Jul 29 2019 12:00:00 GMT-0300';



// var inicioEvento0 = moment(eventosDb[0].begin).format('HH:mm:ss');
// var finEvento0 = moment(eventosDb[0].begin).add(eventosDb[0].duracion, 'minutes').format('HH:mm:ss');

var fechaHoy = moment().format('MMM DD YYYY');

// console.log(fechaHoy, inicioEvento0+" GMT-0300"+"\n", fechaHoy, finEvento0+" GMT-0300");



var schedule = [
    ['Sep 12 2019 14:10:00 GMT-0300', 'Sep 12 2019 14:45:00 GMT-0300'], 
    ['Sep 12 2019 14:45:00 GMT-0300', 'Sep 12 2019 15:00:00 GMT-0300'],
    ['Sep 12 2019 15:00:00 GMT-0300', 'Sep 12 2019 15:15:00 GMT-0300'],
    ['Sep 12 2019 15:27:00 GMT-0300', 'Sep 12 2019 16:15:00 GMT-0300'],
    ['Sep 12 2019 16:15:00 GMT-0300', 'Jul 12 2019 16:45:00 GMT-0300'],
    ['Sep 12 2019 16:45:00 GMT-0300', 'Jul 12 2019 17:15:00 GMT-0300'],
    ['Jul 30 2019 17:36:00 GMT-0300', 'Jul 30 2019 17:41:00 GMT-0300'],
    ['Jul 30 2019 17:42:00 GMT-0300', 'Jul 30 2019 17:56:00 GMT-0300']
];

// schedule[0][0] = fechaHoy+" "+inicioEvento0+" GMT-0300";
// schedule[0][1] = fechaHoy+" "+finEvento0+" GMT-0300";



var eventos = [eventosDb[0].nombre, eventosDb[1].nombre, eventosDb[2].nombre, eventosDb[3].nombre, eventosDb[4].nombre, eventosDb[5].nombre, eventosDb[6].nombre, eventosDb[7].nombre];

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
//fotoLogo.style.visibility = "hidden";
//slide.style.visibility = "hidden";


//console.log(clockIsRunning);

//clockIsRunning = !!clockIsRunning;

//console.log(clockIsRunning);

// if (clockIsRunning) {
//     console.log('consola ok ' + clockIsRunning);

// } else {
//     console.log('consola nok ' + clockIsRunning);
// }
// 

function actualizar(){location.reload(true);}
//Función para actualizar cada 4 segundos(4000 milisegundos)
// setInterval("actualizar()",10000);

function actualizarSchedule() {

  // var eventosAjax;

  // $.ajax({
  //   type:"POST",
  //   data
  // });

  for (var i = 0; i <= schedule.length - 1; i++) {
    var inicioEvento0 = moment(eventosDb[i].begin).format('HH:mm:ss');
    var finEvento0 = moment(eventosDb[i].begin).add(eventosDb[i].duracion, 'minutes').format('HH:mm:ss');
    schedule[i][0] = fechaHoy+" "+inicioEvento0+" GMT-0300";
    schedule[i][1] = fechaHoy+" "+finEvento0+" GMT-0300";
    console.log(schedule[i][0], schedule[i][1]);
    inicioDesayuno1 = Date.parse(schedule[0][0]);
    inicioAlmuerzo1 = Date.parse(schedule[3][0]);
  }
}

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

    var min = document.getElementById('minutos');
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
        actualizar();
  		}
	  }

	  if(!clockIsRunning){updateClock();} // run function once at first to avoid delay

	  var timeinterval = setInterval(updateClock,1000);

    function checkEvent(){
        console.log('checkEvent inicio: ' + clockIsRunning);
        actualizarSchedule();
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
                        cuadroBl.style.border = "solid black";
                        cuadroBl.style.borderWidth = "0 10px 0 0";
                        cuadroBl.style.background = "#FCFEFF"; //blue
                        cuadroBl.style.position = "absolute";
                        cuadroBl.style.left = "0";
                        cuadroBl.style.transform = "translateX(0%)";
                        cuadroBl.style.top = "30%";
                        cuadroBl.style.transform = "translateY(0%)";  
                        //cuadroTr.style.position = "absolute"; //TODO
                        cuadroTr.style.top = "0%"; //TODO
                        cuadroTr.style.left = "30%";
                        cuadroTr.style.bottom = "70%";
                        cuadroTr.style.marginRight = "0%";
                        cuadroTr.style.border = "solid black";
                        cuadroTr.style.borderWidth = "0 0 10px 0";
                        cuadroTr.style.margin = "auto";
                        horarioPrincipal.style.fontSize = "4em";
                        ampm.style.fontSize = "2rem";
                        segundos.style.fontSize = "2rem";
                        cuadroTr.style.width = "70%";
                        relojPrincipal.style.width = "100%";
                        relojPrincipal.style.maxWidth = "1000px";
                        relojWidget.style.width = "50%";
                        relojFecha.style.fontSize = "2.5em";
                        nombreEvento.style.display = "block";
                        nombreEvento.style.fontSize = "5em";
                        //nombreEvento.value = "eventos[i]";
                        eventoIndex = i;
                        //nombreEvento.setAttribute("value", eventos[i]);
                        break;

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
                        break;

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
                        break;
                    } else {
                        cuadroTl.style.display = "none";
                        cuadroTr.style.display = "none";
                        cuadroBr.style.display = "none";
                        cuadroBl.style.display = "block";
                        cuadroBl.style.border = "0px solid black";
                        cuadroBl.style.background = "#FCFEFF"; //blue
                        cuadroBl.style.position = "relative";
                        cuadroBl.style.left = "0%";
                        cuadroBl.style.transform = "translateX(-50%)";
                        cuadroBl.style.top = "50%";
                        cuadroBl.style.transform = "translateY(-50%)";    
                    }

                    console.log('ahora:' + currentMs + 'start-15min:' + (startMs - 15*60*1000)); 
                } //endFor 
            } //endIf
    } //endFunction checkEvent()
    var eventinterval = setInterval(checkEvent,1000);
}//endFunction initializeClock()


function primerEvento(){
      console.log('Primer control Evento ' + clockIsRunning);
    // iterate over each element in the schedule
    //actualizar();
    actualizarSchedule();

    for(var i=0; i<=schedule.length-1; i++){

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
          cuadroTl.style.display = "block";
          cuadroTr.style.display = "block";
          cuadroBr.style.display = "block";
          cuadroBl.style.display = "block";
          cuadroBl.style.border = "solid black";
          cuadroBl.style.borderWidth = "0 10px 0 0";
          cuadroBl.style.background = "#FCFEFF"; //blue
          cuadroBl.style.position = "absolute";
          cuadroBl.style.left = "0";
          cuadroBl.style.transform = "translateX(0%)";
          cuadroBl.style.top = "30%";
          cuadroBl.style.transform = "translateY(0%)";  
          initializeClock('clockdiv', endDate);
          console.log('nuevo evento ' + contEventos);
          contEventos = contEventos + 1;
          eventoIndex = i;
          break;
          
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
          break;

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
          break;
      } else {
          cuadroTl.style.display = "none";
          cuadroTr.style.display = "none";
          cuadroBr.style.display = "none";
          cuadroBl.style.display = "block";
          cuadroBl.style.border = "0px solid black";
          cuadroBl.style.background = "#FCFEFF"; //blue
          cuadroBl.style.position = "relative";
          cuadroBl.style.left = "0%";
          cuadroBl.style.transform = "translateX(-50%)";
          cuadroBl.style.top = "50%";
          cuadroBl.style.transform = "translateY(-50%)";          

      }
    }  

}

var primerEventoDetected = setInterval(primerEvento,1000);



