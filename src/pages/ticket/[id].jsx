import tickets from "../../lib/tickets.json"


const Ticket({ ticket, id }) {

	const getFilteredTickets = filteredTickets = {
		tickets.filter(
				(project) => !isEmptyObject(project)
					&& !!getTicketsById(tickets.id),
			)
			.map((ticket) => mapTicketByProject(project))
	}

	return (
		<div className='h-full w-full bg-gray-200'>
			<div className='px-12 pt-8'>
				<h1 className='font-bold text-2xl'>Ticket {id} Details Page</h1>
			</div>
			<div className=' bg-white mx-4 my-4 shadow-sm w-9/10 h-5/8 border rounded-xl border-gray-100'>
				<div className='flex bg-red-600 text-white border-b border rounded p-3 border-gray-100 justify-between'>
					<h1 className='font-semibold'>{ticket.title} Information</h1>
				</div>
				<div>
					<div className='flex h-24 mt-4 mb-24 mx-10'>
						<label className='block text-gray-600 text-xl font-semibold '>
							Title:
						</label>
						<p className='h-10 w-96  mt-2 px-2 py-2'>{ticket.title}</p>
						<label className='block text-gray-600 text-xl font-semibold '>
							Description:
						</label>
						<p className='h-10 w-96  mt-2 px-2 py-2'>{ticket.description}</p>
						<label className='block text-gray-600 text-xl font-semibold '>
							Project:
						</label>
						<p className='h-10 w-96  mt-2 px-2 py-2'>{ticket.project}</p>
					</div>
					<div className='flex h-24 mt-4 mb-24 mx-10'>
						<label className='block text-gray-600 text-xl font-semibold  mr-4'>
							Priority:
						</label>
						<p className='h-10 w-96  mt-2 px-2 py-2'>{ticket.priority}</p>
						<label className='block text-gray-600 text-xl font-semibold  mr-4'>
							Type:
						</label>
						<p className='h-10 w-96  mt-2 px-2 py-2'>{ticket.type}</p>
						<label className='block text-gray-600 text-xl font-semibold '>
							Status:
						</label>
						<p className='h-10 w-96  mt-2 px-2 py-2'>{ticket.status}</p>
					</div>
					<div className='flex h-24 my-4 mx-10'>
						<label className='block text-gray-600 text-xl font-semibold '>
							Assigned Employees:
						</label>
						<p className='h-10 w-96  mt-2 px-2 py-2'>{ticket.employees}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

