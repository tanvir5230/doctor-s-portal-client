import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-calendar/dist/Calendar.css";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";
import PrivateDashboard from "./components/dashboard/PrivateDashboard";
import Login from "./components/userRegistration/Login";
import Dashboard from "./components/dashboard/Dashboard";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <PrivateDashboard path="/dashboard">
            <Dashboard />
          </PrivateDashboard>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
