const Ticket = () => {
	return (
		<div className='h-full w-full bg-gray-200'>
			<div className='px-12 pt-8'>
				<h1 className='font-bold text-2xl'>Test4 Ticket Details Page</h1>
			</div>
			<div className=' bg-white ml-14 mx-4 my-4 shadow-sm w-4/5 h-5/8 border rounded-xl border-gray-100'>
				<div className='flex bg-red-600 text-white border-b border rounded p-3 border-gray-100 justify-between'>
					<h1 className='font-semibold'>Test4 Ticket Information</h1>
				</div>
				<div>
					<div className='flex h-24 mt-4 mb-24 mx-10'>
						<div className='h-14 my-4'>
							<label className='block text-gray-600 text-xl font-semibold'>
								Title
							</label>
							<input
								type='text'
								name='title'
								value='Test4'
								className='h-10 w-96 mt-2 py-4 text-sm'></input>
						</div>
						<div className='h-14 my-4'>
							<label className='block text-gray-600 text-xl font-semibold'>
								Description
							</label>
							<input
								type='text'
								name='title'
								value='Test description that is super long and takes up a lot of space'
								className='h-10 w-96 mt-2 mr-8 py-2 text-sm'></input>
						</div>
						<div className='h-14 my-4 mx-40'>
							<label className='block text-gray-600 text-xl font-semibold'>
								Project
							</label>
							<input
								type='text'
								name='title'
								value='Project 1'
								className='h-10 w-96 mt-2 py-2 text-sm'></input>
						</div>
					</div>
					<div className='flex h-24 mt-4 mb-24 mx-10'>
						<div className='h-14 my-4'>
							<label className='block text-gray-600 text-xl font-semibold'>
								Priority
							</label>
							<input
								type='text'
								name='title'
								value='Low'
								className='h-10 w-96 mt-2 py-2 text-sm'></input>
						</div>
						<div className='h-14 my-4'>
							<label className='block text-gray-600 text-xl font-semibold'>
								Type
							</label>
							<input
								type='text'
								name='title'
								value='Bug'
								className='h-10 w-96 mt-2 py-2 text-sm'></input>
						</div>
						<div className='h-14 my-4'>
							<label className='block text-gray-600 text-xl font-semibold'>
								Status
							</label>
							<input
								type='text'
								name='title'
								value='Resolved'
								className='h-10 w-96 mt-2 py-2 text-sm'></input>
						</div>
					</div>
					<div className='flex h-24 mt-4 mb-24 mx-10'>
						<div className='h-14 my-4'>
							<label className='block text-gray-600 text-xl font-semibold'>
								Assigned Employees
							</label>
							<input
								type='text'
								name='title'
								value='Naruto Uzumaki, Sasuke Uchiha, Sakura Haruno'
								className='h-10 w-96 mt-2 py-2 text-sm'></input>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Ticket;



{/* <label className='block text-gray-600 text-xl font-semibold '>
							Description:
						</label>
						<p className='h-10 w-96  mt-2 px-2 py-2'>
							Test description that is super long and takes up a lot of space
						</p>
						<label className='block text-gray-600 text-xl font-semibold '>
							Project:
						</label>
						<p className='h-10 w-96  mt-2 px-2 py-2'>Project 1</p>
					</div>
					<div className='flex h-24 mt-4 mb-24 mx-10'>
						<label className='block text-gray-600 text-xl font-semibold  mr-4'>
							Priority:
						</label>
						<p className='h-10 w-96  mt-2 px-2 py-2'>Low</p>
						<label className='block text-gray-600 text-xl font-semibold  mr-4'>
							Type:
						</label>
						<p className='h-10 w-96  mt-2 px-2 py-2'>Feature</p>
						<label className='block text-gray-600 text-xl font-semibold '>
							Status:
						</label>
						<p className='h-10 w-96  mt-2 px-2 py-2'>In-Progress</p>
					</div>
					<div className='flex h-24 my-4 mx-10'>
						<label className='block text-gray-600 text-xl font-semibold '>
							Assigned Employees:
						</label>
						<p className='h-10 w-96  mt-2 px-2 py-2'>
							Naruto Uzumaki, Sasuke Uchiha, Sakura Haruno
						</p> */}