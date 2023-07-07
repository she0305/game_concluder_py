'use client';
import Link from "next/link";
import poker from "../app/poker.png";
import Image from "next/image";
import Button from "./ui/Button";
import {useSession, signOut, signIn} from "next-auth/react"
import Avatar from "@/components/Avatar";


export default function Navbar() {
    const {data: session, status} = useSession()
    const loading = status === "loading"
    const user = session?.user
    return (
        <header
            className={"flex justify-between items-center py-4 px-2 bg-green-600"}
        >
            <Link href="/">
                <div className={"flex gap-4"}>
                    <Image src={poker} alt="poker" className=" w-10 h-10"/>
                    <h1 className={"text-2xl font-bold text-black"}>{`Poker Club`}</h1>
                </div>
            </Link>
            <nav className={"flex gap-4 text-black font-bold items-center"}>
                <Link href="/about">about</Link>
                <Link href="/forum">forum</Link>
                <Link href="/helper">helper</Link>
                {user &&
                    <Link href={`/user/${user.name}`}>
                        <Avatar image={user.image}/>
                    </Link>
                }

                {session ? <Button text="Log out" onClick={() => signOut()}/> :
                    <Button text="Log in" onClick={() => signIn()}/>
                }

            </nav>
        </header>
    );
}
