import React,{ useContext } from 'react'
import { counterContext } from './context'


const Searchbar = () => {
  const counter = useContext(counterContext)
  const value = useContext(counterContext)
  return (
    <>
    <div className='flex justify-center items-center w-12/12 h-32'>
      <input onChange={value.HandleChange()} value={counter} className='border-2 p-1.5 w-5/12 font-medium' type="text" placeholder='Add items' />
      <button onClick={value.setTodo()} className=' font-medium border-2 border-l-green-500 ml-1 p-1.5 bg-green-300 cursor-pointer hover:font-bold translate-8'>ADD</button>
    </div>
  </>
  )
    
}

export default Searchbar
