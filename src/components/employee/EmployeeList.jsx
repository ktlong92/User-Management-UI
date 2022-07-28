import { React, useState, useEffect } from "react";
// import EditEmployees from "./UpdateEmployee";
import Employees from "../employee/Employees";

const EmployeeList = () => {
	
	const [employees, setEmployees] = useState(null);
	const [loading, setLoading] = useState(true);
	// const [EmployeesId, setEmployeesId] = useState(null);
	// const [responseEmployee, setResponseEmployee] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const response = await EmployeeService.getEmployees();
				setEmployees(response.data);
			} catch (error) {
				console.log(error);
			}
			setLoading(false);
		};
		fetchData();
	}, []);

	const deleteEmployee = (e, id) => {
    e.preventDefault();
    EmployeeService.deleteEmployee(id).then((res) => {
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
									<Employees
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
			{/* <EditEmployees
				employeeId={employeeId}
				setResponseEmployee={setResponseEmployee}
			/> */}
		</>
	);
};

export default EmployeeList;
