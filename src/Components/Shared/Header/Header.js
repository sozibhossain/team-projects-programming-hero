import React from 'react';
<<<<<<< HEAD
import { NavLink,Link } from 'react-router-dom';
=======
import { Link } from 'react-router-dom';
>>>>>>> 4b01703dcce162eb9dd47195afce631ae5dc9105

const Header = () => {
    return (
        <>
<<<<<<< HEAD
            <div className="modal fade" id="modalExample" tabIndex="-1" role="dialog" aria-labelledby="modalExampleTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-body">
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                    </button>
=======
>>>>>>> 4b01703dcce162eb9dd47195afce631ae5dc9105

        {/* <!-- MODALS
    ================================================== -->
    <!-- Modal Sidebar account --> */}
    <div class="modal fade" id="modalExample" tabindex="-1" role="dialog" aria-labelledby="modalExampleTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body">

<<<<<<< HEAD
                    <form>
                    <div className="row">
                        <div className="col-12 col-md-6">
                        <div className="form-label-group">
                            <input type="text" className="form-control form-control-flush" id="registrationFirstNameModal" placeholder="First name"/>
                            <label htmlFor="registrationFirstNameModal">First name</label>
                        </div>
=======
            {/* <!-- Close --> */}
            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
>>>>>>> 4b01703dcce162eb9dd47195afce631ae5dc9105

            {/* <!-- Heading --> */}
            <h2 class="fw-bold text-center mb-1" id="modalExampleTitle">
              Schedule a demo with us
            </h2>

<<<<<<< HEAD
                        <div className="form-label-group">
                            <input type="text" className="form-control form-control-flush" id="registrationLastNameModal" placeholder="Last name"/>
                            <label htmlFor="registrationLastNameModal">Last name</label>
                        </div>
=======
            {/* <!-- Text --> */}
            <p class="font-size-lg text-center text-muted mb-6 mb-md-8">
              We can help you solve company communication.
            </p>
>>>>>>> 4b01703dcce162eb9dd47195afce631ae5dc9105

            {/* <!-- Form --> */}
            <form>
              <div class="row">
                <div class="col-12 col-md-6">

<<<<<<< HEAD
                        <div className="form-label-group">
                            <input type="email" className="form-control form-control-flush" id="registrationEmailModal" placeholder="Email"/>
                            <label htmlFor="registrationEmailModal">Email</label>
                        </div>

                        </div>
                        <div className="col-12 col-md-6">

                        <div className="form-label-group">
                            <input type="password" className="form-control form-control-flush" id="registrationPasswordModal" placeholder="Password"/>
                            <label htmlFor="registrationPasswordModal">Password</label>
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
=======
                  {/* <!-- First name --> */}
                  <div class="form-label-group">
                    <input type="text" class="form-control form-control-flush" id="registrationFirstNameModal" placeholder="First name"/>
                    <label for="registrationFirstNameModal">First name</label>
                  </div>
>>>>>>> 4b01703dcce162eb9dd47195afce631ae5dc9105

                </div>
                <div class="col-12 col-md-6">

                  {/* <!-- Last name --> */}
                  <div class="form-label-group">
                    <input type="text" class="form-control form-control-flush" id="registrationLastNameModal" placeholder="Last name"/>
                    <label for="registrationLastNameModal">Last name</label>
                  </div>

                </div>
              </div>
              <div class="row">
                <div class="col-12 col-md-6">

                  {/* <!-- Email --> */}
                  <div class="form-label-group">
                    <input type="email" class="form-control form-control-flush" id="registrationEmailModal" placeholder="Email"/>
                    <label for="registrationEmailModal">Email</label>
                  </div>

<<<<<<< HEAD
                                </button> */}
                            </div>

                            <div className="modal-body">
                                <form className="mb-5">

                                    <div className="form-group mb-5">
                                        <label htmlFor="modalSigninEmail">
                                            Username or Email
                                        </label>
                                        <input type="email" className="form-control" id="modalSigninEmail" placeholder="creativelayers"/>
                                    </div>

                                    <div className="form-group mb-5">
                                        <label htmlFor="modalSigninPassword">
                                            Password
                                        </label>
                                        <input type="password" className="form-control" id="modalSigninPassword" placeholder="**********"/>
                                    </div>

                                    <div className="d-flex align-items-center mb-5 font-size-sm">
                                        <div className="form-check">
                                            <input className="form-check-input text-gray-800" type="checkbox" id="autoSizingCheck"/>
                                            <label className="form-check-label text-gray-800" htmlFor="autoSizingCheck">
                                                Remember me
                                            </label>
                                        </div>

                                        <div className="ms-auto">
                                            <Link className="text-gray-800" data-bs-toggle="collapse" to="#collapseForgotPassword" role="button" aria-expanded="false" aria-controls="collapseForgotPassword">Forgot Password</Link>
                                        </div>
                                    </div>
                                    <button className="btn btn-block btn-primary" type="submit">
                                        LOGIN
                                    </button>
                                </form>
                                <p className="mb-0 font-size-sm text-center">
                                    Don't have an account? <Link className="text-underline" data-bs-toggle="collapse" to="#collapseSignup" role="button" aria-expanded="false" aria-controls="collapseSignup">Sign up</Link>
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
                                        <label htmlFor="modalSignupUsername">
                                            Username
                                        </label>
                                        <input type="text" className="form-control" id="modalSignupUsername" placeholder="John"/>
                                    </div>

                                    {/* <!-- Email --> */}
                                    <div className="form-group mb-5">
                                        <label htmlFor="modalSignupEmail">
                                            Username or Email
                                        </label>
                                        <input type="email" className="form-control" id="modalSignupEmail" placeholder="johndoe@creativelayers.com"/>
                                    </div>

                                    {/* <!-- Password --> */}
                                    <div className="form-group mb-5">
                                        <label htmlFor="modalSignupPassword">
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
                                    Already have an account? <Link className="text-underline" data-bs-toggle="collapse" to="#collapseSignin" role="button" aria-expanded="true" aria-controls="collapseSignin">Log In</Link>
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
                                        <label htmlFor="modalForgotpasswordEmail">
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
                                    Remember your password? <Link className="text-underline" data-bs-toggle="collapse" to="#collapseSignin" role="button" aria-expanded="false" aria-controls="collapseSignin">Log In</Link>
                                </p>
                            </div>
                        </div>
                    </div>
=======
>>>>>>> 4b01703dcce162eb9dd47195afce631ae5dc9105
                </div>
                <div class="col-12 col-md-6">

                  {/* <!-- Password --> */}
                  <div class="form-label-group">
                    <input type="password" class="form-control form-control-flush" id="registrationPasswordModal" placeholder="Password"/>
                    <label for="registrationPasswordModal">Password</label>
                  </div>

<<<<<<< HEAD
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

                                        <Link to="#" className="d-inline-flex text-secondary">
                                            
                                            {/* <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.0469 0H5.95294C5.37707 0 4.90857 0.4685 4.90857 1.04437V3.02872H6.16182V1.25325H9.83806V3.02872H11.0913V1.04437C11.0913 0.4685 10.6228 0 10.0469 0Z" fill="currentColor"/>
                                                <path d="M11.0492 5.51652L9.7968 5.47058L9.52527 12.8857L10.7777 12.9315L11.0492 5.51652Z" fill="currentColor"/>
                                                <path d="M8.62666 5.49353H7.37341V12.9087H8.62666V5.49353Z" fill="currentColor"/>
                                                <path d="M6.47453 12.8855L6.203 5.47034L4.95056 5.51631L5.22212 12.9314L6.47453 12.8855Z" fill="currentColor"/>
                                                <path d="M0.543091 2.4021V3.65535H1.849L2.885 15.4283C2.9134 15.7519 3.18434 16 3.50912 16H12.4697C12.7946 16 13.0657 15.7517 13.0939 15.4281L14.1299 3.65535H15.4569V2.4021H0.543091ZM11.8958 14.7468H4.08293L3.10706 3.65535H12.8719L11.8958 14.7468Z" fill="currentColor"/>
                                            </svg> */}

                                        </Link>
                                    </div>
                                </li>

                                <li className="list-group-item border-bottom py-0">
                                    <div className="d-flex py-5">
                                        <div className="bg-gray-200 w-60p h-60p rounded-circle overflow-hidden"></div>

                                        <div className="flex-grow-1 mt-1 ms-4">
                                            <h6 className="fw-normal mb-0">Color Harriet Tubman</h6>
                                            <div className="font-size-sm">1 × $18.00</div>
                                        </div>

                                        <Link to="#" className="d-inline-flex text-secondary">
                                            
                                            {/* <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.0469 0H5.95294C5.37707 0 4.90857 0.4685 4.90857 1.04437V3.02872H6.16182V1.25325H9.83806V3.02872H11.0913V1.04437C11.0913 0.4685 10.6228 0 10.0469 0Z" fill="currentColor"/>
                                                <path d="M11.0492 5.51652L9.7968 5.47058L9.52527 12.8857L10.7777 12.9315L11.0492 5.51652Z" fill="currentColor"/>
                                                <path d="M8.62666 5.49353H7.37341V12.9087H8.62666V5.49353Z" fill="currentColor"/>
                                                <path d="M6.47453 12.8855L6.203 5.47034L4.95056 5.51631L5.22212 12.9314L6.47453 12.8855Z" fill="currentColor"/>
                                                <path d="M0.543091 2.4021V3.65535H1.849L2.885 15.4283C2.9134 15.7519 3.18434 16 3.50912 16H12.4697C12.7946 16 13.0657 15.7517 13.0939 15.4281L14.1299 3.65535H15.4569V2.4021H0.543091ZM11.8958 14.7468H4.08293L3.10706 3.65535H12.8719L11.8958 14.7468Z" fill="currentColor"/>
                                            </svg> */}

                                        </Link>
                                    </div>
                                </li>

                                <li className="list-group-item border-bottom py-0">
                                    <div className="d-flex py-5">
                                        <div className="bg-gray-200 w-60p h-60p rounded-circle overflow-hidden"></div>

                                        <div className="flex-grow-1 mt-1 ms-4">
                                            <h6 className="fw-normal mb-0">Digital Photography</h6>
                                            <div className="font-size-sm">1 × $18.00</div>
                                        </div>

                                        <Link to="#" className="d-inline-flex text-secondary">
                                           
                                            {/* <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.0469 0H5.95294C5.37707 0 4.90857 0.4685 4.90857 1.04437V3.02872H6.16182V1.25325H9.83806V3.02872H11.0913V1.04437C11.0913 0.4685 10.6228 0 10.0469 0Z" fill="currentColor"/>
                                                <path d="M11.0492 5.51652L9.7968 5.47058L9.52527 12.8857L10.7777 12.9315L11.0492 5.51652Z" fill="currentColor"/>
                                                <path d="M8.62666 5.49353H7.37341V12.9087H8.62666V5.49353Z" fill="currentColor"/>
                                                <path d="M6.47453 12.8855L6.203 5.47034L4.95056 5.51631L5.22212 12.9314L6.47453 12.8855Z" fill="currentColor"/>
                                                <path d="M0.543091 2.4021V3.65535H1.849L2.885 15.4283C2.9134 15.7519 3.18434 16 3.50912 16H12.4697C12.7946 16 13.0657 15.7517 13.0939 15.4281L14.1299 3.65535H15.4569V2.4021H0.543091ZM11.8958 14.7468H4.08293L3.10706 3.65535H12.8719L11.8958 14.7468Z" fill="currentColor"/>
                                            </svg> */}

                                        </Link>
                                    </div>
                                </li>
                            </ul>

                            <div className="d-flex mb-5">
                                <h5 className="mb-0 me-auto">Order Subtotal</h5>
                                <h5 className="mb-0">$121.87</h5>
                            </div>

                            <div className="d-md-flex justify-content-between">
                                <Link to="#" className="d-block d-md-inline-block mb-4 mb-md-0 btn btn-primary btn-sm-wide">VIEW CART</Link>
                                <Link to="#" className="d-block d-md-inline-block btn btn-teal btn-sm-wide text-white">CHECKOUT</Link>
                            </div>
                        </div>
                    </div>
=======
>>>>>>> 4b01703dcce162eb9dd47195afce631ae5dc9105
                </div>
              </div>
              <div class="row">
                <div class="col-12">

                  {/* <!-- Submit --> */}
                  <button class="btn btn-block btn-primary mt-3 lift">
                    Request a demo
                  </button>

<<<<<<< HEAD
                    {/* <!-- Brand --> */}
                    <NavLink className="navbar-brand me-0" to="/">
                        <img src="assets/img/brand.svg" className="navbar-brand-img" alt="..."/>
                    </NavLink>
=======
                </div>
              </div>
            </form>
>>>>>>> 4b01703dcce162eb9dd47195afce631ae5dc9105

          </div>
        </div>
      </div>
    </div>

    <div class="modal modal-sidebar left fade-left fade" id="accountModal">
        <div class="modal-dialog">
            <div class="modal-content">
                {/* <!-- Signin --> */}
                <div class="collapse show" id="collapseSignin" data-bs-parent="#accountModal">
                    <div class="modal-header">
                        <h5 class="modal-title">Log In to Your Skola Account!</h5>
                        <button type="button" class="close text-primary" data-bs-dismiss="modal" aria-label="Close">
                            {/* <!-- Icon --> */}
                            <svg width="16" height="17" viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.142135 2.00015L1.55635 0.585938L15.6985 14.7281L14.2843 16.1423L0.142135 2.00015Z" fill="currentColor"></path>
                                <path d="M14.1421 1.0001L15.5563 2.41431L1.41421 16.5564L0 15.1422L14.1421 1.0001Z" fill="currentColor"></path>
                            </svg>

                        </button>
                    </div>

<<<<<<< HEAD
                    {/* <!-- Search, Account & Cart --> */}
                    <ul className="navbar-nav flex-row ms-auto ms-xl-0 me-n2 me-md-n4 align-items-center">
                        <li className="nav-item border-0 px-0 d-none d-370-block d-xl-block">
                            <Link className="nav-link d-flex px-3 px-md-4 search-mobile text-white-all icon-xs" data-bs-toggle="collapse" to="#collapseSearchMobile" role="button" aria-expanded="false" aria-controls="collapseSearchMobile">
                                {/* <!-- Icon --> */}
                                {/* <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.80758 0C3.95121 0 0 3.95121 0 8.80758C0 13.6642 3.95121 17.6152 8.80758 17.6152C13.6642 17.6152 17.6152 13.6642 17.6152 8.80758C17.6152 3.95121 13.6642 0 8.80758 0ZM8.80758 15.9892C4.8477 15.9892 1.62602 12.7675 1.62602 8.80762C1.62602 4.84773 4.8477 1.62602 8.80758 1.62602C12.7675 1.62602 15.9891 4.8477 15.9891 8.80758C15.9891 12.7675 12.7675 15.9892 8.80758 15.9892Z" fill="currentColor"/>
                                    <path d="M19.762 18.6121L15.1007 13.9509C14.7831 13.6332 14.2687 13.6332 13.9511 13.9509C13.6335 14.2682 13.6335 14.7831 13.9511 15.1005L18.6124 19.7617C18.7712 19.9205 18.9791 19.9999 19.1872 19.9999C19.395 19.9999 19.6032 19.9205 19.762 19.7617C20.0796 19.4444 20.0796 18.9295 19.762 18.6121Z" fill="currentColor"/>
                                </svg> */}
=======
                    <div class="modal-body">
                        {/* <!-- Form Signin --> */}
                        <form class="mb-5">
>>>>>>> 4b01703dcce162eb9dd47195afce631ae5dc9105

                            {/* <!-- Email --> */}
                            <div class="form-group mb-5">
                                <label for="modalSigninEmail">
                                    Username or Email
                                </label>
                                <input type="email" class="form-control" id="modalSigninEmail" placeholder="creativelayers"/>
                            </div>

                            {/* <!-- Password --> */}
                            <div class="form-group mb-5">
                                <label for="modalSigninPassword">
                                    Password
                                </label>
                                <input type="password" class="form-control" id="modalSigninPassword" placeholder="**********"/>
                            </div>

<<<<<<< HEAD
                            </Link>

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
=======
                            <div class="d-flex align-items-center mb-5 font-size-sm">
                                <div class="form-check">
                                    <input class="form-check-input text-gray-800" type="checkbox" id="autoSizingCheck"/>
                                    <label class="form-check-label text-gray-800" for="autoSizingCheck">
                                        Remember me
                                    </label>
>>>>>>> 4b01703dcce162eb9dd47195afce631ae5dc9105
                                </div>

                                <div class="ms-auto">
                                    <a class="text-gray-800" data-bs-toggle="collapse" href="#collapseForgotPassword" role="button" aria-expanded="false" aria-controls="collapseForgotPassword">Forgot Password</a>
                                </div>
                            </div>

                            {/* <!-- Submit --> */}
                            <button class="btn btn-block btn-primary" type="submit">
                                LOGIN
                            </button>
                        </form>

                        {/* <!-- Text --> */}
                        <p class="mb-0 font-size-sm text-center">
                            Don't have an account? <a class="text-underline" data-bs-toggle="collapse" href="#collapseSignup" role="button" aria-expanded="false" aria-controls="collapseSignup">Sign up</a>
                        </p>
                    </div>
                </div>

                {/* <!-- Signup --> */}
                <div class="collapse" id="collapseSignup" data-bs-parent="#accountModal">
                    <div class="modal-header">
                        <h5 class="modal-title">Sign Up and Start Learning!</h5>
                        <button type="button" class="close text-primary" data-bs-dismiss="modal" aria-label="Close">
                            {/* <!-- Icon --> */}
                            <svg width="16" height="17" viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.142135 2.00015L1.55635 0.585938L15.6985 14.7281L14.2843 16.1423L0.142135 2.00015Z" fill="currentColor"></path>
                                <path d="M14.1421 1.0001L15.5563 2.41431L1.41421 16.5564L0 15.1422L14.1421 1.0001Z" fill="currentColor"></path>
                            </svg>

                        </button>
                    </div>

                    <div class="modal-body">
                        {/* <!-- Form Signup --> */}
                        <form class="mb-5">

                            {/* <!-- Username --> */}
                            <div class="form-group mb-5">
                                <label for="modalSignupUsername">
                                    Username
                                </label>
                                <input type="text" class="form-control" id="modalSignupUsername" placeholder="John"/>
                            </div>

                            {/* <!-- Email --> */}
                            <div class="form-group mb-5">
                                <label for="modalSignupEmail">
                                    Username or Email
                                </label>
                                <input type="email" class="form-control" id="modalSignupEmail" placeholder="johndoe@creativelayers.com"/>
                            </div>

                            {/* <!-- Password --> */}
                            <div class="form-group mb-5">
                                <label for="modalSignupPassword">
                                    Password
                                </label>
                                <input type="password" class="form-control" id="modalSignupPassword" placeholder="**********"/>
                            </div>

                            {/* <!-- Submit --> */}
                            <button class="btn btn-block btn-primary" type="submit">
                                SIGN UP
                            </button>

                        </form>

                        {/* <!-- Text --> */}
                        <p class="mb-0 font-size-sm text-center">
                            Already have an account? <a class="text-underline" data-bs-toggle="collapse" href="#collapseSignin" role="button" aria-expanded="true" aria-controls="collapseSignin">Log In</a>
                        </p>
                    </div>
                </div>

                {/* <!-- Forgot Password --> */}
                <div class="collapse" id="collapseForgotPassword" data-bs-parent="#accountModal">
                    <div class="modal-header">
                        <h5 class="modal-title">Recover password!</h5>
                        <button type="button" class="close text-primary" data-bs-dismiss="modal" aria-label="Close">
                            {/* <!-- Icon --> */}
                            <svg width="16" height="17" viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.142135 2.00015L1.55635 0.585938L15.6985 14.7281L14.2843 16.1423L0.142135 2.00015Z" fill="currentColor"></path>
                                <path d="M14.1421 1.0001L15.5563 2.41431L1.41421 16.5564L0 15.1422L14.1421 1.0001Z" fill="currentColor"></path>
                            </svg>

                        </button>
                    </div>

                    <div class="modal-body">
                        {/* <!-- Form Recover Password --> */}
                        <form class="mb-5">
                            {/* <!-- Email --> */}
                            <div class="form-group">
                                <label for="modalForgotpasswordEmail">
                                    Email
                                </label>
                                <input type="email" class="form-control" id="modalForgotpasswordEmail" placeholder="johndoe@creativelayers.com"/>
                            </div>

                            {/* <!-- Submit --> */}
                            <button class="btn btn-block btn-primary" type="submit">
                                RECOVER PASSWORD
                            </button>
                        </form>

                        {/* <!-- Text --> */}
                        <p class="mb-0 font-size-sm text-center">
                            Remember your password? <a class="text-underline" data-bs-toggle="collapse" href="#collapseSignin" role="button" aria-expanded="false" aria-controls="collapseSignin">Log In</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- Modal Sidebar cart --> */}
    <div class="modal modal-sidebar left fade-left fade" id="cartModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header mb-4">
                    <h5 class="modal-title">Your Shopping Cart</h5>
                    <button type="button" class="close text-primary" data-bs-dismiss="modal" aria-label="Close">
                        {/* <!-- Icon --> */}
                        <svg width="16" height="17" viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.142135 2.00015L1.55635 0.585938L15.6985 14.7281L14.2843 16.1423L0.142135 2.00015Z" fill="currentColor"></path>
                            <path d="M14.1421 1.0001L15.5563 2.41431L1.41421 16.5564L0 15.1422L14.1421 1.0001Z" fill="currentColor"></path>
                        </svg>

                    </button>
                </div>

                <div class="modal-body">
                    <ul class="list-group list-group-flush mb-5">
                        <li class="list-group-item border-bottom py-0">
                            <div class="d-flex py-5">
                                <div class="bg-gray-200 w-60p h-60p rounded-circle overflow-hidden"></div>

                                <div class="flex-grow-1 mt-1 ms-4">
                                    <h6 class="fw-normal mb-0">Basic of Nature</h6>
                                    <div class="font-size-sm">1 × $18.00</div>
                                </div>

                                <a href="#" class="d-inline-flex text-secondary">
                                    {/* <!-- Icon --> */}
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.0469 0H5.95294C5.37707 0 4.90857 0.4685 4.90857 1.04437V3.02872H6.16182V1.25325H9.83806V3.02872H11.0913V1.04437C11.0913 0.4685 10.6228 0 10.0469 0Z" fill="currentColor"/>
                                        <path d="M11.0492 5.51652L9.7968 5.47058L9.52527 12.8857L10.7777 12.9315L11.0492 5.51652Z" fill="currentColor"/>
                                        <path d="M8.62666 5.49353H7.37341V12.9087H8.62666V5.49353Z" fill="currentColor"/>
                                        <path d="M6.47453 12.8855L6.203 5.47034L4.95056 5.51631L5.22212 12.9314L6.47453 12.8855Z" fill="currentColor"/>
                                        <path d="M0.543091 2.4021V3.65535H1.849L2.885 15.4283C2.9134 15.7519 3.18434 16 3.50912 16H12.4697C12.7946 16 13.0657 15.7517 13.0939 15.4281L14.1299 3.65535H15.4569V2.4021H0.543091ZM11.8958 14.7468H4.08293L3.10706 3.65535H12.8719L11.8958 14.7468Z" fill="currentColor"/>
                                    </svg>

                                </a>
                            </div>
                        </li>

