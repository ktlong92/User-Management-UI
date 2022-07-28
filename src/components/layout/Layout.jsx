import React, { children } from "react";
import Head from "next/head";
import Header from "../header/Header";
import SideNav from "../sidenav/SideNav";

export const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<title>Phoenix Manager</title>
				<meta name='Admin Dashboard' content='Created by Kaleb Long' />
				<link rel='icon' href='/Dashboard.png' />
			</Head>
			<Header />
			<main className='flex'>
				<SideNav />
				<section className='w-full'>{children}</section>
			</main>
		</>
	);
};
