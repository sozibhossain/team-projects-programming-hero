import React from 'react';

const FaqHeader = () => {
    return (
        <div>
            <header class="py-8 py-md-11">
                <div class="container text-center py-xl-2">
                    <h1 class="display-4 fw-semi-bold mb-0">Frequently Asked Questions</h1>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb breadcrumb-scroll justify-content-center">
                            <li class="breadcrumb-item">
                                <a class="text-gray-800" href="#">
                                    Home
                                </a>
                            </li>
                            <li class="breadcrumb-item text-gray-800 active" aria-current="page">
                                Frequently Asked Questions
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