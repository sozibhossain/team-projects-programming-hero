import React from 'react';

const Hero = () => {
    return (
        <>
        <section class="pt-12 pt-md-13 pt-xl-14 mt-n12  position-relative" data-jarallax data-speed={.8} style={{backgroundImage : "url(assets/img/illustrations/illustration-13.svg"}}>
     
            <div class="position-absolute right-0 left-0 top-0 bottom-0">
                <div class="cs-parallax">
                    <div class="cs-parallax-layer" data-depth="0.1">
                        <img class="img-fluid" src="assets/img/parallax/layer-11.svg" alt="Layer"/>
                    </div>
                    <div class="cs-parallax-layer" data-depth="0.3">
                        <img class="img-fluid" src="assets/img/parallax/layer-12.svg" alt="Layer"/>
                    </div>
                    <div class="cs-parallax-layer" data-depth="0.2">
                        <img class="img-fluid" src="assets/img/parallax/layer-13.svg" alt="Layer"/>
                    </div>
                    <div class="cs-parallax-layer" data-depth="0.2">
                        <img class="img-fluid" src="assets/img/parallax/layer-14.svg" alt="Layer"/>
                    </div>
                    <div class="cs-parallax-layer" data-depth="0.4">
                        <img class="img-fluid" src="assets/img/parallax/layer-15.svg" alt="Layer"/>
                    </div>
                    <div class="cs-parallax-layer" data-depth="0.3">
                        <img class="img-fluid" src="assets/img/parallax/layer-16.svg" alt="Layer"/>
                    </div>
                    <div class="cs-parallax-layer" data-depth="0.2">
                        <img class="img-fluid" src="assets/img/parallax/layer-17.svg" alt="Layer"/>
                    </div>
                    <div class="cs-parallax-layer" data-depth="0.2">
                        <img class="img-fluid" src="assets/img/parallax/layer-18.svg" alt="Layer"/>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-6 mx-auto text-center">
                        <h1 class="display-2 text-white" data-aos="fade-left" data-aos-duration="150">
                            Start Investing in <span class="text-orange fw-bold">You</span>
                        </h1>

                    
                        <p class="lead text-capitalize text-cyan px-lg-6 px-xl-4" data-aos="fade-up" data-aos-duration="200">Technology is bringing a massive wave of evolution on learning things in different ways.</p>

                    
                        <a href="course-list-v3.html" class="btn btn-helio btn-x-wide shadow mb-5 text-white mt-1" data-aos-duration="200" data-aos="fade-up">START A FREE TRIAL</a>

                    
                        <img src="assets/img/illustrations/illustration-2.png" class="img-fluid" alt="..." data-aos="fade-up"/>
                    </div>
                </div>
            </div> 
        </section>
        </>
    );
};

export default Hero;