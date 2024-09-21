import StarIcon from '@/assets/images/star.svg';
import { Fragment } from 'react';

const words = [
  "Engineering", "Data", "Design", "Finance", "AI",
  "Research", "Photography", "UI/UX", "Music", "Creative",
  "Cloud", "Robotics", "Analysis", "Cinematography", "Visualization", "Cloud", "ML" 
];

export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-200 to-sky-400 -rotate-6 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:30s]">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {words.map(word => (
                  <div key={word} className="inline-flex gap-4 items-center">
                    <span className="text-gray-900 uppercase font-extrabold text-sm">{word}</span>
                    <StarIcon className="size-6 text-gray-900 -rotate-10" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
