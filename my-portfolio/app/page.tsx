import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      {/* Navbar */}
      <nav className="w-full px-8 py-4 flex justify-between items-center bg-white dark:bg-gray-800 shadow-md fixed top-0 z-50">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Mike's Portfolio</h1>
        <div className="flex gap-6 text-lg">
          <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">About</Link>
          <Link href="/projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Projects</Link>
          <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Contact</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col-reverse md:flex-row items-center justify-center text-center md:text-left min-h-screen px-6 md:px-16 gap-10">
        {/* Left Side - Text */}
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white">
            Hi, I'm Mike 👋
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
            IT Support Specialist | Web Developer | Power Apps Expert  
            <br /> Helping businesses with **IT solutions, web apps, and automation.**
          </p>
          <Link href="/projects">
            <button className="btn btn-primary mt-6">
              View My Work
            </button>
          </Link>
        </div>

        {/* Right Side - Image */}
        <div>
          <img 
            src="/profile.jpg" 
            alt="Mike's Profile" 
            className="w-48 h-48 md:w-60 md:h-60 rounded-full border-4 border-white shadow-lg"
          />
        </div>
      </header>

      {/* Services Section */}
      <section className="py-24 px-6 md:px-16 text-center bg-gray-100 dark:bg-gray-800">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">What I Do</h3>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
            <h4 className="text-2xl font-semibold text-gray-900 dark:text-white">IT Support</h4>
            <p className="text-gray-600 dark:text-gray-300">
              Troubleshooting, system maintenance, and enterprise IT support.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
            <h4 className="text-2xl font-semibold text-gray-900 dark:text-white">Web Development</h4>
            <p className="text-gray-600 dark:text-gray-300">
              Building modern websites with **Next.js, React, and Tailwind CSS.**
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
            <h4 className="text-2xl font-semibold text-gray-900 dark:text-white">Power Apps</h4>
            <p className="text-gray-600 dark:text-gray-300">
              Automating business processes using **Power Apps and Power Automate.**
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-center text-white">
        <p>&copy; {new Date().getFullYear()} Mike's Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}
