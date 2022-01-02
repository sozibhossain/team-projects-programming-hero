import React from 'react';
import { Link } from 'react-router-dom';

const AboutBanner = () => {
    return (
        <>
            <header className="py-8 py-md-12 overlay overlay-primary overlay-80" style={{backgroundImage: 'url(assets/img/covers/cover-19.jpg)'}}>
                <div className="container text-center py-xl-5">
                    <h1 className="display-4 fw-semi-bold mb-0 text-white">About Us</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb breadcrumb-scroll justify-content-center">
                            <li className="breadcrumb-item">
                                <Link className="text-white" to="/home">
                                    Home
                                </Link>
                            </li>
                            <li className="breadcrumb-item text-white active" aria-current="page">
                                About Us
                            </li>
                        </ol>
                    </nav>
                </div>
                <img className="d-none img-fluid" src="...html" alt="..."/>
            </header>
        </>
    );
};

export default AboutBanner;