import React from "react";
import icon1 from "../../assets/2.png"
import icon2 from "../../assets/3.png"
import icon3 from "../../assets/4.svg"

const Banner = () => {
  return (
    <div className="banner">
      <h1>What's on your mind?</h1>
      <div className="main-container">
        <div className="container-00">
          <div className="check-box">
          </div>
          <div className="content-01">
            <p>Drop car off at the different location</p>
          </div>  
        </div>
        <div className="flex-container-01">
          <div className="container-01">
            <div className="icon">
              <img src={icon1} />
            </div>
            <div className="sub-container">
              <div className="content-02">
                <p>Pick-up Location</p>
              </div>
              <div className="content-03">
                <p>Enter airport, city or town</p>
              </div> 
            </div>
          </div>
          <div className="container-02">
            <div className="icon">
              <img src={icon2} />
            </div> 
            <div className="sub-container">
              <div className="content-02">
                <p>Pick-up date</p>
              </div>
              <div className="content-03">
                <p>Wed 10 Oct</p>
              </div>
            </div>
            <div className="sub-container">
              <div className="border">
                <div className="content-02">
                  <p>Time</p>
                </div>
                <div className="content-03">
                  <p>11:59 AM</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container-02">
            <div className="icon">
              <img src={icon2} />
            </div>
            <div className="sub-container">
              <div className="content-02">
                <p>Drop-off date</p>
              </div>
              <div className="content-03">
                <p>Wed 10 Oct</p>
              </div>
            </div>
            <div className="sub-container">
              <div className="border">
                <div className="content-02">
                  <p>Time</p>
                </div>
                <div className="content-03">
                  <p>11:59 PM</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container-03">
            <div className="icon-01">
              <img src={icon3} />
            </div>
            <p>Search</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner;