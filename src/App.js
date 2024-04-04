import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Register from './Components/Register';
import Login from './Components/Login';
import Home from './Components/Home';
import Profile from './Components/Profile';
import Advertise from './Components/Advertise';
import ShowAds from './Components/ShowAds';
import demo from './Components/demo';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Switch>
          
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/advertise" component={Advertise}></Route>
          <Route exact path="/showads" component={ShowAds}></Route>
          <Route exact path="/demo" component={demo}></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