<<<<<<< HEAD
                        <li className="nav-item border-0 px-0">
                            {/* <!-- Button trigger account modal --> */}
                            {/* <Link to="#" className="nav-link d-flex px-3 px-md-4 text-white-all icon-xs" data-bs-toggle="modal" data-bs-target="#accountModal">
                               
                               
=======
                        <li class="list-group-item border-bottom py-0">
                            <div class="d-flex py-5">
                                <div class="bg-gray-200 w-60p h-60p rounded-circle overflow-hidden"></div>
>>>>>>> 4b01703dcce162eb9dd47195afce631ae5dc9105

                                <div class="flex-grow-1 mt-1 ms-4">
                                    <h6 class="fw-normal mb-0">Color Harriet Tubman</h6>
                                    <div class="font-size-sm">1 × $18.00</div>
                                </div>

                                <a href="#" class="d-inline-flex text-secondary">
                                    {/* <!-- Icon --> */}
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.0469 0H5.95294C5.37707 0 4.90857 0.4685 4.90857 1.04437V3.02872H6.16182V1.25325H9.83806V3.02872H11.0913V1.04437C11.0913 0.4685 10.6228 0 10.0469 0Z" fill="currentColor"/>
                                        <path d="M11.0492 5.51652L9.7968 5.47058L9.52527 12.8857L10.7777 12.9315L11.0492 5.51652Z" fill="currentColor"/>
                                        <path d="M8.62666 5.49353H7.37341V12.9087H8.62666V5.49353Z" fill="currentColor"/>
                                        <path d="M6.47453 12.8855L6.203 5.47034L4.95056 5.51631L5.22212 12.9314L6.47453 12.8855Z" fill="currentColor"/>
                                        <path d="M0.543091 2.4021V3.65535H1.849L2.885 15.4283C2.9134 15.7519 3.18434 16 3.50912 16H12.4697C12.7946 16 13.0657 15.7517 13.0939 15.4281L14.1299 3.65535H15.4569V2.4021H0.543091ZM11.8958 14.7468H4.08293L3.10706 3.65535H12.8719L11.8958 14.7468Z" fill="currentColor"/>
                                    </svg>

                                </a>
                            </div>
                        </li>

                        <li class="list-group-item border-bottom py-0">
                            <div class="d-flex py-5">
                                <div class="bg-gray-200 w-60p h-60p rounded-circle overflow-hidden"></div>

                                <div class="flex-grow-1 mt-1 ms-4">
                                    <h6 class="fw-normal mb-0">Digital Photography</h6>
                                    <div class="font-size-sm">1 × $18.00</div>
                                </div>

                                <a href="#" class="d-inline-flex text-secondary">
                                    {/* <!-- Icon --> */}
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.0469 0H5.95294C5.37707 0 4.90857 0.4685 4.90857 1.04437V3.02872H6.16182V1.25325H9.83806V3.02872H11.0913V1.04437C11.0913 0.4685 10.6228 0 10.0469 0Z" fill="currentColor"/>
                                        <path d="M11.0492 5.51652L9.7968 5.47058L9.52527 12.8857L10.7777 12.9315L11.0492 5.51652Z" fill="currentColor"/>
                                        <path d="M8.62666 5.49353H7.37341V12.9087H8.62666V5.49353Z" fill="currentColor"/>
                                        <path d="M6.47453 12.8855L6.203 5.47034L4.95056 5.51631L5.22212 12.9314L6.47453 12.8855Z" fill="currentColor"/>
                                        <path d="M0.543091 2.4021V3.65535H1.849L2.885 15.4283C2.9134 15.7519 3.18434 16 3.50912 16H12.4697C12.7946 16 13.0657 15.7517 13.0939 15.4281L14.1299 3.65535H15.4569V2.4021H0.543091ZM11.8958 14.7468H4.08293L3.10706 3.65535H12.8719L11.8958 14.7468Z" fill="currentColor"/>
                                    </svg>

                                </a>
                            </div>
                        </li>
                    </ul>

                    <div class="d-flex mb-5">
                        <h5 class="mb-0 me-auto">Order Subtotal</h5>
                        <h5 class="mb-0">$121.87</h5>
                    </div>

                    <div class="d-md-flex justify-content-between">
                        <a href="#" class="d-block d-md-inline-block mb-4 mb-md-0 btn btn-primary btn-sm-wide">VIEW CART</a>
                        <Link to="/checkout" class="d-block d-md-inline-block btn btn-teal btn-sm-wide text-white">CHECKOUT</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>

       {/*  <!-- NAVBAR
    ================================================== --> */}
    <header class="navbar navbar-expand-xl navbar-dark py-4" >
        <div class="container">

            {/* <!-- Brand --> */}
            <a class="navbar-brand me-0" href="index.html">
                <img src="assets/img/brand.svg" class="navbar-brand-img" alt="..."/>
            </a>

            {/* <!-- Collapse --> */}
            <div class="collapse navbar-collapse z-index-lg" id="navbarCollapse">

                {/* <!-- Toggler --> */}
                <button class="navbar-toggler outline-0 text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    {/* <!-- Icon --> */}
                    <svg width="16" height="17" viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.142135 2.00015L1.55635 0.585938L15.6985 14.7281L14.2843 16.1423L0.142135 2.00015Z" fill="currentColor"></path>
                        <path d="M14.1421 1.0001L15.5563 2.41431L1.41421 16.5564L0 15.1422L14.1421 1.0001Z" fill="currentColor"></path>
                    </svg>

                </button>

                {/* <!-- Navigation --> */}
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item ">
                        <Link class="nav-link px-xl-4" to="/" id="navbarLandings">
                            Home
                        </Link>
                       
                    </li>
                    <li class="nav-item ">
                        <Link class="nav-link px-xl-4" to="/courses" id="navbarLandings">
                            Courses
                        </Link>
                       
                    </li>
                    <li class="nav-item ">
                        <Link class="nav-link px-xl-4" to="/blog" id="navbarLandings">
                            Blog
                        </Link>
                       
                    </li>

                    <li class="nav-item ">
                        <Link class="nav-link px-xl-4" to="/about-us" id="navbarLandings">
                            About Us
                        </Link>
                    </li>
                    <li class="nav-item ">
                        <Link class="nav-link px-xl-4" to="/contact" id="navbarLandings">
                            Contact Us
                        </Link>
                    </li>
                    <li class="nav-item ">
                        <Link class="nav-link px-xl-4" to="/login" id="navbarLandings">
                            Login
                        </Link>
                    </li>
                </ul>
            </div>

            {/* <!-- Search, Account & Cart --> */}
            <ul class="navbar-nav flex-row ms-auto ms-xl-0 me-n2 me-md-n4 align-items-center">
                <li class="nav-item border-0 px-0 d-none d-370-block d-xl-block">
                    <a class="nav-link d-flex px-3 px-md-4 search-mobile text-white-all icon-xs" data-bs-toggle="collapse" href="#collapseSearchMobile" role="button" aria-expanded="false" aria-controls="collapseSearchMobile">
                        {/* <!-- Icon --> */}
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.80758 0C3.95121 0 0 3.95121 0 8.80758C0 13.6642 3.95121 17.6152 8.80758 17.6152C13.6642 17.6152 17.6152 13.6642 17.6152 8.80758C17.6152 3.95121 13.6642 0 8.80758 0ZM8.80758 15.9892C4.8477 15.9892 1.62602 12.7675 1.62602 8.80762C1.62602 4.84773 4.8477 1.62602 8.80758 1.62602C12.7675 1.62602 15.9891 4.8477 15.9891 8.80758C15.9891 12.7675 12.7675 15.9892 8.80758 15.9892Z" fill="currentColor"/>
                            <path d="M19.762 18.6121L15.1007 13.9509C14.7831 13.6332 14.2687 13.6332 13.9511 13.9509C13.6335 14.2682 13.6335 14.7831 13.9511 15.1005L18.6124 19.7617C18.7712 19.9205 18.9791 19.9999 19.1872 19.9999C19.395 19.9999 19.6032 19.9205 19.762 19.7617C20.0796 19.4444 20.0796 18.9295 19.762 18.6121Z" fill="currentColor"/>
                        </svg>


                        {/* <!-- Icon --> */}
                        <svg width="16" height="17" viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.142135 2.00015L1.55635 0.585938L15.6985 14.7281L14.2843 16.1423L0.142135 2.00015Z" fill="currentColor"></path>
                            <path d="M14.1421 1.0001L15.5563 2.41431L1.41421 16.5564L0 15.1422L14.1421 1.0001Z" fill="currentColor"></path>
                        </svg>

                    </a>

                    <div class="collapse position-absolute right-0 left-0 mx-4" id="collapseSearchMobile">
                        <div class="card card-body p-4 mt-6 mt-xl-4 shadow-dark">
                            {/* <!-- Search --> */}
                            <form class="w-100">
                                <div class="input-group border rounded">
                                    <div class="input-group-prepend">
                                        <button class="btn btn-sm text-secondary icon-xs d-flex align-items-center" type="submit">
                                            {/* <!-- Icon --> */}
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.80758 0C3.95121 0 0 3.95121 0 8.80758C0 13.6642 3.95121 17.6152 8.80758 17.6152C13.6642 17.6152 17.6152 13.6642 17.6152 8.80758C17.6152 3.95121 13.6642 0 8.80758 0ZM8.80758 15.9892C4.8477 15.9892 1.62602 12.7675 1.62602 8.80762C1.62602 4.84773 4.8477 1.62602 8.80758 1.62602C12.7675 1.62602 15.9891 4.8477 15.9891 8.80758C15.9891 12.7675 12.7675 15.9892 8.80758 15.9892Z" fill="currentColor"/>
                                                <path d="M19.762 18.6121L15.1007 13.9509C14.7831 13.6332 14.2687 13.6332 13.9511 13.9509C13.6335 14.2682 13.6335 14.7831 13.9511 15.1005L18.6124 19.7617C18.7712 19.9205 18.9791 19.9999 19.1872 19.9999C19.395 19.9999 19.6032 19.9205 19.762 19.7617C20.0796 19.4444 20.0796 18.9295 19.762 18.6121Z" fill="currentColor"/>
                                            </svg>

                                        </button>
                                    </div>
                                    <input class="form-control form-control-sm border-0 ps-0" type="search" placeholder="What do you want to learn ?" aria-label="Search"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </li>

                <li class="nav-item border-0 px-0">
                    {/* <!-- Button trigger account modal --> */}
                    <a href="#" class="nav-link d-flex px-3 px-md-4 text-white-all icon-xs" data-bs-toggle="modal" data-bs-target="#accountModal">
                        {/* <!-- Icon --> */}
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.2252 3.0777C15.3376 1.10738 12.7258 -0.0045765 9.99712 0.000444175C4.48284 -0.00650109 0.00695317 4.45809 7.91636e-06 9.97242C-0.00342287 12.6991 1.1084 15.3085 3.07726 17.1948C3.08299 17.2005 3.08512 17.209 3.09082 17.2141C3.14864 17.2698 3.21148 17.3169 3.27005 17.3705C3.43071 17.5133 3.59138 17.6611 3.76061 17.7989C3.85128 17.8703 3.94554 17.9417 4.03838 18.0074C4.19833 18.1266 4.35828 18.2459 4.52535 18.3558C4.6389 18.4273 4.756 18.4986 4.87236 18.5701C5.02658 18.6629 5.18012 18.7564 5.33936 18.8414C5.47434 18.9128 5.61211 18.9742 5.74922 19.0392C5.89917 19.1106 6.04698 19.182 6.20049 19.2462C6.354 19.3105 6.50826 19.3605 6.6639 19.4162C6.81954 19.4719 6.9538 19.5233 7.10304 19.569C7.27157 19.6197 7.44436 19.6589 7.61573 19.7011C7.75853 19.736 7.89706 19.776 8.04416 19.8046C8.24123 19.8439 8.44117 19.8689 8.64112 19.896C8.76467 19.9132 8.88534 19.9374 9.01027 19.9496C9.33732 19.9817 9.66718 19.9996 9.99992 19.9996C10.3327 19.9996 10.6626 19.9817 10.9896 19.9496C11.1146 19.9374 11.2352 19.9132 11.3587 19.896C11.5587 19.8689 11.7586 19.8439 11.9557 19.8046C12.0985 19.776 12.2413 19.7332 12.3841 19.7011C12.5555 19.6589 12.7283 19.6196 12.8968 19.569C13.046 19.5233 13.1903 19.4676 13.3359 19.4162C13.4816 19.3648 13.6473 19.3091 13.7994 19.2462C13.9514 19.1834 14.1007 19.1098 14.2506 19.0392C14.3877 18.9742 14.5256 18.9128 14.6605 18.8414C14.8197 18.7564 14.9732 18.6629 15.1275 18.5701C15.2439 18.4986 15.361 18.4337 15.4745 18.3558C15.6416 18.2459 15.8016 18.1267 15.9615 18.0074C16.0543 17.936 16.1485 17.8717 16.2392 17.7989C16.4085 17.6632 16.5691 17.519 16.7298 17.3705C16.7883 17.3169 16.8512 17.2698 16.909 17.2141C16.9147 17.2091 16.9169 17.2005 16.9226 17.1948C20.9046 13.38 21.04 7.05955 17.2252 3.0777ZM15.6203 16.4472C15.4904 16.5614 15.3561 16.6699 15.2205 16.7749C15.1405 16.8363 15.0605 16.897 14.9784 16.9556C14.8491 17.0491 14.7178 17.1377 14.5842 17.2226C14.4871 17.2848 14.3879 17.3447 14.2879 17.4033C14.1622 17.4747 14.0344 17.5461 13.9051 17.6175C13.7909 17.676 13.6745 17.7311 13.5574 17.7853C13.4403 17.8396 13.3111 17.8974 13.1847 17.9481C13.0583 17.9988 12.924 18.0467 12.7919 18.0909C12.6713 18.1323 12.5506 18.1752 12.4285 18.2116C12.2857 18.2544 12.1364 18.2894 11.9886 18.3251C11.8729 18.3522 11.7587 18.383 11.6416 18.4058C11.4724 18.4387 11.2996 18.4615 11.1261 18.4851C11.0275 18.4979 10.9297 18.5158 10.8304 18.5258C10.5562 18.5522 10.2784 18.5679 9.99783 18.5679C9.71722 18.5679 9.43945 18.5522 9.16524 18.5258C9.066 18.5158 8.96818 18.4979 8.8696 18.4851C8.6961 18.4615 8.5233 18.4387 8.35406 18.4058C8.23696 18.383 8.1227 18.3523 8.00705 18.3251C7.85924 18.2894 7.71213 18.2537 7.5672 18.2116C7.44512 18.1752 7.32441 18.1323 7.20375 18.0909C7.07166 18.0452 6.93953 17.9988 6.811 17.9481C6.68248 17.8974 6.5611 17.8417 6.43826 17.7853C6.31542 17.7289 6.20476 17.6761 6.09054 17.6175C5.9613 17.5504 5.83348 17.4797 5.7078 17.4033C5.60784 17.3448 5.50856 17.2848 5.41145 17.2226C5.27794 17.1377 5.14653 17.0491 5.01729 16.9556C4.93516 16.897 4.8552 16.8363 4.77521 16.7749C4.63952 16.6699 4.5053 16.5607 4.37535 16.4472C4.34393 16.4236 4.31536 16.3936 4.28469 16.3664C4.31661 13.9374 5.87708 11.7926 8.17843 11.0146C9.32912 11.562 10.6651 11.562 11.8158 11.0146C14.1171 11.7926 15.6776 13.9374 15.7096 16.3664C15.6796 16.3936 15.651 16.4208 15.6203 16.4472ZM7.50716 5.7256C8.2803 4.3506 10.0217 3.86272 11.3967 4.63586C12.7717 5.409 13.2596 7.15038 12.4864 8.52538C12.2299 8.98159 11.8529 9.35856 11.3967 9.61511C11.3931 9.61511 11.3888 9.61511 11.3845 9.61938C11.1952 9.72477 10.9951 9.80954 10.7876 9.87217C10.7505 9.88288 10.7162 9.89715 10.6769 9.90644C10.6055 9.92501 10.5305 9.93786 10.457 9.9507C10.3185 9.97493 10.1784 9.98898 10.0378 9.99283H9.95641C9.81588 9.98898 9.67576 9.97493 9.53727 9.9507C9.46585 9.93786 9.39016 9.92501 9.31736 9.90644C9.2795 9.89715 9.24594 9.88288 9.2067 9.87217C8.99922 9.80954 8.79911 9.72481 8.60974 9.61938L8.5969 9.61511C7.2219 8.84197 6.73402 7.10059 7.50716 5.7256ZM16.9763 14.9505C16.518 12.8133 15.1107 11.0014 13.1532 10.0286C14.7534 8.28555 14.6375 5.57535 12.8944 3.97522C11.1514 2.3751 8.44117 2.49099 6.84104 4.23404C5.33677 5.8727 5.33677 8.38998 6.84104 10.0286C4.88361 11.0014 3.47624 12.8133 3.01802 14.9505C0.27991 11.0937 1.18681 5.74744 5.04365 3.00933C8.90048 0.271226 14.2467 1.17813 16.9848 5.03496C18.0141 6.48481 18.5666 8.21907 18.5658 9.99714C18.5658 11.7737 18.01 13.5057 16.9763 14.9505Z" fill="currentColor"/>
                        </svg>

                    </a>
                </li>

                <li class="nav-item border-0 px-0">
                    {/* <!-- Button trigger cart modal --> */}
                    <a href="#" class="nav-link d-flex px-3 px-md-4 position-relative text-white-all icon-xs" data-bs-toggle="modal" data-bs-target="#cartModal">
                        <span class="badge badge-white text-primary rounded-circle fw-bold badge-float mt-n1 ms-n2 px-0 w-16">2</span>
                        {/* <!-- Icon --> */}
                        <svg width="13" height="15" viewBox="0 0 13 15" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.2422 3.51562H10.4567C10.2239 1.53873 8.53839 0 6.5 0C4.46161 0 2.7761 1.53873 2.54334 3.51562H0.757812C0.434199 3.51562 0.171875 3.77795 0.171875 4.10156V14.4141C0.171875 14.7377 0.434199 15 0.757812 15H12.2422C12.5658 15 12.8281 14.7377 12.8281 14.4141V4.10156C12.8281 3.77795 12.5658 3.51562 12.2422 3.51562ZM6.5 1.17188C7.89113 1.17188 9.04939 2.18716 9.27321 3.51562H3.72679C3.95062 2.18716 5.10887 1.17188 6.5 1.17188ZM11.6562 13.8281H1.34375V4.6875H2.51562V6.44531C2.51562 6.76893 2.77795 7.03125 3.10156 7.03125C3.42518 7.03125 3.6875 6.76893 3.6875 6.44531V4.6875H9.3125V6.44531C9.3125 6.76893 9.57482 7.03125 9.89844 7.03125C10.2221 7.03125 10.4844 6.76893 10.4844 6.44531V4.6875H11.6562V13.8281Z" fill="currentColor"/>
                        </svg>

                    </a>
                </li>
            </ul>

            {/* <!-- Toggler --> */}
            <button class="navbar-toggler ms-4 ms-md-5 shadow-none bg-teal text-white icon-xs p-0 outline-0 h-40p w-40p d-flex d-xl-none place-flex-center" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                {/* <!-- Icon --> */}
                <svg width="25" height="17" viewBox="0 0 25 17" xmlns="http://www.w3.org/2000/svg">
                    <rect width="25" height="1" fill="currentColor"/>
                    <rect y="8" width="15" height="1" fill="currentColor"/>
                    <rect y="16" width="20" height="1" fill="currentColor"/>
                </svg>

            </button>
        </div>
    </header>
        

        </>

    );
};

export default Header;