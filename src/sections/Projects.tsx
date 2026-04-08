import SaudiImprint from "@/assets/images/Saudi-imprint.png";
import MyLibrary from "@/assets/images/mylibrary.png";
import game from "@/assets/images/game.png";
import Image from "next/image";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
const portfolioProjects = [
  {
    company: "Aljouf University",
    year: "2025",
    title: "Saudi Imprint",
    results: [
      { title: "Saudi Imprint is an e-tourism platform that promotes tourism in Saudi Arabia by offering a digital guide to four main regions, featuring images and detailed descriptions of popular tourist destinations." },
    ],
    link: "https://github.com/Hateeff/saudi-imprint",
    image: SaudiImprint,
  },
  {
    company: "Aljouf University",
    year: "2025",
    title: "Library Management System",
    results: [
      { title: "A web-based Library Management System built with PHP & MySQL, allowing administrators to manage books and users with CRUD operations and PDF support." },
    ],
    link: "https://github.com/Hateeff/Library-Management-System",
    image: MyLibrary,
  },
  {
    company: "Personal Project",
    year: "2026",
    title: "Tic Tac Toe AI Game",
    results: [
      { title: "Tic Tac Toe game with AI opponent built using Python and CustomTkinter, featuring multiple difficulty levels and a Minimax-based AI." },
    ],
    link: "https://github.com/Hateeff/tic-tac-toe-game",
    image: game,
  },
];

export const ProjectsSection = () => {
  return ( 
<section id='projects' className="pb-16 lg:py-24">
<div className="container">
  <SectionHeader eyebrow="Real-world Results" title="My Projects" 
  description="Explore my projects, Each project was carefully crafted with attention to detail, performance, and user experience."/>

<div className="flex flex-col mt-10 gap-20 md:mt-20">
  {portfolioProjects.map((project, projectIndex) =>(
    <Card 
    key={project.title}
    className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
    style={{
      top:`calc(64px + ${projectIndex * 40}px)`
    }}>

    <div className="lg:grid lg:grid-cols-2 lg:gap-16">
      <div className="lg:pb-16">
     <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text"> 
      <span>{project.company}</span>
      <span>&bull;</span> 
      <span>{project.year}</span>
      </div>
      <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
      <hr className="border-t-2 border-white/5 mt-4 md:mt-5"/>
      <ul className="flex flex-col gap-4 mt-4 md:mt-5">
        {project.results.map((result, index) => (
        <li key={index} className="flex gap-2 text-sm md:text-base text-white/50">
        <span>{result.title}</span>
        </li>
        ))}
      </ul>
      <a href={project.link}>
      <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold 
      inline-flex md:w-auto px-6 items-center justify-center gap-2 mt-8">
        <span>GitHub Link</span>
        <ArrowUpRightIcon className="size-4"/>
        </button>
      </a>
      </div>
      <div className="relative">
      <Image
       src={project.image} 
       alt={project.title}
      className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full
      lg:w-auto lg:max-w-none"/>
    </div> 
    </div>
    </Card>
  ))}
</div>
</div>
</section>
);
};
