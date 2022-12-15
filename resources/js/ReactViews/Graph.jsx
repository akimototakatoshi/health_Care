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

    let mondayOfTotal = 0;
    if (monday === []) {
        return 0;
    } else {
        mondayOfTotal = monday.reduce(function (a, b) {
            return a + b;
        });
    }

    let tuesdayOfTotal = 0;
    if (tuesday === []) {
        return 0;
    } else {
        tuesdayOfTotal = tuesday.reduce(function (a, b) {
            return a + b;
        });
    }

    let wednesdayOfTotal = 0;
    if (wednesday === []) {
        return 0;
    } else {
        wednesdayOfTotal = wednesday.reduce(function (a, b) {
            return a + b;
        });
    }

    let thursdayOfTotal = 0;
    if (thursday === []) {
        return 0;
    } else {
        thursdayOfTotal = thursday.reduce(function (a, b) {
            return a + b;
        });
    }

    let fridayOfTotal = 0;
    if (friday === []) {
        return 0;
    } else {
        fridayOfTotal = friday.reduce(function (a, b) {
            return a + b;
        });
    }

    let saturdayOfTotal = 0;
    if (saturday.length === 0) {
        return 0;
    } else {
        saturdayOfTotal = saturday.reduce(function (a, b) {
            return a + b;
        });
    }

    let sundayOfTotal = 0;
    if (sunday === []) {
        return 0;
    } else {
        sundayOfTotal = sunday.reduce(function (a, b) {
            return a + b;
        });
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
                    mondayOfTotal,
                    tuesdayOfTotal,
                    wednesdayOfTotal,
                    thursdayOfTotal,
                    fridayOfTotal,
                    saturdayOfTotal,
                    sundayOfTotal,
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
