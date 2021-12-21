import "./App.css";
import {Route, Switch} from 'react-router-dom';
import Nav from './components/Nav';
import Movies from './components/Movies';
import Locations from './components/Locations';
import People from './components/People';
import Home from './components/Home'

function App() {
  return (
    <div className="app">
      <Nav/>
      <Switch>
        <Route exact path= '/' component={Home}/>
        <Route path='/movies' component={Movies}/>
        <Route path='/people' component={People}/>
        <Route path='/locations'component={Locations}/>
      </Switch>
    </div>
  );
}

export default App;