import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-gray-900 py-4 px-8 flex justify-between items-center shadow">
      <div className="text-2xl font-bold text-white">Achis Portfolio</div>
      <nav className="space-x-6">
        <Link href="/" className="text-white hover:text-indigo-300">მთავარი</Link>
        <Link href="/about" className="text-white hover:text-indigo-300">შესახებ</Link>
        <Link href="/projects" className="text-white hover:text-indigo-300">პროექტები</Link>
        <Link href="/contact" className="text-white hover:text-indigo-300">კონტაქტი</Link>
      </nav>
    </header>
  );
}
