import React from "react";
import ReactApexChart from "react-apexcharts";
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const CalrieGraph = () => {
    const { data, error, isLoading } = useSWR("calorieIntake", fetcher);
    console.log(data);
    if (error) return <div>failed to load</div>;
    if (isLoading) return <div>loading...</div>;
    // const [calorie, setCalorie] = useState([]);

    // useEffect(() => {
    //     axios.get("calorieIntake").then((res) => {
    //         // console.log(res);
    //         setCalorie([...calorie, res.data.data[0].calorie]);
    //     });
    // }, []);

    const number = data.data[0].calorie;
    const total = 3000;

    const state = {
        series: [parseInt(number), total - parseInt(number)],
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
            formatter:function(value){
                return `${value}kcal`
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
