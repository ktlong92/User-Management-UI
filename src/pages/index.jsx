import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Home() {
	const { data: session, status } = useSession();
	const router = useRouter();

	if (status === "authenticated") {
		return (path = "/dashboard");
	}

	return (path = "/auth/login");
}
