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
import AddServices from './Components/Home/AddServices/AddServices';
import Admin from './Components/Admin/Admin';
import Setting from './Components/Setting/Setting';
import MakeAdmin from './Components/MakeAdmin/MakeAdmin';

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
          <PrivateRoute path="/dashboard/mobile">
            <DashBoard></DashBoard>
          </PrivateRoute>

          <PrivateRoute path="/buy/:_id">
            <Buy></Buy>
          </PrivateRoute>
          <PrivateRoute path="/bookingList">
            <BookingList></BookingList>
          </PrivateRoute>
          <PrivateRoute path="/payment">
            <Payment></Payment>
          </PrivateRoute>
          <Route path="/addReview">
            <ReviewInventory></ReviewInventory>
          </Route>
          <PrivateRoute path="/addServices">
            <AddServices></AddServices>
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
