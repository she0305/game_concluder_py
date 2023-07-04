import type {NextAuthOptions} from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from "next-auth/providers/credentials";
import EmailProvider from "next-auth/providers/email"

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string || '',
            clientSecret: process.env.GOOGLE_SECRET as string || '',
        }),
        // EmailProvider({
        //     server: process.env.MAIL_SERVER,
        //     from: "<no-reply@example.com>",
        // }),
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Sign in",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                email: {label: "Email", type: "email", placeholder: "jsmith@example.com"},
                password: {label: "Password", type: "password", placeholder: "Password"},
            },
            async authorize(credentials, req) {
                // Add logic here to look up the user from the credentials supplied
                const user = {id: "1", name: "J Smith", email: "jsmith@example.com"}
//https://next-auth.js.org/providers/credentials
                if (credentials?.email === user.email && credentials?.password === credentials.password) {
                    // Any object returned will be saved in `user` property of the JWT
                    return user
                } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null

                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
            }
        })
    ],


}