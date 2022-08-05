import React from "react";

const Project = ({ data, showTitle, showDescription, showEmployees }) => {
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
		</tr>
	);
};

export default Project;
