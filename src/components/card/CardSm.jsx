import React from "react";

const CardSm = ({ Title, Chart }) => {
	return (
		<div className='flex justify-between'>
			<div className='w-96 h-80 m-10 p-2 py-4 bg-white shadow-xl border rounded-xl cursor-pointer'>
				<div className='border-b p-3 border-gray-100'>
					<h1 className='font-semibold'>{Title}</h1>
				</div>
				<div>{Chart}</div>
			</div>
		</div>
	);
};

export default CardSm;
