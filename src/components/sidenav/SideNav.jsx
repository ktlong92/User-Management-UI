// import { Avatar } from "@mui/material";
import { React, useState } from "react";
import { BsFillXDiamondFill, BsSearch } from "react-icons/bs";
import Link from "next/Link";

import {
	MdAssignmentInd,
	MdDashboard,
	MdAssessment,
	MdReceipt,
} from "react-icons/md";

const SideNav = () => {
	const [open, setOpen] = useState(true);

	return (
		<div className='flex'>
			<div
				className={`bg-gray-800 h-screen p-5 pt-8 ${
					open ? "w-40" : "w-20"
				} duration-300 relative`}>
				<BsFillXDiamondFill
					className='bg-white text-red-600 text-3xl p-1 rounded-full absolute -right-3 top-9 border border-red-600 cursor-pointer'
					onClick={() => setOpen(!open)}
				/>
				<div className='inline-flex'>
					{/* <Avatar /> */}
					<h1
						className={`text-white text-2lg ml-4 font-medium origin-left duration-300 ${
							!open && "scale-0"
						}`}>
						Welcome,
					</h1>
				</div>
				<div className='inline-flex'>
					{/* <Avatar /> */}
					<h1
						className={`text-white text-2lg ml-4 font-medium origin-left duration-300 ${
							!open && "scale-0"
						}`}>
						Hiruzen
					</h1>
				</div>
				{/* <div
					className={`flex items-center rounded-md bg-light-white mt-12 ${
						!open ? "px-2.5" : "px-4"
					} py-2`}>
					<BsSearch
						className={`text-white text-lg block float-left cursor-pointer ${
							open && "mr-2"
						}`}
					/>
					<input
						type={"search"}
						placeholder='Search'
						className={`text-base bg-transparent w-full text-white focus:outline-none ${
							!open && "hidden"
						}`}
					/>
				</div> */}
				<ul className='pt-2 mt-6'>
					<Link href='/'>
						<li className='text-white text-lg flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md'>
							<MdDashboard />
							<div
								className={`text-base font-medium flex-1 duration-200 ${
									!open && "hidden"
								}`}>
								Home
							</div>
						</li>
					</Link>
					<Link href='/company'>
						<li className='text-white text-lg flex items-center gap-x-4 cursor-pointer p-2 mt-4 hover:bg-light-white rounded-md'>
							<MdAssignmentInd />
							<div
								className={`text-base font-medium flex-1 duration-200 ${
									!open && "hidden"
								}`}>
								Company
							</div>
						</li>
					</Link>
					{/* <Link href='/project'>
						<li className='text-white text-lg flex items-center gap-x-4 cursor-pointer p-2 mt-4 hover:bg-light-white rounded-md'>
							<MdAssessment />
							<div
								className={`text-base font-medium flex-1 duration-200 ${
									!open && "hidden"
								}`}>
								Projects
							</div>
						</li>
					</Link> */}
					{/* <Link href='/ticket'>
						<li className='text-white text-lg flex items-center gap-x-4 cursor-pointer p-2 mt-4 hover:bg-light-white rounded-md'>
							<MdReceipt />
							<div
								className={`text-base font-medium flex-1 duration-200 ${
									!open && "hidden"
								}`}>
								Tickets
							</div>
						</li>
					</Link> */}
				</ul>
			</div>
		</div>
	);
};
export default SideNav;
