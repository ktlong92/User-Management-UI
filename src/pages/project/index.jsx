import React, { useState, Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
import PriorityListBox from "../../components/listBox/PriorityListBox";
import TypeListBox from "../../components/listBox/TypeListBox";
import StatusListBox from "../../components/listBox/StatusListBox";
import TeamTable from "../../components/table/TeamTable";
import TicketTable2 from "../../components/table/TicketTable2";


const ProjectDetailPage = () => {
	const [employeeModalIsOpen, setEmployeeModalIsOpen] = useState(false);
	const [ticketModalIsOpen, setTicketModalIsOpen] = useState(false);

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

	function openTicketModal() {
		setTicketModalIsOpen(true);
	}

	function closeTicketModal() {
		setTicketModalIsOpen(false);
	}

	const resetTicket = (e) => {
		e.preventDefault();
		setTicketModalIsOpen(false);
	};

	return (
		<div className='h-full w-full bg-gray-200'>
			<div className='px-12 pt-8'>
				<h1 className='font-bold text-2xl'>Projects</h1>
			</div>
			<div className='flex ml-12 mt-6'>
				<div className=' bg-white ml-2 shadow-sm w-1/3 h-80 border rounded-xl border-gray-100'>
					<div className='flex border-b p-3 border-gray-100 justify-between'>
						<h1 className='font-semibold'>Employees</h1>
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
														{/* <input
															type='text'
															name='projectName'
															value={project.projectName}
															onChange={(e) => handleChange(e)}
															className='h-10 w-96 border mt-2 px-2 py-2'></input> */}
													</div>
												</div>
											</div>
											<div className='h-14 my-4 space-x-4 pt-4'>
												<button
													// onClick={saveProject}
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
				<div className=' bg-white mx-4 shadow-sm w-2/3 h-80 border rounded-xl border-gray-100'>
					<div className='flex border-b p-3 border-gray-100 justify-between'>
						<h1 className='font-semibold'>Tickets</h1>
						<button
							onClick={openTicketModal}
							className='rounded bg-red-700 text-white text-xs px-4 py-2 font-semibold'>
							Add Ticket
						</button>
						<Transition appear show={ticketModalIsOpen} as={Fragment}>
							<Dialog
								as='div'
								className='fixed inset-0 z-10 mt-40'
								onClose={closeTicketModal}>
								<div className='min-h-screen px-4 text-center'>
									<Transition.Child
										as={Fragment}
										enter='ease-out duration-300'
										enterFrom='opacity-0 scale-95'
										enterTo='opacity-100 scale-100'
										leave='ease-in duration-200'
										leaveFrom='opacity-100 scale-100'
										leaveTo='opacity-0 scale-95'>
										<div className='inline-block w-full h-full max-w-md p-6 my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded'>
											<Dialog.Title
												as='h3'
												className='text-lg font-md leading-6 text-gray-900'>
												Create Ticket
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
															// value={ticket.title}
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
															// value={ticket.description}
															onChange={(e) => handleChange(e)}
															className='h-10 w-96 border mt-2 px-2 py-2'></input>
													</div>
													<div className='h-14 my-4'>
														<label className='block text-gray-600 text-sm font-normal'>
															Assign Employees
														</label>
														<input
															type='multipleSelect'
															name='employees'
															// value={ticket.employees}
															onChange={(e) => handleChange(e)}
															className='h-10 w-96 border mt-2 px-2 py-2'></input>
													</div>
													<div className='h-14 my-4'>
														<label className='block text-gray-600 text-sm font-normal'>
															Time Estimate
														</label>
														<input
															type='text'
															name='estimatedTime'
															// value={ticket.estimatedTime}
															onChange={(e) => handleChange(e)}
															className='h-10 w-96 border mt-2 px-2 py-2'></input>
													</div>
													<div className='flex h-14 my-4'>
														<label className='block text-gray-600 text-sm font-normal mr-4'>
															Priority
															<PriorityListBox />
														</label>
														<label className='block text-gray-600 text-sm font-normal mr-4'>
															Type
															<TypeListBox />
														</label>
														<label className='block text-gray-600 text-sm font-normal'>
															Status
															<StatusListBox />
														</label>
													</div>
												</div>
											</div>
											<div className='h-14 my-4 space-x-4 pt-4'>
												<button
													// onClick={saveProject}
													className='rounded text-white font-semibold bg-green-600 hover:bg-green-800 py-2 px-6'>
													SUBMIT
												</button>
												<button
													onClick={resetTicket}
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
						<TicketTable2 />
					</div>
				</div>
			</div>
			<div className='bg-white ml-14 mr-4 mt-4 shadow-sm w-7/8 h-80 border rounded-xl border-gray-100'>
				<div className='flex border-b p-3 border-gray-100 justify-between'>
					<h1 className='font-semibold'>Selected Ticket Info</h1>
				</div>
				<div>
					<div className='flex border p-3 h-64 m-2 rounded w-7/8'>
						<div className='flex justify-between h-14 my-4'>
							<label className='text-gray-600 text-lg font-semibold'>
								Title
							</label>
							<label className='text-gray-600 text-lg font-semibold'>
								Description
							</label>
							<label className='text-gray-600 text-lg font-semibold'>
								Author
							</label>
							<label className='text-gray-600 text-lg font-semibold'>
								Status
							</label>
							<label className='text-gray-600 text-lg font-semibold'>
								Priority
							</label>
							<label className='text-gray-600 text-lg font-semibold'>
								Type
							</label>
							<label className='text-gray-600 text-lg font-semibold'>
								Time Estimate
							</label>
							<label className='text-gray-600 text-lg font-semibold'>
								Assign Employees
							</label>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectDetailPage;
