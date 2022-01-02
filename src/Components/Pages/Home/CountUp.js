import React from 'react';

const CountUp = () => {
    return (
        <>
            <div className="pt-14 pt-md-15 pb-9 bg-white">
                <div className="container mt-5">
                    <div className="row w-xl-80 mx-xl-auto text-center">
                        <div className="col-md-3 mb-6 mb-md-0" data-aos="fade-up" data-aos-delay="50">
                            <div className="h1"><span data-toggle="countup" data-from="0" data-to="749" data-aos data-aos-id="countup:in"></span></div>
                            <p className="font-size-lg fw-medium mb-0">Creative Events</p>
                        </div>

                        <div className="col-md-3 mb-6 mb-md-0" data-aos="fade-up" data-aos-delay="100">
                            <div className="h1"><span data-toggle="countup" data-from="0" data-to="853" data-aos data-aos-id="countup:in"></span></div>
                            <p className="font-size-lg fw-medium mb-0">Skilled Tutors</p>
                        </div>

                        <div className="col-md-3 mb-6 mb-md-0" data-aos="fade-up" data-aos-delay="150">
                            <div className="h1"><span data-toggle="countup" data-from="0" data-to="28" data-aos data-aos-id="countup:in"></span>k+</div>
                            <p className="font-size-lg fw-medium mb-0">Online Courses</p>
                        </div>

                        <div className="col-md-3 mb-6 mb-md-0" data-aos="fade-up" data-aos-delay="200">
                            <div className="h1"><span data-toggle="countup" data-from="0" data-to="53" data-aos data-aos-id="countup:in"></span>k+</div>
                            <p className="font-size-lg fw-medium mb-0">People Worldwide</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CountUp;