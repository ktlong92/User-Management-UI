import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Employee from "../employee/Employee";
import useEmployeeInfo from "../../hooks/swr/use-employee-info/useEmployeeInfo"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.error.dark,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

export default function TeamTable() {
	
	const { employees } = useEmployeeInfo();
	const rowsPerPage = 3;
	const page = 1;
	

	return (
		<TableContainer container={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label='simple table'>
				<TableHead>
					<TableRow>
						<StyledTableCell align='left'>Name</StyledTableCell>
						<StyledTableCell align='left'>Email</StyledTableCell>
						<StyledTableCell align='center'>Phone Number</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{employees
						?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
						.map((data) => (
							<Employee
								key={data.id}
								showName
								showEmail
								showPhoneNumber
							/>
						))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
