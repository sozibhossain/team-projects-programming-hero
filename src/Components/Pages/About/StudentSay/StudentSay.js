import React from 'react';

const StudentSay = () => {
    return (
        <>
            <section className="pt-5 pt-md-11 pb-9">
                <div className="container">
                    <div className="text-center mb-2" data-aos="fade-up">
                        <h1>What our students have to say</h1>
                        <p className="font-size-lg text-capitalize mb-0">Discover your perfect program in our courses.</p>
                    </div>

                    <div className="mx-n4" data-flickity='{"pageDots": true, "prevNextButtons": false, "cellAlign": "left", "wrapAround": true, "imagesLoaded": true}'>
                        <div className="col-md-6 col-xl-4 py-md-7 py-3" data-aos="fade-up" data-aos-delay="50" style={{paddingRight:'15px',paddingLeft:'15px'}}>
                            {/* <!-- Card --> */}
                            <div className="card border shadow p-6 lift-md">
                                {/* <!-- Image --> */}
                                <div className="card-zoom">
                                    <div className="d-flex align-items-center">
                                        <div className="avatar avatar-custom me-5">
                                            <img src="assets/img/avatars/avatar-1.jpg" alt="..." className="avatar-img rounded-circle"/>
                                        </div>
                                        <div className="media-body">
                                            <h5 className="mb-0">Albert Cole</h5>
                                            <span>Designer</span>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Footer --> */}
                                <div className="card-footer px-0 pb-0">
                                    <p className="mb-0 text-capitalize">“ I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends “</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-xl-4 py-md-7 py-3" data-aos="fade-up" data-aos-delay="100" style={{paddingRight:'15px',paddingLeft:'15px'}}>
                            {/* <!-- Card --> */}
                            <div className="card border shadow p-6 lift-md">
                                {/* <!-- Image --> */}
                                <div className="card-zoom">
                                    <div className="d-flex align-items-center">
                                        <div className="avatar avatar-custom me-5">
                                            <img src="assets/img/avatars/avatar-2.jpg" alt="..." className="avatar-img rounded-circle"/>
                                        </div>
                                        <div className="media-body">
                                            <h5 className="mb-0">Alison Dawn</h5>
                                            <span>WordPress Developer</span>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Footer --> */}
                                <div className="card-footer px-0 pb-0">
                                    <p className="mb-0 text-capitalize">“ I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends “</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-xl-4 py-md-7 py-3" data-aos="fade-up" data-aos-delay="150" style={{paddingRight:'15px',paddingLeft:'15px'}}>
                            {/* <!-- Card --> */}
                            <div className="card border shadow p-6 lift-md">
                                {/* <!-- Image --> */}
                                <div className="card-zoom">
                                    <div className="d-flex align-items-center">
                                        <div className="avatar avatar-custom me-5">
                                            <img src="assets/img/avatars/avatar-3.jpg" alt="..." className="avatar-img rounded-circle"/>
                                        </div>
                                        <div className="media-body">
                                            <h5 className="mb-0">Daniel Parker</h5>
                                            <span>Front-end Developer</span>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Footer --> */}
                                <div className="card-footer px-0 pb-0">
                                    <p className="mb-0 text-capitalize">“ I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends “</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-xl-4 py-md-7 py-3" data-aos="fade-up" data-aos-delay="200" style={{paddingRight:'15px',paddingLeft:'15px'}}>
                            {/* <!-- Card --> */}
                            <div className="card border shadow p-6 lift-md">
                                <div className="card-zoom">
                                    <div className="d-flex align-items-center">
                                        <div className="avatar avatar-custom me-5">
                                            <img src="assets/img/avatars/avatar-4.jpg" alt="..." className="avatar-img rounded-circle"/>
                                        </div>
                                        <div className="media-body">
                                            <h5 className="mb-0">Albert Cole</h5>
                                            <span>Designer</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-footer px-0 pb-0">
                                    <p className="mb-0 text-capitalize">“ I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends “</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default StudentSay;