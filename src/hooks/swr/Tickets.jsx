import useSWR from "swr";
import axios from "axios";

export const formatUrl = () => axios(`tickets/${id}`);

export default function useTicketInfo() {
	const url = formatUrl();
	const { data, error } = useSWR(url);

	return {
		ticket: data || {},
		isLoading: !error && !data,
		isError: error,
	};
}
