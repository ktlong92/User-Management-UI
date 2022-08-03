import React from "react";

const Ticket = ({ ticket }) => {

	return (
		<tr key={ticket.id}>
			<td className='text-justify py-4 px-6 whitespace-nowrap'>
				<div className='text-sm text-gray-600'>{ticket.title}</div>
			</td>
			<td className='text-justify py-4 px-6 whitespace-nowrap'>
				<div className='text-sm text-gray-600'>{ticket.description}</div>
			</td>
			<td className='text-justify py-4 px-6 whitespace-nowrap'>
				<div className='text-sm text-gray-600'>{ticket.employees}</div>
			</td>
			<td className='text-justify py-4 px-6 whitespace-nowrap'>
				<div className='text-sm text-gray-600'>{ticket.estimatedTime}</div>
			</td>
			<td className='text-justify py-4 px-6 whitespace-nowrap'>
				<div className='text-sm text-gray-600'>{ticket.priority}</div>
			</td>
			<td className='text-justify py-4 px-6 whitespace-nowrap'>
				<div className='text-sm text-gray-600'>{ticket.status}</div>
			</td>
			<td className='text-justify py-4 px-6 whitespace-nowrap'>
				<div className='text-sm text-gray-600'>{ticket.type}</div>
			</td>
		</tr>
	);
};

export default Ticket;
