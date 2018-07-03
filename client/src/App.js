import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // named imports
import NoMatch from './Pages/NoMatch';
import Home from './Pages/Home';
import Saved from './Pages/Saved';

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
  <Router>
    <div>
      {/* Doesn't change */}
      <h1>Header </h1>

      {/* Content that changes */}
      <Switch>
        <Route exact path = "/" component = {Home}/>
        <Route exact path = "/saved" component = {Saved}/>
        <Route component = {NoMatch}/>
      </Switch>
    </div>
  </Router>
)

export default App;
