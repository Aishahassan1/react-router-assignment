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
        {owners.map((owner) => 
          <li onClick={() => props.setOwner(owner)} key={owner.id}>
            {owner.name}
          </li>
        )}
      </ul>
    </>
  )
}

export default Owners