import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export class Nav extends Component {
    render() {
        return (
            <nav>
                <Link to ="/">
                    <img 
                        src="https://i.pinimg.com/originals/03/51/71/0351711fe834c3a96656f65b4c54b2b2.jpg"
                        alt="home-logo"
                        style={{width:"50px", height:"50px"}}
                    />    
                </Link>
                <div className='options'>
                    <Link to='/movies'> Movies </Link>
                    <Link to="/people"> People </Link>
                    <Link to="/locations"> Locations </Link>
                </div>     
            </nav>
        )
    }
}

export default Nav
