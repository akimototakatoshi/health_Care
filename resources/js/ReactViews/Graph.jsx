import { min } from "lodash";
import ReactApexChart from "react-apexcharts";
import { Link } from "react-router-dom";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Graph = () => {
    const { data, error, isLoading } = useSWR("calorieWeek", fetcher);

    if (error) return <div>failed to load</div>;
    if (isLoading) return <div>loading...</div>;

    // let date = new Date()
    // console.log(date.getDay())
    // let array = [{13:calorie},{13:calorie},{15:calorie},{15:calorie}];
    const monday = [];
    const tuesday = [];
    const wednesday = [];
    const thursday = [];
    const friday = [];
    const saturday = [];
    const sunday = [];

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
            let reduceMon = monday.reduce(function (a, b) {
                return a + b;
            });
            return reduceMon;
        }
    }

    function tuesdayOfTotal() {
        if (tuesday.length === 0) {
            return 0;
        } else {
            let reduceTue = tuesday.reduce(function (a, b) {
                return a + b;
            });
            return reduceTue;
        }
    }

    function wednesdayOfTotal() {
        if (wednesday.length === 0) {
            return 0;
        } else {
            let reduceWen = wednesday.reduce(function (a, b) {
                return a + b;
            });
            return reduceWen;
        }
    }

    function thursdayOfTotal() {
        if (thursday.length === 0) {
            return 0;
        } else {
            let reduceThu = thursday.reduce(function (a, b) {
                return a + b;
            });
            return reduceThu;
        }
    }

    function fridayOfTotal() {
        if (friday.length === 0) {
            return 0;
        } else {
            let reduceFri = friday.reduce(function (a, b) {
                return a + b;
            });
            return reduceFri;
        }
    }

    function saturdayOfTotal() {
        if (saturday.length === 0) {
            return 0;
        } else {
            let reduceSat = saturday.reduce(function (a, b) {
                return a + b;
            });
            return reduceSat;
        }
    }

    function sundayOfTotal() {
        if (sunday.length === 0) {
            return 0;
        } else {
            let reduceSun = sunday.reduce(function (a, b) {
                return a + b;
            });
            return reduceSun;
        }
    }

    // var result = numbers.reduce(function(a, b) {

    //     return a + b;

    //   })
    // const monday = Math.min(...array);

    // for (let i = 0; i < data.data.length; i++) {
    //    console.log(data.data[i].created_at)

    // }

    let state = {
        series: [
            {
                name: "あなたの摂取カロリー",
                type: "column",
                data: [
                    mondayOfTotal(),
                    tuesdayOfTotal(),
                    wednesdayOfTotal(),
                    thursdayOfTotal(),
                    fridayOfTotal(),
                    saturdayOfTotal(),
                    sundayOfTotal(),
                ],
            },
            {
                name: "平均摂取カロリー",
                type: "line",
                data: [1, 2, 3],
            },
        ],
        options: {
            chart: {
                height: 350,
                type: "line",
            },
            stroke: {
                width: [0, 4],
            },
            title: {
                text: "",
            },
            dataLabels: {
                enabled: true,
                enabledOnSeries: [1],
            },
            labels: [
                "01 Jan 2001",
                "02 Jan 2001",
                "03 Jan 2001",
                "04 Jan 2001",
                "05 Jan 2001",
                "06 Jan 2001",
                "07 Jan 2001",
                "08 Jan 2001",
                "09 Jan 2001",
                "10 Jan 2001",
                "11 Jan 2001",
                "12 Jan 2001",
            ],
            xaxis: {
                type: "datetime",
            },
            yaxis: [
                {
                    title: {
                        text: "あなたの体重",
                    },
                },
                {
                    opposite: true,
                    title: {
                        text: "平均体重",
                    },
                },
            ],
        },
    };

    return (
        <div>
            <h1>体重の変化</h1>
            <ReactApexChart
                options={state.options}
                series={state.series}
                type="line"
                height={350}
            />
            <Link to="/register">aaa</Link>
        </div>
    );
};

export default Graph;
