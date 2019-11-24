import React,{Component} from 'react';
import Paper from '@material-ui/core/Paper';
import jss from 'jss';
import preset from 'jss-preset-default';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import RadioGroup from '@material-ui/core/RadioGroup';

import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

jss.setup(preset());

const styles= {
  sortingBox:{
    margin:"3%",
    padding:'2%',
    display:'flex',
    flexFlow:'column',
    width:'20%',
    height:'30%',
    border:'2px black solid',
    boxShadow:'2px 2px white',
    marginLeft:'5%'
  },
  sortingContainer:{
    display:'flex',
    flexFlow:'column'
  },
  formControl:{
    marginTop:'15%'
  },
  '@media screen and (max-width: 768px)': {
    sortingBox:{
      display:'none'
    }
  }
}

const { classes } = jss.createStyleSheet(styles).attach();

class Sorting extends Component{
  constructor(props){
    super(props);
    this.state = {
      value:''
    }
  }

  handleChange = event => {
   this.setState({value:event.target.value});
  };

  render(){
    return(
      <Paper className={classes.sortingBox}>
        <h3 style={{textShadow:'1px 1px #00f2a9'}}>Sort By:</h3>

        <div className={classes.sortingContainer}>
          <FormControl component="fieldset" className={classes.formControl}>
             <RadioGroup aria-label="sort" name="sort" value={this.value} onChange={this.handleChange}>
               <FormControlLabel value="price" control={<Radio color="primary"/>} label="Price" />
               <FormControlLabel value="duration" control={<Radio color="primary"/>} label="Duration" />
               <FormControlLabel value="departure" control={<Radio color="primary"/>} label="Departure" />
               <FormControlLabel value="arrival" control={<Radio color="primary"/>} label="Arrival" />
               <FormControlLabel value="seat" control={<Radio color="primary"/>} label="Seat Availibility" />
             </RadioGroup>
         </FormControl>
        </div>

      </Paper>
    )
  }
}

export default Sorting;
