import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./Components/Pages/Dashboard/Dashboard/Dashboard";
import Details from "./Components/Pages/Details/Details";
import Explore from "./Components/Pages/Explore/Explore";
import Home from "./Components/Pages/Home/Home/Home";
import Login from "./Components/Pages/Login/Login/Login";
import PrivateRoute from "./Components/Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Components/Pages/Login/Register/Register/Register";
import NotFound from "./Components/Pages/NotFound/NotFound";
import Authprovider from "./Context/Authprovider/Authprovider";

function App() {
  return (
    <div className="App">
      <Authprovider>
        <BrowserRouter>
          <Switch>
            {/* <PrivateRoute path="/appointment">
              <Appointment></Appointment>
            </PrivateRoute> */}
            <Route exact path="/explore">
              <Explore></Explore>
            </Route>

            <PrivateRoute exact path="/details/:id">
              <Details></Details>
            </PrivateRoute>

            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>

            <Route path="/home">
              <Home />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/register">
              <Register />
            </Route>

            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </BrowserRouter>
      </Authprovider>
    </div>
  );
}

export default App;
