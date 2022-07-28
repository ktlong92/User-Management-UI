import NextAuth from "next-auth";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "lib/mongodb";
// import CredentialsProvider from "next-auth/providers/credentials";
import AtlassianProvider from "next-auth/providers/atlassian";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
	// Database connection adapters
	adapter: MongoDBAdapter(clientPromise),
	//  Custom NextAuth pages...
	pages: {
		signIn: "/Login",
	},
	// All providers that you want to use
	providers: [
		// OAuth authentication providers...
		AtlassianProvider({
			clientId: process.env.ATLASSIAN_CLIENT_ID,
			clientSecret: process.env.ATLASSIAN_CLIENT_SECRET,
			scope:
				"write:jira-work read:jira-work read:jira-user offline_access read:me",
		}),
		GitHubProvider({
			clientId: process.env.GITHUB_CLIENT_ID,
			clientSecret: process.env.GITHUB_CLIENT_SECRET,
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
	],
	// Callbacks
	callbacks: {
		async signIn({ user, account, profile, email, credentials }) {
			const isAllowedToSignIn = true;
			if (isAllowedToSignIn) {
				return true;
			} else {
				// Return false to display a default error message
				return false;
				// Or you can return a URL to redirect to:
				// return '/unauthorized'
			}
		},
		async redirect({ url, baseUrl }) {
			// Allows relative callback URLs
			if (url.startsWith("/")) return `${baseUrl}${url}`;
			// Allows callback URLs on the same origin
			else if (new URL(url).origin === baseUrl) return url;
			return baseUrl;
		},
		async jwt({ token, account }) {
			// Persist the OAuth access_token to the token right after signin
			if (account) {
				token.accessToken = account.access_token;
			}
			return token;
		},
		async session({ session, token, user }) {
			// Send properties to the client, like an access_token from a provider.
			session.accessToken = token.accessToken;
			return session;
		},
	},
});
