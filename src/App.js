import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-calendar/dist/Calendar.css";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";
import PrivateDashboard from "./components/dashboard/PrivateDashboard";
import Login from "./components/userRegistration/Login";
import DoctorDashboard from "./components/dashboard/DoctorDashboard";
import { createContext } from "react";
import { useState } from "react";

import Appointment from "./components/appointment/Appointment";
import MyFooter from "./components/Home/MyFooter";

export const userContext = createContext();

const App = () => {
  const [user, setUser] = useState(false);
  const toggleUser = () => {
    setUser(user === false ? true : false);
  };

  return (
    <>
      <userContext.Provider value={{ user: user, toggleUser }}>
        <BrowserRouter>
          <Switch>
            <PrivateDashboard path="/doctor's-panel">
              <DoctorDashboard />
            </PrivateDashboard>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/appointment">
              <Appointment />
              <MyFooter />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      </userContext.Provider>
    </>
  );
};

export default App;
