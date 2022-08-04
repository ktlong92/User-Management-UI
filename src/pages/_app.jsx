import axios from "axios";
import { SWRConfig } from "swr";
import { SessionProvider } from "next-auth/react";
import { Layout } from "../components/layout/Layout";
import "../styles/globals.css";

axios.defaults.baseURL = process.env.BASE_URL;

const fetcher = (...args) => axios(...args).then((response) => response.json());

function MyApp({
	Component,
	pageProps: { session, ...pageProps },
}) {
	if (Component.getLayout) {
		return Component.getLayout(<Component {...pageProps} />);
	}

	return (
		<SessionProvider session={session}>
			<SWRConfig value={{ fetcher, fallback: pageProps?.swrFallback || {} }}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</SWRConfig>
		</SessionProvider>
	);
}

export default MyApp;
