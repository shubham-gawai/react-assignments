import React from 'react'
import "./card.css"
const Card = (props) => {
  return (
    <div >
      <div className="card">
        <div className="color" style={{backgroundColor:props.bgcolor}}></div> 
        <p className="content">{props.code}</p>
        <p className="c1" style={{color:props.bgcolor}} >{props.para}</p>

      </div>
    </div>
  )
}

export default Card
