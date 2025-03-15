import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-black bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/random/1920x1080/?technology,abstract')" }}>
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-gray-100/80 backdrop-blur-lg"></div>

      {/* Glassy Navbar */}
      <nav className="navbar">
        <h2 className="navbar-brand">My Portfolio</h2>
        <div className="navbar-links">
          <Link href="/about" className="hover:text-blue-400">About</Link>
          <Link href="/projects" className="hover:text-blue-400">Projects</Link>
          <Link href="/contact" className="hover:text-blue-400">Contact</Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative flex flex-col items-center text-center px-6 mt-24 space-y-6 z-10">
        {/* Profile Image */}
        <Image 
          src="/profile.jpg" 
          alt="Clinton Gyasi Bannor" 
          width={150} 
          height={150} 
          className="rounded-full border-4 border-gray-400 shadow-lg animate-bounce"
        />

        {/* Name & Title */}
        <h1 className="text-4xl sm:text-5xl font-bold">Clinton Gyasi Bannor</h1>
        <p className="text-lg sm:text-xl">IT Support | Web Developer | Power Apps Developer</p>

        {/* Call-to-Action Button */}
        <Link href="/projects">
          <button className="px-6 py-3 bg-blue-600 text-white text-lg rounded-lg shadow-md hover:bg-blue-700 transition">
            View My Work
          </button>
        </Link>
      </div>

      {/* Footer with Social Media Links */}
      <footer className="absolute bottom-4 text-sm flex flex-col items-center gap-2 z-10">
        <div className="flex gap-4">
          <a href="https://linkedin.com/in/clinton-gyasi-bannor-267375240" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-blue-600" />
          </a>
          <a href="https://github.com/ClintonGyasi" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl hover:text-gray-800" />
          </a>
          <a href="https://facebook.com/clintonbannor" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl hover:text-blue-700" />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Clinton Gyasi Bannor. All rights reserved.</p>
      </footer>
    </div>
  );
}