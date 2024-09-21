import React from "react";
import Image from "next/image";

import tcslogo from "@/assets/images/tcs.png";
import nyummvc from "@/assets/images/nyu-mmvc.png";
import tamkeen from "@/assets/images/tamkeen-logo.jpg";
import startad from "@/assets/images/startad.jpg";
// import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const testimonials = [
  {
    name: "Tata Consultancy Services",
    position: "Global Engineering Intern - 2023",
    achievements: [
      "Developed a data access and analytics pipeline using SAP BW/4HANA and AWS RDS, reducing data processing time by 40%",
      "Implemented real-time dashboards with SAP Appgyver, enabling data-driven decision making for senior management",
      "Optimized database queries, resulting in a 30% improvement in overall system performance"
    ],
    avatar: tcslogo,
  },
  {
    name: "NYU Multimedia and Visual Computing Lab",
    position: "Engineering Research Assistant - 2022",
    achievements: [
      "Designed and implemented a novel GAN architecture for 3D shape reconstruction from single images, achieving a 25% improvement in accuracy over baseline models",
      "Developed a custom loss function that enhanced the model's ability to capture fine-grained details, leading to more realistic 3D reconstructions",
      "Utilized PyTorch and TensorFlow to train and optimize the model on a dataset of 100,000+ 3D shapes"
    ],
    avatar: nyummvc,
  },
  {
    name: "Tamkeen/Executive Affairs Authority, Govt. of UAE",
    position: "Policy and Strategy Intern - 2020",
    achievements: [
      "Conducted in-depth analysis of higher education trends across 100+ universities in 10+ countries, identifying key areas for improvement in UAE's education sector",
      "Developed a comprehensive report with data-driven recommendations, leading to the implementation of 3 new government initiatives",
      "Created interactive data visualizations using Python and Tableau, enhancing stakeholder understanding of complex educational metrics"
    ],
    avatar: tamkeen,
  },
  {
    name: "StartAD",
    position: "Research Analyst Intern - 2020",
    achievements: [
      "Analyzed market trends and startup ecosystems across 10 countries, contributing to the selection of 24 high-potential startups for the accelerator program",
      "Developed a machine learning model to predict startup success rates, achieving 80% accuracy in identifying promising ventures",
      "Created comprehensive reports on global entrepreneurial activities, directly informing investment decisions for venture capital partners"
    ],
    avatar: startad,
  },
  // {
  //   name: "Michael Brown",
  //   position: "Director of IT @ MegaCorp",
  //   text: "Alex's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
  //   avatar: memojiAvatar5,
  // },
];

export const TestimonialsSection = () => {
 // TODO: add more in the future as it needs to be updated with time
 return (
  <div className="py-16 lg:py-24">
    <div className="container">
      <SectionHeader eyebrow="Work / Research Experience" title="Journey So Far" description="Find out more about my recent work and research experiences" />

      <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
        <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
          {[...Array(2)].map((_, index) => (
            <React.Fragment key={index}>
              {testimonials.map((testimonial) => (
                <Card key={testimonial.name} className="max-w-xs border-2 my-2 border-white/10 md:p-8 md:max-w-md hover:scale-105 transition duration-300">
                  <div className="flex gap-4 items-center mb-4">
                    <div className="size-14 bg-gray-700 rounded-full items-center justify-center flex-shrink-0 overflow-hidden">
                      <Image src={testimonial.avatar} alt={testimonial.name} width={56} height={56} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="font-semibold text-lg">{testimonial.name}</div>
                      <div className="text-sm text-emerald-400">{testimonial.position}</div>
                    </div>
                  </div>
                  <ul className="list-disc pl-5 space-y-2">
                    {testimonial.achievements.map((achievement, index) => (
                      <li key={index} className="text-sm md:text-base text-gray-300">{achievement}</li>
                    ))}
                  </ul>
                </Card>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  </div>
 );
};
