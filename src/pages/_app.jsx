import { SessionProvider } from "next-auth/react";
import { Layout } from "../components/layout/Layout";
import "../styles/globals.css";

// const fetcher = (...args) => fetch(...args).then((res) => res.json());

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
	if (Component.getLayout) {
		return Component.getLayout(<Component {...pageProps} />);
	}

	return (
		<SessionProvider session={session}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</SessionProvider>
	);
}

export default MyApp;
