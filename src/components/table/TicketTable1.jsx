import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useTicketInfo from "../../hooks/swr/use-ticket-info/useTicketInfo";
import Ticket from "components/ticket/Ticket";

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
	const rowsPerPage = 10;
	const page= 1;

	return (
		<TableContainer container={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label='simple table'>
				<TableHead>
					<TableRow>
						<StyledTableCell align='left'>Project Name</StyledTableCell>
						<StyledTableCell align='left'>Title</StyledTableCell>
						<StyledTableCell align='left'>Status</StyledTableCell>
						<StyledTableCell align='left'>Priority</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{tickets
						?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
						.map((data) => (
							<Ticket
								key={data.id}
								showProject
								showTitle
								showStatus
								showPriority
							/>
						))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
