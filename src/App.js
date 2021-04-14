import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useState } from 'react';
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import './App.css';
import AddDoctor from './Components/AddDcotor/AddDoctor/AddDoctor';
import AllPatients from './Components/AllPatients/AllPatients/AllPatients';
import Appointment from './Components/Appoinment/Appointment/Appoinment';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import Home from "./Components/Home/Home/Home";
import Login from './Components/Login/Login/Login';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';

export const UserContext = createContext();



function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path='/appointment'>
            <Appointment></Appointment>
          </Route>
          <PrivateRoute path='/dashboard'>
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/allPatients">
            <AllPatients></AllPatients>
          </PrivateRoute>
          <Route path="/addDoctor">
            <AddDoctor></AddDoctor>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
