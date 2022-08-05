// import useSWR from "swr";

// export default function useEmployeeInfo() {
// 	const fetcher = (...args) => fetch(...args).then((res) => res.json());

// 	const { data, error } = useSWR(
// 		"http://localhost:8080/api/v1/employees",
// 		fetcher,
// 		(errorRetryInterval = 5000)
// 	);

// 	return {
// 		employeeInfo: data,
// 		isLoading: !error && !data,
// 		isError: error,
// 	};
// }
