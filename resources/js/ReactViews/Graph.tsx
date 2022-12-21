import axios from "axios";
import React,{ useEffect, useState } from "react";
import useSWR from "swr";
import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { Link } from "react-router-dom";
ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController
);

const fetcher = (...args:any) => fetch(args).then((res) => res.json());

const Graph = () => {
    const { data, error, isLoading }:{data:any,error:any,isLoading:any} = useSWR("calorieWeek", fetcher);
    const [userData, setUserData] = useState<any|null>([]);
    const labels = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    useEffect(() => {
        const axiosData = async () => {
            try {
                const response:any = await axios.get("userSetting");
                setUserData(response.data.data[0]);
            } catch (e) {
                return;
            }
        };
        axiosData();
    }, []);

    if (error) return <div>failed to load</div>;
    if (isLoading) return <div>loading...</div>;



    function caluculateAveCalorie() {
        if (userData.gender === 0) {
            return Math.floor(
                (13.397 * (userData.height / 100) ** 2 * 22 +
                    4.799 * userData.height -
                    5.677 * userData.age +
                    88.362) *
                    Number(userData.physical)
            );
        } else if (userData.gender === 1) {
            return Math.floor(
                (9.247 * (userData.height / 100) ** 2 * 22 +
                    3.098 * userData.height -
                    4.33 * userData.age +
                    447.593) *
                    Number(userData.physical)
            );
        }
    }
    // let date = new Date()

    const monday:any = [];
    const tuesday:any = [];
    const wednesday:any = [];
    const thursday:any = [];
    const friday:any = [];
    const saturday:any = [];
    const sunday:any = [];

    for (let i = 0; i < data.data.length; i++) {
        let week = data.data[i].week;
        if (week === 1) {
            monday.push(parseInt(data.data[i].calorie));
        } else if (week === 2) {
            tuesday.push(parseInt(data.data[i].calorie));
        } else if (week === 3) {
            wednesday.push(parseInt(data.data[i].calorie));
        } else if (week === 4) {
            thursday.push(parseInt(data.data[i].calorie));
        } else if (week === 5) {
            friday.push(parseInt(data.data[i].calorie));
        } else if (week === 6) {
            saturday.push(parseInt(data.data[i].calorie));
        } else if (week === 0) {
            sunday.push(parseInt(data.data[i].calorie));
        }
    }

    function mondayOfTotal() {
        if (monday.length === 0) {
            return 0;
        } else {
            let reduceMon = monday.reduce(function (a:number, b:number) {
                return a + b;
            });
            return reduceMon;
        }
    }

    function tuesdayOfTotal() {
        if (tuesday.length === 0) {
            return 0;
        } else {
            let reduceTue = tuesday.reduce(function (a:number, b:number) {
                return a + b;
            });
            return reduceTue;
        }
    }

    function wednesdayOfTotal() {
        if (wednesday.length === 0) {
            return 0;
        } else {
            let reduceWen = wednesday.reduce(function (a:number, b:number) {
                return a + b;
            });
            return reduceWen;
        }
    }

    function thursdayOfTotal() {
        if (thursday.length === 0) {
            return 0;
        } else {
            let reduceThu = thursday.reduce(function (a:number, b:number) {
                return a + b;
            });
            return reduceThu;
        }
    }

    function fridayOfTotal() {
        if (friday.length === 0) {
            return 0;
        } else {
            let reduceFri = friday.reduce(function (a:number, b:number) {
                return a + b;
            });
            return reduceFri;
        }
    }

    function saturdayOfTotal() {
        if (saturday.length === 0) {
            return 0;
        } else {
            let reduceSat = saturday.reduce(function (a:number, b:number) {
                return a + b;
            });
            return reduceSat;
        }
    }

    function sundayOfTotal() {
        if (sunday.length === 0) {
            return 0;
        } else {
            let reduceSun = sunday.reduce(function (a:number, b:number) {
                return a + b;
            });
            return reduceSun;
        }
    }
    const data2:any = {
        labels,
        datasets: [
            {
                type: "line",
                label: "標準摂取カロリー",
                borderColor: "rgb(255, 99, 132)",
                borderWidth: 2,
                fill: false,
                data: [
                    caluculateAveCalorie(),
                    caluculateAveCalorie(),
                    caluculateAveCalorie(),
                    caluculateAveCalorie(),
                    caluculateAveCalorie(),
                    caluculateAveCalorie(),
                    caluculateAveCalorie(),
                ],
            },
            {
                type: "bar",
                label: "あなたの摂取カロリー",
                backgroundColor: "rgb(75, 192, 192)",
                data: [
                    mondayOfTotal(),
                    tuesdayOfTotal(),
                    wednesdayOfTotal(),
                    thursdayOfTotal(),
                    fridayOfTotal(),
                    saturdayOfTotal(),
                    sundayOfTotal(),
                ],
                borderColor: "white",
                borderWidth: 2,
            },
        ],
    };

    return (
        <div className="container">
            <h3>カロリー摂取量</h3>
            <Chart type="bar" data={data2} className="mt-4"/>
            <Link to="/">Homeへ戻る</Link>
        </div>
    );
};

export default Graph;
