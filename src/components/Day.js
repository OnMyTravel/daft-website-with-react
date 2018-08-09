import React from 'react'

import '../styles/Day.css';
import Paragraph from './Paragraph'

const Day = ({ id, day }) => {
  
  let content;

  if(!day.content || (day.hasOwnProperty('state') && day.state === 'FAILED'))
    content = (<p>Une erreur c'est produite lors du chargement</p>)
  else
    content = day.content.map((subArticle, index) => (<Paragraph key={index} paragraph={subArticle} />))

  return (
  <div className="day">
      <div className="date-marker">
        Day {id}
      </div>

      <div className="day-article">
        {content}
      </div>
  </div>)
}

export default Day