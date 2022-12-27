import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import useSWR from "swr";
import { Data, userData } from "../types/user";
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const CalrieGraph = ({ userData }: { userData: Data }) => {
    const { data, error, isLoading } = useSWR("calorieIntake", fetcher);

    let userdata: userData = userData.data[0];
    // const [userdata, setUserData] = useState<userData>({
    //     id: userData.data[0].id,
    //     name: userData.data[0].name,
    //     email: userData.data[0].email,
    //     age: userData.data[0].age,
    //     gender: userData.data[0].gender,
    //     height: userData.data[0].height,
    //     weight: userData.data[0].weight,
    //     physical: userData.data[0].physical,
    //     week: userData.data[0].week,
    // });

    // useEffect(() => {
    //     const user = userData.data[0];
    //     setUserData(user);
    // }, []);

    if (error) return <div>failed to load</div>;
    if (isLoading) return <div>loading...</div>;
    // console.log("iii",userData)

    function kisotaisya() {
        if (userdata.gender === 0) {
            return Math.floor(
                (13.397 * (userdata.height / 100) ** 2 * 22 +
                    4.799 * userdata.height -
                    5.677 * userdata.age +
                    88.362) *
                    Number(userdata.physical)
            );
        } else if (userdata.gender === 1) {
            return Math.floor(
                (9.247 * (userdata.height / 100) ** 2 * 22 +
                    3.098 * userdata.height -
                    4.33 * userdata.age +
                    447.593) *
                    Number(userdata.physical)
            );
        }
    }

    let number = 0;
    for (let i = 0; i < data.data.length; i++) {
        number += parseInt(data.data[i].calorie);
    }
    const total: number = kisotaisya()!;
    console.log("bbb", total);
    const state = {
        series: [number, total! - number],
        options: {
            dataLabels: {
                enabled: false,
            },
            legend: {
                show: false, //横に出てくるタグを消す
            },
            labels: ["総摂取カロリー", "残り摂取カロリー"],
            // formatter: function (value:number) {
            //     return `${value}kcal`;
            // },
            show: true,
            chart: {
                type: "donut" as
                    | "line"
                    | "area"
                    | "bar"
                    | "histogram"
                    | "pie"
                    | "donut"
                    | "radialBar"
                    | "scatter"
                    | "bubble"
                    | "heatmap"
                    | "candlestick"
                    | "boxPlot"
                    | "radar"
                    | "polarArea"
                    | "rangeBar"
                    | "rangeArea"
                    | "treemap",
            },
            responsive: [
                {
                    //ここで、ブレイクポイントを設定
                    breakpoint: 770, //575px以下になると・・・
                    options: {
                        plotOptions: {
                            bar: {
                                horizontal: true,
                            },
                        },
                        chart: {
                            width: 350, //チャートは320pxにして・・・
                            height: 350,
                        },
                        legend: {
                            position: "bottom", //項目を下へ・・・
                        },
                    },
                },
            ],
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

    const onClickReload = () => {
        window.location.reload();
    };

    return (
        <div>
            <button
                className="btn btn-outline-primary m-2"
                onClick={() => {
                    onClickReload();
                }}
                >
                グラフの更新
            </button>
                {number > total && (
                    <h3 style={{ color: "red", marginLeft: "140px" }}>
                        {number - total}kcalオーバーしています。
                    </h3>
                )}
            <ReactApexChart
                options={state.options}
                series={state.series}
                type="donut"
                height={600} //heightとwidthがないとエラーが出る。
                width={600}
            />
        </div>
    );
};

export default CalrieGraph;
