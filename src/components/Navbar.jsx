import React from 'react'
import Button from './Button'

function Navbar() {
  return (
    <div className='max-w-screen-lg  mx-auto  justify-between items-center flex p-3 border-b-[1px] border-zinc-700 '>
        <div className='n-left flex items-center'>
        <img src="https://cdn.prod.website-files.com/62df9251ae9124d9d726bcb9/62dfc1419247bccdd5a2dd1b_Tools.svg" alt="" />
        <div className='links ml-20 flex gap-8 '>
            {["Home","Work","Culture","","News"].map((elem,index)=>(
               elem.length===0?<span key={index} className='w-[1.5px] h-5 bg-zinc-600'></span>:(
                <a key={index} href="#" className='text-xm font-regular flex items-center text-white '>
                {index===1&& <span style={{boxShadow:"0 0 0.45em #00ff19"}} className='inline-block w-2 h-2 mr-[1px] bg-green-600 rounded-full'></span>} 
                {elem}
               </a>
               )
                
            ))}
            
        </div>
      
       
        
       
        </div>
        <Button/>
    </div>
  )
}

export default Navbar