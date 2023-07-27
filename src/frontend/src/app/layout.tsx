import "./globals.css";
import {Open_Sans} from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Context from "../context/Context";
import {ThemeProvider} from "@/components/ThemeProvider";


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
        <body className="pt-12 min-h-screen flex flex-col bg-slate-200 dark:bg-gray-800 mx-auto" suppressHydrationWarning={true}>
            <Context>
                <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
                    <Navbar/>
                    <main className="w-full justify-center w-full max-w-screen-2xl mx-auto mb-auto h-full bg-slate-200 dark:bg-gray-800 pt-12 ">
                    {children}
                    </main>
                </ThemeProvider>

                <Footer/>
            </Context>
                    </body>
        </html>
    );
}
