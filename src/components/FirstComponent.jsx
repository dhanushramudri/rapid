import React, { useState, useEffect } from "react";
import "./FirstComponent.css";
import profile from "../images/profile_pic.jpg";
import Notification from "../images/notification.png";
import search from "../images/search.png";
import home from "../images/home.png";
import paper from "../images/paper.png";
import person from "../images/person.png";
import list from "../images/list.png";
import notification from "../images/notification.png";
import logout from "../images/logout.png";
const FirstComponent = () => {
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 481);

      setIsMediumScreen(window.innerWidth >= 481 && window.innerWidth <= 767);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  return (
    <>
      {isSmallScreen ? (
        <div class="first_container">
          <div class="padding_div">
            <div className="notif">
              <img src={Notification} alt="notification" />
            </div>
            <div class="profile">
              <img class="profile_img" src={profile} alt="" />
              <div>
                <p>Hi Dhanush,</p>
                <p>welcome back.</p>
              </div>
            </div>
            <div class="profile_4">
              <div className="today">Today</div>

              <div className="dollar">$19,892</div>
              <div className="balance">Account Balance</div>
              <div className="row_div">
                <div className="column_div">
                  <div className="price"> $4000</div>
                  <div className="year">Year-to-Date</div>
                </div>
                <div>
                  <div className="price">$1,892</div>
                  <div className="year">Total Interest</div>
                </div>
              </div>
              <button>I want to...</button>
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
          <div className="medium_sidebar">
            <div className="mediumSidebar_menu">
              <div className="wrapper">
                <img className="home" src={home} alt="home" />
              </div>
              <div className="wrapper">
                <img className="home" src={paper} alt="paper" />
              </div>
              <div className="wrapper">
                <img className="home" src={list} alt="list" />
              </div>
              <div className="wrapper">
                <img className="home" src={person} alt="person" />
              </div>
              <div className="wrapper">
                <img className="home" src={search} alt="search" />
              </div>
            </div>
          </div>
        </div>
      ) : isMediumScreen ? (
        <div class="first_container">
          <div class="padding_div">
            <div className="notif">
              <img src={Notification} alt="" />
            </div>
            <div class="profile">
              <img class="profile_img" src={profile} alt="" />
              <div>
                <p>Hi Dhanush,</p>
                <p>welcome back.</p>
              </div>
            </div>
            <div class="profile_2">
              <div className="today">Today</div>
              <div className="dollar">$19,892</div>
              <div className="balance">Account Balance</div>
              <div className="row_div">
                <div className="column_div">
                  <div>$4000</div>
                  <div>Year-to-Date</div>
                </div>
                <div>
                  <div>$1,892</div>
                  <div>Total Interest</div>
                </div>
              </div>
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
          <div className="medium_sidebar">
            <div className="mediumSidebar_menu">
              <div className="wrapper">
                <img className="home" src={home} alt="home" />
              </div>
              <div className="wrapper">
                <img className="home" src={paper} alt="paper" />
              </div>
              <div className="wrapper">
                <img className="home" src={list} alt="list" />
              </div>
              <div className="wrapper">
                <img className="home" src={person} alt="person" />
              </div>
              <div className="wrapper">
                <img className="home" src={search} alt="search" />
              </div>
            </div>
          </div>
        </div>
      ) : (
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
      )}
    </>
  );
};

export default FirstComponent;
