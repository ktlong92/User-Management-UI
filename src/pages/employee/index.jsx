import Head from "next/head";
import AddEmployee from "../../components/employee/AddEmployee";
import EmployeeList from "../../components/employee/EmployeeList";

export default function Employee() {
	return (
		<div className='ml-5'>
			<AddEmployee />
			<div className=''>
				<EmployeeList />
			</div>
		</div>
	);
}
