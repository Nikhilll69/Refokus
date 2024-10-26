import React from 'react'

function Strip({val}) {
  return (
    <div className='w-[16.66%] border-[1px] border-zinc-600 py-4 px-2 w-[16.66%] flex items-center justify-between'>
        <img  className="w-[120px]" src={val.url} alt="" />
        <span  className='font-semibold text-white'>{val.number}</span>
    </div>
  )
}

export default Strip