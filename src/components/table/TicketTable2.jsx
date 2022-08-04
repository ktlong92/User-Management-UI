import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Ticket from "../ticket/Ticket";
import useTicketInfo from "../../hooks/swr/use-ticket-info/useTicketInfo";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.error.dark,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

export default function TicketTable1() {
	const { tickets } = useTicketInfo();
	const rowsPerPage = 3;
	const page = 1;

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
