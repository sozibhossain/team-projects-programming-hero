import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import useAuth from '../../../hooks/useAuth';

const Registration = () => {
    
    const {user, registrerUser, authError} =useAuth();

    const [email, setEmail] = useState('');
    console.log(email)
    const [password, setPassword] = useState('');

    const handleEmailChange = e => {
        setEmail(e.target.value);
      }
    
      const handlePasswordChange = e => {
        setPassword(e.target.value)
      }

      const handleLoginSubmit = e => {
        registrerUser(email,password)
        e.preventDefault();
        
      }

    return (
        <div>
             
    {/* =========================PAGE TITLE=========================  */}
    <header className="py-8 py-md-11">
        <div className="container text-center py-xl-2">
            <h1 className="display-4 fw-semi-bold mb-0">Register</h1>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-scroll justify-content-center">
                    <li className="breadcrumb-item">
                        <a className="text-gray-800" href="#">
                            Home
                        </a>
                    </li>
                    <li className="breadcrumb-item text-gray-800 active" aria-current="page">
                        Register
                    </li>
                </ol>
            </nav>
        </div>
        {/* -- Img -- */}
        <img className="d-none img-fluid" src="...html" alt="..."/>
    </header>
    
    {/* =========================REGISTER========================= */}
    <div className="container mb-11">
        <div className="row gx-0">
            <div className="col-md-7 col-xl-4 mx-auto">
                <h3 className="mb-6">Sign Up and Start Learning!</h3>
                <form className="mb-5">
                    <div className="form-group mb-5">
                        <label for="modalSignupUsername1">
                            Username
                        </label>
                        <input type="text" className="form-control" id="modalSignupUsername1" placeholder="John"/>
                    </div>
                    <div className="form-group mb-5">
                        <label for="modalSignupEmail1">
                            Username or Email
                        </label>
                        <input type="email" className="form-control" id="modalSignupEmail1" placeholder="johndoe@creativelayers.com"
                        onBlur={handleEmailChange}/>
                    </div>
                    <div className="form-group mb-5">
                        <label for="modalSignupPassword3">
                            Password
                        </label>
                        <input type="password" className="form-control" id="modalSignupPassword3" placeholder="**********"
                        onBlur={handlePasswordChange}/>
                    </div>
                    <button onClick={handleLoginSubmit} className="btn btn-block btn-primary" type="submit">
                        SIGN UP
                    </button>
                </form>
                <p className="mb-0 font-size-sm text-center">
                    Already have an account? <NavLink className="text-underline" to="/login">Log In</NavLink>
                </p>
                <div>
                </div>
            </div>
        </div>
    </div>
        </div>
    );
};

export default Registration;