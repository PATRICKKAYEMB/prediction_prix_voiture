import React from 'react'
import { NavLink } from 'react-router-dom'



function Navbar() {
  return (
    <div className='border-black border-b-1 w-full px-[4%] py-3 flex items-center justify-between'>
    <h3 className='text-blue-600 text-2xl'>IA <span className='text-base'>project</span></h3>
    
    <ul className='flex items-center justify-center gap-7'>

        <NavLink to="/">
            
             <hr className='border-none outline-none mt-2 h-0.5 w-3/4 m-auto bg-blue-700 hidden' />
        </NavLink>
        <NavLink to="/produid">
            
             <hr className='border-none outline-none mt-2 h-0.5 w-3/4 bg-blue-600 m-auto hidden' />
        </NavLink>
        <NavLink to="/blog">
            
             <hr className='border-none outline-none mt-2 h-0.5 w-3/4 bg-blue-600 m-auto hidden' />
        </NavLink>

       
        
        <NavLink to="/treding">
            
            <hr className='border-none outline-none mt-2 h-0.5 w-3/4 bg-blue-600 m-auto hidden' />
        </NavLink>

       
         
        
    </ul>

    <div className='flex items-center justify-center gap-4'>
    <NavLink to="/">
        <li className='list-none capitalize text-black border-2 border-black px-4 py-1 '>voir </li>
      
        </NavLink>
        
        <NavLink to="/ajouter" >
            <li className=' list-none px-4 py-2 bg-black text-white rounded-md hover:bg-blue-500 hover:duration-150 hover:cursor-pointer'>Ajouter</li>
           
        </NavLink>
    </div>
</div>
  )
}

export default Navbar