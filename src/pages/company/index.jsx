import React, { Fragment, useState } from "react";
import { Transition, Dialog } from "@headlessui/react";
import AdminTable from "../../components/table/AdminTable";
import useSWR from "swr";

async function fetcher(url) {
	const res = await fetch(url);
	return res.json();
}

export default function Employee() {
	const [isOpen, setIsOpen] = useState(false);

	const url = "http://localhost:3000/api/employees";
	const { data, error } = useSWR(url, fetcher);

	if (error) return <div>failed to load</div>;
	if (!data) return <div>loading...</div>;
	const { employees } = data;
	console.log(employees);

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	const reset = (e) => {
		e.preventDefault();
		setIsOpen(false);
	};

	return (
		<div className='h-full w-full bg-gray-200'>
			<div className='px-12 pt-8'>
				<h1 className='font-bold text-2xl'>Company</h1>
			</div>
			<div className=' bg-white mx-4 my-4 shadow-sm w-9/10 h-3/4 border rounded-xl border-gray-100'>
				<div className='flex border-b p-3 border-gray-100 justify-between'>
					<h1 className='font-semibold'>Employees</h1>
					<button
						onClick={openModal}
						className='rounded bg-red-700 text-white text-xs px-4 py-2 font-semibold'>
						Edit Employee
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
											Edit Employee
										</Dialog.Title>
										<div className='flex max-w-md max-auto'>
											<div className='py-2'>
												<div className='h-14 my-4'>
													<label className='block text-gray-600 text-sm font-normal'>
														Name
													</label>
													<input
														type='text'
														name='name'
														// value={project.projectName}
														onChange={(e) => handleChange(e)}
														className='h-10 w-96 border mt-2 px-2 py-2'></input>
												</div>
												<div className='h-14 my-4'>
													<label className='block text-gray-600 text-sm font-normal'>
														Phone Number
													</label>
													<input
														type='text'
														name='phoneNumber'
														// value={project.description}
														onChange={(e) => handleChange(e)}
														className='h-10 w-96 border mt-2 px-2 py-2'></input>
												</div>
												<div className='h-14 my-4'>
													<label className='block text-gray-600 text-sm font-normal'>
														Email
													</label>
													<input
														type='text'
														name='email'
														// value={project.employees}
														onChange={(e) => handleChange(e)}
														className='h-10 w-96 border mt-2 px-2 py-2'></input>
												</div>
												<div className='h-14 my-4'>
													<label className='block text-gray-600 text-sm font-normal'>
														Role
													</label>
													<input
														type='select'
														name='role'
														// value={project.employees}
														onChange={(e) => handleChange(e)}
														className='h-10 w-96 border mt-2 px-2 py-2'></input>
												</div>
												<div className='h-14 my-4 space-x-4 pt-4'>
													<button
														// onClick={saveProject}
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
					<AdminTable />
				</div>
			</div>
		</div>
	);
}
