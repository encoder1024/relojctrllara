var deadline = 'Jul 29 2019 12:00:00 GMT-0300';

var schedule = [
    ['Aug 02 2019 12:00:00 GMT-0300', 'Aug 02 2019 12:03:00 GMT-0300'],
    ['Jul 31 2019 18:39:00 GMT-0300', 'Jul 31 2019 18:43:00 GMT-0300'],
    ['Jul 30 2019 17:12:00 GMT-0300', 'Jul 30 2019 17:17:00 GMT-0300'],
    ['Jul 30 2019 17:18:00 GMT-0300', 'Jul 30 2019 17:23:00 GMT-0300'],
    ['Jul 30 2019 17:24:00 GMT-0300', 'Jul 30 2019 17:29:00 GMT-0300'],
    ['Jul 30 2019 17:30:00 GMT-0300', 'Jul 30 2019 17:35:00 GMT-0300'],
    ['Jul 30 2019 17:36:00 GMT-0300', 'Jul 30 2019 17:41:00 GMT-0300'],
    ['Jul 30 2019 17:42:00 GMT-0300', 'Jul 30 2019 17:56:00 GMT-0300']
];

var clockIsRunning = false;

var contEventos = 1;

// console.log(clockIsRunning);

// clockIsRunning = !!clockIsRunning;

// console.log(clockIsRunning);

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
    var cuadroBr = document.getElementById('cuadrobr');
    var min = document.getElementById('minuto');
    console.log(clock);
    console.log(min);

  	//clock.style.display = "block";



  	function updateClock(){
  		var t = getTimeRemaining(endtime);

  		if (t.minutes == 1) {
			  clock.innerHTML = (t.minutes + 1) + '<br>' + 'min';
        cuadroBr.style.background = "green";

  		} else {
  			clock.innerHTML = (t.minutes + 1) + '<br>' + 'min';
        cuadroBr.style.background = "green";
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
      console.log('checkEvent ' + clockIsRunning);
      if (!clockIsRunning) {
          
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
            }
          }  
      } 
    }

    var eventinterval = setInterval(checkEvent,1000);

}

//console.log('Primer control Evento ' + clockIsRunning);
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
  }
}  



