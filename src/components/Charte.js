import React from 'react'

import './Charte.css';

import Modale from './Modale';
import Button from './Button';

const Charte = ({ todos, onTodoClick }) => {

  return (
  <div class="charte__wrapper">
      <h1>Buttons:</h1>
      <Button>Primary action</Button>
      <div class="charte__frame">
        <a class="btn btn-primary" href="#"></a>
      </div>
      
      <div class="charte__frame">
        <a class="btn btn-second" href="#">Second action</a>
      </div>

      <h1>Modale:</h1>
      <h2>Modale simple</h2>
      <Modale title="Un petit coin de paradis" />
      <h2>Modale with subtitle and icon</h2>
      <Modale title="En route pour l'aventure" subtitle="Aéroport Charles de Gaulle" />
      
  </div>)
}

export default Charte