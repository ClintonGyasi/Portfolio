import Link from "next/link";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

export default function Projects() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-black bg-cover bg-center border-4 border-blue-200 rounded-lg" style={{ backgroundImage: "url('https://source.unsplash.com/random/1920x1080/?technology,abstract')" }}>
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-gray-100/80 backdrop-blur-lg rounded-lg"></div>

      {/* Glassy Navbar */}
      <nav className="navbar w-full border-b-4 border-blue-200 rounded-t-lg">
        <Link href="/" passHref>
          <h2 className="navbar-brand cursor-pointer">My Portfolio</h2>
        </Link>
        <div className="navbar-links">
          <Link href="/about" className="hover:text-blue-400">About</Link>
          <Link href="/projects" className="hover:text-blue-400">Projects</Link>
          <Link href="/contact" className="hover:text-blue-400">Contact</Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative flex flex-col items-center text-center px-6 mt-24 space-y-6 z-10 pb-24 bg-white/70 backdrop-blur-md rounded-lg">
        <h1 className="text-4xl sm:text-5xl font-bold">My Projects</h1>
        <p className="text-lg sm:text-xl mt-4 max-w-2xl">
          Here are some of the projects I've worked on.
        </p>

        {/* Placeholder Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Project 1</h3>
            <p className="text-lg">Will be updated soon</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Project 2</h3>
            <p className="text-lg">Will be updated soon.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Project 3</h3>
            <p className="text-lg">Will be updated soon.</p>
          </div>
        </div>
      </div>

      {/* Footer with Social Media Links */}
      <footer className="absolute bottom-4 text-sm flex flex-col items-center gap-2 z-10 w-full pt-4">
        <div className="flex gap-4">
          <a href="https://linkedin.com/in/clinton-gyasi-bannor-267375240" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-blue-600 transition-transform transform hover:scale-110" />
          </a>
          <a href="https://github.com/ClintonGyasi" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl hover:text-gray-800 transition-transform transform hover:scale-110" />
          </a>
          <a href="https://facebook.com/clintonbannor" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl hover:text-blue-700 transition-transform transform hover:scale-110" />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Clinton Gyasi Bannor. All rights reserved.</p>
      </footer>
    </div>
  );
}