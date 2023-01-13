import { React, useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Pagination from "@mui/material/Pagination";
import Paper from "@mui/material/Paper";
import Ticket from "../ticket/Ticket";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.error.dark,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

export default function TicketTable2({ ticket }) {
	const TICKET_API_BASE_URL = "http://localhost:8080/api/v1/tickets";

	const rowsPerPage = 3;

	const [tickets, setTickets] = useState();
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(0);

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
	}, [ticket]);

	const handlePageButtonClick = (event) => {
		onPageChange(event, page);
	};

	const handleBackButtonClick = (event) => {
		onPageChange(event, page - 1);
	};

	const handleNextButtonClick = (event) => {
		onPageChange(event, page + 1);
	};

	return (
		<TableContainer container={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label='simple table'>
				<TableHead>
					<TableRow>
						<StyledTableCell align='left'>Title</StyledTableCell>
						<StyledTableCell align='left'>Description</StyledTableCell>
						<StyledTableCell align='left'>Assigned Employees</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{tickets
						?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
						.map((ticket) => (
							<tr
							key={ticket.id}>
								<StyledTableCell component='th' scope='row'>
									{ticket.title}
								</StyledTableCell>
								<StyledTableCell align='left'>
									{ticket.description}
								</StyledTableCell>
								<StyledTableCell align='left'>
									{ticket.employees}
								</StyledTableCell>
							</tr>
						))}
				</TableBody>
				<Pagination
					// count={tickets.length / rowsPerPage}
					variant='outlined'
					color='error'
					onPageChange={[
						handlePageButtonClick,
						handleBackButtonClick,
						handleNextButtonClick,
					]}
					defaultPage={0}
				/>
			</Table>
		</TableContainer>
	);
}
