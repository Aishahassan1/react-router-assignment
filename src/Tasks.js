import axios from 'axios'
import { useState, useEffect } from 'react'

function Tasks (props) {
  const [tasks, setTasks] = useState([])
  
  const getTasks = async() => {
    const response = await axios.get(`https://mod2-api.herokuapp.com/owner/${props.owner.id}/task`)
    setTasks(response.data)
  }

  useEffect(() => {
    getTasks()
  },[])

  return (
    <>
      <h2>Tasks for: {props.owner.name}</h2>
      {tasks.map((task) => <li key={`task-${task.id}`}>{task.title}</li>)}
    </>
  )
}

export default Tasks