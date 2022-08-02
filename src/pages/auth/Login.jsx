import React from "react";
import { signIn, signUp } from "next-auth/react";

import {
	FaAtlassian,
	FaGithub,
	FaGoogle,
	FaUserAlt,
	FaLock,
} from "react-icons/fa";

function Login() {
	return (
		<div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-800'>
			<div className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
				{/* User Login Section */}
				<div className='rounded-2xl shadow-2xl flex w-2/3 max-w-4xl'>
					<div className='bg-white w-3/5 p-5 rounded-tl-2xl rounded-bl-2xl'>
						<div className='text-left font-bold'>
							<span className='text-red-600'>Rizer</span>Management
						</div>
						{/* Social Login Section */}
						<div className='py-10'>
							<h2 className='text-3xl font-bold mb-2 text-red-600'>Sign In</h2>
							<div className='border-2 w-24 border-red-600 inline-block mb-2'></div>
							<div className='flex justify-center my-2'>
								<a
									onClick={signIn}
									className='border-2 border-gray-200 rounded-full p-3 mx-1 cursor-pointer'>
									<FaAtlassian className='text-2xl' />
								</a>
								<a
									onClick={signIn}
									className='border-2 border-gray-200 rounded-full p-3 mx-1 cursor-pointer'>
									<FaGithub className='text-2xl' />
								</a>
								<a
									onClick={signIn}
									className='border-2 border-gray-200 rounded-full p-3 mx-1 cursor-pointer'>
									<FaGoogle className='text-2xl' />
								</a>
							</div>
							{/* Username Login Section */}
							<p className='text-gray-400 my-3'>or sign in with credentials</p>
							<div className='flex flex-col items-center'>
								<div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
									<FaUserAlt className='text-gray-400 m-2' />
									<input
										type='text'
										label='Username'
										placeholder='Username'
										className='bg-gray-100 outline-none text-sm flex-1'
									/>
								</div>
								<div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
									<FaLock className='text-gray-400 m-2' />
									<input
										type='password'
										label='password'
										placeholder='Password'
										className='bg-gray-100 outline-none text-sm flex-1'
									/>
								</div>
								<div className='flex justify-between w-64 mb-5'>
									<label className='flex items-center text-sm'>
										<input type='checkbox' name='remember' className='mr-1' />
										Remember me
									</label>
									<a href='#' className='text-sm'>
										Forgot Password?
									</a>
								</div>
								<a
									href='#'
									className='border-2 border-red-600 text-red-600 rounded-full px-12 py-2 inline-block font-semibold hover:bg-red-600 hover:text-white'>
									Sign in
								</a>
							</div>
						</div>
					</div>
					{/* Sign Up Section */}
					<div className='w-2/5 bg-red-600 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12'>
						<h2 className='text-3xl font-bold mb-2'>Sign Up</h2>
						<div className='border-2 w-40 border-white inline-block mb-2'></div>
						<p className='mb-10'>Create an account to get started!</p>
						<a
							href='../auth/SignUp'
							className='border-2 border-white rounded-full px-12 py-2 inline-block font-semibold cursor-pointer hover:bg-white hover:text-red-600 hover:border-black'>
							Sign up
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
