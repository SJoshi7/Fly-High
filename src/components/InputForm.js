import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { FaExchangeAlt } from 'react-icons/fa';
import DateFnsUtils from '@date-io/date-fns';
import jss from 'jss';
import preset from 'jss-preset-default';
import Button from '@material-ui/core/Button';
import {typewriter} from '../helpers/typewriter';
import {switchHelper} from '../helpers/switch';
import airplane from '../images/airplane.svg';
import {searchFlight} from '../helpers/searchFlight';
import {BrowserRouter as Router, Link} from 'react-router-dom';

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

jss.setup(preset());


const styles = {
  boxFormStyle: {
    margin:'10%',
    padding:'5%',
    border: '2px black solid',
    boxShadow:'5px 5px white'
  },
  inputFormStyle:{
    textAlign:'center'
  },
  exchangeIcon:{
    fontSize: '1.5rem',
    margin: '3%',
    cursor:'pointer'
  },
  inputTextStyle:{
    width:'40%'
  },
  rightInputTextStyle:{
    marginLeft:'11%',
    width:'40%'
  },
  datePickerStyle:{
    width:'92%'
  },
  buttonStyle:{
    backgroundColor:'#00F2A9',
    marginTop:'10%',
    border:'1px black solid'
  },
  '@media screen and (max-width: 768px)': {
    boxFormStyle: {
      margin:'5%',
      border: '2px black solid',
      boxShadow:'5px 5px white'
    },
    exchangeIcon:{
      float:'right',
      margin:'3%',
      transform:'rotate(90deg)',
      marginTop:'15%',
      fontSize:'1.5rem'
    },
    inputTextStyle:{
      width:'85%'
    },
    rightInputTextStyle:{
      float:'none',
      width:'85%',
      marginLeft:'unset'
    },
    datePickerStyle:{
      width:'85%'
    },
    inputFormStyle:{
      textAlign:'unset'
    }
  }
}

const { classes } = jss.createStyleSheet(styles).attach();

class InputForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      source:'',
      destination:'',
      data:'',
      seat:'',
      reverse:false,
      selectedDate: new Date()
    }
  }

  componentDidMount(){
      typewriter();
  }

  handleDateChange = value => {
    this.setState({
      selectedDate:value
    })
  };

  render(){
    return(
      <Grid container>
        <Grid item xs={12} sm id="left-main-box">
          <div id="typedtext">
          </div>
          <img src={airplane} id="airplaneImage" width="50px" height="50px"/>
        </Grid>
        <Grid item xs={12} sm id="right-main-box">
          <Paper className={classes.boxFormStyle}>
            <div className={classes.inputFormStyle}>
              <TextField
                className={classes.inputTextStyle}
                required
                id="standard-required"
                label="Source"
                margin="normal"
                id="source"
              />

              <FaExchangeAlt className={classes.exchangeIcon} onClick={switchHelper}/>

              <TextField
                className={classes.inputTextStyle}
                required
                id="standard-required"
                label="Destination"
                margin="normal"
                id="destination"
              />

              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    className={classes.datePickerStyle}
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Travel Date"
                    fullWidth
                    value={this.state.selectedDate}
                    onChange={this.handleDateChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
              </MuiPickersUtilsProvider>
              <div>
                <TextField
                  className={classes.inputTextStyle}
                  id="seats"
                  label="Passenger(s)"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  margin="normal"
                  defaultValue="1"
                />

                <TextField
                  className={classes.rightInputTextStyle}
                  id="standard-required"
                  label="Pay in (currency)"
                  defaultValue="INR"
                  margin="normal"
                />
              </div>
            </div>
            <center>
              <Link to="/flight-details">
              <Button
                variant="contained"
                className={classes.buttonStyle}
                onClick={searchFlight}
                >
                Search Flights
              </Button>
              </Link>
            </center>

          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default InputForm;
