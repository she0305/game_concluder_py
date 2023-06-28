import Link from "next/link";
import poker from "../../public/poker.png";
import Image from "next/image";
export default function Header() {
  return (
    <header
      className={"flex justify-between items-center py-4 px-2 bg-green-600"}
    >
      <Link href="/">
        <div className={"flex gap-4"}>
          <Image src={poker} alt="poker" className=" w-10 h-10" />
          <h1 className={"text-2xl font-bold text-black"}>{`Poker Club`}</h1>
        </div>
      </Link>
      <nav className={"flex gap-4 text-black"}>
        <Link href="/">home</Link>
        <Link href="/about">about</Link>
        <Link href="/forem">forem</Link>
        <Link href="/helper">helper</Link>
      </nav>
    </header>
  );
}
