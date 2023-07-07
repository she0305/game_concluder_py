'use client'

import {SessionProvider} from "next-auth/react";
//Next auth expects you to wrap your app in a SessionProvider component. and use client side hooks to access the session object.
//Hooks will make a http request to the server to get the session object.
//client cannot decode jwt token locally. so it needs to make a request to the server to get the session object.
type Props = {
    children: React.ReactNode;
};

export default function AuthContext({children}: Props) {
    return <SessionProvider>{children}

    </SessionProvider>
}