import { React, useState, useEffect, Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";

const UpdateProject = ({ projectId, setResponseProject }) => {
	const PROJECT_API_BASE_URL = "http://localhost:8080/api/v1/projects";

	const [isOpen, setIsOpen] = useState(false);

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	const [project, setProject] = useState({
		id: id,
		projectName: "",
		projectDescription: "",
		createdDate: new Date(),
		statusId: "",
	});

	const handleChange = (event) => {
		const value = event.target.value;
		setProject({ ...project, [event.target.name]: value });
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(PROJECT_API_BASE_URL + "/" + projectId, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					},
				});
				const _project = await response.json();
				setProject(_project);
				setIsOpen(true);
			} catch (error) {
				console.log(error);
			}
		};
		if (projectId) {
			fetchData();
		}
	}, [projectId]);

	const updateProject = async (e) => {
		e.preventDefault();
		const response = await fetch(PROJECT_API_BASE_URL + "/" + projectId, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(project),
		});
		if (!response.ok) {
			throw new Error("Something went wrong");
		}
		const _project = await response.json();
		setResponseProject(_project);
		reset(e);
	};

	const reset = (e) => {
		e.preventDefault();
		setIsOpen(false);
	};

	return (
		<Transition appear show={isOpen} as={Fragment}>
			<Dialog
				as='div'
				className='fixed inset-0 z-10 overflow-y-auto'
				onClose={closeModal}>
				<div className='min-h-screen px-4 text-center'>
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0 scale-95'
						enterTo='opacity-100 scale-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100 scale-100'
						leaveTo='opacity-0 scale-95'>
						<div className='inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded'>
							<Dialog.Title
								as='h3'
								className='text-lg font-md leading-6 text-gray-900'>
								Update Project
							</Dialog.Title>
							<div className='flex max-w-md max-auto'>
								<div className='py-2'>
									<div className='h-14 my-4'>
										<label className='block text-gray-600 text-sm font-normal'>
											Name
										</label>
										<input
											type='text'
											name='projectName'
											value={project.projectName}
											onChange={(e) => handleChange(e)}
											className='h-10 w-96 border mt-2 px-2 py-2'></input>
									</div>
									<div className='h-14 my-4'>
										<label className='block text-gray-600 text-sm font-normal'>
											Description
										</label>
										<input
											type='text'
											name='projectDescription'
											value={project.projectDescription}
											onChange={(e) => handleChange(e)}
											className='h-10 w-96 border mt-2 px-2 py-2'></input>
									</div>
									<div className='h-14 my-4'>
										<label className='block text-gray-600 text-sm font-normal'>
											Created Date
										</label>
										<input
											type='text'
											name='createdDate'
											value={project.createdDate}
											onChange={(e) => handleChange(e)}
											className='h-10 w-96 border mt-2 px-2 py-2'></input>
									</div>
									<div className='h-14 my-4'>
										<label className='block text-gray-600 text-sm font-normal'>
											Status
										</label>
										<input
											type='text'
											name='status'
											value={project.status}
											onChange={(e) => handleChange(e)}
											className='h-10 w-96 border mt-2 px-2 py-2'></input>
									</div>
									<div className='h-14 my-4 space-x-4 pt-4'>
										<button
											onClick={updateProject}
											className='rounded text-white font-semibold bg-red-600 hover:bg-red-800 py-2 px-6'>
											Update
										</button>
										<button
											onClick={reset}
											className='rounded text-white font-semibold bg-red-600 hover:bg-red-800 py-2 px-6'>
											Close
										</button>
									</div>
								</div>
							</div>
						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition>
	);
};

export default UpdateProject;
