import React from 'react';
import grainImage from '@/assets/images/grain.jpg';
import CopyEmailButton from '@/components/CopyEmailButton';

export const ContactSection = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-200 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden">
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url(${grainImage.src})` }}></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-between relative z-20">
            <div className="md:max-w-[60%]">
              <h2 className="font-serif text-2xl md:text-3xl">
                Let's create something amazing together!
              </h2>
              <p className="font-sans text-sm md:text-base mt-2">Whether you have a question, an idea to build something cool, or just want to say hi, my inbox is always open!</p>
            </div>
            <div className="md:flex-shrink-0 relative z-30">
              <CopyEmailButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


// 'use client';

// import React, { useState } from 'react';
// import grainImage from '@/assets/images/grain.jpg';
// import CopyEmailButton from '@/components/CopyEmailButton';

// export const ContactSection = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     alert(`Message sent from ${name} (${email}): ${message}`);
//   };

//   return (
//     <div className="py-16 pt-12 lg:py-24 lg:pt-20">
//       <div className="container">
//         <div className="bg-gradient-to-r from-emerald-200 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden">
//           <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url(${grainImage.src})` }}></div>
//           <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-between relative z-10">
//             <div className="md:max-w-[60%]">
//               <h2 className="font-serif text-2xl md:text-3xl">
//                 Let's create something amazing together!
//               </h2>
//               <p className="font-sans text-sm md:text-base mt-2">Whether you have a question, an idea to build something cool, or just want to say hi, my inbox is always open!</p>
//             </div>
//             <div className="md:flex-shrink-0 relative z-30">
//               <CopyEmailButton />
//             </div>
//           </div>
//           <form onSubmit={handleSubmit} className="mt-8">
//             <input
//               type="text"
//               placeholder="Your Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="border border-gray-300 rounded-md p-2 mb-4 w-full"
//               required
//             />
//             <input
//               type="email"
//               placeholder="Your Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="border border-gray-300 rounded-md p-2 mb-4 w-full"
//               required
//             />
//             <textarea
//               placeholder="Your Message"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               className="border border-gray-300 rounded-md p-2 mb-4 w-full"
//               required
//             />
//             <button type="submit" className="bg-gray-900 text-white px-4 py-2 rounded-md">
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };