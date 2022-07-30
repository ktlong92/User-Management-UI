import { React, useState, useEffect } from "react";
import UpdateTicket from "./UpdateTicket";
import Ticket from "../ticket/Ticket";

const TicketList = ({ ticket }) => {
	const TICKET_API_BASE_URL = "http://localhost:8080/api/v1/tickets";

	const [tickets, setTickets] = useState(null);
	const [loading, setLoading] = useState(true);
	const [ticketId, setTicketId] = useState(null);
	const [responseTicket, setResponseTicket] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const response = await fetch(TICKET_API_BASE_URL, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					},
				});
				const tickets = await response.json();
				setTickets(tickets);
			} catch (error) {
				console.log(error);
			}
			setLoading(false);
		};
		fetchData();
	}, [ticket, responseTicket]);

	const deleteTicket = (e, id) => {
		e.preventDefault();
		fetch(TICKET_API_BASE_URL + "/" + id, {
			method: "DELETE",
		}).then((res) => {
			if (tickets) {
				setTickets((prevElement) => {
					return prevElement.filter((ticket) => ticket.id !== id);
				});
			}
		});
	};

	const editTicket = (e, id) => {
		e.preventDefault();
		setTicketId(id);
	};

	return (
		<>
			<div className='container mx-auto my-8'>
				<div className='flex shadow border-b'>
					<table className='w-screen'>
						<thead className='bg-gray-50'>
							<tr>
								<th className='text-gray-900 text-justify text-sm font-medium tracking-narrow py-3 px-6 '>
									Title
								</th>
								<th className='text-gray-900 text-justify text-sm font-medium tracking-narrow py-3 px-6 '>
									Description
								</th>
								<th className='text-gray-900 text-justify text-sm font-medium tracking-narrow py-3 px-6 '>
									Employees
								</th>
								<th className='text-gray-900 text-justify text-sm font-medium tracking-narrow py-3 px-6 '>
									Priority
								</th>
								<th className='text-gray-900 text-justify text-sm font-medium tracking-narrow py-3 px-6 '>
									Status
								</th>
								<th className='text-gray-900 text-justify text-sm font-medium tracking-narrow py-3 px-6 '>
									Type
								</th>
								<th className='text-gray-900 text-justify text-sm font-medium tracking-narrow py-3 px-6 '></th>
							</tr>
						</thead>
						{!loading && (
							<tbody>
								{tickets?.map((ticket) => (
									<Ticket
										ticket={ticket}
										key={ticket.id}
										deleteTicket={deleteTicket}
										editTicket={editTicket}
									/>
								))}
							</tbody>
						)}
					</table>
				</div>
			</div>
			<UpdateTicket ticketId={ticketId} setResponseTicket={setResponseTicket} />
		</>
	);
};

export default TicketList;
