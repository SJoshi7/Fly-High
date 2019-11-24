import React,{Component} from 'react';
import DetailTable from '../components/DetailTable';
import Filters from '../components/Filters';
import Sorting from '../components/Sorting';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FilterListIcon from '@material-ui/icons/FilterList';
import SwapVertIcon from '@material-ui/icons/SwapVert';
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
  tabStyle:{
    display:'none'
  },
  '@media screen and (max-width: 768px)': {
    flightContainer:{
      width:'100%'
    },
    tabStyle:{
      display:'block',
      position:'fixed',
      bottom:'0%',
      width:'100%'
    },
    tabButtonStyle:{
      width:'50%',
      borderStyle:'none',
      backgroundColor:'white',
      padding:'5px',
      zIndex:1
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

  selectFilterOrSort = (a) => {
    let displayVal = document.getElementById(a).style.display;
    if(displayVal == 'block'){
      document.getElementById('flightContainerId').style.opacity = 1;
      document.getElementById(a).style.display = 'none'
    }
    else if(displayVal=='' || displayVal=='none'){
      document.getElementById(a).style.display = 'block'
      document.getElementById('flightContainerId').style.opacity = 0.5;
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
      <div>
      <div className={classes.mainContainer}>
        <Filters className={classes.filterSection}/>
        <div className={classes.flightContainer} id="flightContainerId">
          <DetailTable
            data={this.state.data}
            />
        </div>
        <Sorting sortBy={this.sortBy} data={this.state.data}/>
        </div>
        <Paper square className={classes.tabStyle} style={{zIndex:1}}>
          <button
            onClick={()=>{this.selectFilterOrSort('filterBoxId')}}
            className={classes.tabButtonStyle}
            style={{borderRight:'1px black solid'}}>
              <FilterListIcon/>
          </button>
          <button
            onClick={()=>{this.selectFilterOrSort('sortDiv')}}
            className={classes.tabButtonStyle}>
              <SwapVertIcon/>
          </button>
        </Paper>
      </div>
    );
  }
}

export default FlightDetails;
