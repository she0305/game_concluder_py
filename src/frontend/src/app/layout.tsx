import "./globals.css";
import {Open_Sans} from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AuthContext from "../context/AuthContext";
import {ApolloProvider} from "@apollo/client";
import { client } from "@/graphql/client";

const sans = Open_Sans({subsets: ["latin"]});

export const metadata = {
    title: "Poker Club",
    description: "A community hub for poker players",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={sans.className}>
        <body className="flex flex-col w-full max-w-screen-3xl mx-auto" suppressHydrationWarning={true}>
        <ApolloProvider client={client}>
            <AuthContext>
                <header>
                    <Navbar/>
                </header>
                <main className="grow max-w-screen-2xl mx-auto">{children}</main>
                <Footer/>
            </AuthContext>
        </ApolloProvider>
        </body>
        </html>
    );
}
