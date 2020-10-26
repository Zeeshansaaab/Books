import React from 'react';
import { NavLink } from 'react-router-dom';


function MyNavbar() {
    return (<>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="brand">
                <NavLink className="navbar-brand" to="/">BOOKS</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="menu collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto navbar-center">
                    <li className="nav-item">

                        <NavLink exact activeClassName="nav-active" class="nav-link"  to="/">Home </NavLink>
                    </li>
                    <li className="nav-item">

                        <NavLink exact  activeClassName="nav-active" className="nav-link" to='/papers' >
                            Papers
                            </NavLink>

                    </li>

                    <li className="nav-item">
                        <NavLink exact  activeClassName="nav-active" className="nav-link" to='/books'>
                            Books
                            </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink exact  activeClassName="nav-active" className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </div>
            <div className="search">
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    </>)
}

export default MyNavbar;