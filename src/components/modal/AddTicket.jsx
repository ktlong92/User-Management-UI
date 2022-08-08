import React, { useState, Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
import PriorityListBox from "../../components/listBox/PriorityListBox";
import TypeListBox from "../../components/listBox/TypeListBox";
import StatusListBox from "../../components/listBox/StatusListBox";
import TicketTable2 from "../../components/table/TicketTable2";

export default function AddTicket() {

	const [ticketModalIsOpen, setTicketModalIsOpen] = useState(false);
	const [ticket, setTicket] = useState({
		title: "",
		description: "",
		employees: "",
		priority: "",
		status: "",
		type: "",
		project: "",
	});

	function openTicketModal() {
		setTicketModalIsOpen(true);
	}

	function closeTicketModal() {
		setTicketModalIsOpen(false);
	}

	const handleChange = (event) => {
		const value = event.target.value;
		setTicket({ ...ticket, [event.target.name]: value });
	};

	const saveTicket = async (e) => {
		e.preventDefault();
		const response = await fetch("http://localhost:3000/api/tickets", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(ticket),
		});
		const _ticket = await response.json();
		reset(e);
	};

	const resetTicket = (e) => {
		e.preventDefault();
		setTicketModalIsOpen(false);
	};

	return (
		<div className=' bg-white mx-4 shadow-sm w-3/5 h-3/4 border rounded-xl border-gray-100'>
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
													value={ticket.title}
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
													value={ticket.description}
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
													value={ticket.employees}
													onChange={(e) => handleChange(e)}
													className='h-10 w-96 border mt-2 px-2 py-2'></input>
											</div>
											<div className='h-14 my-4'>
												<label className='block text-gray-600 text-sm font-normal'>
													Project
												</label>
												<input
													type='text'
													name='estimatedTime'
													value={ticket.project}
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
											onClick={saveTicket}
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
	);
}
