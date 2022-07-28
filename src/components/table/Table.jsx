import React from "react";

const Table = ({ Title }) => {
	return (
		<div className=' bg-white ml-2 shadow-sm w-8/12 h-80 border rounded-xl border-gray-100'>
			<div className='border-b p-3 border-gray-100'>
				<h1 className='font-semibold'>{Title}</h1>
			</div>
			<div>Hello</div>
		</div>
	);
};

export default Table;
