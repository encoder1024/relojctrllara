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

        $dateBegin = $eventos[0]->begin;
        $dateworkBegin = Carbon::createFromDate($dateBegin);
        $dateEnd = $eventos[0]->end; //Carbon::now();
        $dateworkEnd = Carbon::createFromDate($dateEnd);
        $duracion = $dateworkBegin->diffInMinutes($dateworkEnd);

        return View::make('admin', compact('eventos', 'duracion'));
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
        //
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
