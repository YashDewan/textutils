import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" >{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="about" className="nav-link">About Us</Link>
                        </li>
                    </ul>



                    {/* TOGGLE MODE FOR DARK MODE */}

                    <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>

                        {/* EXTRA COLORS : */}

                        {/* <i className="mx-2 fa fa-circle" onClick={() => {props.togglemode('dark')}} style={{ color: '#000000', fontSize: '28px', cursor: 'pointer' }}></i>
                        <i className="mx-2 fa fa-circle" onClick={() => {props.togglemode('success')}} style={{ color: 'green', fontSize: '28px', cursor: 'pointer' }}></i>
                        <i className="mx-2 fa fa-circle" onClick={() => {props.togglemode('warning')}} style={{ color: 'yellow', fontSize: '28px', cursor: 'pointer' }}></i>
                        <i className="mx-2 fa fa-circle" onClick={() => {props.togglemode('primary')}} style={{ color: 'blue', fontSize: '28px', cursor: 'pointer' }}></i> */}

                        {/* toggle btn for dark/ligth modes : */}

                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.togglemode} />
                        <label className="mx-1 form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode} mode</label>
                    </div>
                </div>
            </div>
        </nav>

    );

}

// proptypes : 

Navbar.propTypes = {
    title: PropTypes.string.isRequired
};

Navbar.defaultProps = {
    title: "TextUtils"
};
