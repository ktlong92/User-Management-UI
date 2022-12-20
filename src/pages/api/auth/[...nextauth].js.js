import NextAuth from "next-auth";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "lib/mongodb";
import CredentialsProvider from "next-auth/providers/credentials";
import AtlassianProvider from "next-auth/providers/atlassian";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { autocompleteClasses } from "@mui/material";

export default NextAuth({
	// Database connection adapters
	adapter: MongoDBAdapter(clientPromise),
	//  Custom NextAuth pages...
	pages: {
		signIn: "/auth/Login",
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
		// Credentials provider authentication with username and password
		CredentialsProvider({
			credentials: {
				username: { label: "Username", type: "text", placeholder: "Username" },
				password: {
					label: "Password",
					type: "password",
					placeholder: "Password",
				},
			},
			async authorize(credentials, req) {
				const user = { id: 1, userName: "JSmith", email: "jsmith@example.com" };

				if (user) {
					return user;
				} else {
					return null;
				}
			},
		}),
	],
	// Callbacks
	callbacks: {
		async signIn({ user, account, profile, email, credentials }) {
			const isAllowedToSignIn = true;
			if (isAllowedToSignIn) {
				return true;
			} else {
				return false;
			}
		},
		async redirect({ url, baseUrl }) {
			if (url.startsWith("/")) return `${baseUrl}${url}`;
			else if (new URL(url).origin === baseUrl) return url;
			return baseUrl;
		},
		async jwt({ token, account }) {
			if (account) {
				token.accessToken = account.access_token;
			}
			return token;
		},
		async session({ session, token, user }) {
			session.accessToken = token.accessToken;
			return session;
		},
	},
});
