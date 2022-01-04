import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className="pt-8 pt-md-11 bg-darken bg-gradient-2">
                <div className="container">
                    <div className="row" id="accordionFooter">
                        <div className="col-12 col-md-4 col-lg-4">

                            {/* <!-- Brand --> */}
                            <img src="assets/img/brand.svg" alt="..." className="footer-brand img-fluid mb-4 h-60p"/>

                            {/* <!-- Text --> */}
                            <p className="text-gray-800 mb-4 font-size-sm-alone">
                                329 Queensberry Street, North Melbourne VIC 3051, Australia.
                            </p>

                            <div className="mb-4">
                                <Link to="tel:1234567890" className="text-gray-800 font-size-sm-alone">123 456 7890</Link>
                            </div>

                            <div className="mb-4">
                                <Link to="mailto:support@skola.com" className="text-gray-800 font-size-sm-alone">support@skola.com</Link>
                            </div>

                            {/* <!-- Social --> */}
                            <ul className="list-unstyled list-inline list-social mb-4 mb-md-0 mx-n2">
                                <li className="list-inline-item list-social-item">
                                    <Link to="#" className="text-decoration-none w-36 h-36 bg-white-hover-10 rounded-circle d-flex align-items-center justify-content-center">
                                        <i className="fab fa-facebook-f"></i>
                                    </Link>
                                </li>
                                <li className="list-inline-item list-social-item">
                                    <Link to="#" className="text-decoration-none w-36 h-36 bg-white-hover-10 rounded-circle d-flex align-items-center justify-content-center">
                                        <i className="fab fa-twitter"></i>
                                    </Link>
                                </li>
                                <li className="list-inline-item list-social-item">
                                    <Link to="#" className="text-decoration-none w-36 h-36 bg-white-hover-10 rounded-circle d-flex align-items-center justify-content-center">
                                        <i className="fab fa-instagram"></i>
                                    </Link>
                                </li>
                                <li className="list-inline-item list-social-item">
                                    <Link to="#" className="text-decoration-none w-36 h-36 bg-white-hover-10 rounded-circle d-flex align-items-center justify-content-center">
                                        <i className="fab fa-linkedin-in"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-12 col-md-4 col-lg-2">
                            <div className="mb-5 mb-xl-0 footer-accordion">

                                {/* <!-- Heading --> */}
                                <div id="widgetOne">
                                    <h5 className="mb-5">
                                        <button className="text-dark fw-medium footer-accordion-toggle d-flex align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#widgetcollapseOne" aria-expanded="true" aria-controls="widgetcollapseOne">
                                            Our Company
                                            <span className="ms-auto text-dark">
                                                {/* <!-- Icon --> */}
                                                <svg width="15" height="2" viewBox="0 0 15 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="15" height="2" fill="currentColor"/>
                                                </svg>

                                                <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 7H15V9H0V7Z" fill="currentColor"/>
                                                    <path d="M6 16L6 8.74228e-08L8 0L8 16H6Z" fill="currentColor"/>
                                                </svg>

                                            </span>
                                        </button>
                                    </h5>
                                </div>

                                <div id="widgetcollapseOne" className="collapse show" aria-labelledby="widgetOne" data-parent="#accordionFooter">
                                    {/* <!-- List --> */}
                                    <ul className="list-unstyled text-gray-800 font-size-sm-alone mb-6 mb-md-8 mb-lg-0">
                                        <li className="mb-3">
                                            <Link to="about-v1.html" className="text-reset">
                                                Our Company
                                            </Link>
                                        </li>
                                        <li className="mb-3">
                                            <Link to="about-v2.html" className="text-reset" to="/about">
                                                About Us
                                            </Link>
                                        </li>
                                        <li className="mb-3">
                                            <Link to="contact-us.html" className="text-reset" to="/contact">
                                                Contact Us
                                            </Link>
                                        </li>
                                        <li className="mb-3">
                                            <Link to="contact-us.html" className="text-reset">
                                                Community
                                            </Link>
                                        </li>
                                        <li className="mb-3">
                                            <Link to="course-list-v1.html" className="text-reset">
                                                Student Perks
                                            </Link>
                                        </li>
                                        <li className="mb-3">
                                            <Link to="blog-grid-v1.html" className="text-reset" to="/blog">
                                                Blog
                                            </Link>
                                        </li>
                                        <li className="mb-3">
                                            <Link to="pricing.html" className="text-reset">
                                                Affiliate Program
                                            </Link>
                                        </li>
                                        <li className="mb-3">
                                            <Link to="contact-us.html" className="text-reset">
                                                Careers
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4 col-lg-2">
                            <div className="mb-5 mb-xl-0 ms-xl-6 footer-accordion">

                                {/* <!-- Heading --> */}
                                <div id="widgetTwo">
                                    <h5 className="mb-5">
                                        <button className="text-dark fw-medium footer-accordion-toggle d-flex align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#widgetcollapseTwo" aria-expanded="false" aria-controls="widgetcollapseTwo">
                                            Topics
                                            <span className="ms-auto text-dark">
                                                {/* <!-- Icon --> */}
                                                <svg width="15" height="2" viewBox="0 0 15 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="15" height="2" fill="currentColor"/>
                                                </svg>

                                                <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 7H15V9H0V7Z" fill="currentColor"/>
                                                    <path d="M6 16L6 8.74228e-08L8 0L8 16H6Z" fill="currentColor"/>
                                                </svg>

                                            </span>
                                        </button>
                                    </h5>
                                </div>

                                <div id="widgetcollapseTwo" className="collapse" aria-labelledby="widgetTwo" data-parent="#accordionFooter">
                                    {/* <!-- List --> */}
                                    <ul className="list-unstyled text-gray-800 font-size-sm-alone mb-6 mb-md-8 mb-lg-0">
                                        <li className="mb-3">
                                            <Link to="course-list-v2.html" className="text-reset">
                                                HTML
                                            </Link>
                                        </li>
                                        <li className="mb-3">
                                            <Link to="course-list-v2.html" className="text-reset">
                                                CSS
                                            </Link>
                                        </li>
                                        <li className="mb-3">
                                            <Link to="course-list-v6.html" className="text-reset">
                                                Design
                                            </Link>
                                        </li>
                                        <li className="mb-3">
                                            <Link to="course-list-v5.html" className="text-reset">
                                                JavaScript
                                            </Link>
                                        </li>
                                        <li className="mb-3">
                                            <Link to="course-list-v4.html" className="text-reset">
                                                Ruby
                                            </Link>
                                        </li>
                                        <li className="mb-3">
                                            <Link to="course-list-v1.html" className="text-reset">
                                                PHP
                                            </Link>
                                        </li>
                                        <li className="mb-3">
                                            <Link to="course-list-v3.html" className="text-reset">
                                                Android
                                            </Link>
                                        </li>
                                        <li className="mb-3">
                                            <Link to="course-list-v4.html" className="text-reset">
                                                Development Tools
                                            </Link>
                                        </li>
                                        <li className="mb-3">
                                            <Link to="course-list-v6.html" className="text-reset">
                                                Business
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4 offset-md-4 col-lg-2 offset-lg-0">
                            <div className="mb-5 mb-xl-0 ms-xl-6 footer-accordion">

                                {/* <!-- Heading --> */}
                                <div id="widgetThree">
                                    <h5 className="mb-5">
                                        <button className="text-dark fw-medium footer-accordion-toggle d-flex align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#widgetcollapseThree" aria-expanded="false" aria-controls="widgetcollapseThree">
                                            Tracks
                                            <span className="ms-auto text-dark">
                                                {/* <!-- Icon --> */}
                                                <svg width="15" height="2" viewBox="0 0 15 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="15" height="2" fill="currentColor"/>
                                                </svg>

                                                <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 7H15V9H0V7Z" fill="currentColor"/>
                                                    <path d="M6 16L6 8.74228e-08L8 0L8 16H6Z" fill="currentColor"/>
                                                </svg>

                                            </span>
                                        </button>
                                    </h5>
                                </div>

                                <div id="widgetcollapseThree" className="collapse" aria-labelledby="widgetThree" data-parent="#accordionFooter">
                                    {/* <!-- List --> */}
                                    <ul className="list-unstyled text-gray-800 font-size-sm-alone mb-0">
                                        <li className="mb-3">
                                            <Link to="lesson-single-v1.html" className="text-reset">
                                                Web Design
                                            </Link>
                                        </li>
                                        <li className="mb-3">
                                            <Link to="lesson-single-v2.html" className="text-reset">
                                                Web Development
                                            </Link>
                                        </li>
                                        <li className="mb-3">
                                            <Link to="lesson-single-v1.html" className="text-reset">
                                                Rails Development
                                            </Link>
                                        </li>
                                        <li className="mb-3">
                                            <Link to="lesson-single-v2.html" className="text-reset">
                                                PHP Development
                                            </Link>
                                        </li>
                                        <li className="mb-3">
                                            <Link to="lesson-single-v1.html" className="text-reset">
                                                Android Development
                                            </Link>
                                        </li>
                                        <li className="mb-3">
                                            <Link to="lesson-single-v2.html" className="text-reset">
                                                Starting a Business
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4 col-lg-2 d-xl-flex">
                            <div className="mb-5 mb-xl-0 ms-xl-auto footer-accordion">

                                {/* <!-- Heading --> */}
                                <div id="widgetFour">
                                    <h5 className="mb-5">
                                        <button className="text-dark fw-medium footer-accordion-toggle d-flex align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#widgetcollapseFour" aria-expanded="false" aria-controls="widgetcollapseFour">
                                            Support
                                            <span className="ms-auto text-dark">
                                                {/* <!-- Icon --> */}
                                                <svg width="15" height="2" viewBox="0 0 15 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="15" height="2" fill="currentColor"/>
                                                </svg>

                                                <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 7H15V9H0V7Z" fill="currentColor"/>
                                                    <path d="M6 16L6 8.74228e-08L8 0L8 16H6Z" fill="currentColor"/>
                                                </svg>

                                            </span>
                                        </button>
                                    </h5>
                                </div>

                                <div id="widgetcollapseFour" className="collapse" aria-labelledby="widgetFour" data-parent="#accordionFooter">
                                    {/* <!-- List --> */}
                                    <ul className="list-unstyled text-gray-800 font-size-sm-alone mb-0">
                                        <li className="mb-3">
                                            <Link to="docs/index.html" className="text-reset">
                                                Documentation
                                            </Link>
                                        </li>
                                        <li className="mb-3">
                                            <Link to="docs/index.html" className="text-reset">
                                                Forums
                                            </Link>
                                        </li>
                                        <li className="mb-3">
                                            <Link to="docs/index.html" className="text-reset">
                                                Language Packs
                                            </Link>
                                        </li>
                                        <li className="mb-3">
                                            <Link to="docs/changelog.html" className="text-reset">
                                                Release Status
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 mt-md-5">
                            <div className="pb-5 pt-6 py-md-4 text-center text-xl-start d-flex flex-column d-md-block d-xl-flex flex-xl-row align-items-center">
                                <p className="text-gray-800 font-size-sm-alone d-block mb-0 mb-md-2 mb-xl-0 order-1 order-md-0 px-9 px-md-0">Copyright © 2022 LMS. All Right Reserved.</p>

                                <div className="ms-xl-auto d-flex flex-column flex-md-column align-items-stretch align-items-md-center justify-content-center">
                                    <ul className="navbar-nav flex-row flex-wrap font-size-sm-alone mb-3 mb-md-0 mx-n4 me-md-5 justify-content-center justify-content-lg-start order-1 order-md-0">
                                        <li className="nav-item py-2 py-md-0 px-0 border-top-0">
                                            <Link to="index.html" className="nav-link px-4 fw-normal text-gray-800">Home</Link>
                                        </li>
                                        <li className="nav-item py-2 py-md-0 px-0 border-top-0">
                                            <Link to="terms-of-service.html" className="nav-link px-4 fw-normal text-gray-800">Site Map</Link>
                                        </li>
                                        <li className="nav-item py-2 py-md-0 px-0 border-top-0">
                                            <Link to="terms-of-service.html" className="nav-link px-4 fw-normal text-gray-800">Privacy policy</Link>
                                        </li>
                                        <li className="nav-item py-2 py-md-0 px-0 border-top-0">
                                            <Link to="terms-of-service.html" className="nav-link px-4 fw-normal text-gray-800">Web Use Policy</Link>
                                        </li>
                                        <li className="nav-item py-2 py-md-0 px-0 border-top-0">
                                            <Link to="terms-of-service.html" className="nav-link px-4 fw-normal text-gray-800">Cookie Policy</Link>
                                        </li>
                                    </ul>

                                    <select className="form-select form-select-sm custom-select-white-off font-size-sm-alone bg-white-10 text-white-60 border-0 min-width-140 text-left mb-4 mb-md-0" data-choices>
                                        <option>English</option>
                                        <option>Tamil</option>
                                        <option>French</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </footer>
        </>
    );
};

export default Footer;