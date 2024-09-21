import grainImage from "@/assets/images/grain.jpg";
import { twMerge } from "tailwind-merge";
import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
export const Card = ({ className, children,...other }: ComponentPropsWithoutRef<'div'>) => {
  return (
    <div
      className={twMerge(
        "bg-gray-800 rounded-3xl relative z-0 overflow-hidden " +
        "outline outline-2 outline-white/20 outline-offset-1 " +
        "after:z-10 after:content-[''] after:absolute " +
        "after:inset-0 after:outline-2 after:outline " +
        "after:outline-offset-2 after:rounded-3xl after:outline-white/30 " +
        "after:pointer-events-none " +
        "p-6",
        className
      )}
      {...other}
    >
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      ></div>
      {children}
    </div>
  );
};