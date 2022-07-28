import { React, useState, useEffect, Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";

const UpdateEmployee = ({ employeeId, setResponseEmployee }) => {
	const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

	const [isOpen, setIsOpen] = useState(false);

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	const [employee, setEmployee] = useState({
		id: id,
		firstName: "",
		lastName: "",
		phoneNumber: "",
		email: "",
		role: "",
	});

	const handleChange = (event) => {
		const value = event.target.value;
		setEmployee({ ...employee, [event.target.name]: value });
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(EMPLOYEE_API_BASE_URL + "/" + employeeId, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					},
				});
				const _employee = await response.json();
				setEmployee(_employee);
				setIsOpen(true);
			} catch (error) {
				console.log(error);
			}
		};
		if (employeeId) {
			fetchData();
		}
	}, [employeeId]);

	const updateEmployee = async (e) => {
		e.preventDefault();
		const response = await fetch(EMPLOYEE_API_BASE_URL + "/" + employeeId, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(employee),
		});
		if (!response.ok) {
			throw new Error("Something went wrong");
		}
		const _employee = await response.json();
		setResponseEmployee(_employee);
		reset(e);
	};

	const reset = (e) => {
		e.preventDefault();
		setIsOpen(false);
	};

	return (
		<Transition appear show={isOpen} as={Fragment}>
			<Dialog
				as='div'
				className='fixed inset-0 z-10 overflow-y-auto'
				onClose={closeModal}>
				<div className='min-h-screen px-4 text-center'>
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0 scale-95'
						enterTo='opacity-100 scale-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100 scale-100'
						leaveTo='opacity-0 scale-95'>
						<div className='inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded'>
							<Dialog.Title
								as='h3'
								className='text-lg font-md leading-6 text-gray-900'>
								Update employee
							</Dialog.Title>
							<div className='flex max-w-md max-auto'>
								<div className='py-2'>
									<div className='h-14 my-4'>
										<label className='block text-gray-600 text-sm font-normal'>
											First Name
										</label>
										<input
											type='text'
											name='firstName'
											value={employee.firstName}
											onChange={(e) => handleChange(e)}
											className='h-10 w-96 border mt-2 px-2 py-2'></input>
									</div>
									<div className='h-14 my-4'>
										<label className='block text-gray-600 text-sm font-normal'>
											Last Name
										</label>
										<input
											type='text'
											name='lastName'
											value={employee.lastName}
											onChange={(e) => handleChange(e)}
											className='h-10 w-96 border mt-2 px-2 py-2'></input>
									</div>
									<div className='h-14 my-4'>
										<label className='block text-gray-600 text-sm font-normal'>
											Phone Number
										</label>
										<input
											type='text'
											name='phoneNumber'
											value={employee.phoneNumber}
											onChange={(e) => handleChange(e)}
											className='h-10 w-96 border mt-2 px-2 py-2'></input>
									</div>
									<div className='h-14 my-4'>
										<label className='block text-gray-600 text-sm font-normal'>
											Email
										</label>
										<input
											type='text'
											name='email'
											value={employee.email}
											onChange={(e) => handleChange(e)}
											className='h-10 w-96 border mt-2 px-2 py-2'></input>
									</div>
									<div className='h-14 my-4'>
										<label className='block text-gray-600 text-sm font-normal'>
											Role
										</label>
										<input
											type='text'
											name='role'
											value={employee.role}
											onChange={(e) => handleChange(e)}
											className='h-10 w-96 border mt-2 px-2 py-2'></input>
									</div>
									<div className='h-14 my-4 space-x-4 pt-4'>
										<button
											onClick={updateEmployee}
											className='rounded text-white font-semibold bg-red-600 hover:bg-red-800 py-2 px-6'>
											Update
										</button>
										<button
											onClick={reset}
											className='rounded text-white font-semibold bg-red-600 hover:bg-red-800 py-2 px-6'>
											Close
										</button>
									</div>
								</div>
							</div>
						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition>
	);
};

export default UpdateEmployee;
