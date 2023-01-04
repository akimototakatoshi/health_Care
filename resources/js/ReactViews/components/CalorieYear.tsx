import { Chart } from "react-chartjs-2";
import React, { FC } from "react";
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
import { CalorieOfYear } from "../types/calorie";
import { userData } from "../types/user";
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
const labels2 = [
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月",
];
type CalorieProps = {
    calorieData: CalorieOfYear[];
    userData: userData | undefined;
};

const calorieYear: FC<CalorieProps> = ({ calorieData, userData }) => {
    function janTotal() {//月毎のカロリーを集計しています。12カ月分書いているので長いです。すいません。
        let janCal: number[] = [];

        calorieData.map((e) => {
            if (e.created_at === "01") {
                janCal.push(parseInt(e.calorie));
            }
        });
        let january = janCal.reduce((a: number, b: number) => {
            return Number(a) + Number(b);
        }, 0);
        return january;
    }

    function febTotal() {
        let febCal: number[] = [];

        calorieData.map((e) => {
            if (e.created_at === "02") {
                febCal.push(parseInt(e.calorie));
            }
        });
        let february = febCal.reduce((a: number, b: number) => {
            return Number(a) + Number(b);
        }, 0);
        return february;
    }

    function marTotal() {
        let marCal: number[] = [];

        calorieData.map((e) => {
            if (e.created_at === "03") {
                marCal.push(parseInt(e.calorie));
            }
        });
        let march = marCal.reduce((a: number, b: number) => {
            return Number(a) + Number(b);
        }, 0);
        return march;
    }
    function aprTotal() {
        let aprCal: number[] = [];

        calorieData.map((e) => {
            if (e.created_at === "04") {
                aprCal.push(parseInt(e.calorie));
            }
        });
        let april = aprCal.reduce((a: number, b: number) => {
            return Number(a) + Number(b);
        }, 0);
        return april;
    }
    function mayTotal() {
        let mayCal: number[] = [];

        calorieData.map((e) => {
            if (e.created_at === "05") {
                mayCal.push(parseInt(e.calorie));
            }
        });
        let may = mayCal.reduce((a: number, b: number) => {
            return Number(a) + Number(b);
        }, 0);
        return may;
    }
    function junTotal() {
        let junCal: number[] = [];

        calorieData.map((e) => {
            if (e.created_at === "06") {
                junCal.push(parseInt(e.calorie));
            }
        });
        let jun = junCal.reduce((a: number, b: number) => {
            return Number(a) + Number(b);
        }, 0);
        return jun;
    }

    function julTotal() {
        let julCal: number[] = [];

        calorieData.map((e) => {
            if (e.created_at === "07") {
                julCal.push(parseInt(e.calorie));
            }
        });
        let july = julCal.reduce((a: number, b: number) => {
            return Number(a) + Number(b);
        }, 0);
        return july;
    }
    function augTotal() {
        let augCal: number[] = [];

        calorieData.map((e) => {
            if (e.created_at === "08") {
                augCal.push(parseInt(e.calorie));
            }
        });
        let august = augCal.reduce((a: number, b: number) => {
            return Number(a) + Number(b);
        }, 0);
        return august;
    }
    function sepTotal() {
        let sepCal: number[] = [];

        calorieData.map((e) => {
            if (e.created_at === "09") {
                sepCal.push(parseInt(e.calorie));
            }
        });
        let september = sepCal.reduce((a: number, b: number) => {
            return Number(a) + Number(b);
        }, 0);
        return september;
    }

    function octTotal() {
        let octCal: number[] = [];

        calorieData.map((e) => {
            if (e.created_at === "10") {
                octCal.push(parseInt(e.calorie));
            }
        });
        let october = octCal.reduce((a: number, b: number) => {
            return Number(a) + Number(b);
        }, 0);
        return october;
    }

    function novTotal() {
        let novCal: number[] = [];

        calorieData.map((e) => {
            if (e.created_at === "11") {
                novCal.push(parseInt(e.calorie));
            }
        });
        let november = novCal.reduce((a: number, b: number) => {
            return Number(a) + Number(b);
        }, 0);
        return november;
    }

    function decTotal() {
        let decCal: number[] = [];

        calorieData.map((e) => {
            if (e.created_at === "12") {
                decCal.push(parseInt(e.calorie));
            }
        });
        let december = decCal.reduce((a: number, b: number) => {
            return Number(a) + Number(b);
        }, 0);
        return december;
    }


    function AveCalorieOfMonth() {
        if (userData?.gender === 0) {
            return Math.floor(
                (13.397 * (userData?.height / 100) ** 2 * 22 +
                    4.799 * userData?.height -
                    5.677 * userData?.age +
                    88.362) *
                    Number(userData?.physical) *
                    30
            );
        } else if (userData?.gender === 1) {
            return Math.floor(
                (9.247 * (userData?.height / 100) ** 2 * 22 +
                    3.098 * userData?.height -
                    4.33 * userData?.age +
                    447.593) *
                    Number(userData?.physical) *
                    30
            );
        }
    }
    const data2: any = {
        labels: labels2,

        datasets: [
            {
                type: "line",
                label: "標準摂取カロリー",
                borderColor: "rgb(255, 99, 132)",
                borderWidth: 2,
                fill: false,
                data: [],
            },
            {
                type: "bar",
                label:"あなたの摂取カロリー",
                backgroundColor: "rgb(75, 192, 192)",
                data: [
                    janTotal(),
                    febTotal(),
                    marTotal(),
                    aprTotal(),
                    mayTotal(),
                    junTotal(),
                    julTotal(),
                    augTotal(),
                    sepTotal(),
                    octTotal(),
                    novTotal(),
                    decTotal(),
                ],
                borderColor: "white",
                borderWidth: 2,
                
            },
        ],
    };
    for (let i = 1; i <= 12; i++) {
        data2.datasets[0].data.push(AveCalorieOfMonth());
    }
    return (
        <div>
            <Chart type="bar" data={data2} className="mt-4" height={200}/>
        </div>
    );
};

export default calorieYear;
