import React from "react";

const Project = ({ project }) => {
	
	return (
		<tr key={project.id}>
			<td className='text-justify py-4 px-6 whitespace-nowrap'>
				<div className='text-sm text-gray-600'>{project.title}</div>
			</td>
			<td className='text-justify py-4 px-6 whitespace-nowrap'>
				<div className='text-sm text-gray-600'>{project.description}</div>
			</td>
			<td className='text-right py-4 px-6 whitespace-nowrap'>
				<div className='text-sm text-gray-600'>{project.employees}</div>
			</td>
		</tr>
	);
};

export default Project;
