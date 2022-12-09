import React from "react";
import { Link } from "react-router-dom";
import "../modules/home.css";
import ReactApexChart from "react-apexcharts";
import axios from "axios";
import { useState, useEffect } from "react";

const number = 2030;
const total = 3000;
const state = {
    series: [number, total - number],

    options: {
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false, //横に出てくるタグを消す
        },
        // fill: {
        //     colors: ["#F44336", "#ffffff"],
        // },
        labels: ["総摂取カロリー", "残り摂取カロリー"],
        show: false,
        chart: {
            height: 350,
            type: "donut",
        },
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,
                        total: {
                            show: true,
                            showAlways: true,
                            label: "総摂取カロリー",
                            formatter: function (w) {
                                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                                return `${number}kcal`;
                            },
                        },
                    },
                },
            },
        },
    },
};

const Home = () => {
    const [calorie, setCalorie] = useState([]);

    useEffect(() => {
        axios
            .get("calorieIntake")
            .then((res) => {
                setCalorie(res.data.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    return (
        <div>
            {calorie.map((todo) => {
                return (
                    <div key={todo.id}>
                        {todo.food_name} {todo.calorie}
                    </div>
                );
            })}

            <ReactApexChart
                options={state.options}
                series={state.series}
                type="donut"
                height={550}
                className="chart-style"
            />
            <div className="parent">
                <ul className="na">
                    <li>
                        <Link to="/eated-list">
                            <span className="material-symbols-outlined">
                                restaurant
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/shops-recommend">
                            <span className="material-symbols-outlined">
                                storefront
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/graph">
                            <span className="material-symbols-outlined">
                                show_chart
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/setting">
                            <span className="material-symbols-outlined">
                                settings
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Home;
