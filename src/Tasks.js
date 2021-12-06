function Tasks(props) {

  return (
    <>
      <h2>Tasks for: </h2>
      <ul>
        {props.tasks.map((task) => <li key={`task-${task.id}`}>{task.description}</li>)}
      </ul>
    </>
  )
}

export default Tasks