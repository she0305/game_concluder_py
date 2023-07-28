// import {getServerSession} from "next-auth";
// import {authOptions} from "@/app/api/auth/[...nextauth]/options";
// import {redirect} from "next/navigation";
// import {getProviders} from "next-auth/react";
// import Signin from "../../../components/Signin";
//
// export default async function SignInPage() {
//     const session = await getServerSession(authOptions);
//
//     if (session) {
//         redirect('/');
//     }
//
//
//     return <Signin providers={providers}/>;
// }

import Link from "next/link";
import SignIn from "@/components/Signin";
import { ModeToggle } from "@/components/DarkModeToggle";


const signInpage = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-10 h-full max-w-2xl mx-auto my-auto">
            <SignIn/>
        </div>
    );
}

export default signInpage;