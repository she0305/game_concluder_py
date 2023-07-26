
import poker from "@/app/poker.png";
import {Icons} from "@/components/icons";
import Link from "next/link";
import {AuthForm} from "@/components/AuthForm";
import React from "react";
// this is a server component
const Signin = () => {
    return (
        <div>

        <div className={'flex container mx-auto w-full flex-col items-center justify-center space-y-6 sm:2-[400px] '}>
            <Link href='/' className="flex gap-2 items-center">
            <Icons className={'mx-auto h-10 w-6'}/>
            </Link>
            <h1 className={'text-2xl font-semibold tracking-tight'}>Welcome!</h1>
            <p className={'text-sm max-w-xs mx-auto'}>Sign in to continue</p>
            {/* Sign in with google */}
            <AuthForm/>
            <p className={'px-8 text-center text-sm text-gray-500'}>New to Poker Club? {' '}
            <Link href={'/signup'} className={'text-blue-500 hover:underline'}>Create an account</Link>
            </p>

        </div>
        </div>
    )
}

export default Signin
// 'use client'
// import {ClientSafeProvider, signIn} from "next-auth/react";
//
// type Props = {
//     providers: Record<string, ClientSafeProvider>
// }
// export default function SignIn({ providers}: Props) {
//     return (
//         <>
//             {Object.values(providers).map((provider) => (
//                 <div key={provider.name}>
//                     <button onClick={() => signIn(provider.id)}>
//                         Sign in with {provider.name}
//                     </button>
//                 </div>
//             ))}
//         </>
//     )
// }