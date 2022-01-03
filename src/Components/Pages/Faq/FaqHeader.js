import React from 'react';
import { NavLink } from 'react-router-dom';

const FaqHeader = () => {
    return (
        <div>
            <header class="py-8 py-md-11">
                <div class="container text-center py-xl-2">
                    <h1 class="display-4 fw-semi-bold mb-0">Frequently Asked Questions</h1>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb breadcrumb-scroll justify-content-center">
                            <li class="breadcrumb-item">
                            <NavLink className="nav-link px-xl-4" to="/"  id="navbarLandings">
                                    Home
                            </NavLink>
                            </li>
                            <li class="breadcrumb-item text-gray-800 active" aria-current="page">
                                <NavLink className="nav-link px-xl-4" to="/faq"  id="navbarLandings">
                                Frequently Asked Questions
                                </NavLink>
                            </li>
                        </ol>
                    </nav>
                </div>
                <img class="d-none img-fluid" src="...html" alt="..."/>
            </header>
        </div>
    );
};

export default FaqHeader;