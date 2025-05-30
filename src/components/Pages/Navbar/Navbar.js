import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { downloadAPK } from "../../Helpers/DownloadAPK";
import downloadbutton from "../../../RichImages/downloadbutton.svg";
// import headerLog from "../../../RichImages/Websitelogo12.png";
import headerLog from "../../../RichImages/newradhaLogo.png";
import homeicon from "../../../RichImages/homeicon.svg";
import charticon from "../../../RichImages/charts.svg";
import downloadbuttonn from "../../../RichImages/downloadbuttonn.svg";
const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const collapseRef = useRef(null);

  const handleClickOutside = (event) => {
    if (collapseRef.current && !collapseRef.current.contains(event.target)) {
      setIsCollapsed(true);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="app-container">
        <div className="banner-section">
          <div className="header-container">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid header-content-main">
                <div style={{ marginTop: "5px" }}>
                  <Logo />
                </div>
                <button
                  class="navbar-toggler navbar-toggler-btn custom-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div
                  className={`collapse navbar-collapse custome-nav  ${
                    isCollapsed ? "" : "show"
                  }`}
                  id="navbarSupportedContent"
                  ref={collapseRef}
                >
                  <div className="navigation-links"></div>

                  <div className="navigation-links">
                    <NavigationLinks />
                  </div>

                  <div className="download-btn-main-12 ">
                    <DownloadButton />
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

const Logo = () => {
  return (
    <>
      <Link className="nav-link  active" aria-current="page" to="/">
        <img
          className="logo_navbar"
          src={headerLog}
          alt="https://radha567.com/"
        />
      </Link>
    </>
  );
};

const NavigationLinks = () => {
  return (
    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <div className="nvbaralign">
          <img src={homeicon} className="navicons" />

          <Link className="nav-link hover-3" to="/">
            Home
          </Link>
        </div>
      </li>
      <li className="nav-item">
        <div className="nvbaralign">
          <img src={charticon} className="navicons" />

          <Link className="nav-link hover-3" to="/charts">
            Charts
          </Link>
        </div>
      </li>
    </ul>
  );
};

const download = async (e) => {
  e.preventDefault();
  await downloadAPK();
};

const DownloadButton = () => {
  return (
    // <a href="#" id="BTTTTT" class="btn1">Download Now</a>
    <>
      {/* <button className="downloadBtn" onClick={download}>
        Download Now
      </button> */}

      <div class="button-container_3">
        <div class="button-container_2">
          <div class="button-container">
            {/* <button
              class="download-button test border"
              // onClick={download}
              // disabled
            >
              <span>Download App</span>
              &nbsp;
              <img
                className="test_image"
                src={downlooadicon}
                alt="https://radha567.com/"
              />
            </button> */}

            <img
              onClick={(e) => download(e)}
              className="da-download-btn"
              src={downloadbuttonn}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
