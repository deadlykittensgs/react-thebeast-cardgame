import React from 'react'

export default function () {
  return (
    <div className='bg-slate-800 w-[100px] h-[150px] overflow-hidden p-1'>
   <div className=' flex justify-between bg-slate-400 font-xs'><p>Name</p> <p>000</p></div>
    <div className='flex'> <img src="public/theBeast.webp" alt="the beast" /></div>
    <div className='flex bg-slate-100'>
        <p>information about card</p>
    </div>
</div>
  )
}
