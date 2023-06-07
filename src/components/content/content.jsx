import React from "react";
import Card_01 from "../cards/card-01";
import Card_02 from "../cards/card-02";
import Card_03 from "../cards/card-03";
import Sigra from "../../assets/sigra.png";
import HRV from "../../assets/HR-V.png";
import Alphard from "../../assets/alphard.png";
import Transmission from "../../assets/transmission.png";
import Seat from "../../assets/seat.png";
import Headset from "../../assets/headset.png";
import Percent from "../../assets/percent.png";
import World from "../../assets/world.png";
import Sponsor from "../../assets/sponsor.png";
import Stars from "../../assets/stars.png";

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
      <div className="gap">
        <div className="flex-container-02">
          <Card_02 img={World} content1="60,000+ Locations" content2="Over 60.000+ pick-up locations around the world" />
          <Card_02 img={Percent} content1="Low Rental Rates" content2="Find great value rental rates and exclusive specials" />
          <Card_02 img={Headset} content1="24/7 Customer Service" content2="Dedicated phone and email customer service" />
        </div>
        <div className="header-01">
          <h3>Recent Reviews</h3>
          <img src={Sponsor} />
        </div>
      </div>
      <div className="gap">
        <div className="flex-container-02">
          <Card_03 img={Stars} content1="Very good" content2="No added fees is great" name="Baim," hours="2 hours ago" />
          <Card_03 img={Stars} content1="Nice explain" content2="Everything was explained with no hidden extras. Very easy site to browse" name="Billar," hours="8 hours ago" />
          <Card_03 img={Stars} content1="Very easy to book" content2="Very easy to book. Thank you" name="Zeff," hours="23 hours ago" />
          <Card_03 img={Stars} content1="All the best" content2="Thank you very much for your professional approach. I was very happy with my first experience with you guys." name="D Luffy," hours="1 days ago" />
        </div>
      </div>
    </div>
  )
}

export default Content;