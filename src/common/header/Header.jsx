import './Header.css';
import React, {Component} from 'react';
import logo from './../logo.svg';

class Header extends Component {
    render() {
        return (
            <div className="header">
               <img src={logo} className="svg" alt="logo" />
            </div>
        );
    }
}
export default Header;