import React, {useState} from 'react';
import axios from 'axios';

function Create() {

  const [task, setTask] = useState("");

  const handleAdd = () => {

    if(task !== "") {
      axios.post('http://localhost:3001/add', {task: task})
      .then(result => {
        location.reload()
      })
      .catch(err => console.log(err))

    }
    setTask("");
  }

  return (
    <div className='tdl_box'>
        <input className='tdl_input' onChange={(e) => setTask(e.target.value)} type="type" placeholder="Type here" value={task}/>
        <button onClick={handleAdd} className='tdl_btn' type='button'>Add</button>        
    </div>
  )
}

export default Create;