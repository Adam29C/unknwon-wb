import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import gameIcon from "../../../RichImages/game icon.gif";
import star from "../../../RichImages/stars.svg";
import info from "../../../RichImages/info.svg";
import greenicon from "../../../RichImages/greenicon.svg";
import redicon from "../../../RichImages/redicon.svg";

import { GET_ALL_STARTLINE_GAMES } from "../../service/admin.service";
import { downloadAPK } from "../../Helpers/DownloadAPK";
import { convertToAmPm } from "../../Helpers/getWeekDays";

const StartLine = () => {
  const [getData, setgetData] = useState([]);
  const [AppUrl, setAppUrl] = useState("");
  const getResponseData = async () => {
    const res = await GET_ALL_STARTLINE_GAMES();
    if (res.status) {
      setgetData(res.data);
      setAppUrl(res.appInfo);
    }
  };
  useEffect(() => {
    getResponseData();
  }, []);

  const showData = (data) => {
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    if (data.length > 0) {
      const result = [];
      for (const item of data) {
        if (
          weekday
            .map((day) => day.toLowerCase())
            .includes(item.gameDay.toLowerCase())
        ) {
          return item;
        }
      }
    }
  };

  const downloadFile = async () => {
    await downloadAPK();
  };

  return (
    <div>
      <div className="available-component">
        <div className="heding-sec heading-sec-custom cust-m text-center">
          <div className="d-flex text-center justify-content-center align-items-center">
            <img
              className="game-icons-img"
              src={star}
              alt="https://radha567.com/"
            />
            <h5 className="mb-0 ms-2 me-2 rich-game-title">STARLINE GAMES</h5>
            <img
              className="game-icons-img"
              src={star}
              alt="https://radha567.com/"
            />
          </div>
          <p className="rich-game-title-text">
            Most Trusted Game Available on our Platform
          </p>
        </div>
        <div className="container">
          <div className="row">
            {getData?.map((data, index) => (
              <div key={index} className="col-xl-4 col-lg-4 col-md-6 mb-3">
                <div className="second-card">
                  <div className="top-sec second-card-top-sec d-flex justify-content-between align-items-center">
                    <div className="card-text">
                      <div className="card-text-main">
                        <h5 className="second-card-title">
                          {data.providerName.toUpperCase()}
                        </h5>
                        <h3 className="second-card-text">
                          {data.providerResult}
                        </h3>

                        {/* <h6
                          className="mb-1"
                          style={{
                            color:
                              showData(data?.gameDetails) != undefined &&
                              showData(data?.gameDetails)?.message ==
                                "Close for today"
                                ? "red"
                                : showData(data?.gameDetails)?.message ==
                                  "Running for close"
                                ? "#4BB543"
                                : showData(data?.gameDetails)?.message ==
                                  "Running for open"
                                ? "#4BB543"
                                : "#4BB543",
                          }}
                        >
                          {showData(data?.gameDetails)?.message}
                        </h6> */}
                        <h6
                          className="mb-2"
                          style={{
                            fontWeight: 600,
                            color:
                              showData(data?.gameDetails) != undefined &&
                              showData(data?.gameDetails)?.message ==
                                "Close for today"
                                ? "red"
                                : showData(data?.gameDetails)?.message ==
                                  "Running for close"
                                ? "#4BB543"
                                : showData(data?.gameDetails)?.message ==
                                  "Running for open"
                                ? "#4BB543"
                                : "#4BB543",
                          }}
                        >
                          {/* {showData(data?.gameDetails)?.message}
                          <br/> */}
                          {showData(data?.gameDetails) != undefined &&
                          showData(data?.gameDetails)?.message ==
                            "Close for today"
                            ? "Close For Today"
                            : showData(data?.gameDetails)?.message ==
                              "Betting is running for close"
                            ? "Running For Close"
                            : showData(data?.gameDetails)?.message ==
                              "Betting is running for open"
                            ? "Running For Open"
                            : "Running For Open"}
                        </h6>
                      </div>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center">
                      {showData(data?.gameDetails)?.message ===
                      "Close for today" ? (
                        <div className="play-icon">
                          <a
                            href="#"
                            onClick={() =>
                              downloadFile(showData(data?.gameDetails)?.message)
                            }
                          >
                            <img
                              className="playicon"
                              src={redicon}
                              style={{ marginRight: "8px" }}
                            />
                          </a>
                        </div>
                      ) : (
                        <>
                          {" "}
                          <div className="play-icon zoom-in-zoom-out">
                            <a
                              href="#"
                              onClick={() =>
                                downloadFile(
                                  showData(data?.gameDetails)?.message
                                )
                              }
                            >
                              <img className="playicon" src={greenicon} />
                            </a>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  <div
                    className="bottom-sec d-flex align-items-center justify-content-start"
                    style={{ marginLeft: "17px" }}
                  >
                    <Link
                      to={`/starline/${data?.providerName
                        .toLowerCase()
                        .replace(/\s+/g, "")}`}
                      state={{ title: data?.providerName, id: data._id }}
                      className="chat-btn"
                      style={{ textDecoration: "none" }}
                    >
                      <span>Pana Chart</span>
                    </Link>
                  </div>
                  <div
                    class="result__time d-flex"
                    style={{ justifyContent: "space-around" }}
                  >
                    <span>
                      Open Bids &nbsp;
                      <strong>
                        {/* {convertToAmPm(showData(data?.gameDetails) != undefined &&
                          showData(data?.gameDetails)?.OBT)} */}
                        {showData(data?.gameDetails) != undefined &&
                          showData(data?.gameDetails)?.OBT}
                      </strong>
                    </span>
                    <span>
                      Close Bids &nbsp;
                      <strong>
                        {showData(data?.gameDetails) != undefined &&
                          showData(data?.gameDetails)?.CBT}
                      </strong>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartLine;
