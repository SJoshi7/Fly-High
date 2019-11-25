import React,{Component} from 'react';
import Paper from '@material-ui/core/Paper';
import jss from 'jss';
import preset from 'jss-preset-default';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

jss.setup(preset());

const styles= {
  ArrivalDepartureBox:{
    display:'flex',
    flexFlow:'row'
  },
  filterBox:{
    margin:"3%",
    padding:'1%',
    display:'flex',
    flexFlow:'column',
    width:'27%',
    height:'75%',
    border:'2px black solid',
    boxShadow:'2px 2px white'
  },
  checkboxContainer0:{
    padding:'5px',
    fontSize:'13px',
    marginTop:'10px'
  },
  checkboxContainer:{
    display:'flex',
    flexFlow:'column',
    fontSize:'13px',
    marginTop:'10px',
    paddingLeft:'5px'
  },
  filterButton:{
    width:'30%',
    backgroundColor:'#00F2A9',
    color:'black',
    border:'1px black solid',
    marginTop:'7%'
  },
  labelStyle:{

  },
  '@media screen and (max-width: 768px)': {
    filterBox:{
      display:'none',
      width: '96%',
      position: 'fixed',
      height: 'fit-content',
      top: '12%',
      margin: '2%',
      marginBottom:'5%',
      zIndex:1
    }
  }
}

const { classes } = jss.createStyleSheet(styles).attach();

class Filters extends Component{
  render(){
    return(
      <Paper className={classes.filterBox} id="filterBoxId">
        <center>
          <h3 style={{textShadow:'1px 1px #00f2a9',marginBottom:'4%'}}>Filter By:</h3>
        </center>
        <div className={classes.checkboxContainer0}>
          <h3>Airlines</h3>
          <label className={classes.labelStyle}>
            Indigo
            <Checkbox color="primary"/>
          </label>
          <label className={classes.labelStyle}>
            Jet Airways
            <Checkbox color="primary"/>
          </label>
          <label className={classes.labelStyle}>
            Air India
            <Checkbox color="primary"/>
          </label>
        </div>

        <div className={classes.checkboxContainer0}>
          <h3>Duration</h3>
          <label class="container">
            0-2hours
            <Checkbox color="primary"/>
          </label>
          <label class="container">
            2-3hours
            <Checkbox color="primary"/>
          </label>
          <label class="container">
            >3hours
            <Checkbox color="primary"/>
          </label>
        </div>

        <div className={classes.ArrivalDepartureBox}>
          <div className={classes.checkboxContainer}>
            <h3>Departure</h3>
            <label class="container">
              12am-06am
              <Checkbox color="primary"/>
            </label>
            <label class="container">
              06am-12pm
              <Checkbox color="primary"/>
            </label>
            <label class="container">
              12pm-06pm
              <Checkbox color="primary"/>
            </label>
            <label class="container">
              06pm-12am
              <Checkbox color="primary"/>
            </label>
          </div>

          <div className={classes.checkboxContainer} style={{float:'left'}}>
            <h3>Arrival</h3>
            <label class="container">
              12am-06am
              <Checkbox color="primary"/>
            </label>
            <label class="container">
              06am-12pm
              <Checkbox color="primary"/>
            </label>
            <label class="container">
              12pm-06pm
              <Checkbox color="primary"/>
            </label>
            <label class="container">
              06pm-12am
              <Checkbox color="primary"/>
            </label>
          </div>
        </div>
        <center>
          <Button variant="contained" className={classes.filterButton}>
            Apply
          </Button>
        </center>
      </Paper>
    )
  }
}

export default Filters;
