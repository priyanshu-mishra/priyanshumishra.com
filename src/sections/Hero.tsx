import memojiImage from '@/assets/images/memoji-computer.png';
import Image from 'next/image';
import ArrowDown from '@/assets/images/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/images/star.svg';
import { HeroOrbit } from '@/components/HeroOrbit';
import SparkleIcon from '@/assets/images/sparkle.svg';
import TypewriterEffect from '@/components/TypewriterEffect';

export const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
          <div className="absolute inset-0 -z-30 opacity-5" style={{backgroundImage: `url(${grainImage.src})`}}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="size-[620px] hero-ring"></div>
            <div className="size-[820px] hero-ring"></div>
            <div className="size-[1120px] hero-ring"></div>
            <div className="size-[1520px] hero-ring"></div>
            {/* <div className="size-[2020px] hero-ring"></div> */}
          </div>
          <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration="48s" shouldSpin spinDuration="8s">
            <StarIcon className="size-24 text-cyan-300 hover:text-teal-80" />
          </HeroOrbit>
          <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="8s">
            <StarIcon className="size-12 text-cyan-300 hover:text-teal-80" />
          </HeroOrbit>
          <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="8s">
            <StarIcon className="size-8 text-cyan-300 hover:text-teal-80" />
          </HeroOrbit>
          <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="3s">
            <SparkleIcon className="size-8 text-cyan-300/20 hover:text-teal-80" />
          </HeroOrbit>
          <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration="32s" shouldSpin spinDuration="3s">
            <SparkleIcon className="size-5 text-cyan-300/20 hover:text-teal-80" />
          </HeroOrbit>
          <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration="36s" shouldSpin spinDuration="3s">
            <SparkleIcon className="size-10 text-cyan-300/20 hover:text-teal-80" />
          </HeroOrbit>
          <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration="44s" shouldSpin spinDuration="3s">
            <SparkleIcon className="size-14 text-cyan-300/20 hover:text-teal-80" />
          </HeroOrbit>
          <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
            <div className="size-3 rounded-full bg-cyan-300/20 " />
          </HeroOrbit>
          <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
            <div className="size-2 rounded-full bg-cyan-300/20 " />
          </HeroOrbit>
          <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
            <div className="size-2 rounded-full bg-cyan-300/20 " />
          </HeroOrbit>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 py-32 md:py-48 lg:py-60">
        <div className="container">
          <div className="flex flex-col items-center">
            <Image 
              src={memojiImage} 
              className="size-[100px] rounded-full" 
              alt="Memoji Guy peeking from behind a laptop" 
            />
            <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-large">
              <div className="bg-green-500 size-2.5 rounded-full relative">
                <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
              </div>
              <div className="text-sm font-medium">Probably Building Something Cool 😎</div>
            </div>
            <div className="max-w-lg mx-auto">
            <p className="text-center mt-4 text-center text-white/60 md:text-lg">
               Hey there! 👋 I'm Priyanshu, an engineer on my quest to becoming a polymath. Discover some of my personal projects, experiences and interests below:)
              </p>
              <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
                <TypewriterEffect />
              </h1>
              
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-2">
              <a 
                href="#projects"
                className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl hover:bg-white/10 transition duration-300"
              >
                <span className="font-semibold">Explore My Work</span>
                <ArrowDown className="size-4" />
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 border border-white bg-white text-gray-950 h-12 px-6 rounded-xl hover:bg-transparent hover:text-white transition-colors duration-300"
              >
                <span>👋</span>
                <span className="font-semibold">Let's Connect</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
