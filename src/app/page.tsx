"use client";

import { Facebook, Github, Instagram, Spotlight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any }) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <div className="bg-black w-full min-h-screen overflow-hidden relative">
      {/* Spotlight */}
      <div
        className="fixed w-40 h-40 rounded-full pointer-events-none z-50 bg-white opacity-50 mix-blend-screen transition-transform duration-75 blur-2xl"
        style={{
          transform: `translate(${mousePos.x - 80}px, ${mousePos.y - 80}px)`,
        }}
      ></div>

      {/* Content */}
      {/* <div className="relative z-10 p-10">
          <h1 className="text-4xl font-bold">Сайн байна уу!</h1>
          <p className="mt-4 text-lg">Spotlight эффект ажиллаж байна уу?</p>
        </div> */}

      <header className="fixed top-0 left-1/2 -translate-x-1/2 flex justify-between w-4/5 h-fit py-6 px-8 mx-auto bg-black">
        <h2 className="font-bold text-2xl select-none text-green-500">
          Portfolio
        </h2>
        <div className="flex justify-around gap-8 [&>*]:font-bold [&>*]:text-lg [&>*]:select-none [&>*]:hover:text-green-500 [&>*]:cursor-pointer [&>*]:hover:underline [&>*]:hover:underline-offset-4">
          <p>Home</p>
          {/* <p>Projects</p> */}
          <p>Skills</p>
          {/* <p>Resume</p> */}
        </div>
      </header>

      <section className="w-4/5 h-fit py-4 px-8 mx-auto mt-10 select-none">
        <div className="flex mt-10">
          <div className="w-[60%] flex flex-col justify-center gap-4">
            <h1 className="text-4xl">Hello, I'm</h1>
            <h2 className="text-green-500 font-bold text-6xl">IDER ARIUNAA</h2>
            <h3 className="text-3xl">FULLSTACK Developer</h3>
            <p className="text-xl">
              Full-stack Engineer passionate about building modern, user-focused
              web applications with clean design and powerful functionality.
            </p>

            <div className="flex gap-3">
              <a
                target="_blank"
                href="https://github.com/ider-17"
                className="border rounded-full p-2 border-green-500 hover:border-white"
              >
                <Github className="text-green-500 hover:text-white" size={30} />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/ariun_ider/"
                className="border rounded-full p-2 border-green-500 hover:border-white"
              >
                <Instagram
                  className="text-green-500 hover:text-white"
                  size={30}
                />
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/ider.a.759397"
                className="border rounded-full p-2 border-green-500 hover:border-white"
              >
                <Facebook
                  className="text-green-500 hover:text-white"
                  size={30}
                />
              </a>
            </div>

            {/* <button className="py-2 px-4 border rounded-full text-green-500 border-green-500 hover:border-white hover:text-white w-fit cursor-pointer">
              Hire Me
            </button> */}
          </div>
          <div className="w-[40%]">
            <img src="/assets/profile.webp" className="rounded-xl" />
          </div>
        </div>
      </section>

      {/* skills section */}
      <section></section>
    </div>
  );
}
