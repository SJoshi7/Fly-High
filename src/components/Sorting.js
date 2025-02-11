import React,{Component} from 'react';
import Paper from '@material-ui/core/Paper';
import jss from 'jss';
import preset from 'jss-preset-default';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

jss.setup(preset());

const styles= {
  sortingBox:{
    display:'block',
    margin:"3%",
    padding:'2%',
    display:'flex',
    flexFlow:'column',
    width:'20%',
    height:'30%',
    marginTop:'10%',
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
      display:'none',
      position: 'fixed',
      width: '50%',
      margin: '0%',
      bottom:'4%',
      right: '0%',
      height: '45%'
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
      <Paper className={classes.sortingBox} id="sortDiv">
        <h3 style={{textShadow:'1px 1px #00f2a9'}}>Sort By:</h3>
        <div className={classes.sortingContainer}>
          <FormControl component="fieldset" className={classes.formControl}>
             <RadioGroup aria-label="sort" name="sort" value={this.value} onChange={this.handleChange}>
               <FormControlLabel
                  value="price"
                  control={<Radio color="primary" onClick={()=>this.props.sortBy('Price')}/>}
                  label="Price"
                />
               <FormControlLabel
                  value="duration"
                  control={<Radio color="primary" onClick={()=>this.props.sortBy('Duration')}/>}
                  label="Duration"
                />
               <FormControlLabel
                  value="departure"
                  control={<Radio color="primary" onClick={()=>this.props.sortBy('Departure')}/>}
                  label="Departure"
                />
               <FormControlLabel
                  value="arrival"
                  control={<Radio color="primary" onClick={()=>this.props.sortBy('Arrival')}/>}
                  label="Arrival"
                />
               <FormControlLabel
                  value="seat"
                  control={<Radio color="primary" onClick={()=>this.props.sortBy('Seats')}/>}
                  label="Seat Availibility"
                />
             </RadioGroup>
         </FormControl>
        </div>
      </Paper>
    )
  }
}

export default Sorting;
