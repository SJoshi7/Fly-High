import React from 'react';
import InputForm from '../components/InputForm';
import data from "../data/flightData.json";
import searchFlight from '../helpers/searchFlight';

const Home = () => {
  return(
    <div className="home">
      <div className="form-box">
        <InputForm/>
      </div>
    </div>
  );
}

export default Home;
