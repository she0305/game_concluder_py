'use client'
// @flow
import * as React from 'react';
import { Button } from "@/components/ui/Button";
import {FC} from "react";
import Image from "next/image";
import {signIn} from "next-auth/react";
import googleIcon from "../app/asset/googleIcon.png";
import poker from "@/app/poker.png";
import {toast} from "@/components/ui/UseToast";

//fsf tab
export const AuthForm = ()  =>{

    const [loading, setLoading] = React.useState(false);
    const loginGoogle = async () => {
        setLoading(true);
        try {
        await signIn('google', {callbackUrl: 'http://localhost:3000'});
        setLoading(false);

        } catch (error) {
            toast({   title: "Uh oh! Something went wrong.", description: "There was a problem with your request.", variant: "default"});
        } finally {
            setLoading(false);

        }
    }

    return (
        <div >
            <Button text="Sign In" onClick={loginGoogle} size={'lg'} className='w-full'><div className="flex bg-black py-2 px-20 rounded-full gap-2 py-3 px-16 items-center"><Image className='h-6 w-6 mr-2' src={googleIcon} alt={'google'} /><div className={"font-bold text-white "}> Continue with Google </div></div></Button>

        </div>
    );
};