import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

export default function About() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-black bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/random/1920x1080/?technology,abstract')" }}>
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-gray-100/80 backdrop-blur-lg"></div>

      {/* Glassy Navbar */}
      <nav className="navbar">
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
      <div className="relative flex flex-col items-center text-center px-6 mt-24 space-y-6 z-10 pb-24">
        {/* Profile Image */}
        <Image 
          src="/profile.jpg" 
          alt="Clinton Gyasi Bannor" 
          width={150} 
          height={150} 
          className="rounded-full border-4 border-gray-400 shadow-lg"
        />

        <h1 className="text-4xl sm:text-5xl font-bold animate-fade-in">About Me</h1>
        <div className="bg-blue-100/70 p-6 rounded-lg shadow-lg backdrop-blur-md animate-fade-in border-2 border-blue-200">
          <p className="text-lg sm:text-xl max-w-2xl">
            Welcome to my portfolio! I'm Clinton Gyasi Bannor, a passionate web developer and IT support specialist. With a strong background in creating dynamic and responsive web applications, I strive to deliver the best user experience. I am also skilled in Power Apps development, helping businesses automate their processes and improve efficiency.
          </p>
          <p className="text-lg sm:text-xl max-w-2xl mt-4">
            I have a keen interest in the latest technologies and continuously seek to improve my skills. When I'm not coding, I enjoy exploring new tech trends, contributing to open-source projects, and connecting with like-minded professionals.
          </p>
          <p className="text-lg sm:text-xl max-w-2xl mt-4">
            Feel free to explore my projects and get in touch if you'd like to collaborate or learn more about my work.
          </p>
        </div>

        {/* Skills Section */}
        <h2 className="text-3xl sm:text-4xl font-bold mt-12 animate-fade-in">Skills</h2>
        <div className="bg-blue-100/70 p-6 rounded-lg shadow-lg backdrop-blur-md animate-fade-in border-2 border-blue-200">
          <ul className="text-lg sm:text-xl max-w-2xl list-disc list-inside space-y-2">
            <li>Web Development (HTML, CSS, JavaScript, React, Next.js)</li>
            <li>IT Support</li>
            <li>Power Apps Development</li>
            <li>Responsive Design</li>
            <li>Version Control (Git, GitHub)</li>
            <li>Problem Solving</li>
            <li>Communication</li>
          </ul>
        </div>
      </div>

      {/* Footer with Social Media Links */}
      <footer className="absolute bottom-4 text-sm flex flex-col items-center gap-2 z-10">
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