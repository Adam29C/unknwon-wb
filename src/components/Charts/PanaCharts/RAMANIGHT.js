import { RAMANIGHT } from "./Chart.config";
import { redJodi } from "../JodiCharts/Chart.config";
import { fa_time } from "../../Helpers/getWeekDays";

const ShreeDevi = ({ chartData }) => {
  return (
    <div>
      <table className="table fw-bold" border="collapse">
        <thead>
          <tr>
            <th className="cc">Date</th>
            <th className="cc">MON</th>
            <th className="cc">TUE</th>
            <th className="cc">WED</th>
            <th className="cc">THU</th>
            <th className="cc">FRI</th>
            <th className="cc">SAT</th>
            <th className="cc">SUN</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(RAMANIGHT).map(([week, days], index) => {
            let splitDate = week.split(" ");

            return (
              <tr key={index}>
                <td className="cc td-width-13">
                  <div className="pana-chart-main">
                    <span className="result_date">
                      {splitDate[0]} <br />
                      {splitDate[1]} <br />
                      {splitDate[2]}
                    </span>
                  </div>
                </td>

                {Object.entries(days).map(([day, values], id) => (
                  <td key={id} className="cc">
                    <div className="kalyan-chart-number-black">
                      {values.map((value, valueIndex) => (
                        <span
                          key={valueIndex}
                          className={`cp ${
                            redJodi
                              .map((j) => parseInt(j))
                              .includes(parseInt(value))
                              ? "text-danger"
                              : "text-dark"
                          }`}
                        >
                          {value}
                        </span>
                      ))}
                    </div>
                  </td>
                ))}
              </tr>
            );
          })}

          {chartData &&
            chartData.map((item1) => (
              <tr key={item1.id}>
                <td className="cc td-width-13">
                  <div className="pana-chart-main">
                    <span className="result_date">{item1.weekStartDay} </span>
                    <span className="result_date">to</span>
                    <span className="result_date"> {item1.weekEndDay}</span>
                  </div>
                </td>
                {item1.data.map((nestedItem) => {
                  const value0 = nestedItem.relatedData[0]
                    ? parseInt(nestedItem.relatedData[0].winningDigitFamily)
                    : null;
                  const value1 = nestedItem.relatedData[1]
                    ? parseInt(nestedItem.relatedData[1].winningDigitFamily)
                    : null;
                  const combinedValue = `${value0}${value1}`;

                  const isInRedJodi = redJodi
                    .map((j) => parseInt(j))
                    .includes(parseInt(combinedValue));

                  return (
                    <td key={nestedItem.id} className="cc">
                      <div className="kalyan-chart-number-black">
                        <span
                          className={`cp ${
                            isInRedJodi ? "text-danger" : "text-dark"
                          }`}
                        >
                          {nestedItem.relatedData[0] &&
                            nestedItem.relatedData[0].winningDigit}
                        </span>
                        <span
                          className={`cp ${
                            isInRedJodi ? "text-danger" : "text-dark"
                          }`}
                        >
                          {nestedItem.relatedData[0] &&
                            nestedItem.relatedData[0].winningDigitFamily}
                          {nestedItem.relatedData[1] &&
                            nestedItem.relatedData[1].winningDigitFamily}
                        </span>
                        <span
                          className={`cp ${
                            isInRedJodi ? "text-danger" : "text-dark"
                          }`}
                        >
                          {nestedItem.relatedData[1] &&
                            nestedItem.relatedData[1].winningDigit}
                        </span>
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShreeDevi;
