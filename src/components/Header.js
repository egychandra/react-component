import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                <p className="navbar-brand">React Component</p>
                <ul className="nav navbar-nav">
                    <li>
                        <a href="home">Home</a>
                    </li>
                    <li className="active">
                        <a href="product">Product</a>
                    </li>
                </ul>
                </div>
            </nav>  
        );
    }
}

export default Header;