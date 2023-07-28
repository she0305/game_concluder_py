import "./globals.css";
import {Open_Sans} from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Context from "../context/Context";
import {ThemeProvider} from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/Toaster"

const sans = Open_Sans({subsets: ["latin"]});

export const metadata = {
    title: "Poker Club",
    description: "A community hub for poker players",
};

export default function RootLayout({children,}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={sans.className}>
        <body className="flex flex-col h-screen flex flex-col bg-slate-200 dark:bg-gray-800 mx-auto" suppressHydrationWarning={true}>
            <Context>
                <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
                    <Navbar/>
                    <main className="grow w-full justify-center w-full max-w-screen-2xl mx-auto mb-auto  bg-slate-200 dark:bg-gray-800 ">
                    {children}
                    </main>
                </ThemeProvider>
                    <Toaster />
                <Footer/>
            </Context>
                    </body>
        </html>
    );
}
