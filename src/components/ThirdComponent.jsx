import React from "react";
import "./ThirdComponent.css";
import InputSlider from "./InputSlider";
import right from "../images/right.png";
const ThirdComponent = () => {
  return (
    <div className="third_container">
      <div className="subContainer">
        <div className="title">Retirement Strategy</div>
        <div className="thirdcontainer_column">
          <div className="fontsmall">Employee Contribution</div>
          <InputSlider />
        </div>
        <div className="thirdcontainer_column">
          <div className="fontsmall">Employee Contribution</div>

          <InputSlider />
        </div>
        <hr style={{ margin: "0% 15%", opacity: "0.4" }} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width: "80%",
            margin: " 5% 10% 0 10%",
          }}
        >
          <div className="fontsmall">Employer Contribution</div>
          <div>8.4%</div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width: "80%",
            margin: " 5% 10% 0 10%",
          }}
        >
          <div className="fontsmall">Interest Rate</div>
          <div>5%</div>
        </div>
        <button className="update_btn">Update</button>
        <div className="flex">
          <a href="https://rapidquest.in/">View Help Docs</a>
          <img style={{ width: "20px", height: "20px" }} src={right} alt="" />
        </div>
        <div className="lastbox">
          <div>Are you considering a</div>
          <div>Housing Advance?</div>
          <div> Limited time reduced interest</div>
          <div className="flex2">
            <a href="https://rapidquest.in/">View Help Docs</a>
            <img style={{ width: "20px", height: "20px" }} src={right} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdComponent;
