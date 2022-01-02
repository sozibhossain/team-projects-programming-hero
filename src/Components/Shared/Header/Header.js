import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className="modal fade" id="modalExample" tabindex="-1" role="dialog" aria-labelledby="modalExampleTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-body">
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                    </button>

                    <h2 className="fw-bold text-center mb-1" id="modalExampleTitle">
                    Schedule a demo with us
                    </h2>
                    <p className="font-size-lg text-center text-muted mb-6 mb-md-8">
                    We can help you solve company communication.
                    </p>

                    <form>
                    <div className="row">
                        <div className="col-12 col-md-6">
                        <div className="form-label-group">
                            <input type="text" className="form-control form-control-flush" id="registrationFirstNameModal" placeholder="First name"/>
                            <label for="registrationFirstNameModal">First name</label>
                        </div>

                        </div>
                        <div className="col-12 col-md-6">

                        <div className="form-label-group">
                            <input type="text" className="form-control form-control-flush" id="registrationLastNameModal" placeholder="Last name"/>
                            <label for="registrationLastNameModal">Last name</label>
                        </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6">

                        <div className="form-label-group">
                            <input type="email" className="form-control form-control-flush" id="registrationEmailModal" placeholder="Email"/>
                            <label for="registrationEmailModal">Email</label>
                        </div>

                        </div>
                        <div className="col-12 col-md-6">

                        <div className="form-label-group">
                            <input type="password" className="form-control form-control-flush" id="registrationPasswordModal" placeholder="Password"/>
                            <label for="registrationPasswordModal">Password</label>
                        </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                        <button className="btn btn-block btn-primary mt-3 lift">
                            Request a demo
                        </button>

                        </div>
                    </div>
                    </form>

                </div>
                </div>
            </div>
            </div>

            <div className="modal modal-sidebar left fade-left fade" id="accountModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="collapse show" id="collapseSignin" data-bs-parent="#accountModal">
                            <div className="modal-header">
                                <h5 className="modal-title">Log In to Your Skola Account!</h5>
                                {/* <button type="button" className="close text-primary" data-bs-dismiss="modal" aria-label="Close">
                                    <svg width="16" height="17" viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.142135 2.00015L1.55635 0.585938L15.6985 14.7281L14.2843 16.1423L0.142135 2.00015Z" fill="currentColor"></path>
                                        <path d="M14.1421 1.0001L15.5563 2.41431L1.41421 16.5564L0 15.1422L14.1421 1.0001Z" fill="currentColor"></path>
                                    </svg>

                                </button> */}
                            </div>

                            <div className="modal-body">
                                <form className="mb-5">

                                    <div className="form-group mb-5">
                                        <label for="modalSigninEmail">
                                            Username or Email
                                        </label>
                                        <input type="email" className="form-control" id="modalSigninEmail" placeholder="creativelayers"/>
                                    </div>

                                    <div className="form-group mb-5">
                                        <label for="modalSigninPassword">
                                            Password
                                        </label>
                                        <input type="password" className="form-control" id="modalSigninPassword" placeholder="**********"/>
                                    </div>

                                    <div className="d-flex align-items-center mb-5 font-size-sm">
                                        <div className="form-check">
                                            <input className="form-check-input text-gray-800" type="checkbox" id="autoSizingCheck"/>
                                            <label className="form-check-label text-gray-800" for="autoSizingCheck">
                                                Remember me
                                            </label>
                                        </div>

                                        <div className="ms-auto">
                                            <a className="text-gray-800" data-bs-toggle="collapse" href="#collapseForgotPassword" role="button" aria-expanded="false" aria-controls="collapseForgotPassword">Forgot Password</a>
                                        </div>
                                    </div>
                                    <button className="btn btn-block btn-primary" type="submit">
                                        LOGIN
                                    </button>
                                </form>
                                <p className="mb-0 font-size-sm text-center">
                                    Don't have an account? <a className="text-underline" data-bs-toggle="collapse" href="#collapseSignup" role="button" aria-expanded="false" aria-controls="collapseSignup">Sign up</a>
                                </p>
                            </div>
                        </div>

                        <div className="collapse" id="collapseSignup" data-bs-parent="#accountModal">
                            <div className="modal-header">
                                <h5 className="modal-title">Sign Up and Start Learning!</h5>
                                {/* <button type="button" className="close text-primary" data-bs-dismiss="modal" aria-label="Close">
                                    <svg width="16" height="17" viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.142135 2.00015L1.55635 0.585938L15.6985 14.7281L14.2843 16.1423L0.142135 2.00015Z" fill="currentColor"></path>
                                        <path d="M14.1421 1.0001L15.5563 2.41431L1.41421 16.5564L0 15.1422L14.1421 1.0001Z" fill="currentColor"></path>
                                    </svg>

                                </button> */}
                            </div>

                            <div className="modal-body">
                                <form className="mb-5">
                                    <div className="form-group mb-5">
                                        <label for="modalSignupUsername">
                                            Username
                                        </label>
                                        <input type="text" className="form-control" id="modalSignupUsername" placeholder="John"/>
                                    </div>

                                    {/* <!-- Email --> */}
                                    <div className="form-group mb-5">
                                        <label for="modalSignupEmail">
                                            Username or Email
                                        </label>
                                        <input type="email" className="form-control" id="modalSignupEmail" placeholder="johndoe@creativelayers.com"/>
                                    </div>

                                    {/* <!-- Password --> */}
                                    <div className="form-group mb-5">
                                        <label for="modalSignupPassword">
                                            Password
                                        </label>
                                        <input type="password" className="form-control" id="modalSignupPassword" placeholder="**********"/>
                                    </div>

                                    {/* <!-- Submit --> */}
                                    <button className="btn btn-block btn-primary" type="submit">
                                        SIGN UP
                                    </button>

                                </form>

                                {/* <!-- Text --> */}
                                <p className="mb-0 font-size-sm text-center">
                                    Already have an account? <a className="text-underline" data-bs-toggle="collapse" href="#collapseSignin" role="button" aria-expanded="true" aria-controls="collapseSignin">Log In</a>
                                </p>
                            </div>
                        </div>

                        {/* <!-- Forgot Password --> */}
                        <div className="collapse" id="collapseForgotPassword" data-bs-parent="#accountModal">
                            <div className="modal-header">
                                {/* <h5 className="modal-title">Recover password!</h5>
                                <button type="button" className="close text-primary" data-bs-dismiss="modal" aria-label="Close">
                                 
                                    <svg width="16" height="17" viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.142135 2.00015L1.55635 0.585938L15.6985 14.7281L14.2843 16.1423L0.142135 2.00015Z" fill="currentColor"></path>
                                        <path d="M14.1421 1.0001L15.5563 2.41431L1.41421 16.5564L0 15.1422L14.1421 1.0001Z" fill="currentColor"></path>
                                    </svg>

                                </button> */}
                            </div>

                            <div className="modal-body">
                                {/* <!-- Form Recover Password --> */}
                                <form className="mb-5">
                                    {/* <!-- Email --> */}
                                    <div className="form-group">
                                        <label for="modalForgotpasswordEmail">
                                            Email
                                        </label>
                                        <input type="email" className="form-control" id="modalForgotpasswordEmail" placeholder="johndoe@creativelayers.com"/>
                                    </div>

                                    {/* <!-- Submit --> */}
                                    <button className="btn btn-block btn-primary" type="submit">
                                        RECOVER PASSWORD
                                    </button>
                                </form>

                                {/* <!-- Text --> */}
                                <p className="mb-0 font-size-sm text-center">
                                    Remember your password? <a className="text-underline" data-bs-toggle="collapse" href="#collapseSignin" role="button" aria-expanded="false" aria-controls="collapseSignin">Log In</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Modal Sidebar cart --> */}
            <div className="modal modal-sidebar left fade-left fade" id="cartModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header mb-4">
                            <h5 className="modal-title">Your Shopping Cart</h5>
                            {/* <button type="button" className="close text-primary" data-bs-dismiss="modal" aria-label="Close">
                                <svg width="16" height="17" viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.142135 2.00015L1.55635 0.585938L15.6985 14.7281L14.2843 16.1423L0.142135 2.00015Z" fill="currentColor"></path>
                                    <path d="M14.1421 1.0001L15.5563 2.41431L1.41421 16.5564L0 15.1422L14.1421 1.0001Z" fill="currentColor"></path>
                                </svg>

                            </button> */}
                        </div>

                        <div className="modal-body">
                            <ul className="list-group list-group-flush mb-5">
                                <li className="list-group-item border-bottom py-0">
                                    <div className="d-flex py-5">
                                        <div className="bg-gray-200 w-60p h-60p rounded-circle overflow-hidden"></div>

                                        <div className="flex-grow-1 mt-1 ms-4">
                                            <h6 className="fw-normal mb-0">Basic of Nature</h6>
                                            <div className="font-size-sm">1 × $18.00</div>
                                        </div>

                                        <a href="#" className="d-inline-flex text-secondary">
                                            
                                            {/* <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.0469 0H5.95294C5.37707 0 4.90857 0.4685 4.90857 1.04437V3.02872H6.16182V1.25325H9.83806V3.02872H11.0913V1.04437C11.0913 0.4685 10.6228 0 10.0469 0Z" fill="currentColor"/>
                                                <path d="M11.0492 5.51652L9.7968 5.47058L9.52527 12.8857L10.7777 12.9315L11.0492 5.51652Z" fill="currentColor"/>
                                                <path d="M8.62666 5.49353H7.37341V12.9087H8.62666V5.49353Z" fill="currentColor"/>
                                                <path d="M6.47453 12.8855L6.203 5.47034L4.95056 5.51631L5.22212 12.9314L6.47453 12.8855Z" fill="currentColor"/>
                                                <path d="M0.543091 2.4021V3.65535H1.849L2.885 15.4283C2.9134 15.7519 3.18434 16 3.50912 16H12.4697C12.7946 16 13.0657 15.7517 13.0939 15.4281L14.1299 3.65535H15.4569V2.4021H0.543091ZM11.8958 14.7468H4.08293L3.10706 3.65535H12.8719L11.8958 14.7468Z" fill="currentColor"/>
                                            </svg> */}

                                        </a>
                                    </div>
                                </li>

                                <li className="list-group-item border-bottom py-0">
                                    <div className="d-flex py-5">
                                        <div className="bg-gray-200 w-60p h-60p rounded-circle overflow-hidden"></div>

                                        <div className="flex-grow-1 mt-1 ms-4">
                                            <h6 className="fw-normal mb-0">Color Harriet Tubman</h6>
                                            <div className="font-size-sm">1 × $18.00</div>
                                        </div>

                                        <a href="#" className="d-inline-flex text-secondary">
                                            
                                            {/* <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.0469 0H5.95294C5.37707 0 4.90857 0.4685 4.90857 1.04437V3.02872H6.16182V1.25325H9.83806V3.02872H11.0913V1.04437C11.0913 0.4685 10.6228 0 10.0469 0Z" fill="currentColor"/>
                                                <path d="M11.0492 5.51652L9.7968 5.47058L9.52527 12.8857L10.7777 12.9315L11.0492 5.51652Z" fill="currentColor"/>
                                                <path d="M8.62666 5.49353H7.37341V12.9087H8.62666V5.49353Z" fill="currentColor"/>
                                                <path d="M6.47453 12.8855L6.203 5.47034L4.95056 5.51631L5.22212 12.9314L6.47453 12.8855Z" fill="currentColor"/>
                                                <path d="M0.543091 2.4021V3.65535H1.849L2.885 15.4283C2.9134 15.7519 3.18434 16 3.50912 16H12.4697C12.7946 16 13.0657 15.7517 13.0939 15.4281L14.1299 3.65535H15.4569V2.4021H0.543091ZM11.8958 14.7468H4.08293L3.10706 3.65535H12.8719L11.8958 14.7468Z" fill="currentColor"/>
                                            </svg> */}

                                        </a>
                                    </div>
                                </li>

                                <li className="list-group-item border-bottom py-0">
                                    <div className="d-flex py-5">
                                        <div className="bg-gray-200 w-60p h-60p rounded-circle overflow-hidden"></div>

                                        <div className="flex-grow-1 mt-1 ms-4">
                                            <h6 className="fw-normal mb-0">Digital Photography</h6>
                                            <div className="font-size-sm">1 × $18.00</div>
                                        </div>

                                        <a href="#" className="d-inline-flex text-secondary">
                                           
                                            {/* <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.0469 0H5.95294C5.37707 0 4.90857 0.4685 4.90857 1.04437V3.02872H6.16182V1.25325H9.83806V3.02872H11.0913V1.04437C11.0913 0.4685 10.6228 0 10.0469 0Z" fill="currentColor"/>
                                                <path d="M11.0492 5.51652L9.7968 5.47058L9.52527 12.8857L10.7777 12.9315L11.0492 5.51652Z" fill="currentColor"/>
                                                <path d="M8.62666 5.49353H7.37341V12.9087H8.62666V5.49353Z" fill="currentColor"/>
                                                <path d="M6.47453 12.8855L6.203 5.47034L4.95056 5.51631L5.22212 12.9314L6.47453 12.8855Z" fill="currentColor"/>
                                                <path d="M0.543091 2.4021V3.65535H1.849L2.885 15.4283C2.9134 15.7519 3.18434 16 3.50912 16H12.4697C12.7946 16 13.0657 15.7517 13.0939 15.4281L14.1299 3.65535H15.4569V2.4021H0.543091ZM11.8958 14.7468H4.08293L3.10706 3.65535H12.8719L11.8958 14.7468Z" fill="currentColor"/>
                                            </svg> */}

                                        </a>
                                    </div>
                                </li>
                            </ul>

                            <div className="d-flex mb-5">
                                <h5 className="mb-0 me-auto">Order Subtotal</h5>
                                <h5 className="mb-0">$121.87</h5>
                            </div>

                            <div className="d-md-flex justify-content-between">
                                <a href="#" className="d-block d-md-inline-block mb-4 mb-md-0 btn btn-primary btn-sm-wide">VIEW CART</a>
                                <a href="#" className="d-block d-md-inline-block btn btn-teal btn-sm-wide text-white">CHECKOUT</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        {/* 
            <!-- NAVBAR
            ================================================== --> */}
            <header className="navbar navbar-expand-xl navbar-dark py-4" >
                <div className="container">

                    {/* <!-- Brand --> */}
                    <a className="navbar-brand me-0" href="index.html">
                        <img src="assets/img/brand.svg" className="navbar-brand-img" alt="..."/>
                    </a>

                    {/* <!-- Collapse --> */}
                    <div className="collapse navbar-collapse z-index-lg" id="navbarCollapse">

                        {/* <!-- Toggler --> */}
                        {/* <button className="navbar-toggler outline-0 text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                           
                            <svg width="16" height="17" viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.142135 2.00015L1.55635 0.585938L15.6985 14.7281L14.2843 16.1423L0.142135 2.00015Z" fill="currentColor"></path>
                                <path d="M14.1421 1.0001L15.5563 2.41431L1.41421 16.5564L0 15.1422L14.1421 1.0001Z" fill="currentColor"></path>
                            </svg>

                        </button> */}

                        {/* <!-- Navigation --> */}
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item ">
                                <NavLink className="nav-link px-xl-4" to="/" id="navbarLandings">
                                    Home
                                </NavLink>
                            
                            </li>
                            <li className="nav-item ">
                                <NavLink className="nav-link px-xl-4" to="/courses" id="navbarLandings">
                                    Courses
                                </NavLink>
                            
                            </li>
                            <li className="nav-item ">
                                <NavLink className="nav-link px-xl-4" to="/blog" id="navbarLandings">
                                    Blog
                                </NavLink>
                            
                            </li>

                            <li className="nav-item ">
                                <NavLink className="nav-link px-xl-4" to="/about"  id="navbarLandings">
                                    About Us
                                </NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink className="nav-link px-xl-4" to="/contact"  id="navbarLandings">
                                    Contact Us
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* <!-- Search, Account & Cart --> */}
                    <ul className="navbar-nav flex-row ms-auto ms-xl-0 me-n2 me-md-n4 align-items-center">
                        <li className="nav-item border-0 px-0 d-none d-370-block d-xl-block">
                            <a className="nav-link d-flex px-3 px-md-4 search-mobile text-white-all icon-xs" data-bs-toggle="collapse" href="#collapseSearchMobile" role="button" aria-expanded="false" aria-controls="collapseSearchMobile">
                                {/* <!-- Icon --> */}
                                {/* <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.80758 0C3.95121 0 0 3.95121 0 8.80758C0 13.6642 3.95121 17.6152 8.80758 17.6152C13.6642 17.6152 17.6152 13.6642 17.6152 8.80758C17.6152 3.95121 13.6642 0 8.80758 0ZM8.80758 15.9892C4.8477 15.9892 1.62602 12.7675 1.62602 8.80762C1.62602 4.84773 4.8477 1.62602 8.80758 1.62602C12.7675 1.62602 15.9891 4.8477 15.9891 8.80758C15.9891 12.7675 12.7675 15.9892 8.80758 15.9892Z" fill="currentColor"/>
                                    <path d="M19.762 18.6121L15.1007 13.9509C14.7831 13.6332 14.2687 13.6332 13.9511 13.9509C13.6335 14.2682 13.6335 14.7831 13.9511 15.1005L18.6124 19.7617C18.7712 19.9205 18.9791 19.9999 19.1872 19.9999C19.395 19.9999 19.6032 19.9205 19.762 19.7617C20.0796 19.4444 20.0796 18.9295 19.762 18.6121Z" fill="currentColor"/>
                                </svg> */}


                                {/* <!-- Icon --> */}
                                {/* <svg width="16" height="17" viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.142135 2.00015L1.55635 0.585938L15.6985 14.7281L14.2843 16.1423L0.142135 2.00015Z" fill="currentColor"></path>
                                    <path d="M14.1421 1.0001L15.5563 2.41431L1.41421 16.5564L0 15.1422L14.1421 1.0001Z" fill="currentColor"></path>
                                </svg> */}

                            </a>

                            <div className="collapse position-absolute right-0 left-0 mx-4" id="collapseSearchMobile">
                                <div className="card card-body p-4 mt-6 mt-xl-4 shadow-dark">
                                    {/* <!-- Search --> */}
                                    <form className="w-100">
                                        <div className="input-group border rounded">
                                            <div className="input-group-prepend">
                                                <button className="btn btn-sm text-secondary icon-xs d-flex align-items-center" type="submit">
                                                    {/* <!-- Icon --> */}
                                                    {/* <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8.80758 0C3.95121 0 0 3.95121 0 8.80758C0 13.6642 3.95121 17.6152 8.80758 17.6152C13.6642 17.6152 17.6152 13.6642 17.6152 8.80758C17.6152 3.95121 13.6642 0 8.80758 0ZM8.80758 15.9892C4.8477 15.9892 1.62602 12.7675 1.62602 8.80762C1.62602 4.84773 4.8477 1.62602 8.80758 1.62602C12.7675 1.62602 15.9891 4.8477 15.9891 8.80758C15.9891 12.7675 12.7675 15.9892 8.80758 15.9892Z" fill="currentColor"/>
                                                        <path d="M19.762 18.6121L15.1007 13.9509C14.7831 13.6332 14.2687 13.6332 13.9511 13.9509C13.6335 14.2682 13.6335 14.7831 13.9511 15.1005L18.6124 19.7617C18.7712 19.9205 18.9791 19.9999 19.1872 19.9999C19.395 19.9999 19.6032 19.9205 19.762 19.7617C20.0796 19.4444 20.0796 18.9295 19.762 18.6121Z" fill="currentColor"/>
                                                    </svg> */}

                                                </button>
                                            </div>
                                            <input className="form-control form-control-sm border-0 ps-0" type="search" placeholder="What do you want to learn ?" aria-label="Search"/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </li>

                        <li className="nav-item border-0 px-0">
                            {/* <!-- Button trigger account modal --> */}
                            {/* <a href="#" className="nav-link d-flex px-3 px-md-4 text-white-all icon-xs" data-bs-toggle="modal" data-bs-target="#accountModal">
                               
                               

                            </a> */}
                        </li>

                      
                    </ul>

                
                </div>
            </header>

        </>
    );
};

export default Header;