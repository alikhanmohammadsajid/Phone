import React, { createContext, useState } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Home/Login/Login';
import Buy from './Components/Buy/Buy';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      {/* <h1>email : {loggedInUser.email}</h1> */}
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <PrivateRoute path="/buy"> 
          <Buy></Buy>
        </PrivateRoute>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
