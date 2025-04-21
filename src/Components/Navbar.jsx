import React, { useEffect, useState } from 'react'

const Navbar = () => {
const [darkMode, setDarkMode] = useState(false);
useEffect(()=>{
    if(darkMode){
        document.documentElement.classList.add('dark');

    }else{
        document.documentElement.classList.remove('dark');
    }
},[darkMode])
  return (
    <nav className='bg-red-200 mb-2 dark:bg-gray-900 dark:text-white shadow-md'>
           <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <h1 className='text-2xl font-boldtext-blue-600 dark:text-blue-400'>Latest News</h1>
            <div className='flex gap-4 items-center'>
                <a className='text-gray-800 dark:text-white'>Home</a>
                <button onClick={()=> setDarkMode(!darkMode)}>{darkMode? '🌙 Dark' : '☀️ Light'}</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
