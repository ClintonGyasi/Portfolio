import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-black text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-xl font-bold">Mike's Portfolio</h1>
        <ul className="flex space-x-6">
          <li><Link href="#about">About</Link></li>
          <li><Link href="#skills">Skills</Link></li>
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
