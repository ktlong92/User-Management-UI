import { useSession } from "next-auth/react";
import React, { Fragment, useState } from "react";
import { Transition, Dialog } from "@headlessui/react";
import ProjectTable from "../components/table/ProjectTable";
import Project from "../components/project/Project";

const Dashboard = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [project, setProject] = useState({
		title: "",
		description: "",
		employees: "",
	});

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	const handleChange = (event) => {
		const value = event.target.value;
		setProject({ ...project, [event.target.name]: value });
	}

	const saveProject = async (e) => {
		e.preventDefault();
		const response = await fetch("http://localhost:3000/api/projects", {
			method: "POST",
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(project),
		});
		const _project = await response.json();
		reset(e);
	};

	const reset = (e) => {
		e.preventDefault();
		setProject({
			title: "",
			description: "",
			employees: "",
		});
		setIsOpen(false);
	};

	return (
		<div className='h-full w-full bg-gray-200'>
			<div className='px-12 pt-8'>
				<h1 className='font-bold text-2xl'>Dashboard</h1>
			</div>
			<div className='flex ml-12 mr-4 mt-6'>
				<div className=' bg-white ml-2 shadow-sm w-full h-5/6 border rounded-xl border-gray-100'>
					<div className='flex border-b p-3 border-gray-100 justify-between'>
						<h1 className='font-semibold'>PROJECTS</h1>
						<button
							onClick={openModal}
							className='rounded bg-red-700 text-white text-xs px-4 py-2 font-semibold'>
							Add Project
						</button>
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
												Add New Project
											</Dialog.Title>
											<div className='flex max-w-md max-auto'>
												<div className='py-2'>
													<div className='h-14 my-4'>
														<label className='block text-gray-600 text-sm font-normal'>
															Title
														</label>
														<input
															type='text'
															name='title'
															value={project.title}
															onChange={(e) => handleChange(e)}
															className='h-10 w-96 border mt-2 px-2 py-2'></input>
													</div>
													<div className='h-14 my-4'>
														<label className='block text-gray-600 text-sm font-normal'>
															Description
														</label>
														<input
															type='text'
															name='description'
															value={project.description}
															onChange={(e) => handleChange(e)}
															className='h-10 w-96 border mt-2 px-2 py-2'></input>
													</div>
													<div className='h-14 my-4'>
														<label className='block text-gray-600 text-sm font-normal'>
															Assign Employees
														</label>
														<input
															type='text'
															name='employees'
															value={project.employees}
															onChange={(e) => handleChange(e)}
															className='h-10 w-96 border mt-2 px-2 py-2'></input>
													</div>
													<div className='h-14 my-4 space-x-4 pt-4'>
														<button
															onClick={saveProject}
															className='rounded text-white font-semibold bg-green-600 hover:bg-green-800 py-2 px-6'>
															SUBMIT
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
					</div>
					<div>
						<ProjectTable />
					</div>
				</div>
			</div>
			{/* <div className='flex mx-12 p-4 items-center justify-between' >
				<CardSm Title='Tickets by Priority' />
				<CardSm Title='Tickets by Status' />
				<CardSm Title='Tickets by Type' />
			</div> */}
		</div>
	);
};

export default Dashboard;
