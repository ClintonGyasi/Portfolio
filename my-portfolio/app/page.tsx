import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
      <nav className="mt-6 flex gap-4">
        <Link href="about.tsx" className="text-blue-500 hover:underline">
          About
        </Link>
        <Link href="/projects" className="text-blue-500 hover:underline">
          Projects
        </Link>
        <Link href="/contact" className="text-blue-500 hover:underline">
          Contact
        </Link>
      </nav>
    </div>
  );
}
