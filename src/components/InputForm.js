import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { FaExchangeAlt } from 'react-icons/fa';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';


const form_box_style = {
  padding:'5%',
  marginTop:'10%',
  marginRight:'10%',
  marginLeft:'10%'
}

const text_field_style = {
  width:'43%'
}

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

  handleDateChange = value => {
    this.setState({
      selectedDate:value
    })
  };

  render(){
    return(
      <Grid container>
        <Grid item xs={12} sm>
          left pane
        </Grid>
        <Grid item xs={12} sm>
          <Paper style={form_box_style}>
            <TextField
              id="outlined-basic"
              label="Source"
              variant="outlined"
              style={text_field_style}
              margin="dense"
            />

            <FaExchangeAlt className="exchange-icon"/>

            <TextField
              id="outlined-basic"
              label="Destination"
              variant="outlined"
              style={text_field_style}
              margin="dense"
            />

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Date picker inline"
                  value={this.state.selectedDate}
                  onChange={this.handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
            </MuiPickersUtilsProvider>

          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default InputForm;
