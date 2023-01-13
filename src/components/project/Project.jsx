import React from "react";

const Project = ({ project }) => {
	
	return (
		<tr key={project.id}>
			{project.title && <td className='text-justify py-4 px-6 whitespace-nowrap'>
				<div className='text-sm text-gray-600'>{project.title}</div>
			</td>}
			{project.description && <td className='text-justify py-4 px-6 whitespace-nowrap'>
				<div className='text-sm text-gray-600'>{project.description}</div>
			</td>}
			{project.employees && <td className='text-justify py-4 px-6 whitespace-nowrap'>
				<div className='text-sm text-gray-600'>{project.employees}</div>
			</td>}
		</tr>
	);
};

export default Project;
