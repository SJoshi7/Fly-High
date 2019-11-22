import React from 'react';
import Home from './pages/Home';
import FlightDetails from './pages/FlightDetails';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import {Route,Switch} from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/flight-details/" component={FlightDetails}/>
        <Route component={Error}/>
      </Switch>
    </>
  );
}

export default App;
