import useSWR from "swr";
import axios from "axios";

export const formatUrl = () => axios(`projects/${id}`);

export default function useProjectInfo() {
	const url = formatUrl();
	const { data, error } = useSWR(url);

	return {
		project: data || {},
		isLoading: !error && !data,
		isError: error,
	};
}
