"use client"

import { Button } from "@/components/ui/Button"
import poker from "../app/poker.png";
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
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
import {session} from "next-auth/core/routes";
import Image from "next/image";

const SHEET_SIDES = [ "right"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
    const { data: session, status } = useSession();
    return (
        <div >
            {SHEET_SIDES.map((side ) => (
                <Sheet key={side}>
                    <SheetTrigger asChild>
                        <box-icon name='menu'></box-icon>
                    </SheetTrigger>
                    <SheetContent side={side}>
                        <SheetHeader>
                            <SheetTitle><div className={"flex gap-2 items-center justify-center text-gray-900 text-lg font-bold "}> Poker Club <Image src={poker} alt={poker} className={"h-5 w-5"}/> </div></SheetTitle>
                            {session ? (
                                <Button text="Sign Out" onClick={() => signOut()} />
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
                                Make changes to your profile here. Click save when you're done.
                            </SheetDescription>
                        </SheetHeader>
                        <div className={"flex flex-col items-end "}>
                        <Link href="/about" className="hover:bg-gray-200 text-gray-900 font-bold py-2 px-1 rounded">
                            ABOUT
                        </Link>
                        <Link href="/forum" className="hover:bg-gray-200 text-gray-900 font-bold py-2 px-1 rounded">
                            FORUM
                        </Link>
                        <Link href="/helper" className="hover:bg-gray-200 text-gray-900 font-bold py-2 px-1 rounded">
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
