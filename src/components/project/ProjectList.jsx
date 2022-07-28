import { React, useState, useEffect } from "react";
import EditProject from "./UpdateProject";
import Project from "../project/Project";


const ProjectList = () => {
	const [project, setProject] = useState(null);
	const [loading, setLoading] = useState(true);
	
	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const response = await ProjectService.getProject();
				setProject(response.data);
			} catch (error) {
				console.log(error);
			}
			setLoading(false);
		};
		fetchData();
	}, []);

	const deleteProject = (e, id) => {
		e.preventDefault();
		ProjectService.deleteProject(id).then((res) => {
			if (project) {
				setProject((prevElement) => {
					return prevElement.filter((project) => project.id !== id);
				});
			}
		});
	};

	const editProject = (e, id) => {
		e.preventDefault();
		setProjectId(id);
	};

	return (
		<>
			<div className='container mx-auto my-8'>
				<div className='flex shadow border-b'>
					<table className='w-screen'>
						<thead className='bg-gray-50'>
							<tr>
								<th className='text-gray-900 text-justify text-sm font-medium tracking-narrow py-3 px-6 '>
									Name
								</th>
								<th className='text-gray-900 text-justify text-sm font-medium tracking-narrow py-3 px-6 '>
									Description
								</th>
								<th className='text-gray-900 text-justify text-sm font-medium tracking-narrow py-3 px-6 '>
									Created Date
								</th>
								<th className='text-gray-900 text-justify text-sm font-medium tracking-narrow py-3 px-6 '>
									Status
								</th>
								<th className='text-gray-900 text-justify text-sm font-medium tracking-narrow py-3 px-6 '></th>
							</tr>
						</thead>
						{!loading && (
							<tbody>
								{project?.map((project) => (
									<Project
										project={project}
										key={project.id}
										deleteProject={deleteProject}
										editProject={editProject}
									/>
								))}
							</tbody>
						)}
					</table>
				</div>
			</div>
		</>
	);
};

export default ProjectList;
