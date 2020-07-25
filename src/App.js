import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
    <header>
      <h1>Actividad 24/07/2020 semana 10</h1>
    </header>
      <div class="container">
        <table class="tabla">
          <thead>
          <tr>
            <th>
              Nombres
            </th>
            <th>
              Apellidos
            </th>
            <th>
              Celular
            </th>
            <th>
              Correo
            </th>
          
          </tr>
          </thead>
          <td>
            Juan Jose
          </td>
          <td>
            Lopez Macias
          </td>
          <td>
            3053239626
          </td>
          <td>
            Juan7jose123@gmail.com
          </td>
          <tr>
            <td>
              Juan Diego
            </td>
            <td>
              Sierra ayala
            </td>
            <td>
              3154379865

            </td>
            <td>
              ju.diegosierra1230@gmail.com
            </td>
          </tr>
          <tr>
            <td>
              Carlos mario
            </td>
            <td>
              Rodriguez bolivar
            </td>
            <td>
              3016881255
            </td>
            <td>
              512carlosmario@gmail.com
            </td>
          </tr>
        </table>

      </div>
      <h2>¿Qué es Babel y WebPack y para que se usa en REACT?</h2>
      <div class="contenedor2">
        
        <div class="text">
          <ul>
            <li>
              <p>
              Babel es una herramienta que nos permite transformar nuestro código JS de última generación (o con funcionalidades extras) a JS que cualquier navegador o versión de Node. js entienda.
              </p>

            </li>
            <li>
              <p>
              Webpack es un paquete de módulos JavaScript de código abierto. Está hecho principalmente para JavaScript, pero puede transformar activos front-end como HTML 
              </p>

            </li>
            <li>
              <p>
              React es una biblioteca escrita en JavaScript, desarrollada en Facebook. Y se utiliza para facilitar la creación de componentes interactivos, reutilizables, para interfaces de usuario. 
              </p>

            </li>
          </ul>
        </div>
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" width="500px" height="400px"/>
        </div>
        
      </div>
    </div>
  );
}

export default App;
