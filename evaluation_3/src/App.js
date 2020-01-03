import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Form from "./components/Form";
// import Table from "./components/Table";
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="container">
       <Navbar />
       <Route path='/home' component={Home} />
       <Route path='/form' component={Form} />
       {/* <Route path='/table' component={Table} /> */}
       
     
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
