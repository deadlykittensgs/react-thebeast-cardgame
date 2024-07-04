import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className='flex flex-1'>
      <div className='flex flex-col justify-between items-center w-[13%] bg-slate-400 p-2 overflow-auto'>
        <div className='flex flex-col gap-2'>
        <button className='p-2 rounded bg-slate-200'>Home</button> 
        <button className='p-2 rounded bg-slate-200' >Quit</button>
          </div> 
         <div className='bg-slate-100 w-[90px] h-[120px]'>graveyard</div>
          </div>


 <section className='flex flex-col bg-slate-500 w-screen h-screen '>
  <header className='flex bg-slate-500 h-fit items-center justify-center p-2 gap-1 overflow-auto'>
    <div className='flex items-center justify-center gap-1'>    
<Card/><Card/><Card/>
</div></header>
  <body className='flex flex-1 bg-slate-300 flex-col justify-between'>
   <div className='flex flex-1  items-center justify-center overflow-auto'>
   <div className='flex flex-1  items-center justify-center overflow-auto'>
<div className='flex items-center justify-center gap-1'>    
<Card/><Card/><Card/>
</div>

   </div>
   </div>
    <div className=' flex bg-red-400/20 h-[25px]'></div>
   <div className='flex flex-1  items-center justify-center overflow-auto'>
<div className='flex items-center justify-center gap-1'>    
<Card/><Card/><Card/>
</div>

   </div>
    
  </body>
  <header className='flex bg-slate-500 h-fit items-center justify-center p-2 gap-1 overflow-auto'>
  <div className='flex items-center justify-center gap-1'>    
<Card/><Card/><Card/>
</div>
  </header>
 </section>



 <div className='flex flex-col justify-between items-center w-[13%] bg-slate-400 p-2 overflow-auto'> 




 <div className='bg-slate-200 w-full h-[30%] flex-col flex'>
  <div className=' bg-slate-600 flex flex-col flex-auto'>
  <div className='flex bg-slate-500 align-center justify-center'>Chat</div>
  <div className=' flex flex-1 bg-slate-500/10'>chats by name</div>
  </div>
  <input placeholder='Enter text here...' type="text" />
 </div> 


 <div className='bg-slate-300 flex flex-1 w-full h-full m-1.5 '>hover info</div>
  <div className='bg-slate-100 w-[90px] h-[120px]'>deck</div> </div>
    </div>
    
  )
}

export default App
