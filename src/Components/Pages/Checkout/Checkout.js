import React from 'react';
import CheckoutFormAndOrder from './CheckoutFormAndOrder';

const Checkout = () => {
    return (
        <div>
    {/* =========================PAGE TITLE========================= */}
    <header class="py-8 py-md-10">
        <div class="container text-center py-xl-2">
            <h1 class="display-4 fw-semi-bold mb-0">Shop Checkout</h1>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb breadcrumb-scroll justify-content-center">
                    <li class="breadcrumb-item">
                        <a class="text-gray-800" href="#">
                            Home
                        </a>
                    </li>
                    <li class="breadcrumb-item text-gray-800 active" aria-current="page">
                        Shop Checkout
                    </li>
                </ol>
            </nav>
        </div>
        
        <img class="d-none img-fluid" src="...html" alt="..."/>
    </header>
    <CheckoutFormAndOrder></CheckoutFormAndOrder>
        </div>
    );
};

export default Checkout;