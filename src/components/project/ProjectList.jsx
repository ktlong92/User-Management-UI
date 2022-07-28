import { React, useState, useEffect } from "react";
import UpdateProject from "./UpdateProject";
import Project from "../project/Project";


const ProjectList = ({ project }) => {
	const PROJECT_API_BASE_URL = "http://localhost:8080/api/v1/projects";

	const [projects, setProjects] = useState(null);
	const [loading, setLoading] = useState(true);
	const [projectId, setProjectId] = useState(null);
	const [responseProject, setResponseProject] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const response = await fetch(PROJECT_API_BASE_URL, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					},
				});
				const projects = await response.json();
				setProjects(projects);
			} catch (error) {
				console.log(error);
			}
			setLoading(false);
		};
		fetchData();
	}, [project, responseProject]);

	const deleteProject = (e, id) => {
		e.preventDefault();
		fetch(PROJECT_API_BASE_URL + "/" + id, {
			method: "DELETE",
		}).then((res) => {
			if (projects) {
				setProjects((prevElement) => {
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
								{projects?.map((project) => (
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
			<UpdateProject projectId={projectId} setResponseProject={setResponseProject} />
		</>
	);
};

export default ProjectList;
