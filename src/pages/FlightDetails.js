import React,{Component} from 'react';
import DetailTable from '../components/DetailTable';
import Filters from '../components/Filters';
import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const styles = {
  mainContainer:{
    backgroundColor:'#00F2A9',
    minHeight: "calc(100vh - 70px)",
    display:'flex',
    flexFlow:'row'
  },
  filterConatiner:{
    height:"400px",
    width:'400px',
    backgroundColor:'red'
  },
  flightContainer:{
    display:'flex',
    flexFlow:'column'
  },
  '@media screen and (max-width: 768px)': {
    flightContainer:{
      width:'100%'
    }
  }
}


const { classes } = jss.createStyleSheet(styles).attach();

class FlightDetails extends Component {
  constructor(props){
    super(props);
    this.state={
      data: JSON.parse(localStorage.getItem('searchData')),
      direction:{
        Price:'asc'
      }
    }
  }

  sortBy=(key)=>{
    this.setState({
      data: this.state.data.sort( (a,b) => (
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
      <div className={classes.mainContainer}>
        <Filters className={classes.filterSection}/>
        <div className={classes.flightContainer}>
          <DetailTable
            data={this.state.data}
            sortBy={this.sortBy}/>
        </div>
      </div>
    );
  }
}

export default FlightDetails;
