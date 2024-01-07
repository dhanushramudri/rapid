import React from "react";
import { useEffect } from "react";
import Chart from "chart.js/auto";
import "./SecondComponent.css";

const SecondComponent = () => {
  useEffect(() => {
    const canvas = document.getElementById("myChart");

    const ctx = canvas.getContext("2d");

    const gradient = ctx.createLinearGradient(0, 0, 0, 250);
    gradient.addColorStop(0, "rgb(133, 175, 255)"); // Sky Blue
    gradient.addColorStop(0.5, "rgb(73, 53, 255)"); // Light Blue
    gradient.addColorStop(1, "rgb(0, 0, 50)"); // Darker Blue

    let myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "20",
          "",
          "25",
          "",
          "30",
          "",
          "35",
          "",
          "40",
          "",
          "60",
          "",
          "65",
        ],
        datasets: [
          {
            label: "# of Votes",
            data: [
              25, 50, 75, 100, 125, 150, 175, 200, 225, 245, 265, 280, 300,
            ],
            borderWidth: 1,
            barThickness: 15,
            backgroundColor: gradient,
          },
        ],
      },
      options: {
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            grid: {
              display: false,
            },
            min: 0, // Set minimum value of y-axis
            max: 300, // Set maximum value of y-axis
            stepSize: 3, // Set step size
          },
        },
      },
    });

    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
  }, []);

  return (
    <div class="secound_container">
      <div class="secound_wrapper">
        <div class="income">Retirement Income</div>
        <div class="starting">Starting Year 2056</div>

        <div class="ul_div">
          <ul>
            <li>
              <div className="price">$300,000</div>
              <div className="grey">My Goal</div>
              <hr />
            </li>
            <li>
              <div className="price">59%</div>
              <div className="grey">Goal Achieved</div>
              <hr />
            </li>
            <li>
              <div className="price">$300</div>
              <div className="grey">Est. Monthly Income</div>
              <hr />
            </li>
          </ul>
        </div>
        <div className="linegraph">
          <div className="linegraph_title">Contributions Overtime</div>
          <ul style={{ margin: 0 }}>
            <li className="graph_list ">
              <div style={{ backgroundColor: "blue" }} className="color"></div>
              <div className="grey">Employee:</div>
              <div className="list_price">K 73,500</div>
            </li>
            <li className="graph_list ">
              <div className="color"></div>
              <div className="grey">Employee:</div>
              <div className="list_price">K 52,500</div>
            </li>
            <li className="graph_list ">
              <div
                style={{ backgroundColor: "skyblue" }}
                className="color"
              ></div>
              <div className="grey">Total Interest:</div>
              <div className="list_price">K 73,500</div>
            </li>
          </ul>
          <div className="mychart_line">
            <canvas
              id="myChart"
              style={{
                boxSizing: "border-box",
                display: "block",
                height: "230px",
                width: "700px",
              }}
              width="750"
              height="287"
            ></canvas>
          </div>
        </div>
        <div className="lastcontainer">
          <div className="question">How do I compare to my peers?</div>
          <div className="grey">
            These numbers represent current goal achievement
          </div>
          <ul className="lastcontainer_ul">
            <li className="flex">
              <div>Age:</div>
              <span> Under 30</span>

              <div class="dropdown-arrow"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SecondComponent;
