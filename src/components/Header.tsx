import Link from "next/link";
export default function Header() {
  return (
    <header className={'flex justify-between items-center py-4 bg-green-600'}>
      <Link href="/">
        <h1 className={'text-2xl font-bold'}>{`Poker Club`}</h1>
      </Link>
      <nav className={'flex gap-4'}>
        <Link href="/">home</Link>
        <Link href="/about">about</Link>
        <Link href="/forem">forem</Link>
        <Link href="/helper">helper</Link>
      </nav>
    </header>
  );
}
