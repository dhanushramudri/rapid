import React from "react";
import "./sidebar.css";
import logo from "../images/logo.jpg";
import search from "../images/search.png";
import home from "../images/home.png";
import paper from "../images/paper.png";
import person from "../images/person.png";
import list from "../images/list.png";
import notification from "../images/notification.png";
import logout from "../images/logout.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div>
        <img className="logo" src={logo} alt="logo" />
        <img className="search" src={search} alt="search" />
      </div>
      <div className="sidebar_menu">
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
      </div>
      <div className="sidebar_bottom">
        <img className="logout" src={notification} alt="notification" />
        <img className="logout" src={logout} alt="logout" />
      </div>
    </div>
  );
};

export default Sidebar;
