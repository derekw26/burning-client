import React, { Component } from 'react';
import {Link} from 'react-router-dom'


class Navbar extends Component{
  render(){
    return(
      <div>
        <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/flights"><li>Flights</li></Link>
            <Link to="/Search"><li> Book Now</li></Link>


        </ul>


      </div>

    )
  }
}

export default Navbar;