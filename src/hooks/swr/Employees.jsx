import useSWR from "swr";
import axios from "axios";

export const formatUrl = () => axios(`employees/${id}`);

export default function useEmployeeInfo() {
	const url = formatUrl(); 
	const { data, error } = useSWR(url);

	return {
		employee: data || {},
		isLoading: !error && !data,
		isError: error,
	};
}
