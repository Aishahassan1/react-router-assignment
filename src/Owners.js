import axios from 'axios'
import { useEffect, useState } from 'react'

function Owners (props) {

  const [owners, setOwners] = useState([])

  const getOwners = async () => {
    const response = await axios.get('https://mod2-api.herokuapp.com/owner')
    setOwners(response.data)
  }

  useEffect(() => {
    getOwners()
  },[])

  return(
    <>
      <h2>Owners</h2>
      <ul>
        {/* Each owner should link to /owners/:id */}
        {owners.map((owner) => 
          <li key={owner.id}>
            {owner.name}
          </li>
        )}
      </ul>
    </>
  )
}

export default Owners