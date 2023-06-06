import React from "react";
import Card_01 from "../cards/card-01";
import Sigra from "../../assets/sigra.png";
import HRV from "../../assets/HR-V.png";
import Alphard from "../../assets/alphard.png";
import Transmission from "../../assets/transmission.png"
import Seat from "../../assets/seat.png" 

const Content = () => {
  return (
    <div className="main-container-02">
        <div className="header">
          <h3>Today Deals</h3>
        </div>
        <div className="paragraph">
          <p>Get the cheapest car rental price rate from us!</p>
        </div>
      <div className="gap">
        <div className="flex-container-02">
          <Card_01 deals="Save 10%" img={Sigra} cars="Daihatsu Sigra" icon1={Transmission} type="Automatic" icon2={Seat} seats="7 Seats" price1="Rp385.000" price2="Rp350.000/day" />
          <Card_01 deals="Save 15%" img={HRV} cars="Honda HR-V" icon1={Transmission} type="Automatic" icon2={Seat} seats="5 Seats" price1="Rp620.000" price2="Rp500.000/day" />
          <Card_01 deals="Save 5%" img={Alphard} cars="Toyota Alphard" icon1={Transmission} type="Automatic" icon2={Seat} seats="6 Seats" price1="Rp2.200.000" price2="Rp2.090.000/day" />
        </div>
        <div className="header">
          <h3>Your Journey Solutions</h3>
        </div>
      </div>
        <div className="paragraph">
          <p>We offer the best service for your journey!</p>
        </div>
    </div>

  )
}

export default Content;