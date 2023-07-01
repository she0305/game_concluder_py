import "./globals.css";
import { Open_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sans = Open_Sans({ subsets: ["latin"] });

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
      <body className="flex flex-col w-full max-w-screen-3xl mx-auto">
        <header>
            <Navbar />
        </header>
        <main className="grow max-w-screen-2xl mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
