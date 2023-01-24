import {useState }  from  'react'
import '@/styles/Home.module.css'


const  index =()=>{
  const[ userinput,setuserinput]=useState('') ;
  const todolist = [];
  const handledchange=(e)=>{
    e.preventdefault()
    setUserInput(e.target.value)
    console.log(useri
    const handleAdd=(e)=>{
    e.preventdefault()
    setUserInput(e.target.value)
    console.log(userinput)
  }

  

    <div className="todolist">
        <h1>nextjs todo list </h1>
        
     <form>
       <input type="text" onchange={handledchange} /> 
       <button onClick={handleAdd}>Add</button>
     </form>
     <ul>
     {
      todolist.length >=1 ? todolist.map ((todo,idx) => {
        return (<li key={idx}>{todo}

int arr[list of activities ]
arr[0]=wash plate
arr[1]=cleanhouse
arr[2]=cookfood
return 0 1 2





        <button onClick={(e)=>{
          e.preventDefault()
          handleDelete(todo)



        }}>
          Delete</button>
          </li>)
        }) :(<><h1>learn html and css</h1></>)
        
          

          
     }
   
     
     </ul>

    </div>
  )
}

export default  index