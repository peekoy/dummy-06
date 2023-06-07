import React from "react";

const Card_02 = (props) => {
  return (
    <div className="card-02">
      <div className="content">
        <div className="round">
          <img src={props.img} />
        </div>
        <div className="paragraph-01">
          <p>{props.content1}</p>
        </div>
        <div className="paragraph-02">
          <p>{props.content2}</p>
        </div>
      </div>
    </div>
  )
}

export default Card_02;