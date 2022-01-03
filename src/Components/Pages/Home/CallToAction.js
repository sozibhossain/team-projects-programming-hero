import React from 'react';

const CallToAction = () => {
    return (
        <>
            <section className="py-6 py-md-11" data-jarallax data-speed=".8" style={{backgroundImage: 'url(assets/img/illustrations/illustration-4.jpg)'}}>
                <div className="container text-center py-xl-4" data-aos="fade-up">
                    <div className="row">
                        <div className="col-xl-7 mx-auto">
                            <h1 className="text-capitalize">Subscribe our newsletter</h1>
                            <p className="text-capitalize font-size-lg mb-md-6 mb-4">Your download should start automatically, if not Click here. Should I give up, huh?.</p>
                            <div className="mx-md-8">
                                <form>
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Enter your email" aria-label="Enter your email" aria-describedby="button-addon2"/>
                                        <div className="input-group-append">
                                            <button className="btn btn-helio btn-sm-wide text-white" type="button" id="button-addon2">Subscribe</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CallToAction;