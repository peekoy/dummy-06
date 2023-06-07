import React from "react";
import Logo2 from "../../assets/Logo.png"
import Logo1 from "../../assets/Logo1.png"
import Logo3 from "../../assets/Logo2.png"

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-08">
        <div className="list">
          <ul>
            <li><a href=""></a>Privacy Notice</li>
            <li><a href=""></a>Cookies</li>
            <li><a href=""></a>Term & Conditions</li>
            <li><a href=""></a>Contact</li>
          </ul>
        </div>  
      </div>
      <div className="container-09">
        <div className="flex-box">
          <div className="logo">
            <img src={Logo1} />
            <img src={Logo2} />
            <img src={Logo3} />
          </div>
          <div className="content">
            <p>Copyright © 2022 Booking.com Transport Limited trading as Rentalls.com. All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;