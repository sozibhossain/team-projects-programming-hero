import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedCourses = () => {
    return (
        <>
            <section className="pt-5 pb-9 py-md-11">
                <div className="container">
                    <div className="text-center mb-5 mb-md-8">
                        <h1 className="mb-1">Featured Courses</h1>
                        <p className="font-size-lg text-capitalize">Discover your perfect program in our courses.</p>
                    </div>

                    <div className="row row-cols-md-2 row-cols-xl-3 mb-2">
                        <div className="col-md pb-4 pb-md-7">
                            {/* <!-- Card --> */}
                            <div className="card border shadow p-2 lift sk-fade">
                                {/* <!-- Image --> */}
                                <div className="card-zoom position-relative">
                                    <div className="badge-float sk-fade-top top-0 right-0 mt-4 me-4">
                                        <Link to="course-single-v3.html" className="btn btn-xs btn-dark text-white rounded-circle lift opacity-dot-7 me-1 p-2 d-inline-flex justify-content-center align-items-center w-36 h-36">
                                            {/* <!-- Icon --> */}
                                            <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.8856 8.64995C17.7248 8.42998 13.8934 3.26379 8.99991 3.26379C4.10647 3.26379 0.274852 8.42998 0.114223 8.64974C-0.0380743 8.85843 -0.0380743 9.14147 0.114223 9.35016C0.274852 9.57013 4.10647 14.7363 8.99991 14.7363C13.8934 14.7363 17.7248 9.5701 17.8856 9.35034C18.0381 9.14169 18.0381 8.85843 17.8856 8.64995ZM8.99991 13.5495C5.39537 13.5495 2.27345 10.1206 1.3493 8.99965C2.27226 7.87771 5.38764 4.4506 8.99991 4.4506C12.6043 4.4506 15.726 7.8789 16.6505 9.00046C15.7276 10.1224 12.6122 13.5495 8.99991 13.5495Z" fill="currentColor"/>
                                                <path d="M8.9999 5.43958C7.03671 5.43958 5.43945 7.03683 5.43945 9.00003C5.43945 10.9632 7.03671 12.5605 8.9999 12.5605C10.9631 12.5605 12.5603 10.9632 12.5603 9.00003C12.5603 7.03683 10.9631 5.43958 8.9999 5.43958ZM8.9999 11.3736C7.69103 11.3736 6.62629 10.3089 6.62629 9.00003C6.62629 7.6912 7.69107 6.62642 8.9999 6.62642C10.3087 6.62642 11.3735 7.6912 11.3735 9.00003C11.3735 10.3089 10.3088 11.3736 8.9999 11.3736Z" fill="currentColor"/>
                                            </svg>

                                        </Link>
                                        <Link to="course-single-v3.html" className="btn btn-xs btn-dark text-white rounded-circle lift opacity-dot-7 p-2 d-inline-flex justify-content-center align-items-center w-36 h-36">
                                            {/* <!-- Icon --> */}
                                            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.2437 1.20728C10.0203 1.20728 8.87397 1.66486 7.99998 2.48357C7.12598 1.66486 5.97968 1.20728 4.7563 1.20728C2.13368 1.20728 0 3.341 0 5.96366C0 7.2555 0.425164 8.52729 1.26366 9.74361C1.91197 10.6841 2.80887 11.5931 3.92937 12.4454C5.809 13.8753 7.66475 14.6543 7.74285 14.6867L7.99806 14.7928L8.25384 14.6881C8.33199 14.6562 10.1889 13.8882 12.0696 12.4635C13.1907 11.6142 14.0881 10.7054 14.7367 9.7625C15.575 8.54385 16 7.26577 16 5.96371C16 3.341 13.8663 1.20728 11.2437 1.20728ZM8.00141 13.3353C6.74962 12.7555 1.33966 10.0142 1.33966 5.96366C1.33966 4.07969 2.87237 2.54698 4.75634 2.54698C5.827 2.54698 6.81558 3.03502 7.46862 3.88598L8.00002 4.57845L8.53142 3.88598C9.18446 3.03502 10.173 2.54698 11.2437 2.54698C13.1276 2.54698 14.6604 4.07969 14.6604 5.96366C14.6603 10.0433 9.25265 12.7613 8.00141 13.3353Z" fill="currentColor"/>
                                            </svg>

                                        </Link>
                                    </div>

                                    <Link to="course-single-v3.html" className="card-img sk-thumbnail d-block">
                                        <img className="rounded shadow-light-lg" src="assets/img/products/product-1.jpg" alt="..."/>
                                    </Link>

                                    <span className="badge sk-fade-bottom badge-lg badge-orange badge-pill badge-float bottom-0 left-0 mb-4 ms-4">
                                        <span className="text-white text-uppercase fw-bold font-size-xs">BEST SELLER</span>
                                    </span>
                                </div>

                                {/* <!-- Footer --> */}
                                <div className="card-footer px-2 pb-2 mb-1 pt-4 position-relative">
                                    <Link to="instructors-single.html" className="d-block">
                                        <div className="avatar sk-fade-right avatar-xl badge-float position-absolute top-0 right-0 mt-n6 me-5 rounded-circle shadow border border-white border-w-lg">
                                            <img src="assets/img/avatars/avatar-1.jpg" alt="..." className="avatar-img rounded-circle"/>
                                        </div>
                                    </Link>

                                    {/* <!-- Preheading --> */}
                                    <Link to="course-single-v3.html"><span className="mb-1 d-inline-block text-gray-800">Photography</span></Link>

                                    {/* <!-- Heading --> */}
                                    <div className="position-relative">
                                        <Link to="course-single-v3.html" className="d-block stretched-link"><h4 className="line-clamp-2 h-md-48 h-lg-58 me-md-6 me-lg-10 me-xl-4 mb-2">Fashion Photography From Professional</h4></Link>

                                        <div className="d-lg-flex align-items-end flex-wrap mb-n1">
                                            <div className="star-rating mb-2 mb-lg-0 me-lg-3">
                                                <div className="rating" style={{width:'50%'}}></div>
                                            </div>

                                            <div className="font-size-sm">
                                                <span>5.45 (5.8k+ reviews)</span>
                                            </div>
                                        </div>

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
                                                    <li className="nav-item px-3">
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-2 d-flex icon-uxs text-secondary">
                                                                {/* <!-- Icon --> */}
                                                                <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M14.3164 4.20996C13.985 4.37028 13.8464 4.76904 14.0067 5.10026C14.4447 6.00505 14.6667 6.98031 14.6667 8C14.6667 11.6759 11.6759 14.6667 8 14.6667C4.32406 14.6667 1.33333 11.6759 1.33333 8C1.33333 4.32406 4.32406 1.33333 8 1.33333C9.52328 1.33333 10.9543 1.83073 12.1387 2.77165C12.4259 3.00098 12.846 2.95296 13.0754 2.66471C13.3047 2.37663 13.2567 1.95703 12.9683 1.72803C11.5661 0.613607 9.8016 0 8 0C3.58903 0 0 3.58903 0 8C0 12.411 3.58903 16 8 16C12.411 16 16 12.411 16 8C16 6.77767 15.7331 5.60628 15.2067 4.51969C15.0467 4.18766 14.6466 4.04932 14.3164 4.20996Z" fill="currentColor"/>
                                                                    <path d="M7.99967 2.66663C7.63167 2.66663 7.33301 2.96529 7.33301 3.33329V7.99996C7.33301 8.36796 7.63167 8.66663 7.99967 8.66663H11.333C11.701 8.66663 11.9997 8.36796 11.9997 7.99996C11.9997 7.63196 11.701 7.33329 11.333 7.33329H8.66634V3.33329C8.66634 2.96529 8.36768 2.66663 7.99967 2.66663Z" fill="currentColor"/>
                                                                </svg>

                                                            </div>
                                                            <div className="font-size-sm">8h 12m</div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="col-auto px-2 text-right">
                                                <del className="font-size-sm">$959</del>
                                                <ins className="h4 mb-0 d-block mb-lg-n1">$415.99</ins>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md pb-4 pb-md-7">
                            {/* <!-- Card --> */}
                            <div className="card border shadow p-2 lift sk-fade">
                                {/* <!-- Image --> */}
                                <div className="card-zoom position-relative">
                                    <Link to="course-single-v3.html" className="card-img sk-thumbnail d-block">
                                        <img className="rounded shadow-light-lg" src="assets/img/products/product-2.jpg" alt="..."/>
                                    </Link>
                                </div>

                                {/* <!-- Footer --> */}
                                <div className="card-footer px-2 pb-2 mb-1 pt-4 position-relative">
                                    <Link to="instructors-single.html" className="">
                                        <div className="avatar avatar-xl sk-fade-right badge-float position-absolute top-0 right-0 mt-n6 me-5 rounded-circle shadow border border-white border-w-lg">
                                            <img src="assets/img/avatars/avatar-2.jpg" alt="..." className="avatar-img rounded-circle"/>
                                        </div>
                                    </Link>

                                    {/* <!-- Preheading --> */}
                                    <Link to="course-single-v3.html"><span className="mb-1 d-inline-block text-gray-800">Development</span></Link>

                                    {/* <!-- Heading --> */}
                                    <div className="position-relative">
                                        <Link to="course-single-v3.html" className="d-block stretched-link"><h4 className="line-clamp-2 h-md-48 h-lg-58 me-md-6 me-lg-10 me-xl-4 mb-2">The Complete JavaScript Course 2020: Build Real Projects!</h4></Link>

                                        <div className="d-lg-flex align-items-end flex-wrap mb-n1">
                                            <div className="star-rating mb-2 mb-lg-0 me-lg-3">
                                                <div className="rating" style={{width:'50%'}}></div>
                                            </div>

                                            <div className="font-size-sm">
                                                <span>5.45 (5.8k+ reviews)</span>
                                            </div>
                                        </div>

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
                                                    <li className="nav-item px-3">
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-2 d-flex icon-uxs text-secondary">
                                                                {/* <!-- Icon --> */}
                                                                <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M14.3164 4.20996C13.985 4.37028 13.8464 4.76904 14.0067 5.10026C14.4447 6.00505 14.6667 6.98031 14.6667 8C14.6667 11.6759 11.6759 14.6667 8 14.6667C4.32406 14.6667 1.33333 11.6759 1.33333 8C1.33333 4.32406 4.32406 1.33333 8 1.33333C9.52328 1.33333 10.9543 1.83073 12.1387 2.77165C12.4259 3.00098 12.846 2.95296 13.0754 2.66471C13.3047 2.37663 13.2567 1.95703 12.9683 1.72803C11.5661 0.613607 9.8016 0 8 0C3.58903 0 0 3.58903 0 8C0 12.411 3.58903 16 8 16C12.411 16 16 12.411 16 8C16 6.77767 15.7331 5.60628 15.2067 4.51969C15.0467 4.18766 14.6466 4.04932 14.3164 4.20996Z" fill="currentColor"/>
                                                                    <path d="M7.99967 2.66663C7.63167 2.66663 7.33301 2.96529 7.33301 3.33329V7.99996C7.33301 8.36796 7.63167 8.66663 7.99967 8.66663H11.333C11.701 8.66663 11.9997 8.36796 11.9997 7.99996C11.9997 7.63196 11.701 7.33329 11.333 7.33329H8.66634V3.33329C8.66634 2.96529 8.36768 2.66663 7.99967 2.66663Z" fill="currentColor"/>
                                                                </svg>

                                                            </div>
                                                            <div className="font-size-sm">8h 12m</div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="col-auto px-2 text-right">
                                                <del className="font-size-sm">$959</del>
                                                <ins className="h4 mb-0 d-block mb-lg-n1">$21.99</ins>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md pb-4 pb-md-7">
                            {/* <!-- Card --> */}
                            <div className="card border shadow p-2 lift sk-fade">
                                {/* <!-- Image --> */}
                                <div className="card-zoom position-relative">
                                    <Link to="course-single-v3.html" className="card-img sk-thumbnail d-block">
                                        <img className="rounded shadow-light-lg" src="assets/img/products/product-3.jpg" alt="..."/>
                                    </Link>

                                    <span className="badge sk-fade-bottom badge-lg badge-purple badge-pill badge-float bottom-0 left-0 mb-4 ms-4">
                                        <span className="text-white text-uppercase fw-bold font-size-xs">Featured</span>
                                    </span>
                                </div>

                                {/* <!-- Footer --> */}
                                <div className="card-footer px-2 pb-2 mb-1 pt-4 position-relative">
                                    <Link to="instructors-single.html" className="">
                                        <div className="avatar avatar-xl sk-fade-right badge-float position-absolute top-0 right-0 mt-n6 me-5 rounded-circle shadow border border-white border-w-lg">
                                            <img src="assets/img/avatars/avatar-3.jpg" alt="..." className="avatar-img rounded-circle"/>
                                        </div>
                                    </Link>

                                    {/* <!-- Preheading --> */}
                                    <Link to="course-single-v3.html"><span className="mb-1 d-inline-block text-gray-800">Photography</span></Link>

                                    {/* <!-- Heading --> */}
                                    <div className="position-relative">
                                        <Link to="course-single-v3.html" className="d-block stretched-link"><h4 className="line-clamp-2 h-md-48 h-lg-58 me-md-6 me-lg-10 me-xl-4 mb-2">Learn Figma: User Interface Design Essentials - UI/UX Design</h4></Link>

                                        <div className="d-lg-flex align-items-end flex-wrap mb-n1">
                                            <div className="star-rating mb-2 mb-lg-0 me-lg-3">
                                                <div className="rating" style={{width:'50%'}}></div>
                                            </div>

                                            <div className="font-size-sm">
                                                <span>5.45 (5.8k+ reviews)</span>
                                            </div>
                                        </div>

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
                                                    <li className="nav-item px-3">
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-2 d-flex icon-uxs text-secondary">
                                                                {/* <!-- Icon --> */}
                                                                <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M14.3164 4.20996C13.985 4.37028 13.8464 4.76904 14.0067 5.10026C14.4447 6.00505 14.6667 6.98031 14.6667 8C14.6667 11.6759 11.6759 14.6667 8 14.6667C4.32406 14.6667 1.33333 11.6759 1.33333 8C1.33333 4.32406 4.32406 1.33333 8 1.33333C9.52328 1.33333 10.9543 1.83073 12.1387 2.77165C12.4259 3.00098 12.846 2.95296 13.0754 2.66471C13.3047 2.37663 13.2567 1.95703 12.9683 1.72803C11.5661 0.613607 9.8016 0 8 0C3.58903 0 0 3.58903 0 8C0 12.411 3.58903 16 8 16C12.411 16 16 12.411 16 8C16 6.77767 15.7331 5.60628 15.2067 4.51969C15.0467 4.18766 14.6466 4.04932 14.3164 4.20996Z" fill="currentColor"/>
                                                                    <path d="M7.99967 2.66663C7.63167 2.66663 7.33301 2.96529 7.33301 3.33329V7.99996C7.33301 8.36796 7.63167 8.66663 7.99967 8.66663H11.333C11.701 8.66663 11.9997 8.36796 11.9997 7.99996C11.9997 7.63196 11.701 7.33329 11.333 7.33329H8.66634V3.33329C8.66634 2.96529 8.36768 2.66663 7.99967 2.66663Z" fill="currentColor"/>
                                                                </svg>

                                                            </div>
                                                            <div className="font-size-sm">8h 12m</div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="col-auto px-2 text-right">
                                                <del className="font-size-sm">$959</del>
                                                <ins className="h4 mb-0 d-block mb-lg-n1">$129.99</ins>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md pb-4 pb-md-7">
                            {/* <!-- Card --> */}
                            <div className="card border shadow p-2 lift sk-fade">
                                {/* <!-- Image --> */}
                                <div className="card-zoom position-relative">
                                    <Link to="course-single-v3.html" className="card-img sk-thumbnail d-block">
                                        <img className="rounded shadow-light-lg" src="assets/img/products/product-4.jpg" alt="..."/>
                                    </Link>
                                </div>

                                {/* <!-- Footer --> */}
                                <div className="card-footer px-2 pb-2 mb-1 pt-4 position-relative">
                                    <Link to="instructors-single.html" className="">
                                        <div className="avatar avatar-xl sk-fade-right badge-float position-absolute top-0 right-0 mt-n6 me-5 rounded-circle shadow border border-white border-w-lg">
                                            <img src="assets/img/avatars/avatar-3.jpg" alt="..." className="avatar-img rounded-circle"/>
                                        </div>
                                    </Link>

                                    {/* <!-- Preheading --> */}
                                    <Link to="course-single-v3.html"><span className="mb-1 d-inline-block text-gray-800">Photography</span></Link>

                                    {/* <!-- Heading --> */}
                                    <div className="position-relative">
                                        <Link to="course-single-v3.html" className="d-block stretched-link"><h4 className="line-clamp-2 h-md-48 h-lg-58 me-md-6 me-lg-10 me-xl-4 mb-2">The Complete Financial Analyst Course 2020</h4></Link>

                                        <div className="d-lg-flex align-items-end flex-wrap mb-n1">
                                            <div className="star-rating mb-2 mb-lg-0 me-lg-3">
                                                <div className="rating" style={{width:'50%'}}></div>
                                            </div>

                                            <div className="font-size-sm">
                                                <span>5.45 (5.8k+ reviews)</span>
                                            </div>
                                        </div>

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
                                                    <li className="nav-item px-3">
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-2 d-flex icon-uxs text-secondary">
                                                                {/* <!-- Icon --> */}
                                                                <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M14.3164 4.20996C13.985 4.37028 13.8464 4.76904 14.0067 5.10026C14.4447 6.00505 14.6667 6.98031 14.6667 8C14.6667 11.6759 11.6759 14.6667 8 14.6667C4.32406 14.6667 1.33333 11.6759 1.33333 8C1.33333 4.32406 4.32406 1.33333 8 1.33333C9.52328 1.33333 10.9543 1.83073 12.1387 2.77165C12.4259 3.00098 12.846 2.95296 13.0754 2.66471C13.3047 2.37663 13.2567 1.95703 12.9683 1.72803C11.5661 0.613607 9.8016 0 8 0C3.58903 0 0 3.58903 0 8C0 12.411 3.58903 16 8 16C12.411 16 16 12.411 16 8C16 6.77767 15.7331 5.60628 15.2067 4.51969C15.0467 4.18766 14.6466 4.04932 14.3164 4.20996Z" fill="currentColor"/>
                                                                    <path d="M7.99967 2.66663C7.63167 2.66663 7.33301 2.96529 7.33301 3.33329V7.99996C7.33301 8.36796 7.63167 8.66663 7.99967 8.66663H11.333C11.701 8.66663 11.9997 8.36796 11.9997 7.99996C11.9997 7.63196 11.701 7.33329 11.333 7.33329H8.66634V3.33329C8.66634 2.96529 8.36768 2.66663 7.99967 2.66663Z" fill="currentColor"/>
                                                                </svg>

                                                            </div>
                                                            <div className="font-size-sm">8h 12m</div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="col-auto px-2 text-right">
                                                <del className="font-size-sm">$959</del>
                                                <ins className="h4 mb-0 d-block mb-lg-n1">$415.99</ins>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md pb-4 pb-md-7">
                            {/* <!-- Card --> */}
                            <div className="card border shadow p-2 lift sk-fade">
                                {/* <!-- Image --> */}
                                <div className="card-zoom position-relative">
                                    <Link to="course-single-v3.html" className="card-img sk-thumbnail d-block">
                                        <img className="rounded shadow-light-lg" src="assets/img/products/product-5.jpg" alt="..."/>
                                    </Link>
                                </div>

                                {/* <!-- Footer --> */}
                                <div className="card-footer px-2 pb-2 mb-1 pt-4 position-relative">
                                    <Link to="instructors-single.html" className="">
                                        <div className="avatar avatar-xl sk-fade-right badge-float position-absolute top-0 right-0 mt-n6 me-5 rounded-circle shadow border border-white border-w-lg">
                                            <img src="assets/img/avatars/avatar-1.jpg" alt="..." className="avatar-img rounded-circle"/>
                                        </div>
                                    </Link>

                                    {/* <!-- Preheading --> */}
                                    <Link to="course-single-v3.html"><span className="mb-1 d-inline-block text-gray-800">Photography</span></Link>

                                    {/* <!-- Heading --> */}
                                    <div className="position-relative">
                                        <Link to="course-single-v3.html" className="d-block stretched-link"><h4 className="line-clamp-2 h-md-48 h-lg-58 me-md-6 me-lg-10 me-xl-4 mb-2">Fashion Photography From Professional</h4></Link>

                                        <div className="d-lg-flex align-items-end flex-wrap mb-n1">
                                            <div className="star-rating mb-2 mb-lg-0 me-lg-3">
                                                <div className="rating" style={{width:'50%'}}></div>
                                            </div>

                                            <div className="font-size-sm">
                                                <span>5.45 (5.8k+ reviews)</span>
                                            </div>
                                        </div>

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
                                                    <li className="nav-item px-3">
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-2 d-flex icon-uxs text-secondary">
                                                                {/* <!-- Icon --> */}
                                                                <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M14.3164 4.20996C13.985 4.37028 13.8464 4.76904 14.0067 5.10026C14.4447 6.00505 14.6667 6.98031 14.6667 8C14.6667 11.6759 11.6759 14.6667 8 14.6667C4.32406 14.6667 1.33333 11.6759 1.33333 8C1.33333 4.32406 4.32406 1.33333 8 1.33333C9.52328 1.33333 10.9543 1.83073 12.1387 2.77165C12.4259 3.00098 12.846 2.95296 13.0754 2.66471C13.3047 2.37663 13.2567 1.95703 12.9683 1.72803C11.5661 0.613607 9.8016 0 8 0C3.58903 0 0 3.58903 0 8C0 12.411 3.58903 16 8 16C12.411 16 16 12.411 16 8C16 6.77767 15.7331 5.60628 15.2067 4.51969C15.0467 4.18766 14.6466 4.04932 14.3164 4.20996Z" fill="currentColor"/>
                                                                    <path d="M7.99967 2.66663C7.63167 2.66663 7.33301 2.96529 7.33301 3.33329V7.99996C7.33301 8.36796 7.63167 8.66663 7.99967 8.66663H11.333C11.701 8.66663 11.9997 8.36796 11.9997 7.99996C11.9997 7.63196 11.701 7.33329 11.333 7.33329H8.66634V3.33329C8.66634 2.96529 8.36768 2.66663 7.99967 2.66663Z" fill="currentColor"/>
                                                                </svg>

                                                            </div>
                                                            <div className="font-size-sm">8h 12m</div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="col-auto px-2 text-right">
                                                <del className="font-size-sm">$959</del>
                                                <ins className="h4 mb-0 d-block mb-lg-n1">$415.99</ins>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md pb-4 pb-md-7">
                            {/* <!-- Card --> */}
                            <div className="card border shadow p-2 lift sk-fade">
                                {/* <!-- Image --> */}
                                <div className="card-zoom position-relative">
                                    <Link to="course-single-v3.html" className="card-img sk-thumbnail d-block">
                                        <img className="rounded shadow-light-lg" src="assets/img/products/product-6.jpg" alt="..."/>
                                    </Link>
                                </div>

                                {/* <!-- Footer --> */}
                                <div className="card-footer px-2 pb-2 mb-1 pt-4 position-relative">
                                    <Link to="instructors-single.html" className="">
                                        <div className="avatar avatar-xl sk-fade-right badge-float position-absolute top-0 right-0 mt-n6 me-5 rounded-circle shadow border border-white border-w-lg">
                                            <img src="assets/img/avatars/avatar-5.jpg" alt="..." className="avatar-img rounded-circle"/>
                                        </div>
                                    </Link>

                                    {/* <!-- Preheading --> */}
                                    <Link to="course-single-v3.html"><span className="mb-1 d-inline-block text-gray-800">Photography</span></Link>

                                    {/* <!-- Heading --> */}
                                    <div className="position-relative">
                                        <Link to="course-single-v3.html" className="d-block stretched-link"><h4 className="line-clamp-2 h-md-48 h-lg-58 me-md-6 me-lg-10 me-xl-4 mb-2">Learn Figma: User Interface Design Essentials - UI/UX Design</h4></Link>

                                        <div className="d-lg-flex align-items-end flex-wrap mb-n1">
                                            <div className="star-rating mb-2 mb-lg-0 me-lg-3">
                                                <div className="rating" style={{width:'50%'}}></div>
                                            </div>

                                            <div className="font-size-sm">
                                                <span>5.45 (5.8k+ reviews)</span>
                                            </div>
                                        </div>

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
                                                    <li className="nav-item px-3">
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-2 d-flex icon-uxs text-secondary">
                                                                {/* <!-- Icon --> */}
                                                                <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M14.3164 4.20996C13.985 4.37028 13.8464 4.76904 14.0067 5.10026C14.4447 6.00505 14.6667 6.98031 14.6667 8C14.6667 11.6759 11.6759 14.6667 8 14.6667C4.32406 14.6667 1.33333 11.6759 1.33333 8C1.33333 4.32406 4.32406 1.33333 8 1.33333C9.52328 1.33333 10.9543 1.83073 12.1387 2.77165C12.4259 3.00098 12.846 2.95296 13.0754 2.66471C13.3047 2.37663 13.2567 1.95703 12.9683 1.72803C11.5661 0.613607 9.8016 0 8 0C3.58903 0 0 3.58903 0 8C0 12.411 3.58903 16 8 16C12.411 16 16 12.411 16 8C16 6.77767 15.7331 5.60628 15.2067 4.51969C15.0467 4.18766 14.6466 4.04932 14.3164 4.20996Z" fill="currentColor"/>
                                                                    <path d="M7.99967 2.66663C7.63167 2.66663 7.33301 2.96529 7.33301 3.33329V7.99996C7.33301 8.36796 7.63167 8.66663 7.99967 8.66663H11.333C11.701 8.66663 11.9997 8.36796 11.9997 7.99996C11.9997 7.63196 11.701 7.33329 11.333 7.33329H8.66634V3.33329C8.66634 2.96529 8.36768 2.66663 7.99967 2.66663Z" fill="currentColor"/>
                                                                </svg>

                                                            </div>
                                                            <div className="font-size-sm">8h 12m</div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="col-auto px-2 text-right">
                                                <del className="font-size-sm">$959</del>
                                                <ins className="h4 mb-0 d-block mb-lg-n1">$129.99</ins>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <Link to="course-list-v4.html" className="d-inline-flex align-items-center fw-medium">
                            Browse All
                            <div className="ms-2 d-flex">
                                {/* <!-- Icon --> */}
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.7779 4.6098L3.32777 0.159755C3.22485 0.0567475 3.08745 0 2.94095 0C2.79445 0 2.65705 0.0567475 2.55412 0.159755L2.2264 0.487394C2.01315 0.700889 2.01315 1.04788 2.2264 1.26105L5.96328 4.99793L2.22225 8.73895C2.11933 8.84196 2.0625 8.97928 2.0625 9.1257C2.0625 9.27228 2.11933 9.4096 2.22225 9.51269L2.54998 9.84025C2.65298 9.94325 2.7903 10 2.9368 10C3.0833 10 3.2207 9.94325 3.32363 9.84025L7.7779 5.38614C7.88107 5.2828 7.93774 5.14484 7.93741 4.99817C7.93774 4.85094 7.88107 4.71305 7.7779 4.6098Z" fill="currentColor"/>
                                </svg>

                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FeaturedCourses;