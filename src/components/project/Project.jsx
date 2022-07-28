import React from "react";
import { useNavigate } from "react-router-dom";

const Project = ({ project, deleteProject }) => {
	const navigate = useNavigate();
	const editProject = (e, id) => {
		e.preventDefault();
		navigate(`/updateProject/${id}`);
	};

	return (
		<tr key={project.id}>
			<td className='text-justify py-4 px-6 whitespace-nowrap'>
				<div className='text-sm text-gray-600'>{project.projectName}</div>
			</td>
			<td className='text-justify py-4 px-6 whitespace-nowrap'>
				<div className='text-sm text-gray-600'>{project.projectDescription}</div>
			</td>
			<td className='text-justify py-4 px-6 whitespace-nowrap'>
				<div className='text-sm text-gray-600'>{project.createdDate}</div>
			</td>
			<td className='text-justify py-4 px-6 whitespace-nowrap'>
				<div className='text-sm text-gray-600'>{project.status}</div>
			</td>
			<td className='text-right py-4 px-6 whitespace-nowrap'>
				<a
					onClick={(e, id) => editProject(e, project.id)}
					className='text-indigo-600 text-xs hover:text-indigo-800 hover:cursor-pointer px-2'>
					Edit
				</a>
				<a
					onClick={(e, id) => deleteProject(e, project.id)}
					className='text-indigo-600 text-xs hover:text-indigo-800 hover:cursor-pointer'>
					Delete
				</a>
			</td>
		</tr>
	);
};

export default Project;
