import axios from "axios";
import { SWRConfig } from "swr/dist/use-swr";
import { SessionProvider } from "next-auth/react";
import { Layout } from "../components/layout/Layout";
import "../styles/globals.css";

axios.defaults.baseURL = process.env.BASE_URL;

const fetcher = (...args) => axios(...args).then((response) => response.json());

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
	if (Component.getLayout) {
		return Component.getLayout(<Component {...pageProps} />);
	}

	return (
		<SWRConfig value={{ fetcher }}>
			<SessionProvider session={session}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</SessionProvider>
		</SWRConfig>
	);
}

export default MyApp;
