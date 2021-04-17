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
import DashBoard from './Components/DashBoard/DashBoard/DashBoard';
import BookingList from './Components/DashBoard/BookingList/BookingList';
import Payment from './Components/ProcessPayment/Payment';
import ReviewInventory from './Components/Home/ReviewInventory/ReviewInventory';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      {/* <h1>email : {loggedInUser.email}</h1> */}
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/dashboard/mobile">
            <DashBoard></DashBoard>
          </Route>

          <Route path="/buy">
            <Buy></Buy>
          </Route>
          <Route path="/bookingList">
            <BookingList></BookingList>
          </Route>
          <Route path="/payment">
            <Payment></Payment>
          </Route>
          <Route path="/addReview">
            <ReviewInventory></ReviewInventory>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
