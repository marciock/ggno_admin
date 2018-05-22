import React, { Component } from 'react';
//import {Link} from 'react-router-dom';
import './NavBar.css';
//material ui
import {Navbar,NavItem} from 'react-materialize';


class NavBar extends Component {
    
    render() {
      
      const styleImg={
        marginLef:'2em',
        width:'6em'
      }
    return (
      <Navbar brand={<img src="./icons/ggno_logo.png" style={styleImg} alt="teste"/>} right className='grey darken-4 logo'>
        <NavItem  href="#/login">Login</NavItem>
        <NavItem  href="#/">Incio</NavItem>
      </Navbar> 
      
    );
  }
}

export default NavBar;

