import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Project from "../project/Project";
import useProjectInfo from "../../hooks/swr/use-project-info/useProjectInfo";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.error.dark,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

export default function ProjectTable() {
	const { projects } = useProjectInfo();
	const rowsPerPage = 3;
	const page = 1;

	return (
		<TableContainer container={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label='simple table'>
				<TableHead>
					<TableRow>
						<StyledTableCell align='justify'>Name</StyledTableCell>
						<StyledTableCell align='justify'>Description</StyledTableCell>
						<StyledTableCell align='justify'>Employees</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{projects
						?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
						.map((data) => (
							<Project key={data.id} showName showDescription showEmployees />
						))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
