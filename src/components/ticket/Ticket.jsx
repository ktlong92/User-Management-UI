import React from "react";

const Ticket = ({
	useTicket,
	showTitle,
	showDescription,
	showEmployees,
	showPriority,
	showStatus,
	showType,
}) => {
	return (
		<tr key={useTicket.id}>
			{showTitle && (
				<td className='text-justify py-4 px-6 whitespace-nowrap'>
					<div className='text-sm text-gray-600'>{useTicket.title}</div>
				</td>
			)}
			{showDescription && (
				<td className='text-justify py-4 px-6 whitespace-nowrap'>
					<div className='text-sm text-gray-600'>{useTicket.description}</div>
				</td>
			)}
			{showEmployees && (
				<td className='text-justify py-4 px-6 whitespace-nowrap'>
					<div className='text-sm text-gray-600'>{useTicket.employees}</div>
				</td>
			)}
			{showPriority && (
				<td className='text-justify py-4 px-6 whitespace-nowrap'>
					<div className='text-sm text-gray-600'>{useTicket.priority}</div>
				</td>
			)}
			{showStatus && (
				<td className='text-justify py-4 px-6 whitespace-nowrap'>
					<div className='text-sm text-gray-600'>{useTicket.status}</div>
				</td>
			)}
			{showType && (
				<td className='text-justify py-4 px-6 whitespace-nowrap'>
					<div className='text-sm text-gray-600'>{useTicket.type}</div>
				</td>
			)}
		</tr>
	);
};

export default Ticket;
