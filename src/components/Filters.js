import React,{Component} from 'react';
import Paper from '@material-ui/core/Paper';
import jss from 'jss';
import preset from 'jss-preset-default';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

jss.setup(preset());

const styles= {
  ArrivalDepartureBox:{
    display:'flex',
    flexFlow:'row'
  },
  filterBox:{
    margin:"3%",
    padding:'2%',
    display:'flex',
    flexFlow:'column',
    width:'27%',
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
  checkboxStyle:{

  },
  labelStyle:{

  },
  '@media screen and (max-width: 768px)': {
    filterBox:{
      display:'none'
    }
  }
}

const { classes } = jss.createStyleSheet(styles).attach();

class Filters extends Component{
  render(){
    return(
      <Paper className={classes.filterBox}>
        <h3 style={{textShadow:'1px 1px #00f2a9'}}>Filters</h3>
        <div className={classes.checkboxContainer0}>
          <h3>Airlines</h3>
          <label class="container" className={classes.labelStyle}>
            Indigo
            <Checkbox color="primary"/>
          </label>
          <label class="container" className={classes.labelStyle}>
            Jet Airways
            <Checkbox color="primary"/>
          </label>
          <label class="container" className={classes.labelStyle}>
            Air India
            <Checkbox color="primary"/>
          </label>
        </div>

        <div className={classes.checkboxContainer0}>
          <h3>Duration</h3>
          <label class="container">
            0-2
            <Checkbox color="primary"/>

          </label>
          <label class="container">
            2-3
            <Checkbox color="primary"/>

          </label>
          <label class="container">
            >3
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
      </Paper>
    )
  }
}

export default Filters;