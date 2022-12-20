import React from "react";

const SignUp = () => {
	
	const saveUser = () => { };
	
	return (
		<div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-800'>
			<div className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
				{/* User SignUp Section */}
				<div className='rounded-2xl shadow-2xl flex w-full max-w-2xl'>
					<div className='bg-white w-full p-5 rounded-2xl'>
						<div className='text-left font-bold'>
							<span className='text-red-600'>Rizer</span>Management
						</div>
						<h1 className='text-red-600 text-2xl my-3'>Create Account</h1>
						<div className='flex flex-col items-center'>
							<div className='bg-gray-100 w-2/3 p-2 flex items-center mb-3'>
								<input
									type='text'
									label='Name'
									placeholder='Name'
									className='bg-gray-100 outline-none text-sm flex-1'
								/>
							</div>
							<div className='bg-gray-100 w-2/3 p-2 flex items-center mb-3'>
								<input
									type='email'
									label='email'
									placeholder='Email'
									className='bg-gray-100 outline-none text-sm flex-1'
								/>
							</div>
							<div className='bg-gray-100 w-2/3 p-2 flex items-center mb-3'>
								<input
									type='text'
									label='Username'
									placeholder='Username'
									className='bg-gray-100 outline-none text-sm flex-1'
								/>
							</div>
							<div className='bg-gray-100 w-2/3 p-2 flex items-center mb-3'>
								<input
									type='password'
									label='password'
									placeholder='Password'
									className='bg-gray-100 outline-none text-sm flex-1'
								/>
							</div>
							<div className='bg-gray-100 w-2/3 p-2 flex items-center mb-3'>
								<input
									type='password'
									label='password'
									placeholder='Confirm Password'
									className='bg-gray-100 outline-none text-sm flex-1'
								/>
							</div>
							<a
								href='../auth/Login'
								className='border-2 border-red-600 text-red-600 rounded-full px-12 py-2 inline-block font-semibold hover:bg-red-600 hover:text-white'
								onClick={saveUser}							
							>
								Sign Up
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;

SignUp.getLayout = function PageLayout(page) {
	return <>{page}</>;
};