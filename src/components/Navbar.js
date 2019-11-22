import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {FaAlignRight} from 'react-icons/fa';
import logo from '../images/logo.svg';

class Navbar extends Component {
  state = {
    isOpen:false
  };
  handleToggle = () =>{
    this.setState({isOpen:!this.state.isOpen})
  };
  render(){
    return(
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link>
              <img src={logo} alt="Flight Logo" width="100px" height="50px"/>
            </Link>
            <button type="button" className="nav-btn" onClick={this.handleToggle}>
              <FaAlignRight className="nav-icon"/>
            </button>
          </div>
          <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
