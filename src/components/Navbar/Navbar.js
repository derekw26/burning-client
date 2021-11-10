import React, {Component} from 'react';
import { MenuItems } from "./MenuItems"

class Navbar extends Component {
    render() {
        return(
            <nav className='NavbarItems'>
                <h1 className='navbar-logo'>Burning Airlines</h1>
                <div className='menu-icon'>
                    
                </div>
                <ul>    
                    {MenuItems.map((item, index) => {
                        return (
                            // Creates list items based on the objects in the MenuItems array
                            <li key ={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar