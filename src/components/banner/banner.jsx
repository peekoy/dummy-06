import React from "react";

const Banner = () => {
  return (
    <div className="banner">
      <h1>What's on your mind?</h1>
      <div className="main-container">
        <div className="content-01">
          <p>Drop car off at the different location</p>
        </div>
        <div className="flex-container-01">
          <div className="container-01">
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
            <div className="sub-container">
                <p>Pick-up date</p>
                <p>Wed 10 Oct</p>
            </div>
            <div className="sub-container">
              <div className="content">
                <p>Time</p>
                <p>11:59 AM</p>
              </div>
            </div>
          </div>
          <div className="container-02">
            <div className="sub-container">
              <p>Drop-off date</p>
              <p>Wed 10 Oct</p>
            </div>
            <div className="sub-container">
              <div className="content">
                <p>Time</p>
                <p>11:59 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner;