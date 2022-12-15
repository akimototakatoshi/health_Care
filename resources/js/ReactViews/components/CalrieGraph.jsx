import React from "react";
import ReactApexChart from "react-apexcharts";
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const CalrieGraph = ({userData}) => {
    const { data, error, isLoading } = useSWR("calorieIntake", fetcher);

    if (error) return <div>failed to load</div>;
    if (isLoading) return <div>loading...</div>;

    console.log("iii",userData)
    let userdata = userData.data[0]
    console.log(userdata)

    function kisotaisya (){
        if(userdata.gender === 0){
        return Math.floor( (13.397 * ((userdata.height / 100) **2)*22 + 4.799 * userdata.height - 5.677 * userdata.age + 88.362) * Number(userdata.physical))
        }else if(userdata.gender === 1){
           return Math.floor((9.247 * ((userdata.height / 100) **2)*22 + 3.098 * userdata.height - 4.33 * userdata.age + 447.593)* Number(userdata.physical))
        }
    }



    console.log(kisotaisya())

    let number = 0;
    for (let i = 0; i < data.data.length; i++) {
        number += parseInt(data.data[i].calorie);
    }
    const total = kisotaisya()

    const state = {
        series: [number, total - number],
        options: {
            dataLabels: {
                enabled: false,
            },
            legend: {
                show: false, //横に出てくるタグを消す
            },
            labels: ["総摂取カロリー", "残り摂取カロリー"],
            formatter: function (value) {
                return `${value}kcal`;
            },
            show: true,
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
                                // showAlways: true,
                                label: "総摂取カロリー",
                                // formatter: function () {
                                //     // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                                //     return `${calorie.reduce(
                                //         (prev, current) =>
                                //             prev + Number(current),
                                //         0
                                //     )}kcal`;
                                // },
                                formatter: function () {
                                    return `${number}kcal/${total}kcal`;
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
