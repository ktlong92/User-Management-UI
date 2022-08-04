import React from "react";

const Ticket = ({
	data,
	showTitle,
	showDescription,
	showEmployees,
	showPriority,
	showStatus,
	showType,
	showProject,
}) => {
	return (
		<tr key={data.id}>
			{showTitle && (
				<td className='text-justify py-4 px-6 whitespace-nowrap'>
					<div className='text-sm text-gray-600'>{data.title}</div>
				</td>
			)}
			{showDescription && (
				<td className='text-justify py-4 px-6 whitespace-nowrap'>
					<div className='text-sm text-gray-600'>{data.description}</div>
				</td>
			)}
			{showEmployees && (
				<td className='text-justify py-4 px-6 whitespace-nowrap'>
					<div className='text-sm text-gray-600'>{data.employees}</div>
				</td>
			)}
			{showPriority && (
				<td className='text-justify py-4 px-6 whitespace-nowrap'>
					<div className='text-sm text-gray-600'>{data.priority}</div>
				</td>
			)}
			{showStatus && (
				<td className='text-justify py-4 px-6 whitespace-nowrap'>
					<div className='text-sm text-gray-600'>{data.status}</div>
				</td>
			)}
			{showType && (
				<td className='text-justify py-4 px-6 whitespace-nowrap'>
					<div className='text-sm text-gray-600'>{data.type}</div>
				</td>
			)}
			{showProject && (
				<td className='text-justify py-4 px-6 whitespace-nowrap'>
					<div className='text-sm text-gray-600'>{data.project}</div>
				</td>
			)}
		</tr>
	);
};

export default Ticket;
