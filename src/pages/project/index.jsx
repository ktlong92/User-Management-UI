import AddProject from "../../components/project/AddProject";
import ProjectList from "../../components/project/ProjectList";

export default function Project() {
	return (
		<div className='ml-5'>
			<AddProject />
			<div className=''>
				<ProjectList />
			</div>
		</div>
	);
}
