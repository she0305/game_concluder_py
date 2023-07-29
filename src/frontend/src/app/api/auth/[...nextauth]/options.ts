import type {NextAuthOptions} from 'next-auth'

import { compare } from 'bcrypt'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from "next-auth/providers/credentials";
import EmailProvider from "next-auth/providers/email"
import {addUser} from "@/service/user";
import { client } from "@/graphql/client";




export const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt',
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string || '',
            clientSecret: process.env.GOOGLE_SECRET as string || '',
            // async profile(profile) {
            //     return {
            //         id: profile.sub,
            //         name: profile.name,
            //         firstname: profile.given_name,
            //         lastname: profile.family_name,
            //         email: profile.email,
            //         image: profile.picture,
            //     }
            // },
        }),
        // EmailProvider({
        //     server: process.env.MAIL_SERVER,
        //     from: "<no-reply@example.com>",
        // }),
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Email",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                email: {label: "Email", type: "email", placeholder: "email@pokerclub.com"},
                password: {label: "Password", type: "password", placeholder: "Password"},
            },
            async authorize(credentials, req) {
                // Add logic here to look up the user from the credentials supplied
                // const user = {id: "1", name: "Smith", email: "jsmith@example.com"}
//https://next-auth.js.org/providers/credentials
                if (!credentials?.email || !credentials.password) {
                    return null
                }

                // const user = await prisma.user.findUnique({
                //     where: {
                //         email: credentials.email,
                //     }
                // })
                // if (!user) {
                //     return null
                // }
//                 if (credentials?.email === user.email && credentials?.password === credentials.password) {
//                     // any object returned will be saved in `user` property of the jwt
//                     return user
//                 } else {
//                     // if you return null then an error will be displayed advising the user to check their details.
//                     return true as any
//
//                     // you can also reject this callback with an error thus the user will be sent to the error page with the error message as a query parameter
//                 }
//                 const isPasswordValid = await compare(credentials.password, user.password || '')
//
//                 if(!isPasswordValid) {
//                     return null
//                 }
                return {
                    id: user.id + '',
                    name: user.name,
                    email: user.email,
                }
            }
        })
    ],

    callbacks: {
        // async signIn({ user: { id, name, email } }) {
        //     if (!email) {
        //         return false
        //     }
        //     await addUser({ id, name: name || '', email, image: ''  })
        //     console.log('hello, signin', id, name, email)
        //     return true
        // },
        async session({ token, session }) {
            // Send properties to the client, like an access_token from a provider.
            if(token) {
                session.user.id = token.id
                session.user.name = token.name
                session.user.email = token.email
                session.user.image = token.picture
                session.user.username = token.username
            }
            console.log('hello, session', session)
            const user = session?.user;
            if (user) {
                session.user = {
                    ...user
                }
            }
            return session
        },
        // async jwt({ token, user}) {
        //     // make function to query user by email
        //
        // },


    }
    // pages: {
    //     signIn: '/auth/signin',
    //     signOut: '/auth/signout',
    //     error: '/auth/error', // Error code passed in query string as ?error=
    //     verifyRequest: '/auth/verify-request', // (used for check email message)
    //     newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
    // }

}