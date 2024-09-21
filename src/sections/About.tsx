'use client';

import React, { useState } from 'react';

import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { ToolboxItems } from "@/components/ToolboxItems";
import StarIcon from "@/assets/images/star.svg";
import ArrowIcon from "@/assets/images/arrow-up-right.svg";
import bookImage from "@/assets/images/book-cover.png";
import profileImage from "@/assets/images/profile-image.jpg";
import Image from 'next/image';
import TypeScriptIcon from "@/assets/icons/typescript.svg";
import TailwindCSSIcon from "@/assets/icons/tailwind-css.svg";
import GitHubIcon from "@/assets/icons/github.svg";
import ReactIcon from "@/assets/icons/react.svg";
import PythonIcon from "@/assets/icons/python.svg";
import NextJSIcon from "@/assets/icons/nextjs.svg";
import FigmaIcon from "@/assets/icons/figma.svg";
import AWSIcon from "@/assets/icons/aws.svg";
import ResolveIcon from "@/assets/icons/resolve.svg";
import CreativeCloudIcon from "@/assets/icons/creative-cloud.svg";
import BlenderIcon from "@/assets/icons/blender.svg";
import NotionIcon from "@/assets/icons/notion.svg";
import TensorFlowIcon from "@/assets/icons/tensorflow.svg";
import DockerIcon from "@/assets/icons/docker.svg";
import CassandraIcon from "@/assets/icons/cassandra.svg";
import PyTorchIcon from "@/assets/icons/pytorch.svg";

import smileMemoji from "@/assets/images/memoji-smile.png";
import mapImage from "@/assets/images/map.png"; //need to change this map image later

import { TechIcon } from "@/components/TechIcon";

const toolboxItems = [
  { title: "React", iconType: ReactIcon },
  { title: "TypeScript", iconType: TypeScriptIcon },
  { title: "Python", iconType: PythonIcon },
  { title: "TailwindCSS", iconType: TailwindCSSIcon },
  { title: "Notion", iconType: NotionIcon },
  { title: "PyTorch", iconType: PyTorchIcon },
  { title: "Tensorflow", iconType: TensorFlowIcon },
  { title: "GitHub", iconType: GitHubIcon },
  { title: "Docker", iconType: DockerIcon },
  { title: "AWS", iconType: AWSIcon },
  { title: "Figma", iconType: FigmaIcon },
  { title: "NextJS", iconType: NextJSIcon },
  { title: "Resolve", iconType: ResolveIcon },
  { title: "Creative Cloud", iconType: CreativeCloudIcon },
  { title: "Blender", iconType: BlenderIcon },
  { title: "Cassandra", iconType: CassandraIcon },
];


const interests = [
  { title: "Photography", emoji: "📷", left:"0%", top:"5%" },
  { title: "Music", emoji: "🎵", left: "60%", top: "5%" },
  { title: "Fitness", emoji: "🏋️‍♂️", left: "5%", top: "65%" },
  { title: "Reading", emoji: "📚", left: "5%", top: "35%" },
  { title: "Jiu-Jitsu", emoji: "🥋", left: "5%", top: "65%" },
  { title: "Gaming", emoji: "🎮", left: "45%", top: "70%" },
];


