import React, {useState, useEffect} from 'react';
import Create from './Create';
import axios from 'axios';
import { BsFillTrashFill } from 'react-icons/bs';

function Home() {

    const checkbox = document.getElementById('myCB');
    const [todos, setToDos] = useState([]);


    useEffect(() => {
      axios.get('http://localhost:3001/get')
      .then(result => setToDos(result.data))
      .catch(err => console.log(err))
    }, [])

    const handleEdit = (id) => {
      axios.put('http://localhost:3001/update/'+id)
      .then(result => {
        location.reload()
      })
      .catch(err => console.log(err))

      console.log(id);
    }

    const handleRemove = (id) => {
      axios.delete('http://localhost:3001/delete/'+id)
      .then(result => {
        location.reload()
      })
      .catch(err => console.log(err))

      console.log(id);
    }

  return (
    <div className='home'>
        <h2 className='title'>To Do App</h2>
        <Create/>
        <ul className='todolists'>
        { todos.length === 0
         ? 
        <li className={'no-task'}>"You have no tasks."</li>
         : 
        todos.map((todos) =>
                    <li className='tasks' key={todos._id} >
                      <div className="checkbox" onClick={() => handleEdit(todos._id)}>
                        <input type="checkbox" checked={todos.done} />
                        <p className={todos.done ? "line-through" : "items"}>{todos.task}</p>
                      </div>
                        
                        <button className='remove' onClick={() => handleRemove(todos._id)}><BsFillTrashFill /></button>
                    </li>) }
        </ul>
    </div>
  )
}

export default Home