import React from "react";
import "./FirstComponent.css";
import profile from "../images/profile_pic.jpg";

const FirstComponent = () => {
  return (
    <div class="first_container">
      <div class="padding_div">
        <div class="profile">
          <img class="profile_img" src={profile} alt="" />
          <div>
            <p>Hi Mike,</p>
            <p>welcome back.</p>
          </div>
        </div>
        <div class="profile_2">
          <div>Today</div>
          <div>$19,892</div>
          <div>Account Balance</div>
          <div>$4000</div>
          <div>Year-to-Date-Contributions</div>
          <div>$1,892</div>
          <div>Total Interest</div>
          <button>
            I want to
            <div class="dropdown-arrow"></div>
          </button>
        </div>
        <div class="profile_3">
          <div>Recent Transactions</div>

          <div>2020-08-07</div>
          <div>Withdrawal Transfer to Bank-XXX11</div>
          <hr class="profile_3_hr" />

          <div>2020-08-07</div>
          <div>Withdrawal Transfer to Bank-XXX11</div>
          <hr class="profile_3_hr" />
          <div>2020-08-07</div>
          <div>Withdrawal Transfer to Bank-XXX11</div>
          <hr class="profile_3_hr" />
        </div>
      </div>
    </div>
  );
};

export default FirstComponent;
