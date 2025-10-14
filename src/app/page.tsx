"use client";

import { Facebook, Github, Instagram } from "lucide-react";
import { useEffect, useState } from "react";

const mySkills = [
  {
    id: 1,
    name: "CSS",
    image: "/assets/CSS-Logo.webp",
  },
  {
    id: 2,
    name: "HTML",
    image: "/assets/HTML-Logo.webp",
  },
  {
    id: 3,
    name: "JavaScript",
    image: "/assets/JS-Logo.webp",
  },
  {
    id: 4,
    name: "TypeScript",
    image: "/assets/TS-Logo.webp",
  },
  {
    id: 5,
    name: "Next.js",
    image: "/assets/Next-js-Logo.webp",
  },
  {
    id: 6,
    name: "React",
    image: "/assets/React-Logo.webp",
  },
  {
    id: 7,
    name: "Node.js",
    image: "/assets/Node-js-Logo.webp",
  },
  {
    id: 8,
    name: "Vercel",
    image: "/assets/Vercel-Logo.webp",
  },
  {
    id: 9,
    name: "Supabase",
    image: "/assets/Supabase-Logo.webp",
  },
  {
    id: 10,
    name: "Express",
    image: "/assets/Express-js-Logo.webp",
  },
  {
    id: 11,
    name: "Render",
    image: "/assets/Render-Logo.webp",
  },
  {
    id: 12,
    name: "MongoDB",
    image: "/assets/MongoDB.webp",
  },
  {
    id: 13,
    name: "SQL",
    image: "/assets/SQL-Logo.webp",
  },
];

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
      <div
        className="fixed w-40 h-40 rounded-full pointer-events-none z-50 bg-white opacity-50 mix-blend-screen transition-transform duration-75 blur-2xl"
        style={{
          transform: `translate(${mousePos.x - 80}px, ${mousePos.y - 80}px)`,
        }}
      ></div>

      <header className="fixed top-0 left-1/2 -translate-x-1/2 flex justify-between w-4/5 h-fit py-6 px-8 mx-auto bg-black">
        <h2 className="font-bold text-2xl select-none text-green-500">
          Portfolio
        </h2>
        <div className="flex justify-around gap-8 [&>*]:font-bold [&>*]:text-lg [&>*]:select-none [&>*]:hover:text-green-500 [&>*]:cursor-pointer [&>*]:hover:underline [&>*]:hover:underline-offset-4">
          <a href="#home">Home</a>
          {/* <p>Projects</p> */}
          <a href="#skills">Skills</a>
          {/* <p>Resume</p> */}
        </div>
      </header>

      {/* Home section */}
      <section
        id="home"
        className="w-4/5 h-fit py-4 px-8 mx-auto mt-10 select-none"
      >
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
      <section
        id="skills"
        className="w-4/5 h-fit py-4 px-8 mx-auto mt-10 select-none pt-20"
      >
        <h2 className="text-center text-5xl text-green-500 font-bold mb-10">
          My Skills
        </h2>
        <div className="flex flex-wrap gap-8 w-fit mx-auto">
          {mySkills.map((skill) => (
            <div key={skill.id} className="w-[200px] text-center space-y-2">
              <img
                src={`${skill.image}`}
                className="w-full h-[200px] object-contain object-center rounded-lg"
              />
              <h5 className="text-3xl font-bold">{skill.name}</h5>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
