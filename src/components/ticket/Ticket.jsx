import React from "react";

const Ticket = ({ ticket, deleteTicket, editTicket }) => {

	return (
		<tr key={ticket.id}>
			<td className='text-justify py-4 px-6 whitespace-nowrap'>
				<div className='text-sm text-gray-600'>{ticket.title}</div>
			</td>
			<td className='text-justify py-4 px-6 whitespace-nowrap'>
				<div className='text-sm text-gray-600'>{ticket.description}</div>
			</td>
			<td className='text-justify py-4 px-6 whitespace-nowrap'>
				<div className='text-sm text-gray-600'>{ticket.priority}</div>
			</td>
			<td className='text-justify py-4 px-6 whitespace-nowrap'>
				<div className='text-sm text-gray-600'>{ticket.status}</div>
			</td>
			<td className='text-justify py-4 px-6 whitespace-nowrap'>
				<div className='text-sm text-gray-600'>{ticket.projectName}</div>
			</td>
			<td className='text-right py-4 px-6 whitespace-nowrap'>
				<a
					onClick={(e, id) => editTicket(e, ticket.id)}
					className='text-indigo-600 text-xs hover:text-indigo-800 hover:cursor-pointer px-2'>
					Edit
				</a>
				<a
					onClick={(e, id) => deleteTicket(e, ticket.id)}
					className='text-indigo-600 text-xs hover:text-indigo-800 hover:cursor-pointer'>
					Delete
				</a>
			</td>
		</tr>
	);
};

export default Ticket;
