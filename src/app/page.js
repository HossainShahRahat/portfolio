"use client";

import React, { useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Database,
  Terminal,
  MapPin,
  Phone,
  Sparkles,
  User,
} from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Outfit, Space_Grotesk } from "next/font/google";

// --- FONTS ---
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
});

// --- DATA CONFIGURATION ---
const DATA = {
  personal: {
    name: "Shah Rahat Hossain",
    title: "MERN Stack Developer",
    location: "Dhaka, 1216, Bangladesh",
    email: "shah.rahat.hossain.aiub@gmail.com",
    phone: "+8801337422204",
    bio: "I’m a full-stack web developer focused on building responsive and scalable web applications. I work with React, JavaScript, Node.js, Express, and MongoDB. I value clean code, performance, and practical problem-solving.",
  },
  socials: {
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-profile",
  },
  skills: {
    frontend: ["React", "Next.js", "JavaScript", "Tailwind CSS", "HTML/CSS"],
    backend: ["Node.js", "Express", "MongoDB", "PHP"],
    languages: ["C", "C++", "Java", "C#"],
    tools: ["Git", "VS Code", "MS Office"],
  },
  projects: [
    {
      name: "Healthcare Support",
      desc: "A web platform dedicated to healthcare services and patient support.",
      tech: ["React", "Node.js", "MongoDB"],
      link: "https://care-xyz-livid.vercel.app/",
    },
    {
      name: "AssetVerse",
      desc: "Comprehensive Asset Management System for tracking and managing resources.",
      tech: ["MERN Stack", "Tailwind"],
      link: "https://asset-verse-project.netlify.app/",
    },
    {
      name: "SocialEvents",
      desc: "A social development events platform connecting communities.",
      tech: ["React", "Firebase", "API Integration"],
      link: "https://b12-a10-future-box-client.netlify.app/",
    },
    {
      name: "WarmPaws",
      desc: "Pet care platform focused on winter support for animals.",
      tech: ["React", "Frontend"],
      link: "https://sunny-sunflower-96cf82.netlify.app/",
    },
  ],
  experience: [
    {
      company: "Quantanite Bangladesh Ltd.",
      role: "Lead Generation Specialist",
      period: "09/2020 - 03/2022",
      desc: "Identified and captured high-quality leads through LinkedIn and strategic web research to fuel sales pipelines.",
    },
  ],
  education: [
    {
      institution: "American International University-Bangladesh",
      degree: "Bachelor of Science: CSE",
      period: "2022 - Current",
    },
  ],
};

