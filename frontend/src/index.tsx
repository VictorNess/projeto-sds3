import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'assets/css/styles.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
  /*
  Por meio da função App, as funções são exportadas para serem utilizadas pelo resto do codigo
  Logo, podemos criar mais funções e objetos, para fazer o layout e manipular a caracteristca deles
  */

);


