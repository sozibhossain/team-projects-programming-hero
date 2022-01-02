import React from 'react';
import Categories from './Categories';
import CountUp from './CountUp';
import FeaturedCourses from './FeaturedCourses';
import Hero from './Hero';
import Instructors from './Instructors';
import Videio from './Videio';

const Home = () => {
    return (
        <>
           <Hero></Hero>
           <Categories></Categories>
           <FeaturedCourses/>
           <Videio/>
           <CountUp/>
           <Instructors/>
        </>
    );
};

export default Home;