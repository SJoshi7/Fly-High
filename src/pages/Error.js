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
    position:'absolute',
    left:'25%',
    top:'55%'
  }
}

const { classes } = jss.createStyleSheet(styles).attach();

const Error = () => {
  return(
    <div className="home">
      <img src={paragliding} className={classes.imageStyle} id="paraglidingImage"/>
      <h3 className={classes.errorMessage}>You Have Landed on a Wrong Page!</h3>
    </div>
  );
}

export default Error;
