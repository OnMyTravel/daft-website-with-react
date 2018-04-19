import React from 'react'

import './Button.css';

import Modale from './Modale';

const Button = ({ todos, onTodoClick }) => {

  return (
    <div>
      <a class="btn btn-primary" href="#">Primary action</a>
    </div>
  )
}

export default Button