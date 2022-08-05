import React from "react";

const Employee = ({ data, showName, showPhoneNumber, showEmail, showRole }) => {
	return (
		<tr key={data.id}>
			{showName && (
				<td className='text-justify py-4 px-6 whitespace-nowrap'>
					<div className='text-sm text-gray-600'>
						{data.firstName + " " + data.lastName}
					</div>
				</td>
			)}
			{showPhoneNumber && (
				<td className='text-justify py-4 px-6 whitespace-nowrap'>
					<div className='text-sm text-gray-600'>{data.phoneNumber}</div>
				</td>
			)}
			{showEmail && (
				<td className='text-justify py-4 px-6 whitespace-nowrap'>
					<div className='text-sm text-gray-600'>{data.email}</div>
				</td>
			)}
			{showRole && (
				<td className='text-justify py-4 px-6 whitespace-nowrap'>
					<div className='text-sm text-gray-600'>{data.role}</div>
				</td>
			)}
		</tr>
	);
};

export default Employee;
