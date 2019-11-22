import React from 'react';
import Home from './pages/Home';
import FlightDetails from './pages/FlightDetails';
import Error from './pages/Error';
import {Route,Switch} from 'react-router-dom';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/flight-details/" component={FlightDetails}/>
        <Route component={Error}/>
      </Switch>  
    </>
  );
}

export default App;
