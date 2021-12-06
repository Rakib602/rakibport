import React from 'react';

import Banner from '../Banner/Banner';
import Aboutme from '../../AboutMe/Aboutme';
import Skill from '../Skill/Skill';
import Projects from '../Projects/Projects';
import Contactme from '../Contactme/Contactme';
import '../Home/Home.css';

const Home = () => {
    return (
        <div id="home">
            
            <Banner></Banner>
            <Aboutme></Aboutme>
            <Skill></Skill>
            <Projects></Projects>
            <Contactme></Contactme>
            
        </div>
    );
};

export default Home;