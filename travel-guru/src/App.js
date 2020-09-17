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


export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  console.log(loggedInUser);

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
            <Route exact path="/">
              <div>
                <img className="bg" src={bg} alt="" />
              </div>
              <Header name={loggedInUser} ></Header>
              <Home></Home>
            </Route>
          <Route path="/booking/:id">
            <div>
              <img className="bg" src={bg} alt="" />
            </div>
            <Header name={loggedInUser}></Header>
            <Booking></Booking>
          </Route>
          <Route path="/login">
            <SignUp></SignUp>
          </Route>
          <Route path='/rooms'>
            <Header name={loggedInUser}></Header>
            <Rooms></Rooms>
          </Route>
          <Route path="*">
            <h1>this i page is not ready yet</h1>
            <h1>404</h1>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
