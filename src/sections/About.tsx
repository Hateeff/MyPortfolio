import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import NextjsIcon from "@/assets/icons/nextjs.svg";
import ReactIcon from "@/assets/icons/react.svg";
import VscodeIcon from "@/assets/icons/vscode.svg";
import GithubIcon from "@/assets/icons/github.svg";
import JiraIcon from "@/assets/icons/jira.svg";
import PythonIcon from "@/assets/icons/python.svg";
import { TechIcon } from "@/components/Techlcon";
import mapImage from "@/assets/images/map2.png";
import smileMemoje from "@/assets/images/memoji-smile.webp";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";

const toolboxItems = [
  { 
    title: 'JavaScript',
    iconType:JavascriptIcon,
  },
  { 
    title: 'Next.js',
    iconType:NextjsIcon,
  },
  {
    title: 'React',
    iconType:ReactIcon,
   },
  {
    title: 'VSCode',
    iconType:VscodeIcon,
   },
  { 
    title: 'GitHub',
    iconType:GithubIcon,
  },
  { 
    title: 'Jira',
    iconType:JiraIcon,
  },
  { 
    title: 'Python',
    iconType:PythonIcon,
  },
];
const hobbies = [
  {
    title: 'Traveling',
    emoji: '✈️',
    left:'5%',
    top:'5%',
  },
  {
    title: 'Reading',
    emoji: '📚',
    left:'50%',
    top:'5%',
  },
   {
    title: 'Photography',
    emoji: '📷',
    left:'10%',
    top:'35%',
  },
   {
    title: 'Gaming',
    emoji: '🎮',
    left:'70%',
    top:'45%',
  },
  {
    title: 'Music',
    emoji: '🎵',
    left:'5%',
    top:'65%',
  },
  {
    title: 'Movies',
    emoji: '🎬',
    left:'45%',
    top:'70%',
  },
];  
export const AboutSection = () => {
  return (
  <section id='about'>
  <div className="py-20 lg:py-28">
    <div className="container">
  <SectionHeader
  eyebrow="About me"
  title="A Glimpse Into My World"
  description="Learn more about who I am and what I do"/>  
  <div className="mt-20 flex flex-col gap-8">
    <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">

        {/* First Card */}
    <Card className="h-[320px] md:col-span-2 lg:col-span-1">
      <CardHeader 
      title="My Resume" 
      description="Check up my Resume"/>
    <div className="flex justify-center mt-10">
      <a href="/HATEEF_Resume.pdf" target="_blank" rel="noopener noreferrer"
    className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 border border-gray-900 hover:scale-105 transition bg-gradient-to-r from-emerald-300 to-sky-400">
      <span className="font-medium text-gray-950">View</span>
      <ArrowUpRightIcon className="size-4 font-medium text-gray-950"/>
      </a>
    </div>
    </Card>

          {/* Second Card */}
    <Card className="h-[320px] md:col-span-3 lg:col-span-2">
      <CardHeader 
      title="My Toolbox" 
      description="Explore the technologies and tools I use to craft exceptional digital experiences."/>
    <ToolboxItems Items={toolboxItems}  
    itemsWrapperClassName="animate-move-left [animation-duration:30s]"/>
    <ToolboxItems Items={toolboxItems} 
    className="mt-6" 
    itemsWrapperClassName="animate-move-right [animation-duration:15s]"/>
    </Card>
    </div>

          {/* Third Card */}
    <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
    <Card className="h-[320px] p-0 flex flex-col col-span-3 lg:col-span-2">
      <CardHeader 
      title="Beyond the code" 
      description="Explore my interests and hobbies beyond the digital realm."
      className="px-6 py-6"/>
    <div className="relative flex-1">
      {hobbies.map(hobby => (
        <div key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
        style={{
          left: hobby.left,
          top: hobby.top,
        }}>
          <span className="font-medium text-gray-950">{hobby.title}</span>
          <span>{hobby.emoji}</span>
        </div>
      ))}
    </div>
    </Card>

        {/* Fourth Card */}
    <Card className="h-[320px] p-0 relative col-span-3 md:col-span-2 lg:col-span-1">
      <Image 
      src={mapImage} 
      alt="Map" 
      className="h-full w-full object-cover object-left-top"/>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full 
      after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
      <Image 
      src={smileMemoje} 
      alt="Memoje Image"
      className="size-20"/>
      </div>
    </Card>
    </div>
   </div>
  </div>
</div>
</section>
  );
};
