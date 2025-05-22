import React from "react";
import Chart_Container from "./Chart_Container";
import stars from "../../../RichImages/stars.svg";
const JodiChart = (props) => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center ">
        <div className="backgroundoftitle">
          <img
            className="game-icons-img"
            src={stars}
            alt="https://star143.com/"
          />
          <h1 class="mb-0 ms-2 me-2 rich-game-title backgroundoftitle">
            All&nbsp;Games&nbsp;Charts
          </h1>
          <img
            className="game-icons-img"
            src={stars}
            alt="https://star143.com/"
          />
        </div>
      </div>
      <Chart_Container
        {...props}
        responsive_Class={"col-xxl-6 col-xl-6  col-md-6 "}
      />
    </>
  );
};

export default JodiChart;
