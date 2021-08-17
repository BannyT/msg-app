import logo from './logo.svg';
import './App.css';
import Sidebar  from './Sidebar';
import MainChat from './MainChat'
import Login from "./Login"
import React from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
function App() {
  return (
    <div className="app">
         <div className="main-body">
             <Router>
                <Switch>
                    <Route exact path="/login">
                      <Login/>   
                    </Route>
                    <Route exact path="/">
                      <Sidebar/>
                      <MainChat/>
                    </Route>
                    <Route exact path="rooms/:roodId">
                      <Sidebar/>
                      <MainChat/>
                    </Route>
                </Switch>
             </Router>
           
         </div>
    </div>
  );
}

export default App;
