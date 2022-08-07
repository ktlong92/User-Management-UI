import AddEmployee from "../../components/modal/AddEmployee";
import AdminTable from "../../components/table/AdminTable";

export default function Company() {
	return (
		<div className='h-full w-full bg-gray-200'>
			<div className='px-12 pt-8'>
				<h1 className='font-bold text-2xl'>Company</h1>
			</div>
			<div className=' bg-white mx-4 my-4 shadow-sm w-9/10 h-3/4 border rounded-xl border-gray-100'>
				<AddEmployee />
				<AdminTable />
			</div>
		</div>
	);
}
