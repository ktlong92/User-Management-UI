import React from "react";
import Link from "next/Link";

const Project = ({ data, showTitle, showDescription, showEmployees }) => {
	return (
		<tr key={data.id}>
			{showTitle && (
				<td className='text-justify py-4 px-6 whitespace-nowrap'>
					<Link href={`/project/${data.id}`} key={data.id}>
						<div className='text-sm text-gray-600'>{data.title}</div>
					</Link>
				</td>
			)}
			{showDescription && (
				<td className='text-justify py-4 px-6 whitespace-nowrap'>
					<Link href={`/project/${data.id}`} key={data.id}>
						<div className='text-sm text-gray-600'>{data.description}</div>
					</Link>
				</td>
			)}
			{showEmployees && (
				<td className='text-justify py-4 px-6 whitespace-nowrap'>
					<Link href={`/project/${data.id}`} key={data.id}>
						<div className='text-sm text-gray-600'>{data.employees}</div>
					</Link>
				</td>
			)}
		</tr>
	);
};

export default Project;
