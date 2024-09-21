import React from 'react';

interface TechIconProps {
  component: React.ElementType;
  title: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ component: IconComponent, title }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-10 h-10 mb-2">
        <IconComponent className="w-full h-full text-emerald-200 from-emerald-200 to-sky-400 [&_path]:fill-current [&_circle]:fill-current 
        transition-all duration-300 transition-all duration-300 hover:scale-110" />
      </div>
      <span className="text-xs text-gray-400 text-center">{title}</span>
    </div>
  );
};