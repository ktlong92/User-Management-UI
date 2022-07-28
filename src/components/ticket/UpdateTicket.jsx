import { React, useState, useEffect, Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";

const UpdateTicket = ({ ticketId, setResponseTicket }) => {
	const TICKET_API_BASE_URL = "http://localhost:8080/api/v1/tickets";

	const [isOpen, setIsOpen] = useState(false);

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	const [ticket, setTicket] = useState({
		id: "",
		title: "",
		description: "",
		priority: "",
		status: "",
		projectName: "",
	});

	const handleChange = (event) => {
		const value = event.target.value;
		setTicket({ ...ticket, [event.target.name]: value });
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(TICKET_API_BASE_URL + "/" + ticketId, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					},
				});
				const _ticket = await response.json();
				setTicket(_ticket);
				setIsOpen(true);
			} catch (error) {
				console.log(error);
			}
		};
		if (ticketId) {
			fetchData();
		}
	}, [ticketId]);

	const updateTicket = async (e) => {
		e.preventDefault();
		const response = await fetch(TICKET_API_BASE_URL + "/" + ticketId, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(ticket),
		});
		if (!response.ok) {
			throw new Error("Something went wrong");
		}
		const _ticket = await response.json();
		setResponseTicket(_ticket);
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
								Update Ticket
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
											Priority
										</label>
										<input
											type='text'
											name='priority'
											value={ticket.priority}
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
											value={ticket.status}
											onChange={(e) => handleChange(e)}
											className='h-10 w-96 border mt-2 px-2 py-2'></input>
									</div>
									<div className='h-14 my-4'>
										<label className='block text-gray-600 text-sm font-normal'>
											Project
										</label>
										<input
											type='text'
											name='projectName'
											value={ticket.projectName}
											onChange={(e) => handleChange(e)}
											className='h-10 w-96 border mt-2 px-2 py-2'></input>
									</div>
									<div className='h-14 my-4 space-x-4 pt-4'>
										<button
											onClick={updateTicket}
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

export default UpdateTicket;
