"use client";

import { useEffect, useRef } from "react";
import { Facebook, Github, Instagram } from "lucide-react";

const mySkills = [
  { id: 1, name: "CSS", image: "/assets/CSS-Logo.webp" },
  { id: 2, name: "HTML", image: "/assets/HTML-Logo.webp" },
  { id: 3, name: "JavaScript", image: "/assets/JS-Logo.webp" },
  { id: 4, name: "TypeScript", image: "/assets/TS-Logo.webp" },
  { id: 5, name: "Next.js", image: "/assets/Next-js-Logo.webp" },
  { id: 6, name: "React", image: "/assets/React-Logo.webp" },
  { id: 7, name: "Node.js", image: "/assets/Node-js-Logo.webp" },
  { id: 8, name: "Vercel", image: "/assets/Vercel-Logo.webp" },
  { id: 9, name: "Supabase", image: "/assets/Supabase-Logo.webp" },
  { id: 10, name: "Express", image: "/assets/Express-js-Logo.webp" },
  { id: 11, name: "Render", image: "/assets/Render-Logo.webp" },
  { id: 12, name: "MongoDB", image: "/assets/MongoDB.webp" },
  { id: 13, name: "SQL", image: "/assets/SQL-Logo.webp" },
];

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    // 🎨 Бөмбөлөгний өнгө
    const colors = ["#ff0080", "#00ffff", "#ffcc00", "#00ff88", "#ff5500"];
    const particles: {
      x: number;
      y: number;
      radius: number;
      color: string;
      angle: number;
      speed: number;
    }[] = [];

    // 🎯 Илүү олон бөмбөлөг, жижиг
    for (let i = 0; i < 250; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        angle: Math.random() * Math.PI * 2,
        speed: 0.5 + Math.random() * 1.5, // хурд нэмэгдүүлсэн
      });
    }

    const draw = () => {
      if (!ctx) return;
      ctx.fillStyle = "rgba(0, 0, 0, 0.2)"; // бага opacity background
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.angle += 0.03; // эргэлтийн хурд нэмэгдсэн
        p.x += Math.cos(p.angle) * p.speed;
        p.y += Math.sin(p.angle) * p.speed;

        // Mouse proximity effect
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          p.x += (dx / dist) * 0.5;
          p.y += (dy / dist) * 0.5;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();
      });

      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="w-screen min-h-screen bg-black overflow-hidden relative">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 h-full w-full bg-black"
      />
      <div className="w-full overflow-hidden relative">
        <header className="fixed top-0 left-1/2 -translate-x-1/2 flex justify-between w-4/5 h-fit py-6 px-8 mx-auto">
          <h2 className="font-bold text-2xl select-none text-green-500">
            Portfolio
          </h2>
          <div className="flex justify-around gap-8 [&>*]:font-bold [&>*]:text-lg [&>*]:select-none [&>*]:hover:text-green-500 [&>*]:cursor-pointer [&>*]:hover:underline [&>*]:hover:underline-offset-4">
            <a href="#home">Home</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
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
              <h2 className="text-green-500 font-bold text-6xl">
                IDER ARIUNAA
              </h2>
              <h3 className="text-3xl">FULLSTACK Developer</h3>
              <p className="text-xl">
                Full-stack Engineer passionate about building modern,
                user-focused web applications with clean design and powerful
                functionality.
              </p>

              <div className="flex gap-3">
                <a
                  target="_blank"
                  href="https://github.com/ider-17"
                  className="border rounded-full p-2 border-green-500 hover:border-white"
                >
                  <Github
                    className="text-green-500 hover:text-white"
                    size={30}
                  />
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
                <h5 className="text-3xl font-bold text-green-500">
                  {skill.name}
                </h5>
              </div>
            ))}
          </div>
        </section>

        {/* projects */}
        <section
          id="projects"
          className="w-4/5 h-fit py-4 px-8 mx-auto mt-10 select-none pt-20"
        >
          <h2 className="text-center text-5xl text-green-500 font-bold mb-10">
            My Projects
          </h2>
        </section>
      </div>
    </div>
  );
}
