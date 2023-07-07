import Hero from "../components/Hero";
import Featured from "../components/Featured";
import {getServerSession} from "next-auth";
import {authOptions} from "./api/auth/[...nextauth]/options";

export default async function HomePage() {
    const session = await getServerSession(authOptions)
    return (
        <section>
            <pre>{JSON.stringify(session)}</pre>
            <Hero/>
            <Featured/>
            Main
        </section>
    );
}
