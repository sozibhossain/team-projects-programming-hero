import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <>     
    <header className="py-8 py-md-11">
        <div className="container text-center py-xl-2">
            <h1 className="display-4 fw-semi-bold mb-0">Login</h1>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-scroll justify-content-center">
                    <li className="breadcrumb-item">
                        <a className="text-gray-800" href="#">
                            Home
                        </a>
                    </li>
                    <li className="breadcrumb-item text-gray-800 active" aria-current="page">
                        Login
                    </li>
                </ol>
            </nav>
        </div>
        
        <img className="d-none img-fluid" src="...html" alt="..."/>
    </header>
    
    {/* ========================LOGIN==========================  */}
    <div className="container mb-11">
        <div className="row gx-0">
            <div className="col-md-7 col-xl-4 mx-auto">
                
                <h3 className="mb-6">Log In to Your Skola Account!</h3>

                
                <form className="mb-5">
                    <div className="form-group mb-5">
                        <label for="modalSigninEmail1">
                            Username or Email
                        </label>
                        <input type="email" className="form-control" id="modalSigninEmail1" placeholder="creativelayers"/>
                    </div>

                    
                    <div className="form-group mb-5">
                        <label for="modalSigninPassword1">
                            Password
                        </label>
                        <input type="password" className="form-control" id="modalSigninPassword1" placeholder="**********"/>
                    </div>

                    <div className="d-flex align-items-center mb-5 font-size-sm">
                        <div className="form-check">
                            <input className="form-check-input text-gray-800" type="checkbox" id="autoSizingCheck1"/>
                            <label className="form-check-label text-gray-800" for="autoSizingCheck1">
                                Remember me
                            </label>
                        </div>

                        <div className="ms-auto">
                            <a className="text-gray-800" href="recover.html">Forgot Password</a>
                        </div>
                    </div>

                
                    <button className="btn btn-block btn-primary" type="submit">
                        LOGIN
                    </button>
                </form>

                
                <p className="mb-0 font-size-sm text-center">
                    Don't have an account? <NavLink className="text-underline" to="/registration">Sign up</NavLink>
                </p>
            </div>
        </div>
    </div>
        </>
    );
};

export default Login;