import Image from "next/image";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Hi, I'm Mike 👋</h1>
        <p className="text-xl mt-4">IT Support | Web Developer | Power Apps Developer</p>
        <a href="#projects" className="mt-6 inline-block px-6 py-3 bg-blue-500 rounded-lg text-white hover:bg-blue-700">
          View My Work
        </a>
      </div>
    </section>
  );
}
