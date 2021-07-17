import axios from 'axios'
import { useState, useEffect } from 'react'

function Tasks () {
  const [tasks, setTasks] = useState([])
  
  const getTasks = async() => {
    // Use router props to get access to the owner and use its id below
    // to query tasks for the owner
    const response = await axios.get(`https://mod2-api.herokuapp.com/owner/1/task`)
    setTasks(response.data)
  }

  useEffect(() => {
    getTasks()
  },[])

  return (
    <>
      <h2>Tasks for: </h2>
      <ul>
        {tasks.map((task) => <li key={`task-${task.id}`}>{task.title}</li>)}
      </ul>
    </>
  )
}

export default Tasks