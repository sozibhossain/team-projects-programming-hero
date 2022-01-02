import React from 'react';
import { Link } from 'react-router-dom';

const Instructors = () => {
    return (
        <>
            <section className="pt-8 pb-10 pt-md-11 pb-md-12" data-jarallax data-speed=".8" style={{backgroundImage: 'url(assets/img/covers/cover-3.jpg)'}} data-aos="fade-up">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 mx-auto text-center" data-aos="fade-up">
                            <h1 className="text-white">Luisao Alberto</h1>
                            <h5 className="text-white mb-8 text-capitalize">Teacher of Week</h5>
                            <p className="text-white mb-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            <Link to="course-list-v3.html" className="d-inline-flex align-items-center fw-medium text-white mb-8">
                                Browse All
                                <div className="ms-2 d-flex">
                                    {/* <!-- Icon --> */}
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.7779 4.6098L3.32777 0.159755C3.22485 0.0567475 3.08745 0 2.94095 0C2.79445 0 2.65705 0.0567475 2.55412 0.159755L2.2264 0.487394C2.01315 0.700889 2.01315 1.04788 2.2264 1.26105L5.96328 4.99793L2.22225 8.73895C2.11933 8.84196 2.0625 8.97928 2.0625 9.1257C2.0625 9.27228 2.11933 9.4096 2.22225 9.51269L2.54998 9.84025C2.65298 9.94325 2.7903 10 2.9368 10C3.0833 10 3.2207 9.94325 3.32363 9.84025L7.7779 5.38614C7.88107 5.2828 7.93774 5.14484 7.93741 4.99817C7.93774 4.85094 7.88107 4.71305 7.7779 4.6098Z" fill="currentColor"/>
                                    </svg>

                                </div>
                            </Link>
                        </div>

                        <div className="col-12">
                            <div className="mx-n4" data-flickity='{"pageDots": true, "prevNextButtons": false, "cellAlign": "left", "wrapAround": true, "imagesLoaded": true}'>
                                <div className="col-12 col-md-6 col-lg-4 col-xl-3 pb-4 pb-md-5" style={{paddingRight:'15px',paddingLeft:'15px'}}>
                                    {/* <!-- Card --> */}
                                    <div className="card border shadow p-2 sk-fade">
                                        {/* <!-- Image --> */}
                                        <div className="card-zoom position-relative">
                                            <Link to="course-single-v3.html" className="card-img sk-thumbnail img-ratio-3 d-block">
                                                <img className="rounded shadow-light-lg" src="assets/img/products/product-15.jpg" alt="..."/>
                                            </Link>

                                            <span className="sk-fade-right badge-float bottom-0 right-0 mb-2 me-2">
                                                <ins className="h5 mb-0 text-white">$415.99</ins>
                                            </span>
                                        </div>

                                        {/* <!-- Footer --> */}
                                        <div className="card-footer px-2 pb-2 mb-1 pt-4 position-relative">
                                            {/* <!-- Preheading --> */}
                                            <Link to="course-single-v3.html"><span className="mb-1 d-inline-block text-gray-800">Photography</span></Link>

                                            {/* <!-- Heading --> */}
                                            <div className="position-relative">
                                                <Link to="course-single-v3.html" className="d-block stretched-link"><h5 className="line-clamp-2 h-md-48 h-lg-58 me-md-8 me-lg-10 me-xl-4 mb-2">Fashion Photography From Professional</h5></Link>

                                                <div className="row mx-n2 align-items-end">
                                                    <div className="col px-2">
                                                        <ul className="nav mx-n3">
                                                            <li className="nav-item px-3">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="me-2 d-flex icon-uxs text-secondary">
                                                                        {/* <!-- Icon --> */}
                                                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M17.1947 7.06802L14.6315 7.9985C14.2476 7.31186 13.712 6.71921 13.0544 6.25992C12.8525 6.11877 12.6421 5.99365 12.4252 5.88303C13.0586 5.25955 13.452 4.39255 13.452 3.43521C13.452 1.54098 11.9124 -1.90735e-06 10.0197 -1.90735e-06C8.12714 -1.90735e-06 6.58738 1.54098 6.58738 3.43521C6.58738 4.39255 6.98075 5.25955 7.61414 5.88303C7.39731 5.99365 7.1869 6.11877 6.98502 6.25992C6.32752 6.71921 5.79178 7.31186 5.40787 7.9985L2.8447 7.06802C2.33612 6.88339 1.79688 7.26044 1.79688 7.80243V16.5178C1.79688 16.8465 2.00256 17.14 2.31155 17.2522L9.75312 19.9536C9.93073 20.018 10.1227 20.0128 10.2863 19.9536L17.7278 17.2522C18.0368 17.14 18.2425 16.8465 18.2425 16.5178V7.80243C18.2425 7.26135 17.704 6.88309 17.1947 7.06802ZM10.0197 1.5625C11.0507 1.5625 11.8895 2.40265 11.8895 3.43521C11.8895 4.46777 11.0507 5.30792 10.0197 5.30792C8.98866 5.30792 8.14988 4.46777 8.14988 3.43521C8.14988 2.40265 8.98866 1.5625 10.0197 1.5625ZM9.23844 18.1044L3.35938 15.9703V8.91724L9.23844 11.0513V18.1044ZM10.0197 9.67255L6.90644 8.54248C7.58164 7.51892 8.75184 6.87042 10.0197 6.87042C11.2875 6.87042 12.4577 7.51892 13.1329 8.54248L10.0197 9.67255ZM16.68 15.9703L10.8009 18.1044V11.0513L16.68 8.91724V15.9703Z" fill="currentColor"/>
                                                                        </svg>

                                                                    </div>
                                                                    <div className="font-size-sm">5 lessons</div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-auto px-2 text-right">
                                                        <div className="star-rating mb-2 mb-lg-0">
                                                            <div className="rating" style={{width:'100%'}}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4 col-xl-3 pb-4 pb-md-5" style={{paddingRight:'15px',paddingLeft:'15px'}}>
                                    {/* <!-- Card --> */}
                                    <div className="card border shadow p-2 sk-fade">
                                        {/* <!-- Image --> */}
                                        <div className="card-zoom position-relative">
                                            <Link to="course-single-v3.html" className="card-img sk-thumbnail img-ratio-3 d-block">
                                                <img className="rounded shadow-light-lg" src="assets/img/products/product-14.jpg" alt="..."/>
                                            </Link>

                                            <span className="sk-fade-right badge-float bottom-0 right-0 mb-2 me-2">
                                                <ins className="h5 mb-0 text-white">$415.99</ins>
                                            </span>
                                        </div>

                                        {/* <!-- Footer --> */}
                                        <div className="card-footer px-2 pb-2 mb-1 pt-4 position-relative">
                                            {/* <!-- Preheading --> */}
                                            <Link to="course-single-v3.html"><span className="mb-1 d-inline-block text-gray-800">Marketing</span></Link>

                                            {/* <!-- Heading --> */}
                                            <div className="position-relative">
                                                <Link to="course-single-v3.html" className="d-block stretched-link"><h5 className="line-clamp-2 h-md-48 h-lg-58 me-md-8 me-lg-10 me-xl-4 mb-2">Productivity and Time Management for workplace</h5></Link>

                                                <div className="row mx-n2 align-items-end">
                                                    <div className="col px-2">
                                                        <ul className="nav mx-n3">
                                                            <li className="nav-item px-3">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="me-2 d-flex icon-uxs text-secondary">
                                                                        {/* <!-- Icon --> */}
                                                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M17.1947 7.06802L14.6315 7.9985C14.2476 7.31186 13.712 6.71921 13.0544 6.25992C12.8525 6.11877 12.6421 5.99365 12.4252 5.88303C13.0586 5.25955 13.452 4.39255 13.452 3.43521C13.452 1.54098 11.9124 -1.90735e-06 10.0197 -1.90735e-06C8.12714 -1.90735e-06 6.58738 1.54098 6.58738 3.43521C6.58738 4.39255 6.98075 5.25955 7.61414 5.88303C7.39731 5.99365 7.1869 6.11877 6.98502 6.25992C6.32752 6.71921 5.79178 7.31186 5.40787 7.9985L2.8447 7.06802C2.33612 6.88339 1.79688 7.26044 1.79688 7.80243V16.5178C1.79688 16.8465 2.00256 17.14 2.31155 17.2522L9.75312 19.9536C9.93073 20.018 10.1227 20.0128 10.2863 19.9536L17.7278 17.2522C18.0368 17.14 18.2425 16.8465 18.2425 16.5178V7.80243C18.2425 7.26135 17.704 6.88309 17.1947 7.06802ZM10.0197 1.5625C11.0507 1.5625 11.8895 2.40265 11.8895 3.43521C11.8895 4.46777 11.0507 5.30792 10.0197 5.30792C8.98866 5.30792 8.14988 4.46777 8.14988 3.43521C8.14988 2.40265 8.98866 1.5625 10.0197 1.5625ZM9.23844 18.1044L3.35938 15.9703V8.91724L9.23844 11.0513V18.1044ZM10.0197 9.67255L6.90644 8.54248C7.58164 7.51892 8.75184 6.87042 10.0197 6.87042C11.2875 6.87042 12.4577 7.51892 13.1329 8.54248L10.0197 9.67255ZM16.68 15.9703L10.8009 18.1044V11.0513L16.68 8.91724V15.9703Z" fill="currentColor"/>
                                                                        </svg>

                                                                    </div>
                                                                    <div className="font-size-sm">5 lessons</div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-auto px-2 text-right">
                                                        <div className="star-rating mb-2 mb-lg-0">
                                                            <div className="rating" style={{width:'100%'}}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4 col-xl-3 pb-4 pb-md-5" style={{paddingRight:'15px',paddingLeft:'15px'}}>
                                    {/* <!-- Card --> */}
                                    <div className="card border shadow p-2 sk-fade">
                                        {/* <!-- Image --> */}
                                        <div className="card-zoom position-relative">
                                            <Link to="course-single-v3.html" className="card-img sk-thumbnail img-ratio-3 d-block">
                                                <img className="rounded shadow-light-lg" src="assets/img/products/product-16.jpg" alt="..."/>
                                            </Link>

                                            <span className="sk-fade-right badge-float bottom-0 right-0 mb-2 me-2">
                                                <ins className="h5 mb-0 text-white">$415.99</ins>
                                            </span>
                                        </div>

                                        {/* <!-- Footer --> */}
                                        <div className="card-footer px-2 pb-2 mb-1 pt-4 position-relative">
                                            {/* <!-- Preheading --> */}
                                            <Link to="course-single-v3.html"><span className="mb-1 d-inline-block text-gray-800">Personal Development</span></Link>

                                            {/* <!-- Heading --> */}
                                            <div className="position-relative">
                                                <Link to="course-single-v3.html" className="d-block stretched-link"><h5 className="line-clamp-2 h-md-48 h-lg-58 me-md-8 me-lg-10 me-xl-4 mb-2">Learn Ethical Hacking From Scratch</h5></Link>

                                                <div className="row mx-n2 align-items-end">
                                                    <div className="col px-2">
                                                        <ul className="nav mx-n3">
                                                            <li className="nav-item px-3">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="me-2 d-flex icon-uxs text-secondary">
                                                                        {/* <!-- Icon --> */}
                                                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M17.1947 7.06802L14.6315 7.9985C14.2476 7.31186 13.712 6.71921 13.0544 6.25992C12.8525 6.11877 12.6421 5.99365 12.4252 5.88303C13.0586 5.25955 13.452 4.39255 13.452 3.43521C13.452 1.54098 11.9124 -1.90735e-06 10.0197 -1.90735e-06C8.12714 -1.90735e-06 6.58738 1.54098 6.58738 3.43521C6.58738 4.39255 6.98075 5.25955 7.61414 5.88303C7.39731 5.99365 7.1869 6.11877 6.98502 6.25992C6.32752 6.71921 5.79178 7.31186 5.40787 7.9985L2.8447 7.06802C2.33612 6.88339 1.79688 7.26044 1.79688 7.80243V16.5178C1.79688 16.8465 2.00256 17.14 2.31155 17.2522L9.75312 19.9536C9.93073 20.018 10.1227 20.0128 10.2863 19.9536L17.7278 17.2522C18.0368 17.14 18.2425 16.8465 18.2425 16.5178V7.80243C18.2425 7.26135 17.704 6.88309 17.1947 7.06802ZM10.0197 1.5625C11.0507 1.5625 11.8895 2.40265 11.8895 3.43521C11.8895 4.46777 11.0507 5.30792 10.0197 5.30792C8.98866 5.30792 8.14988 4.46777 8.14988 3.43521C8.14988 2.40265 8.98866 1.5625 10.0197 1.5625ZM9.23844 18.1044L3.35938 15.9703V8.91724L9.23844 11.0513V18.1044ZM10.0197 9.67255L6.90644 8.54248C7.58164 7.51892 8.75184 6.87042 10.0197 6.87042C11.2875 6.87042 12.4577 7.51892 13.1329 8.54248L10.0197 9.67255ZM16.68 15.9703L10.8009 18.1044V11.0513L16.68 8.91724V15.9703Z" fill="currentColor"/>
                                                                        </svg>

                                                                    </div>
                                                                    <div className="font-size-sm">5 lessons</div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-auto px-2 text-right">
                                                        <div className="star-rating mb-2 mb-lg-0">
                                                            <div className="rating" style={{width:'100%'}}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4 col-xl-3 pb-4 pb-md-5" style={{paddingRight:'15px',paddingLeft:'15px'}}>
                                    {/* <!-- Card --> */}
                                    <div className="card border shadow p-2 sk-fade">
                                        {/* <!-- Image --> */}
                                        <div className="card-zoom position-relative">
                                            <Link to="course-single-v3.html" className="card-img sk-thumbnail img-ratio-3 d-block">
                                                <img className="rounded shadow-light-lg" src="assets/img/products/product-12.jpg" alt="..."/>
                                            </Link>

                                            <span className="sk-fade-right badge-float bottom-0 right-0 mb-2 me-2">
                                                <ins className="h5 mb-0 text-white">$415.99</ins>
                                            </span>
                                        </div>

                                        {/* <!-- Footer --> */}
                                        <div className="card-footer px-2 pb-2 mb-1 pt-4 position-relative">
                                            {/* <!-- Preheading --> */}
                                            <Link to="course-single-v3.html"><span className="mb-1 d-inline-block text-gray-800">Development</span></Link>

                                            {/* <!-- Heading --> */}
                                            <div className="position-relative">
                                                <Link to="course-single-v3.html" className="d-block stretched-link"><h5 className="line-clamp-2 h-md-48 h-lg-58 me-md-8 me-lg-10 me-xl-4 mb-2">The Complete JavaScript Course 2020: Real Projects!</h5></Link>

                                                <div className="row mx-n2 align-items-end">
                                                    <div className="col px-2">
                                                        <ul className="nav mx-n3">
                                                            <li className="nav-item px-3">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="me-2 d-flex icon-uxs text-secondary">
                                                                        {/* <!-- Icon --> */}
                                                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M17.1947 7.06802L14.6315 7.9985C14.2476 7.31186 13.712 6.71921 13.0544 6.25992C12.8525 6.11877 12.6421 5.99365 12.4252 5.88303C13.0586 5.25955 13.452 4.39255 13.452 3.43521C13.452 1.54098 11.9124 -1.90735e-06 10.0197 -1.90735e-06C8.12714 -1.90735e-06 6.58738 1.54098 6.58738 3.43521C6.58738 4.39255 6.98075 5.25955 7.61414 5.88303C7.39731 5.99365 7.1869 6.11877 6.98502 6.25992C6.32752 6.71921 5.79178 7.31186 5.40787 7.9985L2.8447 7.06802C2.33612 6.88339 1.79688 7.26044 1.79688 7.80243V16.5178C1.79688 16.8465 2.00256 17.14 2.31155 17.2522L9.75312 19.9536C9.93073 20.018 10.1227 20.0128 10.2863 19.9536L17.7278 17.2522C18.0368 17.14 18.2425 16.8465 18.2425 16.5178V7.80243C18.2425 7.26135 17.704 6.88309 17.1947 7.06802ZM10.0197 1.5625C11.0507 1.5625 11.8895 2.40265 11.8895 3.43521C11.8895 4.46777 11.0507 5.30792 10.0197 5.30792C8.98866 5.30792 8.14988 4.46777 8.14988 3.43521C8.14988 2.40265 8.98866 1.5625 10.0197 1.5625ZM9.23844 18.1044L3.35938 15.9703V8.91724L9.23844 11.0513V18.1044ZM10.0197 9.67255L6.90644 8.54248C7.58164 7.51892 8.75184 6.87042 10.0197 6.87042C11.2875 6.87042 12.4577 7.51892 13.1329 8.54248L10.0197 9.67255ZM16.68 15.9703L10.8009 18.1044V11.0513L16.68 8.91724V15.9703Z" fill="currentColor"/>
                                                                        </svg>

                                                                    </div>
                                                                    <div className="font-size-sm">5 lessons</div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-auto px-2 text-right">
                                                        <div className="star-rating mb-2 mb-lg-0">
                                                            <div className="rating" style={{width:'100%'}}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4 col-xl-3 pb-4 pb-md-5" style={{paddingRight:'15px',paddingLeft:'15px'}}>
                                    {/* <!-- Card --> */}
                                    <div className="card border shadow p-2 sk-fade">
                                        {/* <!-- Image --> */}
                                        <div className="card-zoom position-relative">
                                            <Link to="course-single-v3.html" className="card-img sk-thumbnail img-ratio-3 d-block">
                                                <img className="rounded shadow-light-lg" src="assets/img/products/product-13.jpg" alt="..."/>
                                            </Link>

                                            <span className="sk-fade-right badge-float bottom-0 right-0 mb-2 me-2">
                                                <ins className="h5 mb-0 text-white">$415.99</ins>
                                            </span>
                                        </div>

                                        {/* <!-- Footer --> */}
                                        <div className="card-footer px-2 pb-2 mb-1 pt-4 position-relative">
                                            {/* <!-- Preheading --> */}
                                            <Link to="course-single-v3.html"><span className="mb-1 d-inline-block text-gray-800">Marketing</span></Link>

                                            {/* <!-- Heading --> */}
                                            <div className="position-relative">
                                                <Link to="course-single-v3.html" className="d-block stretched-link"><h5 className="line-clamp-2 h-md-48 h-lg-58 me-md-8 me-lg-10 me-xl-4 mb-2">Learn Ethical Hacking From Scratch</h5></Link>

                                                <div className="row mx-n2 align-items-end">
                                                    <div className="col px-2">
                                                        <ul className="nav mx-n3">
                                                            <li className="nav-item px-3">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="me-2 d-flex icon-uxs text-secondary">
                                                                        {/* <!-- Icon --> */}
                                                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M17.1947 7.06802L14.6315 7.9985C14.2476 7.31186 13.712 6.71921 13.0544 6.25992C12.8525 6.11877 12.6421 5.99365 12.4252 5.88303C13.0586 5.25955 13.452 4.39255 13.452 3.43521C13.452 1.54098 11.9124 -1.90735e-06 10.0197 -1.90735e-06C8.12714 -1.90735e-06 6.58738 1.54098 6.58738 3.43521C6.58738 4.39255 6.98075 5.25955 7.61414 5.88303C7.39731 5.99365 7.1869 6.11877 6.98502 6.25992C6.32752 6.71921 5.79178 7.31186 5.40787 7.9985L2.8447 7.06802C2.33612 6.88339 1.79688 7.26044 1.79688 7.80243V16.5178C1.79688 16.8465 2.00256 17.14 2.31155 17.2522L9.75312 19.9536C9.93073 20.018 10.1227 20.0128 10.2863 19.9536L17.7278 17.2522C18.0368 17.14 18.2425 16.8465 18.2425 16.5178V7.80243C18.2425 7.26135 17.704 6.88309 17.1947 7.06802ZM10.0197 1.5625C11.0507 1.5625 11.8895 2.40265 11.8895 3.43521C11.8895 4.46777 11.0507 5.30792 10.0197 5.30792C8.98866 5.30792 8.14988 4.46777 8.14988 3.43521C8.14988 2.40265 8.98866 1.5625 10.0197 1.5625ZM9.23844 18.1044L3.35938 15.9703V8.91724L9.23844 11.0513V18.1044ZM10.0197 9.67255L6.90644 8.54248C7.58164 7.51892 8.75184 6.87042 10.0197 6.87042C11.2875 6.87042 12.4577 7.51892 13.1329 8.54248L10.0197 9.67255ZM16.68 15.9703L10.8009 18.1044V11.0513L16.68 8.91724V15.9703Z" fill="currentColor"/>
                                                                        </svg>

                                                                    </div>
                                                                    <div className="font-size-sm">5 lessons</div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-auto px-2 text-right">
                                                        <div className="star-rating mb-2 mb-lg-0">
                                                            <div className="rating" style={{width:'100%'}}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4 col-xl-3 pb-4 pb-md-5" style={{paddingRight:'15px',paddingLeft:'15px'}}>
                                    {/* <!-- Card --> */}
                                    <div className="card border shadow p-2 sk-fade">
                                        {/* <!-- Image --> */}
                                        <div className="card-zoom position-relative">
                                            <Link to="course-single-v3.html" className="card-img sk-thumbnail img-ratio-3 d-block">
                                                <img className="rounded shadow-light-lg" src="assets/img/products/product-11.jpg" alt="..."/>
                                            </Link>

                                            <span className="sk-fade-right badge-float bottom-0 right-0 mb-2 me-2">
                                                <ins className="h5 mb-0 text-white">$415.99</ins>
                                            </span>
                                        </div>

                                        {/* <!-- Footer --> */}
                                        <div className="card-footer px-2 pb-2 mb-1 pt-4 position-relative">
                                            {/* <!-- Preheading --> */}
                                            <Link to="course-single-v3.html"><span className="mb-1 d-inline-block text-gray-800">Development</span></Link>

                                            {/* <!-- Heading --> */}
                                            <div className="position-relative">
                                                <Link to="course-single-v3.html" className="d-block stretched-link"><h5 className="line-clamp-2 h-md-48 h-lg-58 me-md-8 me-lg-10 me-xl-4 mb-2">The Complete JavaScript Course 2020: Real Projects!</h5></Link>

                                                <div className="row mx-n2 align-items-end">
                                                    <div className="col px-2">
                                                        <ul className="nav mx-n3">
                                                            <li className="nav-item px-3">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="me-2 d-flex icon-uxs text-secondary">
                                                                        {/* <!-- Icon --> */}
                                                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M17.1947 7.06802L14.6315 7.9985C14.2476 7.31186 13.712 6.71921 13.0544 6.25992C12.8525 6.11877 12.6421 5.99365 12.4252 5.88303C13.0586 5.25955 13.452 4.39255 13.452 3.43521C13.452 1.54098 11.9124 -1.90735e-06 10.0197 -1.90735e-06C8.12714 -1.90735e-06 6.58738 1.54098 6.58738 3.43521C6.58738 4.39255 6.98075 5.25955 7.61414 5.88303C7.39731 5.99365 7.1869 6.11877 6.98502 6.25992C6.32752 6.71921 5.79178 7.31186 5.40787 7.9985L2.8447 7.06802C2.33612 6.88339 1.79688 7.26044 1.79688 7.80243V16.5178C1.79688 16.8465 2.00256 17.14 2.31155 17.2522L9.75312 19.9536C9.93073 20.018 10.1227 20.0128 10.2863 19.9536L17.7278 17.2522C18.0368 17.14 18.2425 16.8465 18.2425 16.5178V7.80243C18.2425 7.26135 17.704 6.88309 17.1947 7.06802ZM10.0197 1.5625C11.0507 1.5625 11.8895 2.40265 11.8895 3.43521C11.8895 4.46777 11.0507 5.30792 10.0197 5.30792C8.98866 5.30792 8.14988 4.46777 8.14988 3.43521C8.14988 2.40265 8.98866 1.5625 10.0197 1.5625ZM9.23844 18.1044L3.35938 15.9703V8.91724L9.23844 11.0513V18.1044ZM10.0197 9.67255L6.90644 8.54248C7.58164 7.51892 8.75184 6.87042 10.0197 6.87042C11.2875 6.87042 12.4577 7.51892 13.1329 8.54248L10.0197 9.67255ZM16.68 15.9703L10.8009 18.1044V11.0513L16.68 8.91724V15.9703Z" fill="currentColor"/>
                                                                        </svg>

                                                                    </div>
                                                                    <div className="font-size-sm">5 lessons</div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-auto px-2 text-right">
                                                        <div className="star-rating mb-2 mb-lg-0">
                                                            <div className="rating" style={{width:'100%'}}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4 col-xl-3 pb-4 pb-md-5" style={{paddingRight:'15px',paddingLeft:'15px'}}>
                                    {/* <!-- Card --> */}
                                    <div className="card border shadow p-2 sk-fade">
                                        {/* <!-- Image --> */}
                                        <div className="card-zoom position-relative">
                                            <Link to="course-single-v3.html" className="card-img sk-thumbnail img-ratio-3 d-block">
                                                <img className="rounded shadow-light-lg" src="assets/img/products/product-10.jpg" alt="..."/>
                                            </Link>

                                            <span className="sk-fade-right badge-float bottom-0 right-0 mb-2 me-2">
                                                <ins className="h5 mb-0 text-white">$415.99</ins>
                                            </span>
                                        </div>

                                        {/* <!-- Footer --> */}
                                        <div className="card-footer px-2 pb-2 mb-1 pt-4 position-relative">
                                            {/* <!-- Preheading --> */}
                                            <Link to="course-single-v3.html"><span className="mb-1 d-inline-block text-gray-800">Marketing</span></Link>

                                            {/* <!-- Heading --> */}
                                            <div className="position-relative">
                                                <Link to="course-single-v3.html" className="d-block stretched-link"><h5 className="line-clamp-2 h-md-48 h-lg-58 me-md-8 me-lg-10 me-xl-4 mb-2">Productivity and Time Management for workplace</h5></Link>

                                                <div className="row mx-n2 align-items-end">
                                                    <div className="col px-2">
                                                        <ul className="nav mx-n3">
                                                            <li className="nav-item px-3">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="me-2 d-flex icon-uxs text-secondary">
                                                                        {/* <!-- Icon --> */}
                                                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M17.1947 7.06802L14.6315 7.9985C14.2476 7.31186 13.712 6.71921 13.0544 6.25992C12.8525 6.11877 12.6421 5.99365 12.4252 5.88303C13.0586 5.25955 13.452 4.39255 13.452 3.43521C13.452 1.54098 11.9124 -1.90735e-06 10.0197 -1.90735e-06C8.12714 -1.90735e-06 6.58738 1.54098 6.58738 3.43521C6.58738 4.39255 6.98075 5.25955 7.61414 5.88303C7.39731 5.99365 7.1869 6.11877 6.98502 6.25992C6.32752 6.71921 5.79178 7.31186 5.40787 7.9985L2.8447 7.06802C2.33612 6.88339 1.79688 7.26044 1.79688 7.80243V16.5178C1.79688 16.8465 2.00256 17.14 2.31155 17.2522L9.75312 19.9536C9.93073 20.018 10.1227 20.0128 10.2863 19.9536L17.7278 17.2522C18.0368 17.14 18.2425 16.8465 18.2425 16.5178V7.80243C18.2425 7.26135 17.704 6.88309 17.1947 7.06802ZM10.0197 1.5625C11.0507 1.5625 11.8895 2.40265 11.8895 3.43521C11.8895 4.46777 11.0507 5.30792 10.0197 5.30792C8.98866 5.30792 8.14988 4.46777 8.14988 3.43521C8.14988 2.40265 8.98866 1.5625 10.0197 1.5625ZM9.23844 18.1044L3.35938 15.9703V8.91724L9.23844 11.0513V18.1044ZM10.0197 9.67255L6.90644 8.54248C7.58164 7.51892 8.75184 6.87042 10.0197 6.87042C11.2875 6.87042 12.4577 7.51892 13.1329 8.54248L10.0197 9.67255ZM16.68 15.9703L10.8009 18.1044V11.0513L16.68 8.91724V15.9703Z" fill="currentColor"/>
                                                                        </svg>

                                                                    </div>
                                                                    <div className="font-size-sm">5 lessons</div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-auto px-2 text-right">
                                                        <div className="star-rating mb-2 mb-lg-0">
                                                            <div className="rating" style={{width:'100%'}}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Instructors;