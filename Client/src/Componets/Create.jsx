import React, { useState } from 'react'
import '../App.css'
import axios from 'axios';

function Create()  {

  const [task, setTask ] = useState('');

  const handleAdd = () => {
    
    console.log('inside handle add!');
    
       axios.post('http://localhost:3500/add', {task: task})
        .then((result) => { console.log(result);
        window.location.reload()
      })
        .catch((error) => console.log(error.message))
    }

  return (
   
    <div className='create_form' >
        <input className='input-box' type="text"  onChange={(to) => setTask(to.target.value)} placeholder='Type..' />
        <button className="glow-on-hover"  onClick={ handleAdd } type="button">Add Todo</button>
      
    </div>
  )
  
}
   

export default Create