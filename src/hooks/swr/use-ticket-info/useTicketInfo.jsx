// import useSWR from "swr";

// export default function useTicketInfo() {
// 	const fetcher = (...args) => fetch(...args).then((res) => res.json());
	
// 	const { data, error } = useSWR(
// 		"http://localhost:8080/api/v1/tickets",
// 		fetcher,
// 		(errorRetryInterval = 5000)
// 	);

// 	return {
// 		ticketInfo: data,
// 		isLoading: !error && !data,
// 		isError: error,
// 	};
// }
