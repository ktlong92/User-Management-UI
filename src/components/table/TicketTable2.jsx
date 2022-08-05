import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Ticket from "../ticket/Ticket";
import useSWR from "swr";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.error.dark,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

async function fetcher(url) {
	const res = await fetch(url);
	return res.json();
}

export default function TicketTable2() {
	const url = "http://localhost:3000/api/tickets";
	const { data, error } = useSWR(url, fetcher);

	if (error) return <div>failed to load</div>;
	if (!data) return <div>loading...</div>;
	const { tickets } = data;

	const rowsPerPage = 3;
	const page = 0;

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
						.map((data) => (
							<Ticket
								data={data}
								key={data.id}
								sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
								showTitle
								showDescription
								showEmployees
							/>
						))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
