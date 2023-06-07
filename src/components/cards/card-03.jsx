import React from "react";

const Card_03 = (props) => {
  return (
    <div className="card-03">
      <div className="content">   
        <div className="star">
          <img src={props.img} />
          <img src={props.img} />
          <img src={props.img} />
          <img src={props.img} />
          <img src={props.img} />
        </div>
        <div className="container">
          <div className="content1">
            <p>{props.content1}</p>
          </div>
          <div className="content2">
            <p>{props.content2}</p>
          </div>
        </div>
        <div className="container-07">
          <div className="name">
            <p>{props.name}</p>
          </div>
          <div className="hours">
            <p>{props.hours}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card_03;