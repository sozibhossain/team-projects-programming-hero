import React from 'react';

const BlogSingle = () => {
    return (
        <div>
          {/*    BLOG-SINGLE
    ================================================== */}
    <div className="container py-8 pt-lg-11">
        <div className="row">
            <div className="col-xl-8 mx-auto">
                <h1 className="text-capitalize">Keep your face always toward the sunshine - and shadows will fall behind you.</h1>

                <p className="me-xl-12">Master Figma app to get a job in UI Design, User Interface, User Experience design, Web Design & UX design.</p>

                <div className="d-md-flex align-items-center">
                    <div className="border rounded-circle d-inline-block mb-4 mb-md-0 me-4">
                        <div className="p-1">
                            <img src="assets/img/avatars/avatar-1.jpg" alt="..." className="rounded-circle" width="52" height="52"/>
                        </div>
                    </div>

                    <div className="mb-4 mb-md-0">
                        <a href="#" className="d-block"><h6 className="mb-0">Alison Dawn</h6></a>
                        <span className="font-size-sm">April 06, 2020</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="mb-8 sk-thumbnail img-ratio-7">
        <img src="assets/img/covers/cover-20.jpg" alt="..." className="img-fluid"/>
    </div>

    <div className="container">
        <div className="row mb-8 mb-md-12">
            <div className="col-xl-8 mx-auto">
                <h3 className="">Course Description</h3>
                <p className="mb-6 line-height-md">Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec. Quisque bibendum orci ac nibh facilisis, at malesuada orci congue. Nullam tempus sollicitudin cursus. Ut et adipiscing erat. Curabitur this is a text link libero tempus congue.</p>
                <p className="mb-6 line-height-md">Duis mattis laoreet neque, et ornare neque sollicitudin at. Proin sagittis dolor sed mi elementum pretium. Donec et justo ante. Vivamus egestas sodales est, eu rhoncus urna semper eu. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer tristique elit lobortis purus bibendum, quis dictum metus mattis. Phasellus posuere felis sed eros porttitor mattis. Curabitur massa magna, tempor in blandit id, porta in ligula. Aliquam laoreet nisl massa, at interdum mauris sollicitudin et.</p>

                <blockquote>
                    <p>Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec. Quisque bibendum orci ac nibh facilisis, at malesuada orci congue.
                        <cite>Luis Pickford</cite>
                    </p>
                </blockquote>

                <h3 className="mb-5">What you'll learn</h3>
                <div className="row row-cols-lg-2 mb-8">
                    <div className="col-md">
                        <ul className="list-style-v1 list-unstyled">
                            <li>Become a UI/UX designer.</li>
                            <li>You will be able to start earning money skills.</li>
                            <li>Build a UI project from beginning to end.</li>
                            <li>Work with colors & fonts.</li>
                            <li>You will create your own UI Kit.</li>
                        </ul>
                    </div>

                    <div className="col-md">
                        <ul className="list-style-v1 list-unstyled ms-xl-6">
                            <li>Build & test a complete mobile app.</li>
                            <li>Learn to design mobile apps & websites.</li>
                            <li>Design 3 different logos.</li>
                            <li>Create low-fidelity wireframe.</li>
                            <li>Downloadable exercise files.</li>
                        </ul>
                    </div>
                </div>

                <img src="assets/img/covers/cover-21.jpg" alt="..." className="img-fluid rounded mb-8"/>

                <h3 className="mb-5">Requirements</h3>
                <ul className="list-style-v2 list-unstyled mb-10">
                    <li>We do not require any previous experience or pre-defined skills to take this course. A great orientation would be enough to master UI/UX design.</li>
                    <li>A computer with a good internet connection.</li>
                    <li>Adobe Photoshop (OPTIONAL)</li>
                </ul>

                <div className="row mb-6 mb-md-10 align-items-center">
                    <div className="col-md-4 mb-5 mb-md-2">
                        <a href="#" className="text-teal fw-medium d-flex align-items-center">
                            {/* <!-- Icon --> */}
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.0283 6.25C14.3059 6.25 12.9033 4.84833 12.9033 3.125C12.9033 1.40167 14.3059 0 16.0283 0C17.7509 0 19.1533 1.40167 19.1533 3.125C19.1533 4.84833 17.7509 6.25 16.0283 6.25ZM16.0283 1.25C14.995 1.25 14.1533 2.09076 14.1533 3.125C14.1533 4.15924 14.995 5 16.0283 5C17.0616 5 17.9033 4.15924 17.9033 3.125C17.9033 2.09076 17.0616 1.25 16.0283 1.25Z" fill="currentColor"/>
                                <path d="M16.0283 20C14.3059 20 12.9033 18.5983 12.9033 16.875C12.9033 15.1517 14.3059 13.75 16.0283 13.75C17.7509 13.75 19.1533 15.1517 19.1533 16.875C19.1533 18.5983 17.7509 20 16.0283 20ZM16.0283 15C14.995 15 14.1533 15.8408 14.1533 16.875C14.1533 17.9092 14.995 18.75 16.0283 18.75C17.0616 18.75 17.9033 17.9092 17.9033 16.875C17.9033 15.8408 17.0616 15 16.0283 15Z" fill="currentColor"/>
                                <path d="M3.94531 13.125C2.22275 13.125 0.820312 11.7233 0.820312 10C0.820312 8.27667 2.22275 6.875 3.94531 6.875C5.66788 6.875 7.07031 8.27667 7.07031 10C7.07031 11.7233 5.66788 13.125 3.94531 13.125ZM3.94531 8.125C2.91199 8.125 2.07031 8.96576 2.07031 10C2.07031 11.0342 2.91199 11.875 3.94531 11.875C4.97864 11.875 5.82031 11.0342 5.82031 10C5.82031 8.96576 4.97864 8.125 3.94531 8.125Z" fill="currentColor"/>
                                <path d="M6.12066 9.39154C5.90307 9.39154 5.69143 9.27817 5.57729 9.0766C5.40639 8.77661 5.51061 8.39484 5.8106 8.22409L13.5431 3.81568C13.8422 3.64325 14.2247 3.74823 14.3947 4.04914C14.5656 4.34912 14.4614 4.73075 14.1614 4.90164L6.42888 9.30991C6.33138 9.36484 6.22564 9.39154 6.12066 9.39154Z" fill="currentColor"/>
                                <path d="M13.8524 16.2665C13.7475 16.2665 13.6416 16.2398 13.5441 16.1841L5.81151 11.7757C5.51152 11.6049 5.40745 11.2231 5.5782 10.9232C5.74818 10.6224 6.12996 10.5182 6.42994 10.6899L14.1623 15.0981C14.4623 15.269 14.5665 15.6506 14.3958 15.9506C14.2807 16.1531 14.0691 16.2665 13.8524 16.2665Z" fill="currentColor"/>
                            </svg>

                            <span className="ms-3">Share This Post</span>
                        </a>
                    </div>

                    <div className="col-md-8">
                        <a href="#" className="btn btn-sm btn-light text-gray-800 px-5 fw-normal me-1 mb-2">Course</a>
                        <a href="#" className="btn btn-sm btn-light text-gray-800 px-5 fw-normal me-1 mb-2">Timeline</a>
                        <a href="#" className="btn btn-sm btn-light text-gray-800 px-5 fw-normal me-1 mb-2">Moodle</a>
                        <a href="#" className="btn btn-sm btn-light text-gray-800 px-5 fw-normal me-1 mb-2">Best</a>
                        <a href="#" className="btn btn-sm btn-light text-gray-800 px-5 fw-normal me-1 mb-2">Info</a>
                    </div>
                </div>

                <h3 className="mb-6">Comment</h3>
                <ul className="list-unstyled pt-2">
                    <li className="media d-flex">
                        <div className="avatar avatar-xxl me-3 me-md-6 flex-shrink-0">
                            <img src="assets/img/avatars/avatar-1.jpg" alt="..." className="avatar-img rounded-circle"/>
                        </div>
                        <div className="media-body flex-shrink-1">
                            <div className="d-md-flex align-items-center mb-5">
                                <div className="me-auto mb-4 mb-md-0">
                                    <h5 className="mb-0">Oscar Cafeo</h5>
                                    <p className="font-size-sm font-italic">Beautiful courses</p>
                                </div>
                                <div className="star-rating">
                                    <div className="rating" style={{width:"100%"}}></div>
                                </div>
                            </div>
                            <p className="mb-6 line-height-md">This course was well organized and covered a lot more details than any other Figma courses. I really enjoy it. One suggestion is that it can be much better if we could complete the prototype together. Since we created 24 frames, I really want to test it on Figma mirror to see all the connections. Could you please let me take a look at the complete prototype?</p>
                        </div>
                    </li>
                    <li className="media d-flex">
                        <div className="avatar avatar-xxl me-3 me-md-6 flex-shrink-0">
                            <img src="assets/img/avatars/avatar-2.jpg" alt="..." className="avatar-img rounded-circle"/>
                        </div>
                        <div className="media-body flex-shrink-1">
                            <div className="d-md-flex align-items-center mb-5">
                                <div className="me-auto mb-4 mb-md-0">
                                    <h5 className="mb-0">Alex Morgan</h5>
                                    <p className="font-size-sm font-italic">Beautiful courses</p>
                                </div>
                                <div className="star-rating">
                                    <div className="rating" style={{width:"100%"}}></div>
                                </div>
                            </div>
                            <p className="mb-6 line-height-md">This course was well organized and covered a lot more details than any other Figma courses. I really enjoy it. One suggestion is that it can be much better if we could complete the prototype together. Since we created 24 frames, I really want to test it on Figma mirror to see all the connections. Could you please let me take a look at the complete prototype?</p>
                        </div>
                    </li>
                </ul>

                <div className="border shadow rounded p-6 p-md-9">
                    <h3 className="mb-2">Add Reviews & Rate</h3>
                    <div className="">What is it like to Course?</div>
                    <form>
                        <div className="clearfix">
                            <fieldset className="slect-rating mb-3">
                                <input type="radio" id="star5" name="rating" value="5" />
                                <label class = "full" for="star5" title="Awesome - 5 stars"></label>

                                <input type="radio" id="star4half" name="rating" value="4 and a half" />
                                <label className="half" for="star4half" title="Pretty good - 4.5 stars"></label>

                                <input type="radio" id="star4" name="rating" value="4" />
                                <label class = "full" for="star4" title="Pretty good - 4 stars"></label>

                                <input type="radio" id="star3half" name="rating" value="3 and a half" />
                                <label className="half" for="star3half" title="Meh - 3.5 stars"></label>

                                <input type="radio" id="star3" name="rating" value="3" />
                                <label class = "full" for="star3" title="Meh - 3 stars"></label>

                                <input type="radio" id="star2half" name="rating" value="2 and a half" />
                                <label className="half" for="star2half" title="Kinda bad - 2.5 stars"></label>

                                <input type="radio" id="star2" name="rating" value="2" />
                                <label class = "full" for="star2" title="Kinda bad - 2 stars"></label>

                                <input type="radio" id="star1half" name="rating" value="1 and a half" />
                                <label className="half" for="star1half" title="Meh - 1.5 stars"></label>

                                <input type="radio" id="star1" name="rating" value="1" />
                                <label class = "full" for="star1" title="Sucks big time - 1 star"></label>

                                <input type="radio" id="starhalf" name="rating" value="half" />
                                <label className="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
                            </fieldset>
                        </div>

                        <div className="form-group mb-6">
                            <label for="exampleInputTitle1">Review Title</label>
                            <input type="text" className="form-control placeholder-1" id="exampleInputTitle1" placeholder="Courses"/>
                        </div>

                        <div className="form-group mb-6">
                            <label for="exampleFormControlTextarea1">Review Content</label>
                            <textarea className="form-control placeholder-1" id="exampleFormControlTextarea1" rows="6" placeholder="Content"></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block mw-md-300p">SUBMIT REVIEW</button>
                    </form>
                </div>
            </div>
        </div>

        <div className="row align-items-end mb-4 mb-md-7">
            <div className="col-md mb-4 mb-md-0">
                <h1 className="mb-1">Latest News</h1>
                <p className="font-size-lg mb-0 text-capitalize">Discover your perfect program in our courses.</p>
            </div>
            <div className="col-md-auto">
                <a href="course-single-v1.html" className="d-flex align-items-center fw-medium">
                    Browse All
                    <div className="ms-2 d-flex">
                        {/* <!-- Icon --> */}
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.7779 4.6098L3.32777 0.159755C3.22485 0.0567475 3.08745 0 2.94095 0C2.79445 0 2.65705 0.0567475 2.55412 0.159755L2.2264 0.487394C2.01315 0.700889 2.01315 1.04788 2.2264 1.26105L5.96328 4.99793L2.22225 8.73895C2.11933 8.84196 2.0625 8.97928 2.0625 9.1257C2.0625 9.27228 2.11933 9.4096 2.22225 9.51269L2.54998 9.84025C2.65298 9.94325 2.7903 10 2.9368 10C3.0833 10 3.2207 9.94325 3.32363 9.84025L7.7779 5.38614C7.88107 5.2828 7.93774 5.14484 7.93741 4.99817C7.93774 4.85094 7.88107 4.71305 7.7779 4.6098Z" fill="currentColor"/>
                        </svg>

                    </div>
                </a>
            </div>
        </div>

        <div className="row row-cols-md-2 row-cols-lg-3 mb-8 mb-md-11">
            <div className="col-md mb-5 mb-lg-0">
                {/* <!-- Card --> */}
                <div className="card border shadow p-2 lift sk-fade">
                    {/* <!-- Image --> */}
                    <div className="card-zoom position-relative">
                        <a href="course-single-v1.html" className="card-img d-block sk-thumbnail img-ratio-3"><img className="rounded shadow-light-lg img-fluid" src="assets/img/post/post-1.jpg" alt="..."/></a>

                        <a href="course-single-v1.html" className="badge sk-fade-bottom badge-lg badge-purple badge-pill badge-float bottom-0 left-0 mb-4 ms-4 px-5 me-4">
                            <span className="text-white fw-normal font-size-sm">Figma</span>
                        </a>
                    </div>

                    {/* <!-- Footer --> */}
                    <div className="card-footer px-2 pb-0 pt-4">
                        <ul className="nav mx-n3 mb-3">
                            <li className="nav-item px-3">
                                <a href="course-single-v1.html" className="d-flex align-items-center text-gray-800">
                                    <div className="me-3 d-flex">
                                        {/* <!-- Icon --> */}
                                        <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.8102 9.52183C13.313 9.08501 12.7102 8.70758 12.0181 8.40008C11.7223 8.2687 11.3761 8.40191 11.2447 8.69762C11.1134 8.99334 11.2466 9.33952 11.5423 9.47102C12.1258 9.73034 12.6287 10.0436 13.0367 10.4021C13.5396 10.8441 13.8281 11.484 13.8281 12.1582V13.2422C13.8281 13.5653 13.5653 13.8281 13.2422 13.8281H1.75781C1.43475 13.8281 1.17188 13.5653 1.17188 13.2422V12.1582C1.17188 11.484 1.46038 10.8441 1.96335 10.4021C2.55535 9.88186 4.2802 8.67188 7.5 8.67188C9.89079 8.67188 11.8359 6.72672 11.8359 4.33594C11.8359 1.94515 9.89079 0 7.5 0C5.10921 0 3.16406 1.94515 3.16406 4.33594C3.16406 5.7336 3.82896 6.97872 4.85893 7.77214C2.97432 8.18642 1.80199 8.98384 1.18984 9.52183C0.433731 10.1862 0 11.147 0 12.1582V13.2422C0 14.2115 0.788498 15 1.75781 15H13.2422C14.2115 15 15 14.2115 15 13.2422V12.1582C15 11.147 14.5663 10.1862 13.8102 9.52183ZM4.33594 4.33594C4.33594 2.59129 5.75535 1.17188 7.5 1.17188C9.24465 1.17188 10.6641 2.59129 10.6641 4.33594C10.6641 6.08059 9.24465 7.5 7.5 7.5C5.75535 7.5 4.33594 6.08059 4.33594 4.33594Z" fill="currentColor"/>
                                        </svg>

                                    </div>
                                    <div className="font-size-sm">Jack Wilson</div>
                                </a>
                            </li>
                            <li className="nav-item px-3">
                                <a href="course-single-v1.html" className="d-flex align-items-center text-gray-800">
                                    <div className="me-2 d-flex">
                                        {/* <!-- Icon --> */}
                                        <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.0664 1.17188H11.7188V0.46875C11.7188 0.209883 11.5089 0 11.25 0C10.9911 0 10.7812 0.209883 10.7812 0.46875V1.17188H4.21875V0.46875C4.21875 0.209883 4.0089 0 3.75 0C3.4911 0 3.28125 0.209883 3.28125 0.46875V1.17188H1.93359C0.867393 1.17188 0 2.03927 0 3.10547V13.0664C0 14.1326 0.867393 15 1.93359 15H13.0664C14.1326 15 15 14.1326 15 13.0664V3.10547C15 2.03927 14.1326 1.17188 13.0664 1.17188ZM1.93359 2.10938H3.28125V2.57812C3.28125 2.83699 3.4911 3.04688 3.75 3.04688C4.0089 3.04688 4.21875 2.83699 4.21875 2.57812V2.10938H10.7812V2.57812C10.7812 2.83699 10.9911 3.04688 11.25 3.04688C11.5089 3.04688 11.7188 2.83699 11.7188 2.57812V2.10938H13.0664C13.6157 2.10938 14.0625 2.55621 14.0625 3.10547V4.21875H0.9375V3.10547C0.9375 2.55621 1.38434 2.10938 1.93359 2.10938ZM13.0664 14.0625H1.93359C1.38434 14.0625 0.9375 13.6157 0.9375 13.0664V5.15625H14.0625V13.0664C14.0625 13.6157 13.6157 14.0625 13.0664 14.0625Z" fill="currentColor"/>
                                        </svg>

                                    </div>
                                    <div className="font-size-sm">06 April, 2020</div>
                                </a>
                            </li>
                        </ul>

                        {/* <!-- Heading --> */}
                        <a href="course-single-v1.html" className="d-block"><h5 className="line-clamp-2 h-48 h-lg-52">The Best Destinations to Begin Your Round the World Trip</h5></a>
                    </div>
                </div>
            </div>

            <div className="col-md mb-5 mb-lg-0">
                {/* <!-- Card --> */}
                <div className="card border shadow p-2 lift sk-fade">
                    {/* <!-- Image --> */}
                    <div className="card-zoom position-relative">
                        <a href="course-single-v1.html" className="card-img d-block sk-thumbnail img-ratio-3"><img className="rounded shadow-light-lg img-fluid" src="assets/img/post/post-2.jpg" alt="..."/></a>

                        <a href="course-single-v1.html" className="badge sk-fade-bottom badge-lg badge-purple badge-pill badge-float bottom-0 left-0 mb-4 ms-4 px-5 me-4">
                            <span className="text-white fw-normal font-size-sm">Adobe XD</span>
                        </a>
                    </div>

                    {/* <!-- Footer --> */}
                    <div className="card-footer px-2 pb-0 pt-4">
                        <ul className="nav mx-n3 mb-3">
                            <li className="nav-item px-3">
                                <a href="course-single-v1.html" className="d-flex align-items-center text-gray-800">
                                    <div className="me-3 d-flex">
                                        {/* <!-- Icon --> */}
                                        <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.8102 9.52183C13.313 9.08501 12.7102 8.70758 12.0181 8.40008C11.7223 8.2687 11.3761 8.40191 11.2447 8.69762C11.1134 8.99334 11.2466 9.33952 11.5423 9.47102C12.1258 9.73034 12.6287 10.0436 13.0367 10.4021C13.5396 10.8441 13.8281 11.484 13.8281 12.1582V13.2422C13.8281 13.5653 13.5653 13.8281 13.2422 13.8281H1.75781C1.43475 13.8281 1.17188 13.5653 1.17188 13.2422V12.1582C1.17188 11.484 1.46038 10.8441 1.96335 10.4021C2.55535 9.88186 4.2802 8.67188 7.5 8.67188C9.89079 8.67188 11.8359 6.72672 11.8359 4.33594C11.8359 1.94515 9.89079 0 7.5 0C5.10921 0 3.16406 1.94515 3.16406 4.33594C3.16406 5.7336 3.82896 6.97872 4.85893 7.77214C2.97432 8.18642 1.80199 8.98384 1.18984 9.52183C0.433731 10.1862 0 11.147 0 12.1582V13.2422C0 14.2115 0.788498 15 1.75781 15H13.2422C14.2115 15 15 14.2115 15 13.2422V12.1582C15 11.147 14.5663 10.1862 13.8102 9.52183ZM4.33594 4.33594C4.33594 2.59129 5.75535 1.17188 7.5 1.17188C9.24465 1.17188 10.6641 2.59129 10.6641 4.33594C10.6641 6.08059 9.24465 7.5 7.5 7.5C5.75535 7.5 4.33594 6.08059 4.33594 4.33594Z" fill="currentColor"/>
                                        </svg>

                                    </div>
                                    <div className="font-size-sm">Jack Wilson</div>
                                </a>
                            </li>
                            <li className="nav-item px-3">
                                <a href="course-single-v1.html" className="d-flex align-items-center text-gray-800">
                                    <div className="me-2 d-flex">
                                        {/* <!-- Icon --> */}
                                        <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.0664 1.17188H11.7188V0.46875C11.7188 0.209883 11.5089 0 11.25 0C10.9911 0 10.7812 0.209883 10.7812 0.46875V1.17188H4.21875V0.46875C4.21875 0.209883 4.0089 0 3.75 0C3.4911 0 3.28125 0.209883 3.28125 0.46875V1.17188H1.93359C0.867393 1.17188 0 2.03927 0 3.10547V13.0664C0 14.1326 0.867393 15 1.93359 15H13.0664C14.1326 15 15 14.1326 15 13.0664V3.10547C15 2.03927 14.1326 1.17188 13.0664 1.17188ZM1.93359 2.10938H3.28125V2.57812C3.28125 2.83699 3.4911 3.04688 3.75 3.04688C4.0089 3.04688 4.21875 2.83699 4.21875 2.57812V2.10938H10.7812V2.57812C10.7812 2.83699 10.9911 3.04688 11.25 3.04688C11.5089 3.04688 11.7188 2.83699 11.7188 2.57812V2.10938H13.0664C13.6157 2.10938 14.0625 2.55621 14.0625 3.10547V4.21875H0.9375V3.10547C0.9375 2.55621 1.38434 2.10938 1.93359 2.10938ZM13.0664 14.0625H1.93359C1.38434 14.0625 0.9375 13.6157 0.9375 13.0664V5.15625H14.0625V13.0664C14.0625 13.6157 13.6157 14.0625 13.0664 14.0625Z" fill="currentColor"/>
                                        </svg>

                                    </div>
                                    <div className="font-size-sm">06 April, 2020</div>
                                </a>
                            </li>
                        </ul>

                        {/* <!-- Heading --> */}
                        <a href="course-single-v1.html" className="d-block"><h5 className="line-clamp-2 h-48 h-lg-52">An Indigenous Anatolian Syllabic Script From 3500 Years Ago</h5></a>
                    </div>
                </div>
            </div>

            <div className="col-md mb-5 mb-lg-0">
                {/* <!-- Card --> */}
                <div className="card border shadow p-2 lift sk-fade">
                    {/* <!-- Image --> */}
                    <div className="card-zoom position-relative">
                        <a href="course-single-v1.html" className="card-img d-block sk-thumbnail img-ratio-3"><img className="rounded shadow-light-lg img-fluid" src="assets/img/post/post-3.jpg" alt="..."/></a>

                        <a href="course-single-v1.html" className="badge badge-lg sk-fade-bottom badge-purple badge-pill badge-float bottom-0 left-0 mb-4 ms-4 px-5 me-4">
                            <span className="text-white fw-normal font-size-sm">Photoshop</span>
                        </a>
                    </div>

                    {/* <!-- Footer --> */}
                    <div className="card-footer px-2 pb-0 pt-4">
                        <ul className="nav mx-n3 mb-3">
                            <li className="nav-item px-3">
                                <a href="course-single-v1.html" className="d-flex align-items-center text-gray-800">
                                    <div className="me-3 d-flex">
                                        {/* <!-- Icon --> */}
                                        <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.8102 9.52183C13.313 9.08501 12.7102 8.70758 12.0181 8.40008C11.7223 8.2687 11.3761 8.40191 11.2447 8.69762C11.1134 8.99334 11.2466 9.33952 11.5423 9.47102C12.1258 9.73034 12.6287 10.0436 13.0367 10.4021C13.5396 10.8441 13.8281 11.484 13.8281 12.1582V13.2422C13.8281 13.5653 13.5653 13.8281 13.2422 13.8281H1.75781C1.43475 13.8281 1.17188 13.5653 1.17188 13.2422V12.1582C1.17188 11.484 1.46038 10.8441 1.96335 10.4021C2.55535 9.88186 4.2802 8.67188 7.5 8.67188C9.89079 8.67188 11.8359 6.72672 11.8359 4.33594C11.8359 1.94515 9.89079 0 7.5 0C5.10921 0 3.16406 1.94515 3.16406 4.33594C3.16406 5.7336 3.82896 6.97872 4.85893 7.77214C2.97432 8.18642 1.80199 8.98384 1.18984 9.52183C0.433731 10.1862 0 11.147 0 12.1582V13.2422C0 14.2115 0.788498 15 1.75781 15H13.2422C14.2115 15 15 14.2115 15 13.2422V12.1582C15 11.147 14.5663 10.1862 13.8102 9.52183ZM4.33594 4.33594C4.33594 2.59129 5.75535 1.17188 7.5 1.17188C9.24465 1.17188 10.6641 2.59129 10.6641 4.33594C10.6641 6.08059 9.24465 7.5 7.5 7.5C5.75535 7.5 4.33594 6.08059 4.33594 4.33594Z" fill="currentColor"/>
                                        </svg>

                                    </div>
                                    <div className="font-size-sm">Jack Wilson</div>
                                </a>
                            </li>
                            <li className="nav-item px-3">
                                <a href="course-single-v1.html" className="d-flex align-items-center text-gray-800">
                                    <div className="me-2 d-flex">
                                        {/* <!-- Icon --> */}
                                        <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.0664 1.17188H11.7188V0.46875C11.7188 0.209883 11.5089 0 11.25 0C10.9911 0 10.7812 0.209883 10.7812 0.46875V1.17188H4.21875V0.46875C4.21875 0.209883 4.0089 0 3.75 0C3.4911 0 3.28125 0.209883 3.28125 0.46875V1.17188H1.93359C0.867393 1.17188 0 2.03927 0 3.10547V13.0664C0 14.1326 0.867393 15 1.93359 15H13.0664C14.1326 15 15 14.1326 15 13.0664V3.10547C15 2.03927 14.1326 1.17188 13.0664 1.17188ZM1.93359 2.10938H3.28125V2.57812C3.28125 2.83699 3.4911 3.04688 3.75 3.04688C4.0089 3.04688 4.21875 2.83699 4.21875 2.57812V2.10938H10.7812V2.57812C10.7812 2.83699 10.9911 3.04688 11.25 3.04688C11.5089 3.04688 11.7188 2.83699 11.7188 2.57812V2.10938H13.0664C13.6157 2.10938 14.0625 2.55621 14.0625 3.10547V4.21875H0.9375V3.10547C0.9375 2.55621 1.38434 2.10938 1.93359 2.10938ZM13.0664 14.0625H1.93359C1.38434 14.0625 0.9375 13.6157 0.9375 13.0664V5.15625H14.0625V13.0664C14.0625 13.6157 13.6157 14.0625 13.0664 14.0625Z" fill="currentColor"/>
                                        </svg>

                                    </div>
                                    <div className="font-size-sm">06 April, 2020</div>
                                </a>
                            </li>
                        </ul>

                        {/* <!-- Heading --> */}
                        <a href="course-single-v1.html" className="d-block"><h5 className="line-clamp-2 h-48 h-lg-52">10 Best Countries to Visit for Beginner Travelers</h5></a>
                    </div>
                </div>
            </div>
        </div>
    </div>

        </div>
    );
};

export default BlogSingle;