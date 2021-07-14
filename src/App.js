import './App.css';
import Owners from './Owners';
import Tasks from './Tasks'
import { useState } from 'react'


/*
Please add a functionality for a new owner. 

The user should be able to input a new owner's name
and click a button to send a post request to the api to
persist that owner. After successful post request please make sure
the owners list is updated with the new owner.

Please consult the documentation for our api
https://documenter.getpostman.com/view/15604882/TzRNGAqj#de0f848f-3ca7-4cea-97ae-b6541bfa1195
*/

function App() {
  const [owner, setOwner] = useState(null)
  return (
    <div className="App">
      {owner && <button onClick={() => setOwner(null)}>Back to owners</button>}
      <h1>Todo App</h1>
      {owner ? <Tasks owner={owner}/> : <Owners setOwner={setOwner}/> }
    </div>
  );
}

export default App;
