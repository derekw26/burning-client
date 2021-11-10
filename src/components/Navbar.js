import React, { Component } from 'react';
import {Link} from 'react-router-dom'


class Navbar extends Component{
  render(){
    return(
      <div>
        <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/flights"><li>Create Flight</li></Link>
            <Link to="/planes"><li>Create Plane</li></Link>
            <Link to="/search"><li> Book Now</li></Link>

        </ul>
      </div>

    )
  }
}



export default Navbar;
