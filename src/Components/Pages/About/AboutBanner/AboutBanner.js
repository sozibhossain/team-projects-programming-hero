import React from 'react';
import { Link } from 'react-router-dom';

const AboutBanner = () => {
    return (
        <>
            <header class="py-8 py-md-12 overlay overlay-primary overlay-80" style={{backgroundImage: 'url(assets/img/covers/cover-19.jpg)'}}>
                <div class="container text-center py-xl-5">
                    <h1 class="display-4 fw-semi-bold mb-0 text-white">About Us</h1>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb breadcrumb-scroll justify-content-center">
                            <li class="breadcrumb-item">
                                <Link class="text-white" to="/home">
                                    Home
                                </Link>
                            </li>
                            <li class="breadcrumb-item text-white active" aria-current="page">
                                About Us
                            </li>
                        </ol>
                    </nav>
                </div>
                <img class="d-none img-fluid" src="...html" alt="..."/>
            </header>
        </>
    );
};

export default AboutBanner;