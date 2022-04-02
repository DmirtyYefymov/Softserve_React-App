import React from 'react';
import { Link } from 'react-router-dom';
import CustomReactRouterLink from '../General/CustomReactRouterLink';
import './header-nav.css';

const HeaderNav = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="https://static.cdnlogo.com/logos/g/43/g-shock-casio.svg" alt="" width="50" height="50"/>
                </a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <CustomReactRouterLink
                                children="Home"
                                to="/" 
                                className='react-router-link react-router-link-hover nav-link'
                            />
                        </li>
                        <li className="nav-item">
                            <CustomReactRouterLink 
                                children="Catalog"
                                to="/catalog" 
                                className="react-router-link react-router-link-hover nav-link"
                            />
                        </li>
                        <li className="nav-item">
                            <CustomReactRouterLink 
                                children="Cart"
                                to="/cart" 
                                className="react-router-link react-router-link-hover nav-link"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default HeaderNav;