import AddTeam from "../../components/modal/AddTeam";
import AddTicket from "../../components/modal/AddTicket";
import SelectedTicketInfo from "../../components/table/SelectedTicketInfo";

export default function ProjectDetailPage() {
	return (
		<div className='h-full w-full bg-gray-200'>
			<div className='px-12 pt-8'>
				<h1 className='font-bold text-2xl'>Projects</h1>
			</div>
			<div className='flex ml-12 mt-6'>
				<AddTeam />
				<AddTicket />
			</div>
			<div>
				<SelectedTicketInfo />
			</div>
		</div>
	);
};
