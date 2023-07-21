'use client'

import {getSession, SessionProvider} from "next-auth/react";
import {ApolloProvider} from "@apollo/client";
import {client} from "@/graphql/client";
import {NextPageContext} from "next";
//Next auth expects you to wrap your app in a SessionProvider component. and use client side hooks to access the session object.
//Hooks will make a http request to the server to get the session object.
//client cannot decode jwt token locally. so it needs to make a request to the server to get the session object.
type Props = {
    children: React.ReactNode;
};

export default function Context({children}: Props) {
    return <ApolloProvider client={client}> <SessionProvider>{children}
    </SessionProvider>
    </ApolloProvider>
}