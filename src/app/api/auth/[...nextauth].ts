import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID!,
            clientSecret: process.env.GOOGLE_SECRET!,
        }),
        // Add more providers here if you want to...
        // GithubProvider({
        //     clientId: process.env.GITHUB_ID!,
        //     clientSecret: process.env.GITHUB_SECRET!,
        // }),
        // DiscordProvider({
        //     clientId: process.env.DISCORD_ID!,
        //     clientSecret: process.env.DISCORD_SECRET!,
        // }),
        // AppleProvider({
        //     clientId: process.env.APPLE_ID!,
        //     clientSecret: process.env.APPLE_SECRET!,
        // }),

    ],
};

export default NextAuth(authOptions);





