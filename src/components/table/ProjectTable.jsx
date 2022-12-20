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
import Project from "../project/Project";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.error.dark,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

export default function ProjectTable({ project }) {
	const PROJECT_API_BASE_URL = "http://localhost:8080/api/v1/projects";

	const rowsPerPage = 3;

	const [projects, setProjects] = useState();
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(0);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const response = await fetch(PROJECT_API_BASE_URL, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					},
				});
				const projects = await response.json();
				setProjects(projects);
			} catch (error) {
				console.log(error);
			}
			setLoading(false);
		};
		fetchData();
	}, [project]);

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
						<StyledTableCell align='justify'>Name</StyledTableCell>
						<StyledTableCell align='justify'>Description</StyledTableCell>
						<StyledTableCell align='justify'>Employees</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{projects
						?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
						.map((project) => (
							<Project project={project} key={project.id}>
								<StyledTableCell component='th' scope='row'>
									{project.name}
								</StyledTableCell>
								<StyledTableCell align='justify'>
									{project.description}
								</StyledTableCell>
								<StyledTableCell align='left'>
									{project.employees}
								</StyledTableCell>
							</Project>
						))}
				</TableBody>
				<Pagination
					// count={projects.length / rowsPerPage}
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
