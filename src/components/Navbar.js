import React, { Component } from 'react';
import {Link} from 'react-router-dom'



class Navbar extends Component{
  render(){
    return(
      <div>


            <nav className="navbar navbar-expand-lg navbar-light bg-info">
       			<Link className="navbar-brand" to="/" > BurnFlying </Link>
       			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
       				<span className="navbar-toggler-icon"></span>
       			</button>
       			<div className="collapse navbar-collapse" id="navbarNav">
       				<ul className="navbar-nav">
       					<li className="nav-item">
       						<Link className="nav-link" to="/">Home</Link>
       					</li>
       					<li className="nav-item">
                <Link className="nav-link" to="/flights">Flights</Link>
       					</li>
                <li className="nav-item">
                <Link className="nav-link" to="/planes">Planes</Link>
                </li>
       				</ul>
       			</div>
       		</nav>


      </div>

    )
  }
}



export default Navbar;
