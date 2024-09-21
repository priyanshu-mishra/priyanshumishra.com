'use client';

import React from 'react';
import ArrowUpRightIcon from '@/assets/images/arrow-up-right.svg';

const CopyEmailButton = () => {
  const handleCopyEmail = () => {
    const email = 'priyanshu.mishra@nyu.edu';
    navigator.clipboard.writeText(email).then(() => {
      alert('Email copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy email: ', err);
    });
  };

  return (
    <button 
      onClick={handleCopyEmail}
      aria-label="Copy email address"
      className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 hover:bg-white hover:text-gray-900 transition-all duration-300 pointer-events-auto"
    >
      <span className="font-semibold">Contact Me</span>
      <ArrowUpRightIcon className="size-4"/>
    </button>
  );
};

export default CopyEmailButton;
