import React from "react";

function Footer() {
  return (
    <div className="w-full mt-8">
      <div className="left max-w-[90vw] p-12 mx-auto flex gap-20 ">
        <div className=" basis-1/2">
          <h1 className="text-[11rem]">refokus.</h1>
        </div>
        <div className="right basis-1/2 flex gap-4">
          <div className=" basis-1/3">
            <h3 className="mb-8 captalize text-zinc-400">Social</h3>
            {["instagram", "twitter(x?)", "linkdIn", "facebook"].map(
              (item, index) => (
                <a key={index} className="block mt-2 captalize text-sm text-zinc-500">
                  {item}
                </a>
              )
            )}
          </div>
          <div className=" basis-1/3">
            <h3 className="mb-8 captalize text-zinc-400">Sitemap</h3>
            {["home", "career", "Work", "contact"].map(
              (item, index) => (
                <a key={index} className="block mt-2 captalize text-sm text-zinc-500">
                  {item}
                </a>
              )
            )}
          </div>
          <div className="basis-1/2 flex flex-col items-end">
            <p className="text-right">Refokus is pioneering digital agency driven by design and empowered by technology.</p>
            <img className="w-32 mt-10" src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg" alt="" />
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Footer;
