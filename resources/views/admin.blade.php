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
              <label>buscar eventos</label>
              <input type="text" class="field small-field" />
              <input type="submit" class="button" value="search" />
            </div>
          </div>
          <!-- End Box Head -->
          <!-- Table -->
          <div class="table">
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <th width="13"><input type="checkbox" class="checkbox" /></th>
                <th>Nombre</th>
                <th>Fecha y Horario</th>
                <th>Duración</th>
                <th width="110" class="ac">Content Control</th>
              </tr>
              <tr>
                <td><input type="checkbox" class="checkbox" /></td>
                <td><h3>{{$eventos[0]->nombre}}</h3></td>
                <td>{{$eventos[0]->begin}}</td>
                <td>{{$duracion}} minutos</td>
                <td><a href="#" class="ico edit">Edit</a></td>
              </tr>
              <tr class="odd">
                <td><input type="checkbox" class="checkbox" /></td>
                <td><h3>Almuerzo</h3></td>
                <td>12.05.09</td>
                <td>13:30 / 30</td>
                <td><a href="#" class="ico edit">Edit</a></td>
              </tr>
              <tr>
                <td><input type="checkbox" class="checkbox" /></td>
                <td><h3>Cena</h3></td>
                <td>12.05.09</td>
                <td>20:00 / 30</td>
                <td><a href="#" class="ico edit">Edit</a></td>
              </tr>
              <tr class="odd">
                <td><input type="checkbox" class="checkbox" /></td>
                <td><h3>Break 1</h3></td>
                <td>12.05.09</td>
                <td>16:00 / 15</td>
                <td><a href="#" class="ico edit">Edit</a></td>
              </tr>
              <tr>
                <td><input type="checkbox" class="checkbox" /></td>
                <td><h3>Break 2</h3></td>
                <td>12.05.09</td>
                <td>10:30 / 15</td>
                <td><a href="#" class="ico edit">Edit</a></td>
              </tr>
              <tr class="odd">
                <td><input type="checkbox" class="checkbox" /></td>
                <td><h3>Evento 1</h3></td>
                <td>12.05.09</td>
                <td>09:00 / 45</td>
                <td><a href="#" class="ico edit">Edit</a></td>
              </tr>
              <tr>
                <td><input type="checkbox" class="checkbox" /></td>
                <td><h3>Evento 2</h3></td>
                <td>12.05.09</td>
                <td>09:00 / 45</td>
                <td><a href="#" class="ico edit">Edit</a></td>
              </tr>
              <tr class="odd">
                <td><input type="checkbox" class="checkbox" /></td>
                <td><h3>Evento 3</h3></td>
                <td>12.05.09</td>
                <td>09:00 / 45</td>
                <td><a href="#" class="ico edit">Edit</a></td>
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
            <h2>Add New Article</h2>
          </div>
          <!-- End Box Head -->
          <form action="#" method="post">
            <!-- Form -->
            <div class="form">
              <p> <span class="req">max 100 symbols</span>
                <label>Article Title <span>(Required Field)</span></label>
                <input type="text" class="field size1" />
              </p>
              <p class="inline-field">
                <label>Date</label>
                <select class="field size2">
                  <option value="">23</option>
                </select>
                <select class="field size3">
                  <option value="">July</option>
                </select>
                <select class="field size3">
                  <option value="">2009</option>
                </select>
              </p>
              <p> <span class="req">max 100 symbols</span>
                <label>Content <span>(Required Field)</span></label>
                <textarea class="field size1" rows="10" cols="30"></textarea>
              </p>
            </div>
            <!-- End Form -->
            <!-- Form Buttons -->
            <div class="buttons">
              <input type="button" class="button" value="preview" />
              <input type="submit" class="button" value="submit" />
            </div>
            <!-- End Form Buttons -->
          </form>
        </div>
        <!-- End Box -->
      </div>
      <!-- End Content -->
      <!-- Sidebar -->
      <div id="sidebar">
        <!-- Box -->
        <div class="box">
          <!-- Box Head -->
          <div class="box-head">
            <h2>Management</h2>
          </div>
          <!-- End Box Head-->
          <div class="box-content"> <a href="#" class="add-button"><span>Add new Article</span></a>
            <div class="cl">&nbsp;</div>
            <p class="select-all">
              <input type="checkbox" class="checkbox" />
              <label>select all</label>
            </p>
            <p><a href="#">Delete Selected</a></p>
            <!-- Sort -->
            <div class="sort">
              <label>Sort by</label>
              <select class="field">
                <option value="">Title</option>
              </select>
              <select class="field">
                <option value="">Date</option>
              </select>
              <select class="field">
                <option value="">Author</option>
              </select>
            </div>
            <!-- End Sort -->
          </div>
        </div>
        <!-- End Box -->
      </div>
      <!-- End Sidebar -->
      <div class="cl">&nbsp;</div>
    </div>
    <!-- Main -->
  </div>
</div>
<!-- End Container -->
<!-- Footer -->
<div id="footer">
  <div class="shell"> <span class="left">&copy; 2010 - CompanyName</span> <span class="right"> Design by <a href="http://chocotemplates.com">Chocotemplates.com</a> </span> </div>
</div>
<!-- End Footer -->
</body>
</html>