export const AboutSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleImageClick = () => {
    window.open('https://priyanshum.notion.site/Priyanshu-Mishra-s-Reading-Room-e42e8da3e9cf4a4c83a5a6da99c96625', '_blank'); // Replace with your actual link
  };

  return (
    <div id="about" className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
      <SectionHeader 
        eyebrow="About Me" 
        title="A Glimpse into My World" 
        description=""
      />
      
      <div className="mt-12 sm:mt-16 lg:mt-20 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 lg:gap-20">
        <div className="w-full lg:w-3/5 space-y-6">
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-justify">
            As an engineer passionate about becoming a polymath and exploring the intersection of technology, design, creativity, and innovation, my journey has taken me across a wide variety of fields. From visualizing and analyzing multi-modal data to researching reinforcement learning for autonomous navigation and robotic augmentation, from designing a digital representation of teh future of art-books to composing music for ensembles, and from building hackathon digiatl projects to analyzing startup models, I've explored a wide ariety of subjects, learning at every step of my journey.
          </p>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-justify">
            Beyond the digital realm, I'm also very interested in exploring engaging experiences on the web, photography, writing and producing music, serving as my alternate perspective driving my passions and projects.
          </p>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed test- justify">
            I hope you find something interesting or cool here, and I'd love to hear from you!
          </p>
          <a 
            href="https://priyanshumishra.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center bg-white text-black px-6 py-3 rounded-lg text-sm sm:text-base font-medium transition-all hover:bg-gray-100 hover:shadow-md"
          >
            Check Out my Blog 
            <ArrowIcon className="ml-2 w-4 h-4" />
          </a>
        </div>
        <div className="w-full lg:w-2/5 flex flex-col items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-sky-500 rounded-2xl transform group-hover:rotate-6 transition-all duration-300 ease-out"></div>
            <div className="relative z-10 overflow-hidden rounded-2xl">
              <Image 
                src={profileImage} 
                alt="Priyanshu Mishra" 
                width={320} 
                height={320} 
                className="rounded-2xl shadow-2xl transform transition-all duration-300 ease-out group-hover:scale-105 group-hover:rotate-3"
              />
            </div>
          </div>
          <p className="mt-6 text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-sky-400">Priyanshu Mishra</p>
        </div>
      </div>

      <div className="mt-20 sm:mt-28 lg:mt-36 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Creative Portfolio Card */}
        <Card className="h-[320px] md:col-span-2 lg:col-span-3 flex flex-col bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl shadow-xl flex flex-col md:flex-row md:w-[calc(100%+2.05rem)] lg:w-[calc(100%)]">
          <div className="flex flex-col md:w-1/2 md:pr-4">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <StarIcon className="w-6 h-6 text-emerald-200" />
                <h3 className="text-xl font-serif text-white">Creative Portfolio</h3>
              </div>
              <p className="text-sm text-white/80 mb-6 leading-relaxed">
                Explore my creative work, including photography 📷 and music production 🎸. 
                (Coming Soon! 🤞)
              </p>
            </div>
            <a href="https://priyanshumishra.xyz" target="_blank" rel="noopener noreferrer" 
               className="inline-flex items-center px-4 py-2 bg-white text-gray-900 rounded-lg font-medium text-sm md:text-base transition-colors duration-300 hover:bg-gray-200 mt-auto md:mt-4">
              View my Creative Portfolio
              <ArrowIcon className="w-4 h-4 ml-2" />
            </a>
          </div>
          <div className="md:w-1/2 flex items-center justify-center mt-4 md:mt-0">
            <div className="w-40 relative overflow-hidden rounded-xl">
              <Image 
                src={bookImage} 
                alt="Book Cover" 
                className="w-full h-auto rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer" 
                width={240} 
                height={360}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={handleImageClick}
              />
              {isHovered && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg rounded-xl">
                  Recent Reads
                </div>
              )}
            </div>
          </div>
        </Card>

        {/* Toolbox Card */}
        <Card className="p-0 md:col-span-3 lg:col-span-3 flex flex-col bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl shadow-xl">
          <div className="flex items-center space-x-4 mb-4">
            <StarIcon className="w-6 h-6 text-emerald-200" />
            <h3 className="text-xl font-serif text-white">Toolbox</h3>
          </div>
          <p className="text-sm text-gray-300 mb-6 leading-relaxed">
            My Toolbox of most commonly used Technologies, Frameworks, Languages, and Software.
          </p>
          <ToolboxItems toolboxitems={toolboxItems} />
        </Card>


        {/* Beyond the Code Card */}
        <Card className="h-[320px] bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl shadow-xl flex flex-col lg:col-span-2 overflow-hidden">
          <div className="flex items-center space-x-4 mb-4">
            <StarIcon className="w-6 h-6 text-emerald-200" />
            <h3 className="text-xl font-serif text-white">Beyond the Code</h3>
          </div>
          <p className="text-sm text-gray-300 mb-6 leading-relaxed">
            Explore my interests and hobbies beyond the digital realm :)
          </p>
          <div className="grid grid-cols-3 gap-4 flex-1">
            {interests.map((interest, index) => (
              <div
                key={interest.title}
                className="flex flex-col items-center justify-center p-2 rounded-lg overflow-hidden relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-200 to-sky-400 opacity-80 transition-all duration-300 group-hover:opacity-100"></div>
                <div className="relative z-10 flex flex-col items-center transform transition-all duration-300 group-hover:scale-110">
                  <span className="text-2xl mb-2">{interest.emoji}</span>
                  <span className="text-xs font-semibold font-medium text-gray-950 text-center">{interest.title}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Map Card */}
        <Card className="h-[320px] relative md:col-span-2 lg:col-span-1 md:ml-auto md:w-[calc(100%)] lg:w-[calc(100%)]">
          
            <Image src={mapImage} alt="Map" layout="fill" objectFit="cover" className="h-full w-full object-cover object-left-top" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full
            after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 
            after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-200 to-sky-400 -z-10 animate-ping [animation-duration:2s]"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-200 to-sky-400 -z-10"></div>
              <Image src={smileMemoji} alt="Smile Memoji" width={60} height={60} className="size-20" />
            </div>
        </Card>
      </div>
    </div>
  );
};

