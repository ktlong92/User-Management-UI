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
import Employees from "../employee/Employee";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.error.dark,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

export default function AdminTable({ employee }) {
	const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

	const rowsPerPage = 10;

	const [employees, setEmployees] = useState();
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(0);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const response = await fetch(EMPLOYEE_API_BASE_URL, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					},
				});
				const employees = await response.json();
				setEmployees(employees);
			} catch (error) {
				console.log(error);
			}
			setLoading(false);
		};
		fetchData();
	}, [employee]);

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
						<StyledTableCell align='left'>Name</StyledTableCell>
						<StyledTableCell align='left'>Phone Number</StyledTableCell>
						<StyledTableCell align='left'>Email</StyledTableCell>
						<StyledTableCell align='left'>Role</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{employees
						?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
						.map((employee) => (
							<Employees
								employee={employee}
								key={employee.id}
								sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
								<StyledTableCell component='th' scope='row'>
									{employee.firstName}
									{employee.lastName}
								</StyledTableCell>
								<StyledTableCell align='right'>
									{employee.phoneNumber}
								</StyledTableCell>
								<StyledTableCell align='left'>
									{employee.email}
								</StyledTableCell>
								<StyledTableCell align='left'>
									{employee.role}
								</StyledTableCell>
							</Employees>
						))}
				</TableBody>
				<Pagination
					// count={employees.length / rowsPerPage}
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
