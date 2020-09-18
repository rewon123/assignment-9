import React, { createContext, useState } from 'react'; import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import './App.css';
import bg from './travel-guru/Image/background1.png'
import Header from './Components/Header/Header';
import Home from './Components/HomePage/Home';
import SignUp from './Components/signUp/SignUp';
import Booking from './Components/Booking/Booking';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Rooms from './Components/Rooms/Rooms';
import NotFound from './Components/NotFound/NotFound';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <div>
              <img className="bg" src={bg} alt="" />
            </div>
            <Header loggedInUser={loggedInUser} page_name={"home"}></Header>
            <Home></Home>
          </Route>
          <Route path="/booking/:id">
            <div>
              <img className="bg" src={bg} alt="" />
            </div>
            <Header loggedInUser={loggedInUser} page_name={"booking"}></Header>
            <Booking></Booking>
          </Route>
          <Route path="/login">
            <Header loggedInUser={loggedInUser} page_name={"signup"}></Header>
            <SignUp></SignUp>
          </Route>
          <PrivateRoute path='/rooms'>
            <Header loggedInUser={loggedInUser} page_name={"rooms"}></Header>
            <Rooms></Rooms>
          </PrivateRoute>
          <Route path="*">
          <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
