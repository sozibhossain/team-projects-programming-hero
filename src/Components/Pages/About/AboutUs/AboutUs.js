import React from 'react';
import AboutBanner from '../AboutBanner/AboutBanner';
import Band from '../Band/Band';
import OurStory from '../OurStory/OurStory';
import StudentSay from '../StudentSay/StudentSay';
import Subscribe from '../Subscribe/Subscribe';
import WhyStudy from '../WhyStudy/WhyStudy';

const AboutUs = () => {
    return (
        <div>
            <AboutBanner/>
            <OurStory/>
            <WhyStudy/>
            <StudentSay/>
            <Band/>
            <Subscribe/>
        </div>
    );
};

export default AboutUs;