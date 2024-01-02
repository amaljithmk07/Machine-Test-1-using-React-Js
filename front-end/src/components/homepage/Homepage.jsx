import React from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";
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
              <button className="home-nav-dropdown">
                <img src="toggle-icon.png" alt="" className="dropdown-icon" />
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
                Dashboard
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
            <button className="sidebar-logout-sec">
              Logout{" "}
              <img src="./logout.png" alt="" className="sidebar-logout-icon" />
            </button>
          </div>
          <div className="home-main-content">
            <div className="home-content-container">
              <div className="home-content-container-head">
                Choose a plan that's just right for you !
              </div>
              <div className="home-content-container-togglebar">
                <div className="toggle-button-cover">
                  <div id="button-3" className="button r">
                    <input className="checkbox" type="checkbox" />
                    <div className="monthly">Monthly</div>
                    <div className="annually">
                      Annually <pre className="pre">-10%</pre>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-content-container-cards">
                <div className="home-cards-main-body">
                  <div className="home-card-head">
                    <h2 className="card-h2">Basic</h2>
                    <h5 className="card-h5-cross">$89.99/mo</h5>
                    <h3 className="card-h3">$9.99/mo</h3>
                    <button className="card-button-basic">
                      Get Started{" "}
                      <img
                        src="card-right-arrow.png"
                        alt=""
                        className="card-right-arrow"
                      />
                    </button>
                  </div>
                  <div className="home-card-body">
                    <h6 className="card-body-h6">What you will get:</h6>
                    <h5 className="card-body-h5">
                      <img
                        src="card-body-users.png"
                        className="card-body-icon"
                        alt=""
                      />{" "}
                      Upto 25 users
                    </h5>
                    <h5 className="card-body-h5">
                      <img
                        src="card-body-cloud.png"
                        className="card-body-icon"
                        alt=""
                      />
                      Upto 25gb Storage
                    </h5>
                    <h5 className="card-body-h5">
                      <img
                        src="card-body-email.png"
                        className="card-body-icon"
                        alt=""
                      />
                      Email support
                    </h5>

                    <h3 className="card-body-h3">Explore Features</h3>
                  </div>
                </div>
                <div className="home-cards-main-body">
                  <div className="home-card-head">
                    <h2 className="card-h2">Standard</h2>
                    <h5 className="card-h5-cross">$189.99/mo</h5>
                    <h3 className="card-h3">$99.99/mo</h3>
                    <button className="card-button-standard">
                      Get Started{" "}
                      <img
                        src="card-right-arrow.png"
                        alt=""
                        className="card-right-arrow"
                      />
                    </button>
                  </div>
                  <div className="home-card-body">
                    <h6 className="card-body-h6">What you will get:</h6>
                    <h5 className="card-body-h5">
                      <img
                        src="card-body-users.png"
                        className="card-body-icon"
                        alt=""
                      />{" "}
                      Upto 50 users
                    </h5>
                    <h5 className="card-body-h5">
                      <img
                        src="card-body-cloud.png"
                        className="card-body-icon"
                        alt=""
                      />
                      Upto 60gb Storage
                    </h5>
                    <h5 className="card-body-h5">
                      <img
                        src="card-body-email.png"
                        className="card-body-icon"
                        alt=""
                      />
                      Email+Chat support
                    </h5>

                    <h3 className="card-body-h3">Explore Features</h3>
                  </div>
                </div>
                <div className="home-cards-main-body">
                  <div className="home-card-head">
                    <h2 className="card-h2">Premium</h2>
                    <h5 className="card-h5-cross">$389.99/mo</h5>
                    <h3 className="card-h3">$199.99/mo</h3>
                    <button className="card-button-premium">
                      Get Started{" "}
                      <img
                        src="card-right-arrow.png"
                        alt=""
                        className="card-right-arrow"
                      />
                    </button>
                  </div>
                  <div className="home-card-body">
                    <h6 className="card-body-h6">What you will get:</h6>
                    <h5 className="card-body-h5">
                      <img
                        src="card-body-users.png"
                        className="card-body-icon"
                        alt=""
                      />{" "}
                      Upto 75 users
                    </h5>
                    <h5 className="card-body-h5">
                      <img
                        src="card-body-cloud.png"
                        className="card-body-icon"
                        alt=""
                      />
                      Upto 100gb Storage
                    </h5>
                    <h5 className="card-body-h5">
                      <img
                        src="card-body-email.png"
                        className="card-body-icon"
                        alt=""
                      />
                      Email+Chat+whatsapp support
                    </h5>

                    <h3 className="card-body-h3">Explore Features</h3>
                  </div>
                </div>
              </div>
              <div className="home-content-container-cardsbottom">
                <div className="home-bottom-cards">
                  <div className="home-bottom-card-left">
                    <h5 className="card-bottom-h5-left">Free forever</h5>
                    <h2 className="card-bottom-h2">Free Starter</h2>
                    <h6 className="card-bottom-h6">
                      The quickest and easiest way to try protocols with basic
                      functionalities
                    </h6>
                    <button className="bottom-card-button-left">
                      Get Started{" "}
                      <img
                        src="card-right-arrow.png"
                        alt=""
                        className="card-right-arrow"
                      />
                    </button>
                  </div>
                  <div className="home-bottom-card-right">
                    <h6 className="bottom-card-right-h6">What you will get:</h6>
                    <h5 className="bottom-card-right-h5">
                      <img
                        src="card-body-users.png"
                        className="card-body-icon"
                        alt=""
                      />{" "}
                      Upto 8 users
                    </h5>
                    <h5 className="bottom-card-right-h5">
                      <img
                        src="card-body-cloud.png"
                        className="card-body-icon"
                        alt=""
                      />
                      Upto 3gb Storage
                    </h5>
                    <h5 className="bottom-card-right-h5">
                      <img
                        src="card-body-email.png"
                        className="card-body-icon"
                        alt=""
                      />
                      Email support
                    </h5>

                    <h4 className="bottom-card-right-h4">
                      Basic of Documents,Task Flow,Voting,Director and Team
                      Management included
                    </h4>
                  </div>
                </div>
                <div className="home-bottom-cards">
                  <div className="home-bottom-card-left">
                    <h5 className="card-bottom-h5-right">Lets Connect</h5>
                    <h2 className="card-bottom-h2">Enterprise Plan</h2>
                    <h6 className="card-bottom-h6">
                      Effortlessily customize and fine tune services as your
                      need shift,ensuring the perfect tools for success
                    </h6>
                    <button className="bottom-card-button-right">
                      Contact Us{" "}
                      <img
                        src="card-right-arrow.png"
                        alt=""
                        className="card-right-arrow"
                      />
                    </button>
                  </div>
                  <div className="home-bottom-card-right">
                    <h6 className="bottom-card-right-h6">What you will get:</h6>
                    <h5 className="bottom-card-right-h5">
                      <img
                        src="card-body-users.png"
                        className="card-body-icon"
                        alt=""
                      />{" "}
                      More than 75 users
                    </h5>
                    <h5 className="bottom-card-right-h5">
                      <img
                        src="card-body-tick.png"
                        className="card-body-icon"
                        alt=""
                      />
                      Customization of all other features{" "}
                    </h5>
                  </div>
                </div>
              </div>
              <div className="home-content-footer">
                * Some unique features are provided as add-ons with idividual
                plans for each features.
              </div>
            </div>
          </div>
          <div className="home-sidebar-right">
            <button className="right-side-bell-add">
              <img src="right-side-bell.png" alt="" className="right-side-bell-add-img" />
            </button>
            <button className="right-side-bell-add">
              <img src="right-side-plus.png" alt="" className="right-side-bell-add-img" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
