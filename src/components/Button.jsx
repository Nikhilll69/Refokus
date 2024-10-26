import React from 'react';
import { IoMdReturnRight } from "react-icons/io";

function Button({title="Get Started"}) {  // Capitalized the component name
  return (
    <div className='w-32 text-black bg-zinc-300 px-2 py-1 flex items-center justify-between rounded-full'>
      <span className='text-sm text-black font-medium'>{title}</span>
      <IoMdReturnRight />
    </div>
  );
}

export default Button;  // Also capitalized here
