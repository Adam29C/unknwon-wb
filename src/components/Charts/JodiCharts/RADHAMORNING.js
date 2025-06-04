import React from "react";
import { RADHAMORNING } from "../PanaCharts/Chart.config";
import { redJodi } from "./Chart.config";
const ShreeDay = ({ chartData }) => {
  return (
    <div>
      <table className="table fw-bold" border="collapse">
        <thead>
          <tr>
            <th className="ch">MON</th>
            <th className="ch">TUE</th>
            <th className="ch">WED</th>
            <th className="ch">THU</th>
            <th className="ch">FRI</th>
            <th className="ch">SAT</th>
            <th className="ch">SUN</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(RADHAMORNING).map(([week, days], index) => {
            return (
              <tr key={index}>
                {Object.entries(days).map(([day, values], id) => (
                  <td key={id} className="cc">
                    <div className="kalyan-chart-number-black">
                      <span
                        className={`cp ${
                          redJodi
                            .map((j) => parseInt(j))
                            .includes(parseInt(values[1]))
                            ? "text-danger"
                            : "text-dark"
                        }`}
                      >
                        {values[1]}
                      </span>
                    </div>
                  </td>
                ))}
              </tr>
            );
          })}

          {chartData &&
            chartData.map((item1) => {
              return (
                <tr key={item1.id}>
                  {item1.data.map((nestedItem) => {
                    const combine = `${nestedItem.relatedData?.[0]?.winningDigitFamily}${nestedItem.relatedData?.[1]?.winningDigitFamily}`;
                    return (
                      <td key={nestedItem.id}>
                        <div className="kalyan-chart-number-black">
                          <span
                            className={`cp ${
                              redJodi
                                .map((j) => parseInt(j))
                                .includes(parseInt(combine))
                                ? "text-danger"
                                : "text-dark"
                            }`}
                          >
                            {nestedItem.relatedData?.[0]?.winningDigitFamily}
                            {nestedItem.relatedData?.[1]?.winningDigitFamily}
                          </span>
                        </div>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ShreeDay;
