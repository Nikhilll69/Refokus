// import React from 'react'
// import Button from './button'

// function Product({Data,mover,count}) {
//   const backgroundStyle = {
//     backgroundColor: Data.bgColor,
//   };

//   return (
//     <div onMouseEnter={ style={backgroundStyle}} className={`w-full h-[15.7rem]  py-20 text-white`}>
//       <div onMouseEnter={()=>{mover(count)}} className=' max-w-screen-lg mx-auto flex items-center justify-between'>
//         <h1 className='text-5xl font-semibold'>{Data.title}</h1>
//         <div className='dets w-1/3'>
//           <p className='mb-10'>{Data.description}</p>
//           <div className='flex gap-8  items-center'>
//           {Data.live && <Button/>}
//           {Data.case && <Button title="Case Study"/>}
//           </div>
//         </div>
//       </div>
      
//     </div>
//   )
// }

// export default Product/

import React, { useState } from 'react';
import Button from './Button';
import { motion } from 'framer-motion';

function Product({ Data, mover, count }) {
  const [isHovered, setIsHovered] = useState(false);

  // Styles for hover effects
  const hoverEffect = {
    backgroundColor: isHovered ? Data.bgColor : 'transparent',
    transform: isHovered ? 'scale(1.08) translateY(-5px)' : 'scale(1) translateY(0)',
    borderRadius: isHovered ? '15px' : '8px',
    boxShadow: isHovered
      ? '0 16px 32px rgba(0, 0, 0, 0.3)' // Stronger shadow for hover
      : '0 8px 16px rgba(0, 0, 0, 0.1)', // Softer shadow for default
    transition: 'all 0.6s  cubic-bezier(0.5, 1, 0.89, 1)',
  };

  return (
    <motion.div
      style={hoverEffect}
      className="w-full h-[20rem] py-20 gap-2 px-6 text-white relative overflow-hidden cursor-pointer"
      onMouseEnter={() => {
        setIsHovered(true);
        mover(count);
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient Overlay */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
        />
      )}

      <div className="max-w-screen-lg mx-auto flex items-center justify-between relative z-10">
        {/* Motion Title */}
        <motion.h1
          animate={{ y: isHovered ? -5 : 0, opacity: isHovered ? 1 : 0.9 }}
          transition={{ duration: 0.4 }}
          className="text-5xl font-semibold"
        >
          {Data.title}
        </motion.h1>

        <div className="dets w-1/3">
          {/* Motion Description */}
          <motion.p
            animate={{ y: isHovered ? -3 : 0, opacity: isHovered ? 1 : 0.9 }}
            transition={{ duration: 0.4 }}
            className="mb-10"
          >
            {Data.description}
          </motion.p>
          <div className="flex gap-8 items-center">
            {Data.live && <Button />}
            {Data.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Product;
