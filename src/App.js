import './App.css';
import Owners from './Owners';
import Tasks from './Tasks'


/*
Please add routes to this SPA


1. Please change browser url to /owners/:id when a user clicks on 
a particular owners name.

2. When a user has clicked on one item we should render title and descriptio for a particular task.

Please consult the documentation for our api
https://documenter.getpostman.com/view/15604882/TzRNGAqj#de0f848f-3ca7-4cea-97ae-b6541bfa1195

React router docs
[CodeSandbox](https://reactrouter.com/web/api/    )
*/

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <Tasks />
      <Owners />
    </div>
  );
}

export default App;
