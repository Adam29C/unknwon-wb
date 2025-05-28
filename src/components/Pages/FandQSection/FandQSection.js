import React, { useEffect, useState } from "react";
// import star from "../../../images/Star-Icon.svg";
import Accordion from "react-bootstrap/Accordion";
import star from "../../../RichImages/stars.svg";

const FandQSection = () => {
  const [isOpen, setIsOpen] = useState({
    ramabet: false,
    games: false,
    license: false,
    depositWithdrawal: false,
    whyChoose: false,
  });

  const toggleAccordion = (section) => {
    setIsOpen((prevState) => {
      const newState = Object.keys(prevState).reduce((acc, key) => {
        acc[key] = false;
        return acc;
      }, {});

      newState[section] = !prevState[section];
      return newState;
    });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="">
          <div className="heading-sec m-4 d-flex flex-row text-center justify-content-center align-items-center my-5">
            <img
              className="game-icons-img"
              src={star}
              alt="https://Radha 567.com/"
            />{" "}
            <h1 className="mb-0 ms-2 me-2 rich-game-title">
              Frequently Asked Questions
            </h1>
            <img
              className="game-icons-img"
              src={star}
              alt="https://Radha 567.com/"
            />
          </div>

          <div className="accordion-container">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-12">
                <div
                  className={`accordion-section ${
                    isOpen.ramabet ? "acc-bg-color" : ""
                  }`}
                >
                  <div
                    className="d-flex align-items-center justify-content-between accordion-header"
                    onClick={() => toggleAccordion("ramabet")}
                  >
                    <div className="faq-title">What is Radha567 ?</div>
                    <div className="collapse-icon">
                      <i
                        className={`gry-col fa ${
                          isOpen.ramabet
                            ? "fa-chevron-down"
                            : "fa-chevron-right"
                        }`}
                      ></i>
                    </div>
                  </div>
                  {isOpen.ramabet && (
                    <div className="description-text">
                      <br />
                      Radha567 Is A Satta Matka Gaming App Where You Can Play
                      Games And Win Jackpot.
                    </div>
                  )}
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-12">
                <div
                  className={`accordion-section ${
                    isOpen.games ? "acc-bg-color" : ""
                  }`}
                >
                  <div
                    className="d-flex align-items-center justify-content-between accordion-header"
                    onClick={() => toggleAccordion("games")}
                  >
                    <div className=" faq-title">
                      What games are available on Radha567 ?
                    </div>
                    <div className="collapse-icon">
                      <i
                        className={`gry-col fa ${
                          isOpen.games ? "fa-chevron-down" : "fa-chevron-right"
                        }`}
                      ></i>
                    </div>
                  </div>
                  {isOpen.games && (
                    <div className="description-text">
                      <br />
                      Popular Satta Matka Games Like Kalyan, Sridevi, Milan,
                      Time Bazar & Rajdhani, Main bazar etc..
                    </div>
                  )}
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-12">
                <div
                  className={`accordion-section ${
                    isOpen.depositWithdrawal ? "acc-bg-color" : ""
                  }`}
                >
                  <div
                    className="d-flex align-items-center justify-content-between accordion-header"
                    onClick={() => toggleAccordion("depositWithdrawal")}
                  >
                    <div className="faq-title">
                      What is the minimum Deposit and Withdrawal Amount ?
                    </div>
                    <div className="collapse-icon">
                      <i
                        className={`gry-col fa ${
                          isOpen.depositWithdrawal
                            ? "fa-chevron-down"
                            : "fa-chevron-right"
                        }`}
                      ></i>
                    </div>
                  </div>
                  {isOpen.depositWithdrawal && (
                    <div className="description-text">
                      <br />
                      In Radha567 , We Allow Minimum of 100.00 Rs/- Deposit and
                      500.00 Rs/- Withdrawals.
                    </div>
                  )}
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-12">
                <div
                  className={`accordion-section ${
                    isOpen.license ? "acc-bg-color" : ""
                  }`}
                >
                  <div
                    className="d-flex align-items-center justify-content-between accordion-header"
                    onClick={() => toggleAccordion("license")}
                  >
                    <div className="faq-title">
                      Does Radha567 have License ?
                    </div>
                    <div className="collapse-icon">
                      <i
                        className={`gry-col fa ${
                          isOpen.license
                            ? "fa-chevron-down"
                            : "fa-chevron-right"
                        }`}
                      ></i>
                    </div>
                  </div>
                  {isOpen.license && (
                    <div className="description-text">
                      <br />
                      Yes, Radha567 Has A Sub License In Malta. All Rights That
                      Allows To Operate Software Worldwide.
                    </div>
                  )}
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-12">
                <div
                  className={`accordion-section ${
                    isOpen.whyChoose ? "acc-bg-color" : ""
                  }`}
                >
                  <div
                    className="d-flex align-items-center justify-content-between accordion-header"
                    onClick={() => toggleAccordion("whyChoose")}
                  >
                    <div className=" faq-title">
                      Why Choose Radha567 Among Other Providers ?
                    </div>
                    <div className="collapse-icon">
                      <i
                        className={`gry-col fa ${
                          isOpen.whyChoose
                            ? "fa-chevron-down"
                            : "fa-chevron-right"
                        }`}
                      ></i>
                    </div>
                  </div>
                  {isOpen.whyChoose && (
                    <div className="description-text">
                      <br />
                      Radha567 Is The Most Trusted Gaming Provider Worldwide.
                    </div>
                  )}
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FandQSection;
