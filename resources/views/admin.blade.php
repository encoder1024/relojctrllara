<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title>RelojCtrl</title>
  <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
  <link rel="stylesheet" href="css/styleAdmin.css" type="text/css" media="all" />
</head>
<body>
<!-- Header -->
<div id="header">
  <div class="shell">
    <!-- Logo + Top Nav -->
    <div id="top">
      <h1><a href="#">RelojCtrl</a></h1>
      <div id="top-navigation"> Bienvenido <a href="#"><strong>Administrator</strong></a> <span>|</span> <a href="http://www.domozoom.com.ar">Help</a> </div>
    </div>
    <!-- End Logo + Top Nav -->
    <!-- Main Nav -->
    <div id="navigation">
      <ul>
        <li><a href="#" class="active"><span>Dashboard</span></a></li>
      </ul>
    </div>
    <!-- End Main Nav -->
  </div>
</div>
<!-- End Header -->
<!-- Container -->
<div id="container">
  <div class="shell">
    <!-- Small Nav -->
    <div class="small-nav"> <a href="#">Dashboard</a> <span>&gt;</span> Eventos actuales </div>
    <!-- End Small Nav -->
    <!-- Message OK -->
    <div class="msg msg-ok">
      <p><strong>Your file was uploaded succesifully!</strong></p>
      <a href="#" class="close">close</a> </div>
    <!-- End Message OK -->
    <!-- Message Error -->
    <div class="msg msg-error">
      <p><strong>You must select a file to upload first!</strong></p>
      <a href="#" class="close">close</a> </div>
    <!-- End Message Error -->
    <br />
    <!-- Main -->
    <div id="main">
      <div class="cl">&nbsp;</div>
      <!-- Content -->
      <div id="content">
        <!-- Box -->
        <div class="box">
          <!-- Box Head -->
          <div class="box-head">
            <h2 class="left">Eventos Actuales</h2>
            <div class="right">
              <label>Diferencia Horario:</label>
                <select class="field small-field size2">
                  <option value="">0 horas</option>
                  <option value="">-1 hora</option>
                  <option value="">+1 hora</option>
                  <option value="">-2 horas</option>
                  <option value="">+2 horas</option>
                </select>
{{--               <input type="text" class="field small-field" />
              <input type="submit" class="button" value="search" /> --}}
            </div>
          </div>
          <!-- End Box Head -->
          <!-- Table -->
          <div class="table" id="tabla">

            <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <th width="13"><input type="checkbox" class="checkbox" id="bloq-all" onclick="mycheckbox(this, 'toggle')" /></th>
                <th>Nombre</th>
                <th>Fecha y Horario</th>
                <th>Duración</th>
                <th width="110" class="ac">Content Control</th>
              </tr>
              <tr>
                <td><input type="checkbox" class="checkbox" name="grupo-cb" /></td>
                <td><h3>{{$eventos[0]->nombre}}</h3></td>
                <td>{{$eventos[0]->begin}}</td>
                <td>{{$duracion[0]}} minutos</td>
                <td><a href="#editar" class="ico edit" onclick="buscarEvento(this, {{$eventos[0]}})">Edit</a></td>
              </tr>
              <tr class="odd">
                <td><input type="checkbox" class="checkbox" name="grupo-cb" /></td>
                <td><h3>{{$eventos[1]->nombre}}</h3></td>
                <td>{{$eventos[1]->begin}}</td>
                <td>{{$duracion[1]}} minutos</td>
                <td><a href="#editar" class="ico edit" onclick="buscarEvento(this, {{$eventos[1]}})">Edit</a></td>
              </tr>
              <tr>
                <td><input type="checkbox" class="checkbox" /></td>
                <td><h3>{{$eventos[2]->nombre}}</h3></td>
                <td>{{$eventos[2]->begin}}</td>
                <td>{{$duracion[2]}} minutos</td>
                <td><a href="#editar" class="ico edit" onclick="buscarEvento(this, {{$eventos[2]}})">Edit</a></td>
              </tr>
              <tr class="odd">
                <td><input type="checkbox" class="checkbox" /></td>
                <td><h3>{{$eventos[3]->nombre}}</h3></td>
                <td>{{$eventos[3]->begin}}</td>
                <td>{{$duracion[3]}} minutos</td>
                <td><a href="#editar" class="ico edit" onclick="buscarEvento(this, {{$eventos[3]}})">Edit</a></td>
              </tr>
              <tr>
                <td><input type="checkbox" class="checkbox" /></td>
                <td><h3>{{$eventos[4]->nombre}}</h3></td>
                <td>{{$eventos[4]->begin}}</td>
                <td>{{$duracion[4]}} minutos</td>
                <td><a href="#editar" class="ico edit" onclick="buscarEvento(this, {{$eventos[4]}})">Edit</a></td>
              </tr>
              <tr class="odd">
                <td><input type="checkbox" class="checkbox" /></td>
                <td><h3>{{$eventos[5]->nombre}}</h3></td>
                <td>{{$eventos[5]->begin}}</td>
                <td>{{$duracion[5]}} minutos</td>
                <td><a href="#editar" class="ico edit" onclick="buscarEvento(this, {{$eventos[5]}})">Edit</a></td>
              </tr>
              <tr>
                <td><input type="checkbox" class="checkbox" /></td>
                <td><h3>{{$eventos[6]->nombre}}</h3></td>
                <td>{{$eventos[6]->begin}}</td>
                <td>{{$duracion[6]}} minutos</td>
                <td><a href="#editar" class="ico edit" onclick="buscarEvento(this, {{$eventos[6]}})">Edit</a></td>
              </tr>
              <tr class="odd">
                <td><input type="checkbox" class="checkbox" /></td>
                <td><h3>{{$eventos[7]->nombre}}</h3></td>
                <td>{{$eventos[7]->begin}}</td>
                <td>{{$duracion[7]}} minutos</td>
                <td><a href="#editar" class="ico edit" onclick="buscarEvento(this, {{$eventos[7]}})">Edit</a></td>
              </tr>
            </table>
            <!-- Pagging -->
            <div class="pagging">
              <div class="left">Showing 1-8 de 8</div>
            </div>
            <!-- End Pagging -->
          </div>
          <!-- Table -->
        </div>
        <!-- End Box -->
        <!-- Box -->
        <div class="box">
          <!-- Box Head -->
          <div class="box-head">
            <h2 id="editar">Editar Evento</h2>
          </div>
          <!-- End Box Head -->
          <form action="/update" method="post">
            @csrf {!! csrf_field() !!}
            <!-- Form -->
            <div class="form">
              <p> <span class="req">max 25 caracteres</span>
                <label>Nombre del Evento</label>
                <input type="text" class="field size1" id="nombre-evento" name="nombre-evento" />
              </p>
              <p class="inline-field">
                <label class="item">Días:</label>
                <input type="checkbox" class="checkbox" id="dia-lunes" name="dia-lunes" />
                <label class="field">Lunes</label>
                <input type="checkbox" class="checkbox" id="dia-martes" name="dia-martes"/>
                <label class="field">Martes</label>
                <input type="checkbox" class="checkbox" id="dia-miercoles" name="dia-miercoles" />
                <label class="field">Miércoles</label>
                <input type="checkbox" class="checkbox" id="dia-jueves" name="dia-jueves"/>
                <label class="field">Jueves</label>
                <input type="checkbox" class="checkbox" id="dia-viernes" name="dia-viernes"/>
                <label class="field">Viernes</label>                                                                
                <input type="checkbox" class="checkbox" id="dia-sabado" name="dia-sabado"/>
                <label class="field">Sábado</label>
                <input type="checkbox" class="checkbox" id="dia-domingo" name="dia-domingo"/>
                <label class="field">Domingo</label>
                <label class="item">Hora de inicio:</label>
                <select class="field size2" id="hora-ini" name="hora-ini">
                  <option value="00">00</option>
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                </select>
                <label class="field">:</label>
                <select class="field size2" id="min-ini" name="min-ini">
                  <option value="00">00</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                  <option value="25">25</option>
                  <option value="30">30</option>
                  <option value="35">35</option>
                  <option value="40">40</option>
                  <option value="45">45</option>
                  <option value="50">50</option>
                </select>
                <label class="item" >Duración (minutos):</label>
                <select class="field size2" id="dura-eve" name="dura-eve">
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                  <option value="25">25</option>
                  <option value="30">30</option>
                  <option value="45">45</option>
                  <option value="60">60</option>
                  <option value="90">90</option>
                  <option value="120">120</option>
                </select>
              </p>
              <p> <span class="req">max 144 caracteres</span>
                <label>Observaciones </label>
                <textarea class="field size1" id="notas" rows="10" cols="30" name="notas"></textarea>
              </p>
            </div>
            <!-- End Form -->
            <!-- Form Buttons -->
            <div class="buttons">
              <input type='hidden' value='1' name='editid'>
              <input type="hidden" value='{{$eventoid}}' name="eventoid" id="eventoid">
              <input type="submit" class="button" name="submint" value="Guardar" />
            </div>
            <!-- End Form Buttons -->
          </form>
        </div>
        <!-- End Box -->
      </div>
      <!-- End Content -->
      <div class="cl">&nbsp;</div>
    </div>
    <!-- Main -->
  </div>
</div>
<!-- End Container -->
<!-- Footer -->
<div id="footer">
  <div class="shell"> <span class="left"> 2019 - Montich</span> <span class="right"> Desarrollado por <a href="http://domozoom.com.ar">domozoom.com.ar</a> </span> </div>
</div>
<!-- End Footer -->
<script src="js/admin.js"></script>
</body>
</html>