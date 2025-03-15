import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col">
      
      {/* Navbar */}
      <nav className="w-full py-4 px-6 flex justify-between items-center bg-white dark:bg-gray-800 shadow-md">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <div className="flex gap-6">
          <Link href="/about" className="hover:text-blue-500">About</Link>
          <Link href="/projects" className="hover:text-blue-500">Projects</Link>
          <Link href="/contact" className="hover:text-blue-500">Contact</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center text-center flex-grow px-6">
        <h2 className="text-5xl font-extrabold mb-4">Welcome to My Portfolio</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg">
          I am a Frontend Developer & IT Support Specialist. Explore my projects and connect with me.
        </p>
        <Link href="/projects">
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg rounded-lg shadow-md hover:bg-blue-700 transition">
            View My Work
          </button>
        </Link>
      </header>

      {/* Footer */}
      <footer className="py-6 bg-gray-200 dark:bg-gray-800 text-center">
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}
