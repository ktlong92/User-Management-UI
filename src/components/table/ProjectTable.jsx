import { React, useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/Pagination";
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
	const [page, setPage] = useState([1]);

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

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const projectsAfterPaging = () => {
		return projects.slice(page * rowsPerPage, page * 1 * rowsPerPage);
	};

	return (
		<TableContainer container={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label='simple table'>
				<TableHead>
					<TableRow>
						<StyledTableCell align='left'>Project Name</StyledTableCell>
						<StyledTableCell align='left'>Description</StyledTableCell>
						<StyledTableCell align='center'>Employees</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{projects &&
						projectsAfterPaging.map((project) => (
							<Project
								project={project}
								key={project.id}
								sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
								<StyledTableCell component='th' scope='row'>
									{project.name}
								</StyledTableCell>
								<StyledTableCell align='right'>
									{project.description}
								</StyledTableCell>
								<StyledTableCell align='left'>
									{project.employees}
								</StyledTableCell>
							</Project>
						))}
				</TableBody>
				<TablePagination
					component='div'
					variant='outlined'
					color='error.dark'
					page={page}
					onPageChange={handleChangePage}
				/>
			</Table>
		</TableContainer>
	);
}
