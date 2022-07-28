import { React, useState, useEffect } from "react";
import UpdateEmployee from "./UpdateEmployee";
import Employee from "../employee/Employee";

const EmployeeList = ({ employee }) => {
	const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

	const [employees, setEmployees] = useState(null);
	const [loading, setLoading] = useState(true);
	const [employeeId, setEmployeeId] = useState(null);
	const [responseEmployee, setResponseEmployee] = useState(null);

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
	}, [employee, responseEmployee]);

	const deleteEmployee = (e, id) => {
		e.preventDefault();
		fetch(EMPLOYEE_API_BASE_URL + "/" + id, {
			method: "DELETE",
		}).then((res) => {
			if (employees) {
				setEmployees((prevElement) => {
					return prevElement.filter((employee) => employee.id !== id);
				});
			}
		});
	};

	const editEmployee = (e, id) => {
		e.preventDefault();
		setEmployeeId(id);
	};

	return (
		<>
			<div className='container mx-auto my-8'>
				<div className='flex shadow border-b'>
					<table className='w-screen'>
						<thead className='bg-gray-50'>
							<tr>
								<th className='text-gray-900 text-justify text-sm font-medium tracking-narrow py-3 px-6 '>
									First Name
								</th>
								<th className='text-gray-900 text-justify text-sm font-medium tracking-narrow py-3 px-6 '>
									Last Name
								</th>
								<th className='text-gray-900 text-justify text-sm font-medium tracking-narrow py-3 px-6 '>
									Phone Number
								</th>
								<th className='text-gray-900 text-justify text-sm font-medium tracking-narrow py-3 px-6 '>
									Email
								</th>
								<th className='text-gray-900 text-justify text-sm font-medium tracking-narrow py-3 px-6 '>
									Role
								</th>
								<th className='text-gray-900 text-justify text-sm font-medium tracking-narrow py-3 px-6 '></th>
							</tr>
						</thead>
						{!loading && (
							<tbody>
								{employees?.map((employee) => (
									<Employee
										employee={employee}
										key={employee.id}
										deleteEmployee={deleteEmployee}
										editEmployee={editEmployee}
									/>
								))}
							</tbody>
						)}
					</table>
				</div>
			</div>
			<UpdateEmployee
				employeeId={employeeId}
				setResponseEmployee={setResponseEmployee}
			/>
		</>
	);
};

export default EmployeeList;
