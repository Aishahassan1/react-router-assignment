import {Link, useLocation} from "react-router-dom"
import Tasks from "./Tasks"


function Owners(props) {
const location = useLocation()
console.log(location)
  return (
    <>
      <h2>Owners</h2>
      <Tasks tasks={location.state.tasks}/>
      <ul>
        {/* Each owner should link to /owners/:id */}
        {props.owners.map((owner) => {
              
              return <li key={owner.id} >
            {owner.name}
            <Link state={owner} key={owner.id} to={`/owners/${owner.id}`}>{owner.id}</Link> 
          </li>
}
)}
      </ul>
    </>
  )
}

export default Owners