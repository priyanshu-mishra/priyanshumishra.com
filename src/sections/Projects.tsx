import Image from "next/image";

import CheckCircleIcon from "@/assets/images/check-circle.svg";
import ArrowUpRightIcon from "@/assets/images/arrow-up-right.svg";
// import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
// import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import CapstoneProjectBanner from "@/assets/images/CapstoneProjectBanner.png";
import grainImage from "@/assets/images/grain.jpg";
// import sustainableEnergyDashboard from "@/assets/images/sustainable-energy-dashboard.png";

import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [

  // {//these projects, images and everything else in this section is made up and placeholder use only, I'll need to replace with real projects and info


  {
    company: "Engineering Capstone Research Project",
    year: "2023",
    title: "RLHF based Autonomous Navigation & Robotic Augmentation",
    results: [
      { title: "Researched and developed a RLHF based autonomous navigation system for a simulated mobile robot using ROS2" },
      { title: "Implemented TD3 Policy Gradient algorithm for navigation and a reinforcement learning framework to optimize robot behavior" },
      { title: "Generated a dense point cloud scan using a 3D LiDAR scanner and Cloud Compare for mapping and localization" },
    ],
    link: "https://priyanshum.notion.site/Capstone-Research-Project-100ab83103e1801499accd9bf2f68f84",
    image: CapstoneProjectBanner,
  },

  //   company: "Acme Corp",
  //   year: "2024",
  //   title: "Dark Saas Landing Page",
  //   results: [
  //     { title: "Enhanced user experience by 40%" },
  //     { title: "Improved site speed by 50%" },
  //     { title: "Increased mobile traffic by 35%" },
  //   ],
  //   link: "https://youtu.be/4k7IdSLxh6w",
  //   image: darkSaasLandingPage,
  // },
  // {
  //   company: "Autonomous Navigation using RLHF and Robotic Augmentation",
  //   year: "2023",
  //   title: "Light Saas Landing Page",
  //   results: [
  //     { title: "Boosted sales by 20%" },
  //     { title: "Expanded customer reach by 35%" },
  //     { title: "Increased brand awareness by 15%" },
  //   ],
  //   link: "https://youtu.be/7hi5zwO75yc",
  //   image: lightSaasLandingPage,
  // },

  // {
  //   company: "EcoTech Solutions",
  //   year: "2024",
  //   title: "Sustainable Energy Dashboard",
  //   results: [
  //     { title: "Reduced energy consumption by 30%" },
  //     { title: "Increased renewable energy adoption by 45%" },
  //     { title: "Improved data visualization efficiency by 60%" },
  //   ],
  //   link: "https://shine-smartphone-ec3.notion.site/Capstone-Research-Project-100ab83103e1801499accd9bf2f68f84",
  //   image: sustainableEnergyDashboard,
  // },

  // {
  //   company: "EcoTech Solutions",
  //   year: "2024",
  //   title: "Sustainable Energy Dashboard",
  //   results: [
  //     { title: "Reduced energy consumption by 30%" },
  //     { title: "Increased renewable energy adoption by 45%" },
  //     { title: "Improved data visualization efficiency by 60%" },
  //   ],
  //   link: "https://shine-smartphone-ec3.notion.site/Capstone-Research-Project-100ab83103e1801499accd9bf2f68f84",
  //   image: sustainableEnergyDashboard,
  // },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader 
        eyebrow="Featured Projects" 
        title="Practical Manifestations of Imagination" 
        description="Check out some of my recent projects below, exploring my interests & learnings in the intersection of code and design. 
        I'll be adding my new (as well as older/updated) projects here as soon as I can :)"
        //UPDATE THE DESCRIPTION AFTER ADDING THE PROJECTS
        />
        
        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card key={project.title} 

              className="px-8 pt-8 pb-0
              md:pt-12 md:px-10
              lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`
              }}
              >

            

              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className = "lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-100 to-sky-400 inline-flex gap-2
                    font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                  <span>{project.year}</span>
                  </div>

                  <h3 className = "font-serif text-2xl mt-2  md:mt-5 md:text-4xl">{project.title}</h3>
                  <hr className = "border-t-2 border-white/5 mt-4 md:mt-5" />

                  <ul className = "flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li key={result.title} className = "flex gap-2 text-sm md:text-base text-white/50">
                      <CheckCircleIcon className = "size-5 md:size-6" />
                      <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className = 
                    "bg-white text-gray-950 h-12 w-full md:w-auto  px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>View Project</span>
                      <ArrowUpRightIcon className = "size-4" />
                    </button>
                  </a>
                </div>
                <div className = "relative">
                  <Image src={project.image} alt={project.title} 
                  className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
