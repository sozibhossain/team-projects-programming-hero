import React from 'react';
import Categories from './Categories';
import FeaturedCourses from './FeaturedCourses';
import Hero from './Hero';

const Home = () => {
    return (
        <>
           <Hero></Hero>
           <Categories></Categories>
           <FeaturedCourses/>
        </>
    );
};

export default Home;