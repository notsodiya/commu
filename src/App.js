import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Register from './Components/Register';
import Login from './Components/Login';
import Home from './Components/Home';
import FamilyDataFetcher from './Components/MyProfile/Profile';
import Advertise from './Components/Advertisement/Advertise';
import ShowAds from './Components/Advertisement/ShowAds';
import demo from './Components/demo';
import InsertMember from './Components/MyProfile/InsertMember';
import InsertEducation from './Components/Education/InsertEducation';
import EducationFetcher from './Components/Education/Education';
import ShowMembers from './Components/MyProfile/ShowMembers';
import InsertOccupation from './Components/Occupation/InsertOccupation';
import ShowOccupation from './Components/Occupation/ShowOccupation';
import ShowEvents from './Components/Events/ShowEvents';
import InsertEvents from './Components/Events/InsertEvents';
import Getallmembers from './Components/MyProfile/Getallmembers';


function App() {
  
  return (
    <div className="App">
      <Router>
        <Switch>          
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/profile" component={FamilyDataFetcher} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/advertise" component={Advertise}></Route>
          <Route exact path="/showads" component={ShowAds}></Route>
          <Route exact path="/demo" component={demo}></Route>          
          <Route exact path="/insertmembers" component={InsertMember}></Route>
          <Route exact path="/inserteducation" component={InsertEducation}></Route>
          <Route exact path="/education" component={EducationFetcher}></Route>
          <Route exact path="/showmembers" component={ShowMembers}></Route>
          <Route exact path="/insertoccupation" component={InsertOccupation}></Route>
          <Route exact path="/showoccupation" component={ShowOccupation}></Route>
          <Route exact path="/showevents" component={ShowEvents}></Route>
          <Route exact path="/insertevents" component={InsertEvents}></Route>
          <Route exact path="/getallmembers" component={Getallmembers}></Route>

        </Switch>
      </Router>
    </div>
  )
}

export default App
