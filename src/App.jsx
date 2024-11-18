import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';
// import Searchbar from './components/Searchbar'
// import { counterContext } from './components/context'


function App() {
  const [Todo, setTodo] = useState("")
  const [Todos, setTodos] = useState([])
  const [ShowDone, setShowDone] = useState(true)


  
  /* how to save stuff by local*/
  useEffect(() => {
    let TodoString = localStorage.getItem("Todos") /* here got stringify elements of Todos by get item */
    if (TodoString) {
      let Todos = JSON.parse(localStorage.getItem("Todos"))
      setTodos(Todos)
    }
    
  }, [])
  
  const SaveTodo = (params) => {
    localStorage.setItem("Todos", JSON.stringify(Todos)) /*first we set the Todos items array in string and got by get item in useeffect*/
  }
  const ToggleDone = (e) => {
    setShowDone(!ShowDone)


    
  }

  const HandleAdd = () => {
    setTodos([...Todos, { id: uuidv4(), Todo, isCompleted: false }])
    setTodo("")
    SaveTodo();
  }
  const HandleDelete = (e, id) => {
    let NewTodos = Todos.filter(item => {
      return item.id !== id;
    })
    setTodos(NewTodos);
    SaveTodo();


  }
  const HandleEdit = (e, id) => {
    let a = Todos.filter(item => {
      return item.id === id;
    })
    // console.log(`this is ${a}`)
    
    setTodo(a[0].Todo)
    // setTodo(a[index].Todo) ==> reason not to use index is its not in array and is Todo that is just a string
    // console.log(`this is different ${a[index].Todo}`)
    let NewTodos = Todos.filter(item => {
      return item.id !== id;
    });
    setTodos(NewTodos);
    SaveTodo()

  }

  const HandleChange = (e) => { /*it is used in input tag so that you can change text in input from inital text*/
    setTodo(e.target.value)

  }

  const HandleCheckbox = (e) => {
    // console.log(`the e is ${e}`)
    // console.log(`the e.target.name is ${e.target.name}`)

    let id = e.target.name;
    // console.log(`the id is ${id}`)
    let index = Todos.findIndex(item => {
      return item.id === id;
    })
    // console.log(`the index is ${index}`)

    let NewTodos = [...Todos]  /*if we do Todos then NewTodos will have same element in it.So it will not render . For this reason [...Todos] is used (to get rendered again)*/

    NewTodos[index].isCompleted = !NewTodos[index].isCompleted
    setTodos(NewTodos)
    SaveTodo()
  }
// console.log(Todos)

  return (
    <>

      <Navbar />
      <div className='bg-slate-200 min-h-screen  w-full p-8 sm:w-full sm:mx-0'>
        <div className='flex justify-center mt-8 font-bold'>MyTodo- This is where it gets easy</div>
        <div className='flex justify-center mt-8 font-bold'>
          Welcome My todo App
        </div>
        <div className='flex justify-center items-center w-12/12 h-32'>
          <input onChange={HandleChange} value={Todo} className='border-2 p-1.5 w-5/12 font-medium' type="text" placeholder='Add items' />
        
          <button onClick={HandleAdd} disabled={Todo.length<3} className=' disabled:bg-green-400 font-medium border-2 ml-1 p-1.5 bg-green-300 cursor-pointer hover:font-bold translate-8'>Save</button>
          {/* save and delete button do not save the added todo doubt */}
        </div>
        <div className='flex justify-center font-bold'>
          Your ToDo's
        </div>
        <div className='my-4 py-4 flex gap-1 sm:justify-end sm:w-[30vw]'>
          <input type="checkbox" checked={ShowDone} onChange={ToggleDone} name="" id="" /> Show Finished
        </div>
        {Todos.length === 0 && <div className='mt-6 flex justify-center'>No Todos added</div>}
        {Todos.map(items => {

          return (ShowDone || !items.isCompleted) && <div key={items.id} className='flex justify-between text-center sm:justify-around '>

            <div className='flex  mt-4 gap-2.5 text-center'>
              <input onChange={HandleCheckbox} type="checkbox" checked={items.isCompleted} name={items.id} id="" />
              <div className={items.isCompleted ? "line-through" : ""}>
                {items.Todo}
              </div>
            </div>
            <div className='flex h-fit items-center mt-[18px]'>
              <button onClick={(e) => HandleEdit(e, items.id)} className=' font-medium border-2 border-l-green-500 ml-1 p-1.5 bg-green-300 cursor-pointer hover:font-bold translate-8'>Edit</button>
              <button onClick={(e) => HandleDelete(e, items.id)} className=' font-medium border-2 border-l-green-500 ml-1 p-1.5 bg-green-300 cursor-pointer hover:font-bold translate-8'>Delete</button>
            </div>
          </div>
        })}

      </div>


    </>
  )
}

export default App

{/* <Searchbar /> */ }
{/* <counterContext.Provider value={{ Todo, setTodo, HandleChange, Todos, setTodos }}></counterContext.Provider> */ }