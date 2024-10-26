import React from "react";
import { motion } from "framer-motion";

function Marquee({ urls, direction }) {
  return (
    <div className="flex w-full overflow-hidden">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex flex-shrink-0 gap-40 py-8 pr-40"
      >
        {urls.map((url, index) => (
          <img src={url} key={index} className="w-[10vw] flex-shrink-0" />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex flex-shrink-0 gap-40 py-8 pr-40"
      >
        {urls.map((url, index) => (
          <img src={url} key={index} className="w-[10vw] flex-shrink-0" />
        ))}
      </motion.div>
    
    </div>
  );
}

export default Marquee;
