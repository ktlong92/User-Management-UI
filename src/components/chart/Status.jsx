import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(Tooltip, Legend, ArcElement);

const Status = () => {
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
					response.json().then((json) => {
						console.log(json);
						setChart(json);
					});
				})
				.catch((error) => {
					console.log(error);
				});
		};
		fetchTickets();
	}, [baseUrl]);

	const data = {
		labels: ["Open", "In-Progress", "Resolved"],
		datasets: [
			{
				data: chart?.tickets.map((x) => x.status),
				backgroundColor: [
					"rgba(0, 0, 204, 0.2)",
					"rgba(0, 204, 204, 0.2)",
					"rgba(0, 204, 0, 0.2)",
				],
				borderColor: [
					"rgba(0, 0, 204, 1)",
					"rgba(0, 204, 204, 1)",
					"rgba(0, 204, 0, 1)",
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
			<Doughnut data={data} height={400} options={options} />
		</div>
	);
};

export default Status;
