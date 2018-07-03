import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // named imports
import NoMatch from './Pages/NoMatch';
import Home from './Pages/Home';
import Saved from './Pages/Saved';
import Navbar from './Components/Navbar';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>HI</h1>
//       </div>
//     );
//   }
// }

const App = () => (
  <div>
    <Navbar/>
    <div className = 'container'>
      <div className = 'row '>
        <Router>
            <Switch>
              <Route exact path = "/" component = {Home}/>
              <Route exact path = "/saved" component = {Saved}/>
              <Route component = {NoMatch}/>
            </Switch>
        </Router>
      </div>
    </div>
  </div>
)

export default App;
