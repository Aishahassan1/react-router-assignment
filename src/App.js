import './App.css';
import Owners from './Owners';
import Tasks from './Tasks'
import ownersTasks from "./ownersTasks"

/*
Please add routes to this SPA - you need to install react-router-dom package
npm install react-router-dom

The data has been imported from ownersTasks file

1.Only when user is on url /owners we should render Owners component

2. Please change browser url to /owners/:id (:id should be replaced with matching id of the owner)
when a user clicks on a particular owners name.

3. At the moment we are rendering first owners tasks. 
Only when a user is on url /owners/:id they should see the tasks
which belong to that owner,

React router docs
https://reactrouter.com/docs/en/v6/getting-started/tutorial
*/

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <Tasks tasks={ownersTasks[0].tasks} />
      <Owners owners={ownersTasks} />
    </div>
  );
}

export default App;
