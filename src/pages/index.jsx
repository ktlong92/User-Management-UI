import { useSession } from "next-auth/react";
import Dashboard from "../pages/dashboard/index";
import Login from "./auth/Login";

export default function Home() {
	const { data: session, status } = useSession();

	if (status === "authenticated") {
		return <Dashboard />;
	}

	return <Login />;
}
