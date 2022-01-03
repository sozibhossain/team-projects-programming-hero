import React from 'react';
import { NavLink } from 'react-router-dom';

const Registration = () => {
    return (
        <div>
             
    {/* =========================PAGE TITLE=========================  */}
    <header class="py-8 py-md-11">
        <div class="container text-center py-xl-2">
            <h1 class="display-4 fw-semi-bold mb-0">Register</h1>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb breadcrumb-scroll justify-content-center">
                    <li class="breadcrumb-item">
                        <a class="text-gray-800" href="#">
                            Home
                        </a>
                    </li>
                    <li class="breadcrumb-item text-gray-800 active" aria-current="page">
                        Register
                    </li>
                </ol>
            </nav>
        </div>
        {/* -- Img -- */}
        <img class="d-none img-fluid" src="...html" alt="..."/>
    </header>
    
    {/* =========================REGISTER========================= */}
    <div class="container mb-11">
        <div class="row gx-0">
            <div class="col-md-7 col-xl-4 mx-auto">
                <h3 class="mb-6">Sign Up and Start Learning!</h3>
                <form class="mb-5">
                    <div class="form-group mb-5">
                        <label for="modalSignupUsername1">
                            Username
                        </label>
                        <input type="text" class="form-control" id="modalSignupUsername1" placeholder="John"/>
                    </div>
                    <div class="form-group mb-5">
                        <label for="modalSignupEmail1">
                            Username or Email
                        </label>
                        <input type="email" class="form-control" id="modalSignupEmail1" placeholder="johndoe@creativelayers.com"/>
                    </div>
                    <div class="form-group mb-5">
                        <label for="modalSignupPassword3">
                            Password
                        </label>
                        <input type="password" class="form-control" id="modalSignupPassword3" placeholder="**********"/>
                    </div>
                    <button class="btn btn-block btn-primary" type="submit">
                        SIGN UP
                    </button>

                </form>
                <p class="mb-0 font-size-sm text-center">
                    Already have an account? <NavLink class="text-underline" to="/login">Log In</NavLink>
                </p>
            </div>
        </div>
    </div>
        </div>
    );
};

export default Registration;