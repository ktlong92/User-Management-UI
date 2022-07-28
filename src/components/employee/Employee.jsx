import React from "react";

const Employee = ({ employee, deleteEmployee, editEmployee }) => {

	return (
		<tr key={employee.id}>
			<td className='text-justify py-4 px-6 whitespace-nowrap'>
				<div className='text-sm text-gray-600'>{employee.firstName}</div>
			</td>
			<td className='text-justify py-4 px-6 whitespace-nowrap'>
				<div className='text-sm text-gray-600'>{employee.lastName}</div>
			</td>
			<td className='text-justify py-4 px-6 whitespace-nowrap'>
				<div className='text-sm text-gray-600'>{employee.phoneNumber}</div>
			</td>
			<td className='text-justify py-4 px-6 whitespace-nowrap'>
				<div className='text-sm text-gray-600'>{employee.email}</div>
			</td>
			<td className='text-justify py-4 px-6 whitespace-nowrap'>
				<div className='text-sm text-gray-600'>{employee.role}</div>
			</td>
			<td className='text-right py-4 px-6 whitespace-nowrap'>
				<a
					onClick={(e, id) => editEmployee(e, employee.id)}
					className='text-indigo-600 text-xs hover:text-indigo-800 hover:cursor-pointer px-2'>
					Edit
				</a>
				<a
					onClick={(e, id) => deleteEmployee(e, employee.id)}
					className='text-indigo-600 text-xs hover:text-indigo-800 hover:cursor-pointer'>
					Delete
				</a>
			</td>
		</tr>
	);
};

export default Employee;
