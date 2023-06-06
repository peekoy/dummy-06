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
          <div className="container-04">
          <img src={props.img} />
            <div className="cars">
              <p>{props.cars}</p>
            </div>
            <div className="container-05">
              {/* <div className="gap"> */}
                <div className="icon-02">
                  <img src={props.icon1} />
                </div>
                <div className="type">
                  <p>{props.type}</p>
                </div>
                <div className="icon-03">
                  <img src={props.icon2} />
                </div>
                <div className="seats">
                  <p>{props.seats}</p>
                </div>
              </div>
            {/* </div> */}
            <div className="container-06">
              <div className="price-01">
                <p>{props.price1}</p>
              </div>
              <div className="price-02">
                <p>{props.price2}</p>  
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Card_01;