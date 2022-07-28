import React from "react";

const CardMd = ({ children }) => {
	return (
		<div className='bg-blue-800 w-4/12 h-80 rounded-xl border border-gray-100'>
			<div className='border-b p-3 border-gray-100'>
				<h1 className='font-semibold'>Tickets</h1>
			</div>
			<div className='flex flex-col items-center p-3'>{children}</div>
		</div>
	);
};

export default CardMd;
