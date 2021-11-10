import React, { Component } from 'react';
import {Link} from 'react-router-dom'


class Navbar extends Component{
  render(){
    return(
      <div>
        <ul>
            <Link to="/"><li>Home</li></Link>
<<<<<<< HEAD
            <Link to="/flights"><li>Flights</li></Link>

=======
            <Link to="/flights"><li>Create Flight</li></Link>
            <Link to="/planes"><li>Create Plane</li></Link>
            <Link to="/search"><li> Book Now</li></Link>
>>>>>>> 2b63f17c70c46e0c9ae48ffba3589e366954a289

        </ul>
      </div>

    )
  }
}



export default Navbar;
