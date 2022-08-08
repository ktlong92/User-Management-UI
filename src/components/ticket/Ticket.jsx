import React from "react";
import Link from "next/Link";

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
					<Link href={`/ticket/${data.id}`} key={data.id}>
						<div className='text-sm text-gray-600'>{data.title}</div>
					</Link>
				</td>
			)}
			{showDescription && (
				<td className='text-justify py-4 px-6 whitespace-nowrap'>
					<Link href={`/ticket/${data.id}`} key={data.id}>
						<div className='text-sm text-gray-600'>{data.description}</div>
					</Link>
				</td>
			)}
			{showEmployees && (
				<td className='text-justify py-4 px-6 whitespace-nowrap'>
					<Link href={`/ticket/${data.id}`} key={data.id}>
						<div className='text-sm text-gray-600'>{data.employees}</div>
					</Link>
				</td>
			)}
			{showPriority && (
				<td className='text-justify py-4 px-6 whitespace-nowrap'>
					<Link href={`/ticket/${data.id}`} key={data.id}>
						<div className='text-sm text-gray-600'>{data.priority}</div>
					</Link>
				</td>
			)}
			{showStatus && (
				<td className='text-justify py-4 px-6 whitespace-nowrap'>
					<Link href={`/ticket/${data.id}`} key={data.id}>
						<div className='text-sm text-gray-600'>{data.status}</div>
					</Link>
				</td>
			)}
			{showType && (
				<td className='text-justify py-4 px-6 whitespace-nowrap'>
					<Link href={`/ticket/${data.id}`} key={data.id}>
						<div className='text-sm text-gray-600'>{data.type}</div>
					</Link>
				</td>
			)}
			{showProject && (
				<td className='text-justify py-4 px-6 whitespace-nowrap'>
					<Link href={`/ticket/${data.id}`} key={data.id}>
						<div className='text-sm text-gray-600'>{data.project}</div>
					</Link>
				</td>
			)}
		</tr>
	);
};

export default Ticket;

