var checkbox = document.querySelector("input[id=bloq-all]");
var el = document.getElementById('tabla');
var grupoCb = el.getElementsByTagName('grupo-cb');

checkbox.addEventListener( 'change', function() {
    if(this.checked) {
        // Checkbox is checked..
        console.log('consola: chequeada');
        for (var i = grupoCb.length - 1; i >= 0; i--) {
         grupo[i].checked = true;
        }
    } else {
        // Checkbox is not checked..
        console.log('consola: no chequeada');
    }
});

// method definitions
var mycheckbox,
    find_parent;
 
/**
 * Method toggles or clears checkboxes in table.
 * @param {HTMLElement} btn Clicked button (button should be inside table).
 * @param {String} type Type defines toggle or clear checkboxes.
 */
mycheckbox = function (btn, type) {
    var tbl = find_parent('TABLE', btn),        // parent table
        el = tbl.getElementsByTagName('input'), // input elements 
        i;                                      // loop variable
    // loop through all collected input elements in table
    for (i = 0; i < el.length; i++) {
        // if input element is checkbox
        if (el[i].type === 'checkbox') {
            // toggle or clear checkbox state
            if (el[i].checked || type === 'clear') {
                el[i].checked = false;
                var checkbox = document.querySelector("input[id=bloq-all]");
				checkbox.checked = false;
            }
            else {
                el[i].checked = true;
                var checkbox = document.querySelector("input[id=bloq-all]");
    			checkbox.checked = true;
            }
        }
    }

};
 
/**
 * Method returns a reference of the required parent element.
 * @param {String} tag_name Tag name of parent element.
 * @param {HTMLElement} el Start position to search.
 * @return {HTMLElement} Returns reference of the found parent element.
 */
find_parent = function (tag_name, el) {
    // loop up until parent element is found
    while (el && el.nodeName !== tag_name) {
        el = el.parentNode;
    }
    // return found element
    return el;
};

buscarEvento = function(link, evento) {
	console.log(link); 
	console.log(evento);

	var el = document.getElementById('nombre-evento');

	console.log(el);

	el.setAttribute("value", evento.nombre);

	if (evento.lunes == 1) {
        var checkbox = document.querySelector("input[id=dia-lunes]");
		checkbox.checked = true;
	} else {
        var checkbox = document.querySelector("input[id=dia-lunes]");
		checkbox.checked = false;		
	}

	if (evento.martes == 1) {
        var checkbox = document.querySelector("input[id=dia-martes]");
		checkbox.checked = true;
	} else {
        var checkbox = document.querySelector("input[id=dia-martes]");
		checkbox.checked = false;		
	}

	if (evento.miercoles == 1) {
        var checkbox = document.querySelector("input[id=dia-miercoles]");
		checkbox.checked = true;
	} else {
        var checkbox = document.querySelector("input[id=dia-miercoles]");
		checkbox.checked = false;		
	}

	if (evento.jueves == 1) {
        var checkbox = document.querySelector("input[id=dia-jueves]");
		checkbox.checked = true;
	} else {
        var checkbox = document.querySelector("input[id=dia-jueves]");
		checkbox.checked = false;		
	}

	if (evento.viernes == 1) {
        var checkbox = document.querySelector("input[id=dia-viernes]");
		checkbox.checked = true;
	} else {
        var checkbox = document.querySelector("input[id=dia-viernes]");
		checkbox.checked = false;		
	}

	if (evento.sabado == 1) {
        var checkbox = document.querySelector("input[id=dia-sabado]");
		checkbox.checked = true;
	} else {
        var checkbox = document.querySelector("input[id=dia-sabado]");
		checkbox.checked = false;		
	}

	if (evento.domingo == 1) {
        var checkbox = document.querySelector("input[id=dia-domingo]");
		checkbox.checked = true;
	} else {
        var checkbox = document.querySelector("input[id=dia-domingo]");
		checkbox.checked = false;		
	}

	var el = document.getElementById('hora-ini');

	console.log(el);

	var buffer = evento.horaini.split(':');

	var index = parseInt(buffer[0], 0);

	el.options[index].selected = true;

	var el = document.getElementById('min-ini');

	console.log(el);

	var buffer = evento.horaini.split(':');

	var index = parseInt(buffer[1], 0);

	console.log(index);

	var indexConv = 1;

	switch(index) {
		case 10:
			indexConv = 1;
			break;

		case 15:
			indexConv = 2;
			//console.log('pasamos');
			break;

		case 20:
			indexConv = 3;
			break;

		case 25:
			indexConv = 4;
			//console.log('pasamos');
			break;

		case 30:
			indexConv = 5;
			break;

		case 35:
			indexConv = 6;
			break;				

		case 40:
			indexConv = 7;
			break;

		case 45:
			indexConv = 8;
			break;				

		case 50:
			indexConv = 9;
			break;

		default:
			indexConv = 0;
			break;
	}


	el.options[indexConv].selected = true;	

//Duración --- actualizo el valor para ser editado.

	var el = document.getElementById('dura-eve');

	console.log(el);

	var indexdura = evento.duracion;

	console.log(indexdura);

	var indexConvDura = 1;

	switch(indexdura) {
		case 10:
			indexConvDura = 0;
			break;

		case 15:
			indexConvDura = 1;
			//console.log('pasamos');
			break;

		case 20:
			indexConvDura = 2;
			break;

		case 25:
			indexConvDura = 3;
			//console.log('pasamos');
			break;

		case 30:
			indexConvDura = 4;
			break;

		case 45:
			indexConvDura = 5;
			break;				

		case 60:
			indexConvDura = 6;
			break;

		case 90:
			indexConvDura = 7;
			break;				

		default:
			indexConvDura = 8;
			break;

	}


	el.options[indexConvDura].selected = true;	

	var ele = document.getElementById('notas');

	console.log(ele);

	//el.setAttribute("value", evento.notas);

	ele.value = evento.notas;

}

guardarEvento = function (link) {
	console.log(link);

	

}