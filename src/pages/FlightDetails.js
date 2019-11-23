import React,{Component} from 'react';
import DetailTable from '../components/DetailTable';
import data from "../data/flightData.json";

class FlightDetails extends Component {
  constructor(props){
    super(props);
    this.state={
      data: data,
      direction:{
        Price:'asc'
      }
    }
  }

  sortBy=(key)=>{
    this.setState({
      data: data.sort( (a,b) => (
        this.state.direction[key] === 'asc'
          ? parseFloat(a[key].replace(/\D/g,'')) - parseFloat(b[key].replace(/\D/g,''))
          : parseFloat(b[key].replace(/\D/g,'')) - parseFloat(a[key].replace(/\D/g,''))
      )),
      direction:{
        [key]: this.state.direction[key] === 'asc'
          ? 'desc'
          : 'asc'
      }
    })
  }
  render(){
    return(
      <div>
        <DetailTable
          data={this.state.data}
          sortBy={this.sortBy}/>
      </div>
    );
  }
}

export default FlightDetails;
