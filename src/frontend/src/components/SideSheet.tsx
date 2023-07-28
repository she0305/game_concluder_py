"use client"

import { Button } from "@/components/ui/Button"
import poker from "../app/poker.png";

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/Sheet"
import React from "react";
import Link from "next/link";
import {signOut, useSession} from "next-auth/react";
import Image from "next/image";

const SHEET_SIDES = [ "right"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
    const { data: session, status } = useSession();
    return (
        <div>
            {SHEET_SIDES.map((side ) => (
                <Sheet key={side} >
                    <SheetTrigger asChild>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                        </svg>

                    </SheetTrigger>
                    <SheetContent side={side} className={'bg-gray-100'}>
                        <SheetHeader>
                            <SheetTitle><div className={"flex gap-2 items-center justify-center text-gray-900 text-lg font-bold "}> Poker Club <Image src={poker} alt={poker} className={"h-5 w-5"}/> </div></SheetTitle>
                            {session ? (
                                <Button text="Sign Out" onClick={() => signOut()} size={'lg'}className={
                                    "bg-green-600 text-center hover:bg-green-700 text-white font-bold py-2 px-4  rounded justify-center"
                                } > Sign Out</Button>
                            ) : (
                                <Link
                                    href={"auth/signin"}
                                    className={
                                        "bg-green-600 text-center hover:bg-green-700 text-white font-bold py-2 px-4  rounded justify-center"
                                    }
                                >
                                    Sign In
                                </Link>
                            )}
                            <SheetDescription>
                                Navigate to your favorite page!
                            </SheetDescription>
                        </SheetHeader>
                        <div className={"flex flex-col items-end "}>
                        <Link href="/about" className="hover:bg-gray-200 text-gray-900 font-bold py-2 px-4 rounded text-xl">
                            ABOUT
                        </Link>
                        <Link href="/forum" className="hover:bg-gray-200 text-gray-900 font-bold py-2 px-4  rounded text-xl">
                            FORUM
                        </Link>
                        <Link href="/helper" className="hover:bg-gray-200 text-gray-900 font-bold py-2 px-4  rounded text-xl">
                            HELPER
                        </Link>
                        </div>
                        {/*<SheetFooter>*/}
                        {/*    <SheetClose asChild>*/}
                        {/*        <Button type="submit">Save changes</Button>*/}
                        {/*    </SheetClose>*/}
                        {/*</SheetFooter>*/}
                    </SheetContent>
                </Sheet>
            ))}
        </div>
    )
}