// --- ANIMATIONS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      className={`relative min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500 selection:text-white overflow-x-hidden ${outfit.className}`}
    >
      {/* SCROLL PROGRESS BAR */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* GRAIN OVERLAY */}
      <div
        className="fixed inset-0 z-[1] opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* BACKGROUND BLOBS */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/70 backdrop-blur-lg border-b border-white/5">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`${spaceGrotesk.className} text-xl font-bold text-white tracking-tighter`}
          >
            SRH<span className="text-cyan-400">.DEV</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-6 text-sm font-medium text-slate-400"
          >
            {["About", "Projects", "Skills", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-cyan-400 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </motion.div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="about" className="relative z-10 pt-32 pb-20 px-6">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex-1 space-y-8"
          >
            {/* Status Badge */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-wider text-cyan-400 uppercase bg-cyan-400/10 rounded-full border border-cyan-400/20"
            >
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              Currently working as an IT Support Executive at DigiTrench Ltd.
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className={`${spaceGrotesk.className} text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight`}
            >
              Hello, I'm <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {DATA.personal.name}
              </span>
            </motion.h2>

            <motion.h3
              variants={fadeInUp}
              className="text-2xl md:text-3xl text-slate-400 font-medium"
            >
              {DATA.personal.title}
            </motion.h3>

            <motion.p
              variants={fadeInUp}
              className="text-slate-400 text-lg max-w-lg leading-relaxed"
            >
              {DATA.personal.bio}
            </motion.p>

            <motion.div variants={fadeInUp} className="flex gap-4 pt-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-white text-black font-bold rounded-lg hover:scale-105 transition-all duration-300"
              >
                Contact Me
              </a>
              <SocialButton
                href={DATA.socials.github}
                icon={<Github size={20} />}
              />
              <SocialButton
                href={DATA.socials.linkedin}
                icon={<Linkedin size={20} />}
              />
            </motion.div>
          </motion.div>

          {/* AVATAR AREA - UPDATED: Big, No Border, Static, Glow Backside */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center items-center relative"
          >
            <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
              {/* The Glow Effect (Backside) */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/30 via-blue-500/30 to-purple-600/30 rounded-full blur-[80px]" />

              <div className="relative w-full h-full rounded-2xl overflow-hidden z-10">
                <img
                  src="/me.png"
                  alt="Rahat"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="relative z-10 py-20">
        <div className="container mx-auto px-6">
          <SectionHeader title="Technical Skills" icon={<Terminal />} />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <SkillCard
              title="Frontend"
              icon={<Code2 className="text-cyan-400" />}
              skills={DATA.skills.frontend}
              delay={0.1}
            />
            <SkillCard
              title="Backend"
              icon={<Database className="text-purple-400" />}
              skills={DATA.skills.backend}
              delay={0.2}
            />
            <SkillCard
              title="Languages"
              icon={<Terminal className="text-pink-400" />}
              skills={DATA.skills.languages}
              delay={0.3}
            />
            <SkillCard
              title="Tools"
              icon={<Sparkles className="text-yellow-400" />}
              skills={DATA.skills.tools}
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="relative z-10 py-20 px-6">
        <div className="container mx-auto">
          <SectionHeader title="Featured Projects" icon={<Code2 />} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DATA.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative bg-slate-900/50 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden"
              >
                {/* Hover Spotlight Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <h3
                      className={`${spaceGrotesk.className} text-2xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors`}
                    >
                      {project.name}
                    </h3>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-500 hover:text-cyan-400 hover:rotate-12 transition-all"
                    >
                      <ExternalLink size={24} />
                    </a>
                  </div>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-semibold bg-white/5 text-cyan-300 rounded-full border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE & EDUCATION SECTION */}
      <section className="relative z-10 py-20 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Experience Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className={`${spaceGrotesk.className} text-2xl font-bold text-slate-100 mb-8 flex items-center gap-3`}
            >
              <span className="w-8 h-1 bg-cyan-500 rounded-full" /> Experience
            </h2>
            <div className="space-y-8 pl-4 border-l border-white/10">
              {DATA.experience.map((exp, i) => (
                <div key={i} className="relative pl-8 group">
                  {/* Timeline dot */}
                  <div className="absolute w-3 h-3 bg-slate-900 border border-cyan-500 rounded-full -left-[7px] top-2 group-hover:bg-cyan-500 transition-colors" />
                  <h3 className="text-xl font-bold text-slate-200">
                    {exp.role}
                  </h3>
                  <p className="text-cyan-400 text-sm mb-2 font-mono">
                    {exp.company} | {exp.period}
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className={`${spaceGrotesk.className} text-2xl font-bold text-slate-100 mb-8 flex items-center gap-3`}
            >
              <span className="w-8 h-1 bg-purple-500 rounded-full" /> Education
            </h2>
            <div className="space-y-8 pl-4 border-l border-white/10">
              {DATA.education.map((edu, i) => (
                <div key={i} className="relative pl-8 group">
                  {/* Timeline dot */}
                  <div className="absolute w-3 h-3 bg-slate-900 border border-purple-500 rounded-full -left-[7px] top-2 group-hover:bg-purple-500 transition-colors" />
                  <h3 className="text-xl font-bold text-slate-200">
                    {edu.degree}
                  </h3>
                  <p className="text-purple-400 text-sm mb-2 font-mono">
                    {edu.institution}
                  </p>
                  <p className="text-slate-500 text-sm">{edu.period}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="relative z-10 py-24 px-6 overflow-hidden"
      >
        {/* Subtle background gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-900/10 pointer-events-none" />

        <div className="container mx-auto max-w-3xl text-center relative z-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`${spaceGrotesk.className} text-4xl md:text-5xl font-bold text-white mb-6`}
          >
            Let's Build Something <span className="text-cyan-400">Amazing</span>
          </motion.h2>
          <p className="text-slate-400 mb-10 text-lg">
            I am currently looking for new opportunities as a MERN Stack
            Developer. Got a project in mind or just want to chat?
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
            <ContactItem
              icon={<Mail className="text-cyan-400" />}
              text={DATA.personal.email}
            />
            <ContactItem
              icon={<MapPin className="text-cyan-400" />}
              text={DATA.personal.location}
            />
            <ContactItem
              icon={<Phone className="text-cyan-400" />}
              text={DATA.personal.phone}
            />
          </div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`mailto:${DATA.personal.email}`}
            className="inline-block px-10 py-4 bg-white text-black font-bold rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all"
          >
            Say Hello
          </motion.a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-slate-950 border-t border-white/5 text-center text-slate-600 text-sm">
        <p>
          © {new Date().getFullYear()} {DATA.personal.name}. Built with Next.js
          & Tailwind.
        </p>
      </footer>
    </div>
  );
}

// ------------------------------------------------
// SUB-COMPONENTS
// ------------------------------------------------

function SectionHeader({ title, icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-3 mb-12"
    >
      <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-cyan-400">
        {icon}
      </div>
      <h2
        className={`${spaceGrotesk.className} text-3xl font-bold text-slate-100`}
      >
        {title}
      </h2>
    </motion.div>
  );
}

function SkillCard({ title, icon, skills, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-white/5 hover:border-cyan-500/30 hover:bg-slate-900/80 transition-all duration-300 group"
    >
      <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-slate-200 mb-4">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, i) => (
          <li
            key={i}
            className="text-slate-400 text-sm flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 bg-slate-600 rounded-full group-hover:bg-cyan-400 transition-colors" />
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function SocialButton({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="p-3 border border-white/10 bg-white/5 rounded-lg hover:bg-white hover:text-black hover:border-white transition-all duration-300"
    >
      {icon}
    </a>
  );
}

function ContactItem({ icon, text }) {
  return (
    <div className="flex items-center justify-center gap-3 text-slate-300 bg-white/5 px-4 py-2 rounded-full border border-white/5">
      {icon}
      <span>{text}</span>
    </div>
  );
}
