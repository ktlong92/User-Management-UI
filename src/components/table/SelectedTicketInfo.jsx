import React from 'react'

export default function SelectedTicketInfo() {
	return (
		<div className='bg-white ml-14 mr-4 mt-4 shadow-sm w-7/8 h-80 border rounded-xl border-gray-100'>
			<div className='flex border-b p-3 border-gray-100 justify-between'>
				<h1 className='font-semibold'>Selected Ticket Info</h1>
			</div>
			<div>
				<div className='flex border p-3 h-64 m-2 rounded w-7/8'>
					<div className='flex justify-between h-14 my-4'>
						<label className='text-gray-600 text-lg font-semibold'>Title</label>
						<label className='text-gray-600 text-lg font-semibold'>
							Description
						</label>
						<label className='text-gray-600 text-lg font-semibold'>
							Author
						</label>
					</div>
					<div className='flex justify-between h-14 my-4'>
						<label className='text-gray-600 text-lg font-semibold'>
							Status
						</label>
						<label className='text-gray-600 text-lg font-semibold'>
							Priority
						</label>
						<label className='text-gray-600 text-lg font-semibold'>Type</label>
						<label className='text-gray-600 text-lg font-semibold'>
							Time Estimate
						</label>
					</div>
					<div className='flex justify-between h-14 my-4'>
						<label className='text-gray-600 text-lg font-semibold'>
							Assign Employees
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};
