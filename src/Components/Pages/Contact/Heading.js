import React from 'react';
import { NavLink } from 'react-router-dom';

const Heading = () => {
    return (
        <>
           <header className="py-8 py-md-11">
        <div className="container text-center py-xl-2">
            <h1 className="display-4 fw-semi-bold mb-0">Get in touch today!</h1>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-scroll justify-content-center">
                    <li className="breadcrumb-item">
                        <NavLink className="text-gray-800" to="/">
                            Home
                        </NavLink>
                    </li>
                    <li className="breadcrumb-item text-gray-800 active" aria-current="page">
                        Get in touch today!
                    </li>
                </ol>
            </nav>
        </div>
        <img className="d-none img-fluid" src="...html" alt="..."/>
    </header>
    </>
    );
};

export default Heading;