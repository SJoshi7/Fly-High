import React,{Component} from 'react';
import DetailTable from '../components/DetailTable';
import data from "../data/flightData.json";
import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const styles = {
  flightContainer:{
    backgroundColor:'#00F2A9',
    minHeight: "calc(100vh - 70px)",
    display:'flex',
    flexFlow:'column'
  }
}

const { classes } = jss.createStyleSheet(styles).attach();

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
      <div className={classes.flightContainer}>
        <DetailTable
          data={this.state.data}
          sortBy={this.sortBy}/>
      </div>
    );
  }
}

export default FlightDetails;
