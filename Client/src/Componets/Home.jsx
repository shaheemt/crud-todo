import React, { useEffect, useState } from 'react';
import Create from './Create';
import axios from 'axios';
import '../App.css'
import { BsCircleFill, BsFillCheckCircleFill, BsFillTrashFill } from 'react-icons/bs';

function Home () {
  const [todos, setTodos ] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3500/get')
    .then((result) => { setTodos(result.data)})
    .catch((err) => console.log(err.message));

  }, [])

const handleEdit = (id) => {
  
  axios.put('http://localhost:3500/update/'+id )
  .then((result) => {  console.log(result);
    window.location.reload()
  }).catch((err) => console.log(err.message));
}

const handleDelete= (id) => {
  axios.delete('http://localhost:3500/delete/'+id)
    .then((result) => { console.log(result);
      window.location.reload()
    }).catch((err) => console.log(err.message));

}

  return (
    <div className='main-container'>
        <div className='home'>
            <h2>TODO APP</h2>
            <Create />
            {
              todos.length === 0 ?
              ( <div className="todohead">Add TODOS</div> ) :
              (
                todos.map((todo) => (

                  <div className="task">
                    
                    <div className="checkbox"  >
                       <p className={todo.done ? "line_through" : ""} > {todo.task} </p>
                    </div>

                    <div onClick={()=> handleEdit(todo._id)} className="edit">
                      {todo.done ?
                       < BsFillCheckCircleFill className='icon' /> :
                       <BsCircleFill className='icon'/> }
                    </div>

                    <div className="edit">
                     <span ><BsFillTrashFill onClick={() => handleDelete(todo._id)} className='icon'/></span>
                    </div>
                  </div>

              )) 
              )
            }
           
            
        </div>
        
    </div>
  )
}

export default Home
