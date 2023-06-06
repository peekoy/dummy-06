import React from "react";
import Card_01 from "../cards/card-01";
import Sigra from "../../assets/sigra.png";
import HRV from "../../assets/HR-V.png";
import Alphard from "../../assets/alphard.png";

const Content = () => {
  return (
    <div className="main-container-02">

      <div className="header">
        <h3>Today deals</h3>
      </div>
      <div className="paragraph">
        <p>Get the cheapest car rental price rate from us!</p>
      </div>
      <div className="flex-container-02">
        <Card_01 deals="Save 10%" img={Sigra} cars="Daihatsu Sigra" type="Automatic" seats="7 Seats" price1="Rp385.000" price2="Rp350.000" />
        <Card_01 deals="Save 10%" img={HRV} cars="Daihatsu Sigra" type="Automatic" seats="7 Seats" price1="Rp385.000" price2="Rp350.000" />
        <Card_01 deals="Save 10%" img={Alphard} cars="Daihatsu Sigra" type="Automatic" seats="7 Seats" price1="Rp385.000" price2="Rp350.000" />
      </div>
    </div>

  )
}

export default Content;