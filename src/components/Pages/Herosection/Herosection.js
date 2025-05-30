import React, { useEffect, useState } from "react";
import "../../assets/css/Herosection.css";
import { GET_CONTACT } from "../../service/admin.service";
import { downloadAPK } from "../../Helpers/DownloadAPK";
// import heroimage from "../../../RichImages/Bannerimg.jpg";
import activeuser from "../../../RichImages/active.svg";
import gameicon from "../../../RichImages/game.svg";
import supporticon from "../../../RichImages/support.svg";
import call from "../../../RichImages/whatspp.svg";
import whatspp from "../../../RichImages/call.svg";
import heroimagerich from "../../../RichImages/radhahero.png";
import clickhand from "../../../RichImages/clickhand.gif";
import headerLog from "../../../RichImages/updatedlogo.svg";

const Section2 = () => {
  const [getData, setgetData] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const getResponseData = async () => {
    const res = await GET_CONTACT();
    setgetData(res.data[0]);
  };
  useEffect(() => {
    getResponseData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isIPhoneXR = windowWidth === 414 || windowWidth === 896;

  const download = async () => {
    await downloadAPK();
  };
  return (
    <>
      <div className="container-fluid  p-2">
        <div className="row newheroabcd">
          {/* Left Column with Text */}
          <div className="col-md-6 parent-class">
            <h1 className="custom-text">Welcome To Radha567</h1>
            <p className="lead">
              Play Big, Win Big
              <br /> Only&nbsp;On&nbsp;Radha&nbsp;567
            </p>

            {/* <div className="second-parent">
              <a
                href="tel:+919931437143"
                // className="btn btn-custom me-3"
                class="download-button new-btn"
              >
                Call Now &nbsp;
                <img style={{ height: "18px" }} src={call} />
              </a>
              <a
                href={`https://wa.me/+${getData && getData.number}`}
                class="download-button new-btn "
              >
                WhatsApp &nbsp;
                <img style={{ height: "18px" }} src={whatspp} />
              </a>
            </div> */}
            {/* <p className="mt-3 contact-info">
              Connect With Phone Call
              <br />
            </p>
            <span className="contact-info contact-number">
              +91 {getData && getData.number}
              +91&nbsp;9876543210
            </span> */}
            {/* <div>
              <div className="images-main-herosection col-md-12 py-3">
                <div className="multi-image-main">
                  <img
                    className="herosection-images"
                    src={activeuser}
                    alt="https://radha567.com/"
                  />
                  <p>Active&nbsp;User</p>
                  <h1>1M +</h1>
                </div>
                <div className="multi-image-main">
                  <img
                    className="herosection-images"
                    src={gameicon}
                    alt="https://radha567.com/"
                  />
                  <p className="">Games</p>
                  <h1 className="">25M+</h1>
                </div>
                <div className="multi-image-main">
                  <img
                    className="herosection-images"
                    src={supporticon}
                    alt="https://radha567.com/"
                  />
                  <p>Support</p>
                  <h1>24/7</h1>
                </div>
              </div>
            </div> */}
          </div>
          {/* when mobile ... */}
          <div className="mobileonly-states">
            <div className="multi-image-main">
              <img
                className="herosection-images"
                src={activeuser}
                alt="https://radha567.com/"
              />
              <p>Active&nbsp;User</p>
              <h1>1M +</h1>
            </div>
            <div className="multi-image-main">
              <img
                className="herosection-images"
                src={gameicon}
                alt="https://radha567.com/"
              />
              <p className="">Games</p>
              <h1 className="">25M+</h1>
            </div>
            <div className="multi-image-main">
              <img
                className="herosection-images"
                src={supporticon}
                alt="https://radha567.com/"
              />
              <p>Support</p>
              <h1>24/7</h1>
            </div>
          </div>
          {/* Right Column with Image */}
          <div className="col-md-6 text-center">
            <img
              src={heroimagerich}
              alt="https://radha567.com/"
              className="banner-img"
            />
          </div>
        </div>

        {/* <div className="column second-parent">
          <a
            // href={`tel:+91${getData && getData.number}`}
            href={`tel:+919876543210`}
            // className="btn btn-custom me-3"
            class="download-button new-btn"
          >
            Call Now &nbsp;
            <img style={{ height: "18px" }} src={call} alt="" />
          </a>
          <a
            // href={`https://wa.me/+${getData && getData.number}`}
            href={`https://wa.me/+9876543210`}
            // href={`https://wa.me/+919999999999`}

            class="download-button new-btn"
          >
            WhatsApp &nbsp;
            <img style={{ height: "18px" }} src={whatspp} alt="" />
          </a>
        </div> */}

        {/* when mobile.... */}
        <button
          className="col-md-10 col-10 move-color   my-3 mb-4 mobileonly-button"
          onClick={download}
        >
          <div className="download-icon">
            <i
              className="fa-2x fa fa-download  custom-color"
              aria-hidden="true"
            />
          </div>
          <h1 className="mb-0 font-400 curser-pointer">Download App</h1>
        </button>
        <div class="connect-section">
          <div class="connect-left">
            <p className="connect-title">
              Connect With Phone Call
              <br />
            </p>
            <p class="connect-number">+91&nbsp;{getData && getData.number}</p>
            <div class="connect-buttons">
              <a
                href={`tel:+91${getData && getData.number}`}
                // href={`tel:+919876543210`}
                // className="btn btn-custom me-3"
                class="download-button new-btn"
              >
                Call Now &nbsp;
                <img style={{ height: "18px" }} src={call} alt="" />
              </a>
              <a
                href={`https://wa.me/+${getData && getData.number}`}
                // href={`https://wa.me/+9876543210`}
                // href={`https://wa.me/+919999999999`}

                class="download-button new-btn"
              >
                WhatsApp &nbsp;
                <img style={{ height: "18px" }} src={whatspp} alt="" />
              </a>
            </div>
          </div>

          <div class="connect-right seenonlargescreen">
            <div className="multi-image-main">
              <img
                className="herosection-images"
                src={activeuser}
                alt="https://radha567.com/"
              />
              <p>Active&nbsp;User</p>
              <h1>1M +</h1>
            </div>
            <div className="multi-image-main">
              <img
                className="herosection-images"
                src={gameicon}
                alt="https://radha567.com/"
              />
              <p className="">Games</p>
              <h1 className="">25M+</h1>
            </div>
            <div className="multi-image-main">
              <img
                className="herosection-images"
                src={supporticon}
                alt="https://radha567.com/"
              />
              <p>Support</p>
              <h1>24/7</h1>
            </div>
          </div>
        </div>

        {/* when desktop... */}
        <button
          className="col-md-10 col-10 move-color seenonlargescreen   my-3 mb-4"
          onClick={download}
        >
          <div className="download-icon">
            <i
              className="fa-2x fa fa-download  custom-color"
              aria-hidden="true"
            />
          </div>
          <h1 className="mb-0 font-400 curser-pointer">Download App</h1>
        </button>
      </div>

      {/* <div className="images-main-herosection col-md-12 py-3">
        <div></div>

        <div className="multi-image-main">
          <img
            className="herosection-images"
            src={activeuser}
            alt="https://radha567.com/"
          />
          <p>Active User</p>
          <h1>1M +</h1>
        </div>
        <div className="multi-image-main">
          <img
            className="herosection-images"
            src={gameicon}
            alt="https://radha567.com/"
          />
          <p className="">Games</p>
          <h1 className="">25 +</h1>
        </div>
        <div className="multi-image-main">
          <img
            className="herosection-images"
            src={supporticon}
            alt="https://radha567.com/"
          />
          <p>Support</p>
          <h1>24/7</h1>
        </div>
        <div></div>
      </div> */}
    </>
  );
};

export default Section2;
