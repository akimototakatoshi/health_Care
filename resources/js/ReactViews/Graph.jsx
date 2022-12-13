import ReactApexChart from "react-apexcharts";

const Graph = () => {
    let state = {
        series: [
            {
                name: "あなたの摂取カロリー",
                type: "column",
                data: [1,2,3],
            },
            {
                name: "平均摂取カロリー",
                type: "line",
                data: [1,2,3],
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
        </div>
    );
};

export default Graph;
