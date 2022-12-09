import React from "react";
import ReactApexChart from "react-apexcharts";
const CalrieGraph = () => {
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
    return (
        <div>
            <ReactApexChart
                options={state.options}
                series={state.series}
                type="donut"
                className="chart-style"
            />
        </div>
    );
};

export default CalrieGraph;
