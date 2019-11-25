import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import paragliding from '../images/paragliding.svg';
jss.setup(preset());

const styles={
  imageStyle:{
    width:'80px',
    height:'80px'
  },
  errorMessage:{
    fontSize:'2rem',
    left:'25%',
    position:'absolute',
    top:'55%',
    textShadow:'1px 1px white'
  },
  '@media screen and (max-width: 768px)':{
    errorMessage:{
      left:'0%'
    }
  }
}

const { classes } = jss.createStyleSheet(styles).attach();

const Error = () => {
  return(
    <div className="home">
      <img src={paragliding} className={classes.imageStyle} id="paraglidingImage"/>
      <center>
        <h3 className={classes.errorMessage}>You Have Landed on a Wrong Page!</h3>
      </center>
    </div>
  );
}

export default Error;
