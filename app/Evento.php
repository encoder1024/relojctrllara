<?php

namespace relojctrllara;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;

class Evento extends Model
{
    
	protected $table = 'eventos';

  	public static function updateData($id,$data){
	    DB::table('eventos')
	      	->where('id', $id)
	      	->update($data);
  	}

}
