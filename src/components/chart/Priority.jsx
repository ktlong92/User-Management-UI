import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(Tooltip, Legend, ArcElement);

const Priority = () => {
	const [chart, setChart] = useState([]);

	const baseUrl = "http://localhost:8080/api/v1/tickets";

	useEffect(() => {
		const fetchTickets = async () => {
			await fetch(baseUrl, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			})
				.then((response) => {
					response.json().then((tickets) => {
						setChart(tickets);
					});
				})
				.catch((error) => {
					console.log(error);
				});
		};
		fetchTickets();
	}, [baseUrl]);

	const data = {
		labels: ["Immediate", "High", "Medium", "Low"],
		datasets: [
			{
				data: chart?.tickets?.map((x) => x.priority),
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
			<Doughnut data={data} options={options} />
		</div>
	);
};

export default Priority;
