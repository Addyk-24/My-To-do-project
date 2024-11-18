import React from 'react'

const Navbar = () => {
  return (
    <div className='flex  bg-orange-300 font-semibold w-full justify-evenly sm:p-2 sm:w-auto sm:justify-around max-s:text-[10px]   '>
      {/* <div className="logo">
        <img src="./components/todolist.svg" alt="" />
      </div> */}

      <div className="logo -ml-36 font-bold max-s:-ml-[135px]">
        {/* <img src="logo.svg" alt="" /> */}
        MyTodo
      </div>
      <nav className="nav">
        <ul className='flex gap-3.5 -mr-32'>
          <li className='cursor-pointer hover:font-bold translate-8'>Home</li>
          <li className='cursor-pointer hover:font-bold translate-8'>About</li>
          <li className='cursor-pointer hover:font-bold translate-8'>Todo Lists</li>
        </ul>

      </nav>
    </div>
  )
}

export default Navbar
