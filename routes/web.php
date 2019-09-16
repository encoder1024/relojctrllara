<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use relojctrllara\Evento;

Route::get('/', function () {
	$eventosDb = Evento::all();

	return View::make('index', compact('eventosDb'));
    //return view('index');
});

// Route::get('/admin', function () {
//     return view('admin');
// });

// Assuming we have a Post model
//Route::model('evento', 'Evento');

// Resourceful routing
Route::get('/admin', 'EventoController@show');

Route::post('/update','EventoController@update');

Route::get('/update','EventoController@update');