import React, { useState } from "react";
import "../assets/css/Section4.css";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import { downloadAPK } from "../Helpers/DownloadAPK";
import stars from "../../RichImages/stars.svg";
import info from "../../RichImages/info.svg";
import greenicon from "../../RichImages/greenicon.svg";
import redicon from "../../RichImages/redicon.svg";

const Section4 = ({ GameData, title, showPana }) => {
  const [ModalData, setModalData] = useState([]);

  const [show, setShow] = useState(false);
  const [RowData, setRowData] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = (data) => {
    setShow(true);
    setRowData(data);
  };

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
  // console.log(ModalData);
  return (
    <>
      <div className="available-component">
        <div className="heding-sec heading-sec-custom cust-m text-center">
          <div className="d-flex text-center justify-content-center align-items-center">
            <img
              className="game-icons-img"
              // style={{ height: "28px" }}
              src={stars}
              alt="https://radha567.com/"
            />
            <h5
              className="mb-0 ms-2 me-2 rich-game-title"
              style={{ fontSize: "28px" }}
            >
              {title}
            </h5>
            <img
              className="game-icons-img"
              // style={{ height: "28px" }}
              src={stars}
              alt="https://radha567.com/"
            />
          </div>
          <p className="rich-game-title-text">
            Most Trusted Game Available on our Platform
          </p>
        </div>

        <div className="container">
          <div className="row">
            {GameData &&
              GameData?.map((data, index) => (
                <div key={index} className="col-xl-4 col-lg-4 col-md-6 mb-3">
                  <div className="second-card">
                    <div className="top-sec second-card-top-sec d-flex justify-content-between align-items-center">
                      <div className="card-text">
                        <div className="card-text-main">
                          <h5
                            className="second-card-title"
                            // style={{ fontSize: "17px" }}
                          >
                            {data.providerName.toUpperCase()}
                            <span
                              onClick={() => {
                                handleShow(data);
                                setModalData(showData(data?.gameDetails));
                              }}
                            >
                              <img className="img" src={info} alt="" />
                            </span>
                          </h5>
                          <h3 className="second-card-text">
                            {data.providerResult}
                          </h3>
                          {/* <h6
                            className={`mb-1 batting_size ${
                              showData(data?.gameDetails)?.message ===
                              "Close for today"
                                ? "close-for-today"
                                : showData(data?.gameDetails)?.message ===
                                  "Running for close"
                                ? "betting-closed"
                                : showData(data?.gameDetails)?.message ===
                                  "Running for open"
                                ? "default-message"
                                : "default-message"
                            }`}
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
                            className={`text-left mb-2 batting_size ${
                              showData(data?.gameDetails)?.message ===
                              "Close for today"
                                ? "close-for-today"
                                : showData(data?.gameDetails)?.message ===
                                  "Running for close"
                                ? "betting-closed"
                                : showData(data?.gameDetails)?.message ===
                                  "Running for open"
                                ? "default-message"
                                : "default-message"
                            }`}
                            style={{
                              fontSize: "15px",
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
                            {/* {showData(data?.gameDetails)?.message} */}
                            {/* {console.log(showData(data?.gameDetails)?.message)} */}
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
                                downloadFile(
                                  showData(data?.gameDetails)?.message
                                )
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
                    <div className="bottom-sec d-flex align-items-center justify-content-evenly">
                      {showPana ? (
                        <Link
                          to={`/pana-chart/${data?.providerName
                            .toLowerCase()
                            .replace(/\s+/g, "")}/pana-chart`}
                          state={{ title: data?.providerName, id: data._id }}
                          className="chat-btn a-tag-css"
                        >
                          <span>Pana Chart</span>
                        </Link>
                      ) : (
                        ""
                      )}
                      <Link
                        to={`/jodi-chart/${data?.providerName
                          .toLowerCase()
                          .replace(/\s+/g, "")}/jodi-chart`}
                        state={{ title: data?.providerName, id: data._id }}
                        className="chat-btn a-tag-css "
                      >
                        <span>Jodi Chart</span>
                      </Link>
                    </div>
                    <div class="result__time d-flex justify-content-center">
                      <span>
                        Open Bids &nbsp;
                        <strong>
                          {showData(data?.gameDetails) != undefined &&
                            showData(data?.gameDetails)?.OBT}
                        </strong>
                      </span>
                      <span>
                        Close Bids &nbsp;
                        <strong style={{ opacity: 0.7 }}>
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

      {/* .................................................. */}

      {/* <Modal show={show} centered onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{RowData?.providerName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped>
            <thead className="text-center bg-primary ">
              <tr>
                <th className="text-black fw-semibold">
                  <i class="fa fa-clock-o" aria-hidden="true"></i> Open Bid Time
                </th>
                <th className="text-black fw-semibold">
                  <i class="fa fa-clock-o" aria-hidden="true"></i> Close Bid
                  Time
                </th>
                <th className="text-black fw-semibold">
                  <i class="fa fa-clock-o" aria-hidden="true"></i> Open Bid
                  Result Time
                </th>
                <th className="text-black fw-semibold">
                  <i class="fa fa-clock-o" aria-hidden="true"></i> Close Bid
                  Result Time
                </th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <td>{ModalData?.OBT}</td>
                <td>{ModalData?.CBT}</td>
                <td>{ModalData?.OBRT}</td>
                <td>{ModalData?.CBRT}</td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
      </Modal> */}

      <Modal
        show={show}
        centered
        onHide={handleClose}
        size="md"
        className="ptm-modal"
      >
        <Modal.Header closeButton className="ptm-header">
          <div className="ptm-icon">
            {ModalData?.message === "Close for today" ? (
              <img
                className="playicon"
                src={redicon}
                style={{ marginRight: "8px" }}
              />
            ) : (
              <img className="playicon" src={greenicon} />
            )}
          </div>
          <div className="closeicon" onClick={handleClose}>
            ✖
          </div>
          <Modal.Title className="ptm-title">
            {RowData?.providerName}
          </Modal.Title>
          <p
            style={{
              color:
                ModalData?.message === "Close for today"
                  ? "red"
                  : ModalData?.message == "Running for close"
                  ? "#4BB543"
                  : ModalData?.message == "Running for open"
                  ? "#4BB543"
                  : "#4BB543",
            }}
          >
            {ModalData?.message === "Close for today"
              ? "Close For Today"
              : ModalData?.message == "Betting is running for close"
              ? "Running For Close"
              : ModalData?.message == "Betting is running for open"
              ? "Running For Open"
              : "Running For Open"}
          </p>
        </Modal.Header>

        <Modal.Body>
          <div className="ptm-time-box">
            <div className="ptm-time-header">
              {ModalData?.message === "Close for today"
                ? "Close For Today"
                : ModalData?.message == "Betting is running for close"
                ? "Running For Close"
                : ModalData?.message == "Betting is running for open"
                ? "Running For Open"
                : "Running For Open"}
            </div>

            <div className="ptm-time-row">
              <span className="ptm-label">Open Bid Time</span>
              <span className="ptm-value">{ModalData?.OBT}</span>
            </div>
            <div className="ptm-time-row">
              <span className="ptm-label">Close Bid Time</span>
              <span className="ptm-value">{ModalData?.CBT}</span>
            </div>
            <div className="ptm-time-row">
              <span className="ptm-label">Open Bid Result Time</span>
              <span className="ptm-value">{ModalData?.OBRT}</span>
            </div>
            <div className="ptm-time-row">
              <span className="ptm-label">Close Bid Result Time</span>
              <span className="ptm-value">{ModalData?.CBRT}</span>
            </div>
          </div>

          <div className="ptm-footer">
            <button className="ptm-ok-button" onClick={handleClose}>
              OK
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Section4;
