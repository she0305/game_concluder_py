'use client'
// @flow
import * as React from 'react';
import Button from "@/components/ui/Button";
import {FC} from "react";
import {signIn} from "next-auth/react";


//fsf tab
export const AuthForm = ()  =>{

    const [loading, setLoading] = React.useState(false);

    const login = async () => {
        setLoading(true);
        try {
        await signIn('google', {callbackUrl: 'http://localhost:3000'});
        setLoading(false);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className={'flex justify-center'}>
            <Button text="Sign In" onClick={(login) => signIn()}/>

        </div>
    );
};