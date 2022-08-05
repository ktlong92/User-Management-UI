import useSWR from "swr";

export default function useProjectInfo() {
	const fetcher = (...args) => fetch(...args).then((res) => res.json());

	const { data, error } = useSWR(
		"http://localhost:8080/api/v1/projects",
		fetcher,
		{
			onErrorRetry: (error, revalidate, { retryCount }) => {
				// Never retry on 404.
				if (error.status === 404) return;

				// Only retry up to 10 times.
				if (retryCount >= 10) return;

				// Retry after 5 seconds.
				setTimeout(() => revalidate({ retryCount }), 5000);
			},
		}
	);

	return {
		projectInfo: data,
		isLoading: !error && !data,
		isError: error,
	};
}
