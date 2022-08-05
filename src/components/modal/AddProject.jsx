import React, { Fragment, useState } from "react";
import { Transition, Dialog } from "@headlessui/react";
import Project from "../project/Project";
import useSWR from "swr";

async function fetcher(url) {
	const res = await fetch(url);
	return res.json();
}

export const AddProject = () => {
	const [isOpen, setIsOpen] = useState(true);
	const url = "http://localhost:3000/api/projects";
	const { data, error } = useSWR(url, fetcher);

	if (error) return <div>failed to load</div>;
	if (!data) return <div>loading...</div>;
	const { projects } = data;

	function closeModal() {
		setIsOpen(false);
	}

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
											value={projects.title}
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
											value={projects.description}
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
											value={projects.employees}
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
	);
};