import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Cabecera } from './Components/Cabecera';
import Pie from './Components/Pie';
import ListaProductos from './Components/ListaProductos';
import Botones from './Components/Botones';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='container'>
  <React.StrictMode>
    <Cabecera/>
    <ListaProductos/>
    <Botones/>
    <Pie/>
  </React.StrictMode>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
