import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import airindia from '../images/airindia.png';
import jetAirways from '../images/jetAirways.png';
import indigo from '../images/indigo.png';
import arrowRight from '../images/arrowRight.svg';
import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const styles = {
    cardStyle:{
      display:'flex',
      border:'2px black solid',
      margin:'10px',
      padding:'10px',
      width:'100%',
      height:'fit-content'
    },
    cover:{
      width: 60,
      height:60
    },
    styleDiv:{
      marginLeft:'10px',
      padding:'10px'
    },
    pStyle:{
      fontWeight:'bold'
    },
    spanStyle:{

    },
    bookButton:{
      float:"right",
      padding:"13%",
      fontSize:'15px',
      marginTop:'13%',
      color:'black',
      backgroundColor:'#00F2A9',
      border:'1px black solid',
      boxShadow:'2px 2px #00F2A9'
    },
  '@media screen and (max-width: 768px)':{
    cardStyle:{
      margin:'2%',
      width:'95%',
      fontSize:'15px'
    },
    cover:{
      width: 40,
      height:40,
      marginLeft:'4px'
    },
    styleDiv:{
      margin:'4px',
      padding:'2px'
    },
    bookButton:{
      padding:"7%",
      marginTop:'10%'
    }
  }
}

const imgSelect = (a) => {
  let logoArray = [jetAirways,indigo,airindia];
  return logoArray[a-1];
}

const { classes } = jss.createStyleSheet(styles).attach();

export default function DetailTable(props) {
  return (
    props.data.map(item=>(
      <Card className={classes.cardStyle}>
        <div className={classes.styleDiv} >
          <CardMedia
            className={classes.cover}
            image={imgSelect(item.logo)}
          />
          <span className={classes.spanStyle}>{item.Airline}</span>
        </div>
        <div className={classes.styleDiv}>
          <p className={classes.pStyle}>
            {item.Departure}
          </p>
          <span className={classes.spanStyle}>{item.From}</span>
        </div>

        <div className={classes.styleDiv}>
          <span>{item.Duration}</span>
          <CardMedia
            className={classes.cover}
            image={arrowRight}
          />

        </div>

        <div className={classes.styleDiv}>
          <p className={classes.pStyle}>
            {item.Arrival}
          </p >
          <span className={classes.spanStyle}>{item.To}</span>
        </div>

        <div className={classes.styleDiv}>
          <p className={classes.pStyle}>{item.Price}</p>
          <button className={classes.bookButton}>Book</button>
        </div>
      </Card>
    ))
  );
}
