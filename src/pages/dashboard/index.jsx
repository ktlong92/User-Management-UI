import React from "react";
import CardSm from "../../components/card/CardSm";
import Table from "../../components/table/Table";

const Dashboard = () => {
	return (
		<div className='h-full w-full'>
			<div className='px-12 pt-8'>
				<h1 className='font-bold text-2xl'>Dashboard</h1>
			</div>
			<div className='flex ml-12 mt-6'>
				<Table Title='Employees' />
				<Table Title='Projects' />
			</div>
			<div className='flex p-4 items-center'>
				<CardSm Title='Tickets by Priority' />
				<CardSm Title='Tickets by Status' />
				<CardSm Title='Tickets by Type' />
			</div>
		</div>
	);
};

export default Dashboard;
