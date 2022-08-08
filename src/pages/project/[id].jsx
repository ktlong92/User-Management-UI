import AddTeam from "../../components/modal/AddTeam";
import AddTicket from "../../components/modal/AddTicket";
import SelectedTicketInfo from "../../components/table/SelectedTicketInfo";
import { useRouter } from "next/router";

export default function ProjectDetailPage() {
	const router = useRouter();
	const { id } = router.query;

	return (
		<div className='h-full w-full bg-gray-200'>
			<div className='px-12 pt-8'>
				<h1 className='font-bold text-2xl'>Project {id} Details</h1>
			</div>
			<div className='flex ml-12 mt-6'>
				<AddTeam />
				<AddTicket />
			</div>
			{/* <div>
				<SelectedTicketInfo />
			</div> */}
		</div>
	);
}
