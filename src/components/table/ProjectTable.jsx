import { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import Project from "../project/Project";
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

export default function ProjectTable() {
	
	// const rowsPerPage = 8;
	// const page = (1);
	// ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
	
	const url = "http://localhost:3000/api/projects";
	const { data, error } = useSWR(url, fetcher);

	if (error) return <div>failed to load</div>;
	if (!data) return <div>loading...</div>;
	const { projects } = data;

	return (
		<>
			<TableContainer container={Paper}>
				<Table sx={{ minWidth: 650, minHeight: 500 }} aria-label='simple table'>
					<TableHead>
						<TableRow>
							<StyledTableCell align='justify'>Title</StyledTableCell>
							<StyledTableCell align='justify'>Description</StyledTableCell>
							<StyledTableCell align='justify'>Employees</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody className='cursor-pointer'>
						{projects
							.map((data) => (
								<Project							
									data={data}
									key={data.id}
									showTitle
									showDescription
									showEmployees
								/>
							))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
}
