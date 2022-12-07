import React from "react";
import { Link } from "react-router-dom";
import "./modules/home.css";
import ReactApexChart from "react-apexcharts";

const number = 2030;
const total = 3000;
const state = {
    series: [number, total - number],

    options: {
        dataLabels: {
            enabled: false,
        },

        fill: {
            colors: ["#F44336", "#ffffff"],
        },
        labels: ["総摂取カロリー", "残り摂取カロリー"],
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
    const number = 1000;
    return (
        <div>
            <ReactApexChart
                options={state.options}
                series={state.series}
                type="donut"
                height={550}
            />
            {/* <Doughnut data={data} width={1349} height={559}/> */}
            <ul className="na">
                <li>
                    <Link to="eated-list">
                        <span class="material-symbols-outlined">
                            restaurant
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/shop-recommend">
                        <span class="material-symbols-outlined">
                            storefront
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/graph">
                        <span class="material-symbols-outlined">
                            show_chart
                        </span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Home;
