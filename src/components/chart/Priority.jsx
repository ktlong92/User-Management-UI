import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import SWR from "swr";

ChartJS.register(Tooltip, Legend, ArcElement);

async function fetcher(url) {
	const res = await fetch(url);
	return res.json();
}

const Priority = () => {
	const [chart, setChart] = useState([]);

	const url = "http://localhost:3000/api/tickets";
	const { data, error } = useSWR(url, fetcher);

	if (error) return <div>failed to load</div>;
	if (!data) return <div>loading...</div>;
	const { tickets } = data;
	setChart = tickets;

	const chartData = {
		labels: ["Immediate", "High", "Medium", "Low"],
		datasets: [
			{
				data: chart?.map((x) => x.priority),
				backgroundColor: [
					"rgba(204, 0, 0, 0.2)",
					"rgba(255, 153, 51, 0.2)",
					"rgba(0, 204, 0, 0.2)",
					"rgba(51, 51, 255, 0.2)",
				],
				borderColor: [
					"rgba(204, 0, 0, 1)",
					"rgba(255, 153, 51, 1)",
					"rgba(0, 204, 0, 1)",
					"rgba(51, 51, 255, 1)",
				],
				borderWidth: 1,
			},
		],
	};

	const options = {
		maintainAspectRatio: false,
		legend: {
			labels: {
				fonSize: 26,
			},
		},
	};

	return (
		<div>
			<Doughnut data={chartData} options={options} />
		</div>
	);
};

export default Priority;
