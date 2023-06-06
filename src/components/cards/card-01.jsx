import React from "react";

const Card_01 = (props) => {
  return (
    <div className="card-01">
      <div className="box">
        <div className="deals">
          <p>{props.deals}</p>
        </div>
      </div>
        <div className="content">
          <img src={props.img} />
          <p>{props.cars}</p>
          <p>{props.type}</p>
          <p>{props.seats}</p>
          <p>{props.price1}</p>
          <p>{props.price2}</p>  
        </div>
    </div>
  )
}

export default Card_01;