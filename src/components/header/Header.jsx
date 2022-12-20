import React from "react";
import Link from "next/Link";
import { FaPhoenixSquadron } from "react-icons/fa";

const Header = () => {
	return (
		<div className='flex shadow-sm bg-gray-800 h-16 w-screen p-4 justify-between'>
			<div className='flex space-x-3'>
				<FaPhoenixSquadron className='text-red-600 text-4xl block float-left mr-4' />

				<h1 className='text-white font-semibold'>Rizer Management</h1>
			</div>
			<div className='flex space-x-4 mr-3'>
				<Link href='/auth/Login'>
					<a className='text-white font-semibold cursor-pointer'>Logout</a>
				</Link>
			</div>
		</div>
	);
};

export default Header;
