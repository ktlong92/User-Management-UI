import React from "react";

const Ticket = ({ ticket }) => {

	return (
		<tr key={ticket.id}>
			{ticket.title && <td className='text-justify py-4 px-6 whitespace-nowrap'>
				<div className='text-sm text-gray-600'>{ticket.title}</div>
			</td>}
			{ticket.description && <td className='text-justify py-4 px-6 whitespace-nowrap'>
				<div className='text-sm text-gray-600'>{ticket.description}</div>
			</td>}
			{ticket.employees && <td className='text-justify py-4 px-6 whitespace-nowrap'>
				<div className='text-sm text-gray-600'>{ticket.employees}</div>
			</td>}
			{ticket.estimatedTime && <td className='text-justify py-4 px-6 whitespace-nowrap'>
				<div className='text-sm text-gray-600'>{ticket.estimatedTime}</div>
			</td>}
			{ticket.priority && <td className='text-justify py-4 px-6 whitespace-nowrap'>
				<div className='text-sm text-gray-600'>{ticket.priority}</div>
			</td>}
			{ticket.status && <td className='text-justify py-4 px-6 whitespace-nowrap'>
				<div className='text-sm text-gray-600'>{ticket.status}</div>
			</td>}
			{ticket.type && <td className='text-justify py-4 px-6 whitespace-nowrap'>
				<div className='text-sm text-gray-600'>{ticket.type}</div>
			</td>}
		</tr>
	);
};

export default Ticket;
