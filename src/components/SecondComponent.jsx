import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";

import "./SecondComponent.css";

const SecondComponent = () => {
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const percentages = [78, 99, 30];
  const names = ["Average", "Top", "Me"];

  useEffect(() => {
    const pieChartData = [
      { data: [78, 22], label: "Hi1" },
      { data: [60, 40], label: "Hi2" },
      { data: [90, 10], label: "Hi3" },
    ];

    const barCanvas = document.getElementById("myChart");
    let myBarChart = null;
    let myDonutCharts = [];

    const destroyCharts = () => {
      if (myBarChart) {
        myBarChart.destroy();
      }
      myDonutCharts.forEach((chart) => {
        chart.destroy();
      });
      myDonutCharts = [];
    };

    pieChartData.forEach((data, index) => {
      const canvas = document.getElementById(`myDonutChart${index}`);
      const ctx = canvas.getContext("2d");

      const myDonutChart = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: [data.label, ""],
          datasets: [
            {
              label: data.label,
              data: data.data,
              backgroundColor: ["#24d6aa", "#d3f7ee"],
              borderWidth: 0,
              hoverOffset: 4,
            },
          ],
        },
        options: {
          responsive: true,
          cutout: "80%",
          plugins: {
            legend: {
              display: false,
            },
            tooltip: false,
            rendering: {
              onRender: (chart) => {
                const ctx = chart.ctx;
                const width = chart.width;
                const height = chart.height;

                ctx.font = "14px Arial";
                ctx.fillStyle = "black";
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";

                const data = chart.data.datasets[0].data;
                const labels = chart.data.labels;

                let total = 0;
                data.forEach((value) => {
                  total += value;
                });

                const centerX = width / 2;
                const centerY = height / 2;
                let currentAngle = -0.5 * Math.PI;

                for (let i = 0; i < data.length; i++) {
                  const angle = (Math.PI * 2 * data[i]) / total;
                  const radius = Math.min(width, height) / 2;

                  const x =
                    centerX + Math.cos(currentAngle + angle / 2) * radius;
                  const y =
                    centerY + Math.sin(currentAngle + angle / 2) * radius;

                  ctx.fillText(`${labels[i]}: ${data[i]}%`, x, y);

                  currentAngle += angle;
                }
              },
            },
          },
        },
      });

      myDonutCharts.push(myDonutChart);

      return () => {
        if (myDonutChart) {
          myDonutChart.destroy();
        }
      };
    });

    const ctxBar = barCanvas.getContext("2d");
    const gradient = ctxBar.createLinearGradient(0, 0, 0, 250);
    gradient.addColorStop(0, "rgb(133, 175, 255)");
    gradient.addColorStop(0.5, "rgb(73, 53, 255)");
    gradient.addColorStop(1, "rgb(0, 0, 50)");

    myBarChart = new Chart(ctxBar, {
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
            min: 0,
            max: 300,
            stepSize: 3,
          },
        },
      },
    });
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 481);

      setIsMediumScreen(window.innerWidth >= 481 && window.innerWidth <= 767);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      destroyCharts();
      if (myBarChart) {
        myBarChart.destroy();
      }
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);
  return (
    <>
      {isSmallScreen ? (
        <div className="secound_container">
          <div className="secound_wrapper">
            <div className="income">Retirement Income</div>
            <div className="starting">Starting Year 2056</div>

            <div className="ul_div">
              <div className="goal">
                <div className="goal_price">$300,000</div>
                <div className="goal_grey">My Goal</div>
                <hr
                  style={{
                    border: "1px solid #c8dbff",
                    width: "90%",
                    marginTop: "5% ",
                    marginLeft: "2%",
                  }}
                />
              </div>
              <ul>
                <li>
                  <div className="price">59%</div>
                  <div className="grey">Goal Achieved</div>
                  <hr
                    style={{
                      border: "1px solid #c8dbff",
                      width: "90%",
                      marginTop: "5% ",
                      marginLeft: "2%",
                    }}
                  />{" "}
                </li>
                <li>
                  <div className="price">$300</div>
                  <div className="grey">Est. Monthly Income</div>
                  <hr
                    style={{
                      border: "1px solid #c8dbff",
                      width: "90%",
                      marginTop: "5% ",
                      marginLeft: "2%",
                    }}
                  />{" "}
                </li>
              </ul>
            </div>
            <div className="linegraph">
              <div className="linegraph_title">Contributions Overtime</div>
              <ul>
                <li className="graph_list ">
                  <div
                    style={{ backgroundColor: "blue" }}
                    className="color"
                  ></div>
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
              <div className="lastcontainer_list">
                <div
                  style={{
                    padding: "2px 10px",
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-start",
                    flexDirection: "column",
                  }}
                >
                  <div className="flex">
                    <div className="fontsmall">Age:</div>
                    <span className="s1"> Under30</span>

                    <div className="dropdown-arrow"></div>
                  </div>
                  <hr className="greyline" />
                  <div className="flex">
                    <div className="fontsmall">Salary:</div>
                    <span className="s1"> K20 K 30</span>

                    <div className="dropdown-arrow"></div>
                  </div>
                  <hr className="greyline" />

                  <div className="flex">
                    <div className="fontsmall">Gender:</div>
                    <span className="s1"> Male</span>

                    <div className="dropdown-arrow"></div>
                  </div>
                  <hr className="greyline" />
                </div>

                <div className="piecharts">
                  {[...Array(3)].map((_, index) => (
                    <div className="column">
                      <div className="pie_container" key={index}>
                        <canvas
                          id={`myDonutChart${index}`}
                          width="80"
                          height="80"
                        ></canvas>
                        <div
                          id={`pieText${index}`}
                          style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            fontSize: "16px",
                            fontWeight: "bold",
                            color: "black",
                          }}
                        >
                          {percentages[index]}%
                        </div>
                      </div>
                      <div
                        style={{
                          fontSize: "12px",
                          marginTop: "10px",
                          fontWeight: 600,
                          marginLeft: "30%",
                        }}
                      >
                        {names[index]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="secound_container">
          <div className="secound_wrapper">
            <div className="income">Retirement Income</div>
            <div className="starting">Starting Year 2056</div>

            <div className="ul_div">
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
                  <div
                    style={{ backgroundColor: "blue" }}
                    className="color"
                  ></div>
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
              <div className="lastcontainer_list">
                <div>
                  <div className="flex">
                    <div className="fontsmall">Age:</div>
                    <span className="s1"> Under30</span>

                    <div className="dropdown-arrow"></div>
                  </div>
                  <hr className="greyline" />
                  <div className="flex">
                    <div className="fontsmall">Salary:</div>
                    <span className="s1"> K20 K 30</span>

                    <div className="dropdown-arrow"></div>
                  </div>
                  <hr className="greyline" />

                  <div className="flex">
                    <div className="fontsmall">Gender:</div>
                    <span className="s1"> Male</span>

                    <div className="dropdown-arrow"></div>
                  </div>
                  <hr className="greyline" />
                </div>

                <div className="piecharts">
                  {[...Array(3)].map((_, index) => (
                    <div className="column">
                      <div className="pie_container" key={index}>
                        <canvas
                          id={`myDonutChart${index}`}
                          width="80"
                          height="80"
                        ></canvas>
                        <div
                          id={`pieText${index}`}
                          style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            fontSize: "16px",
                            fontWeight: "bold",
                            color: "black",
                          }}
                        >
                          {percentages[index]}%
                        </div>
                      </div>
                      <div
                        style={{
                          fontSize: "12px",
                          marginTop: "10px",
                          fontWeight: 600,
                          marginLeft: "30%",
                        }}
                      >
                        {names[index]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SecondComponent;
