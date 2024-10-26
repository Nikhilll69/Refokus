import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";
function Card({ width ,start,para,hover="false" }) {
  return (
    <motion.div whileHover={{backgroundColor:hover==="true"&& "#7443ff",padding:"25px"} }
      className={`${width} min-h-[26rem] flex flex-col  justify-between p-4 bg-zinc-600 rounded-xl`}
    >
      <div className="w-full">
        <div className="w-full flex items-center justify-between">
          <h3 className="text-xl ">one heading</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-2xl font-regular mt-3">whatever heading</h1>
      </div>
      <div className="down w-full">
      {start && (
        <>
          <h1 className="text-6xl font-semibold tracking-tight leading-none">
          start a project
        </h1>
        <button className="rounded-full py-2 px-3 mt-5 border-[1px] boder-zinc-50">

          Contact us
        </button>
        </>
      )}
        {para &&
        <>
        <p className="text-sm text-zinc-400 font-regular">
          Lorem ipsum dolor sit amet consectetur.
        </p></>}
      </div>
    </motion.div>
  );
}

export default Card;
