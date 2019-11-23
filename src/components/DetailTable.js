import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
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
      margin:'3%',
      padding:'10px',
      width:'40%'
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
      display:'flex',
      border:'2px black solid',
      margin:'2%'
    },
    cover:{
      width: 40,
      height:40,
      marginLeft:'4px'
    },
    pStyle:{
      fontWeight:'bold'
    },
    styleDiv:{
      margin:'5px',
      padding:'2px'
    },
    bookButton:{
      float:"right",
      padding:"7%",
      marginTop:'10%',
      color:'black',
      backgroundColor:'#00F2A9',
      border:'1px black solid',
      boxShadow:'2px 2px #00F2A9'
    }
  }
}

const { classes } = jss.createStyleSheet(styles).attach();

export default function DetailTable() {

  return (
    <Card className={classes.cardStyle}>
      <div className={classes.styleDiv} >
        <CardMedia
          className={classes.cover}
          image={indigo}
        />
        <span className={classes.spanStyle}>Indigo</span>
      </div>
      <div className={classes.styleDiv}>
        <p className={classes.pStyle}>
          09:30
        </p>
        <span className={classes.spanStyle}>Pune</span>
      </div>

      <div className={classes.styleDiv}>
        <span>2h 30m</span>
        <CardMedia
          className={classes.cover}
          image={arrowRight}
        />

      </div>

      <div className={classes.styleDiv}>
        <p className={classes.pStyle}>
          11:30
        </p >
        <span className={classes.spanStyle}>Bangalore</span>
      </div>

      <div className={classes.styleDiv}>
        <p className={classes.pStyle}>Rs.6000</p>
        <button className={classes.bookButton}>Book</button>
      </div>
    </Card>
  );
}
