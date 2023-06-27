import Link from "next/link";
export default function Header() {
  return (
    <header>
      <Link href="/">
        <h1>{`Helloooo`}</h1>
      </Link>
      <nav>
        <Link href="/">home</Link>
        <Link href="/about">about</Link>
        <Link href="/forem">forem</Link>
        <Link href="/helper">helper</Link>
      </nav>
    </header>
  );
}
