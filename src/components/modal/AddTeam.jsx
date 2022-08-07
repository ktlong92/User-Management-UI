import React, { useState, Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
import TeamTable from "../table/TeamTable";

export default function AddTeam() {
	const [employeeModalIsOpen, setEmployeeModalIsOpen] = useState(false);
	const [employee, setEmployee] = useState();

	function openEmployeeModal() {
		setEmployeeModalIsOpen(true);
	}

	function closeEmployeeModal() {
		setEmployeeModalIsOpen(false);
	}

	const resetEmployee = (e) => {
		e.preventDefault();
		setEmployeeModalIsOpen(false);
	};

	return (
		<div className=' bg-white ml-2 shadow-sm w-2/5 h-80 border rounded-xl border-gray-100'>
			<div className='flex border-b p-3 border-gray-100 justify-between'>
				<h1 className='font-semibold'>Team</h1>
				<button
					onClick={openEmployeeModal}
					className='rounded bg-red-700 text-white text-xs px-4 py-2 font-semibold'>
					Add Employees
				</button>
				<Transition appear show={employeeModalIsOpen} as={Fragment}>
					<Dialog
						as='div'
						className='fixed inset-0 z-0 mt-40'
						onClose={closeEmployeeModal}>
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
										Add Employees
									</Dialog.Title>
									<div className='flex max-w-md max-auto'>
										<div className='py-2'>
											<div className='h-14 my-4'>
												<label className='block text-gray-600 text-sm font-normal'>
													Name
												</label>
												<input
													type='select'
													name='employeeName'
													// value={employee.firstName}
													// onChange={(e) => handleChange(e)}
													className='h-10 w-96 border mt-2 px-2 py-2'></input>
											</div>
										</div>
									</div>
									<div className='h-14 my-4 space-x-4 pt-4'>
										<button
											// onClick={addEmployee}
											className='rounded text-white font-semibold bg-green-600 hover:bg-green-800 py-2 px-6'>
											SUBMIT
										</button>
										<button
											onClick={resetEmployee}
											className='rounded text-white font-semibold bg-red-600 hover:bg-red-800 py-2 px-6'>
											Close
										</button>
									</div>
								</div>
							</Transition.Child>
						</div>
					</Dialog>
				</Transition>
			</div>
			<div>
				<TeamTable />
			</div>
		</div>
	);
}
