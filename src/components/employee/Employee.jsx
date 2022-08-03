import React from "react";

const Employee = ({ employee }) => {

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
		</tr>
	);
};

export default Employee;
