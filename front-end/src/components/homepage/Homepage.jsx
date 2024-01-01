import React from "react";
import "./Homepage.css";
<div className="home-nav-button"></div>;
const Homepage = () => {
  return (
    <div>
      <div className="home-body">
        <div className="home-header">
          <div className="home-header-logo">
            <img src="p-logo.jpg" alt="" className="header-logo-img" />
          </div>
          <div className="home-header-navbar">
            <div className="triangle-topleft"></div>
            <div className="home-sub-nav">
              <div className="home-nav-button">
                <img src="nav-icon.png" alt="" className="nav-icon" />
                XYZ Enterprises Pvt.Ltd
              </div>
              <button className="home-nav-toggle">
                <img src="toggle-icon.png" alt="" className="toggle-icon" />
              </button>
            </div>
          </div>
        </div>
        <div className="home-content-body">
          <div className="home-sidebar-left">
            <div className="sidebar-profile-sec">
              <img
                src="./profile-pic.png"
                alt=""
                className="sidebar-profile-photo"
              />
              <h2 className="profile-h2">
                Ram Mohan
                <img
                  src="./profile-arrow.png"
                  alt=""
                  className="sidebar-profile-arrow"
                />
              </h2>
              <h3 className="profile-h3">rammohan2@gmail.com</h3>
            </div>
            <div className="sidebar-dashboard-sec">
              <div className="sidebar-dashboard-content">
                <img
                  src="analysis.png"
                  alt=""
                  className="sidebar-dashboard-icons"
                />
                Analysis
              </div>
              <div className="sidebar-dashboard-content">
                <img
                  src="perks.png"
                  alt=""
                  className="sidebar-dashboard-icons"
                />
                Perks
              </div>
              <div className="sidebar-dashboard-content">
                <img
                  src="addons.png"
                  alt=""
                  className="sidebar-dashboard-icons"
                />
                Addons
              </div>
              <div className="sidebar-dashboard-content">
                <img src="faq.png" alt="" className="sidebar-dashboard-icons" />
                FAQ
              </div>
              <div className="sidebar-dashboard-content">
                <img
                  src="support.png"
                  alt=""
                  className="sidebar-dashboard-icons"
                />
                Support
              </div>
            </div>
            <div className="sidebar-logout-sec">
              Logout{" "}
              <img
                src="./logout.png"
                alt=""
                className="sidebar-logout-icon"
              />
            </div>
          </div>
          <div className="home-main-content"></div>
          <div className="home-sidebar-right"></div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
