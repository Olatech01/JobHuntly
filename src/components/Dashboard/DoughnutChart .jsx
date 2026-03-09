"use client";

import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {

    const data = {
        datasets: [
            {
                data: [60, 40],
                backgroundColor: [
                    "#4F46E5",
                    "#E5E7EB"
                ],
                borderWidth: 0
            }
        ]
    };

    const options = {
        cutout: "70%", // makes it a donut
        plugins: {
            legend: {
                display: false
            }
        }
    };

    return (
        <div className="w-36 h-36">
            <Doughnut data={data} options={options} />
        </div>
    );
};

export default DoughnutChart;