import TicketTable1 from "../../components/table/TicketTable1"
import Pagination from "@mui/material/Pagination";


export default function Ticket() {

	const handleNextButtonClick = () => {
		setPage(page + 1);
	};

	return (
		<div className='h-full w-full bg-gray-200'>
			<div className='px-12 pt-8'>
				<h1 className='font-bold text-2xl'>Tickets</h1>
			</div>
			<div className=' bg-white mx-4 my-4 shadow-sm w-9/10 h-3/4 border rounded-xl border-gray-100'>
				<div className='flex border-b p-3 border-gray-100 justify-between'>
					<h1 className='font-semibold'>Tickets</h1>
				</div>
				<div>
					<TicketTable1 />
				</div>
				<Pagination
					// count={tickets.length / rowsPerPage}
					variant='outlined'
					color='error'
					onChange={handleNextButtonClick}
					defaultPage={0}
				/>
			</div>
		</div>
	);
}
