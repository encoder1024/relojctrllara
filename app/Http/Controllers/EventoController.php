<?php

namespace relojctrllara\Http\Controllers;

use relojctrllara\Evento;
use Illuminate\Http\Request;
use View;
use Carbon\Carbon;

class EventoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \relojctrllara\evento  $evento
     * @return \Illuminate\Http\Response
     */
    public function show(Evento $evento)
    {
        $eventos = Evento::all();
        $duracion = array();
        $i = 0;

        $eventoid = 0;

        foreach($eventos as $key => $value) {

            $dateBegin = $value->begin;
            $dateworkBegin = Carbon::createFromDate($dateBegin);
            $dateEnd = $value->end; //Carbon::now();
            $dateworkEnd = Carbon::createFromDate($dateEnd);
            $duracion[$i] = $dateworkBegin->diffInMinutes($dateworkEnd);
            $i++;
        }

        // $dateBegin = $eventos[0]->begin;
        // $dateworkBegin = Carbon::createFromDate($dateBegin);
        // $dateEnd = $eventos[0]->end; //Carbon::now();
        // $dateworkEnd = Carbon::createFromDate($dateEnd);
        // $duracion = $dateworkBegin->diffInMinutes($dateworkEnd);

        return View::make('admin', compact('eventos', 'duracion', 'eventoid'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \relojctrllara\evento  $evento
     * @return \Illuminate\Http\Response
     */
    public function edit(Evento $evento)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \relojctrllara\evento  $evento
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Evento $evento)
    {

        
        $name = $request['nombre-evento'];
        $lunes = $request['dia-lunes'];
        if ($lunes != "on"){$lunes = 0;} else {$lunes=1;}
        $martes = $request['dia-martes'];
        if ($martes != "on"){$martes = 0;} else {$martes=1;}
        $miercoles = $request['dia-miercoles'];
        if ($miercoles != "on"){$miercoles = 0;} else {$miercoles=1;}
        $jueves = $request['dia-jueves'];
        if ($jueves != "on"){$jueves = 0;} else {$jueves=1;}
        $viernes = $request['dia-viernes'];
        if ($viernes != "on"){$viernes = 0;} else {$viernes=1;}
        $sabado = $request['dia-sabado'];
        if ($sabado != "on"){$sabado = 0;} else {$sabado=1;}
        $domingo = $request['dia-domingo'];
        if ($domingo != "on"){$domingo = 0;} else {$domingo=1;}

        $horaini = $request['hora-ini'];
        $minini = $request['min-ini'];
        $seg="00";

        $today = Carbon::today();

        $dura = Carbon::createFromTimeString("00:".$request['dura-eve'].":00");

        $begin = $today->addHours($horaini);
        $begin = $begin->addMinutes($minini);

        $end = $begin->addMinutes($request['dura-eve']); 

        //$end = $today + $end;

        $data = array(
        'nombre'=>$name,
        'begin'=>$begin, //"2019-08-22 08:00:00"
        'end'=>$end, //"2019-08-22 08:00:00"
        'finde'=>0,
        'feriados'=>0,
        'estado'=>1,
        'habilitado'=>1,
        'lunes'=>$lunes,
        'martes'=>$martes,
        'miercoles'=>$miercoles,
        'jueves'=>$jueves,
        'viernes'=>$viernes,
        'sabado'=>$sabado,
        'domingo'=>$domingo,
        'bloqueo'=>0,
        'horaini'=>"08:50:00", //
        'duracion'=>$dura->minute, //20
        'notas'=>$request['notas'],
        'updated_at'=>now('-3:00')
        );

        Evento::updateData($request['eventoid'], $data);

        return redirect()->action('EventoController@show');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \relojctrllara\evento  $evento
     * @return \Illuminate\Http\Response
     */
    public function destroy(Evento $evento)
    {
        //
    }
}
