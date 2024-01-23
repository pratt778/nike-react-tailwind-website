import { useState } from 'react';
import Button from '../component/button'
const Subscribe = ()=>{
    const [inp,setInput]= useState('');
    return <>
    <div className="max-w-[1350px] mx-auto w-full flex flex-col gap-6 lg:flex-row lg:items-center xl:gap-20">
    <h1 className='text-4xl font-bold lg:w-[50%]'>Sign Up for <span className='text-orange-500'>Updates</span> & Newsletter</h1>
    <div className='flex flex-col lg:w-[50%] lg:py-2 lg:h-[100%] sm:border-2 px-2 py-2 sm:rounded-full gap-4 w-full sm:flex-row'>
        <input type="text" className=' lg:min-w-[60%] outline-none lg:py-0 lg:px-2 sm:min-w-[70%] w-full border-2 rounded-full sm:border-none sm:rounded-none  py-3 px-2 ' placeholder="subscribe@nike.com" value={inp} onChange={(e)=>setInput(e.target.value)} />
        <Button label='Sign Up' fullWidth/>
    </div>
    </div>
    
    </>
}

export default Subscribe;