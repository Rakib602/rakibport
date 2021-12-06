import React from 'react';
import { Col, Row } from 'react-bootstrap';
import '../AboutMe/Aboutme.css';

import Typical from 'react-typical';
const Aboutme = () => {
    return (
        <div className="about-body" id="about">
        <div className="container">
                <Row className="about" data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom">
                <h3 className="text-success"><u>About Me</u></h3>
                    <Col xs={12} md={12} lg={6}>
                    <img src="https://i.ibb.co/cJyR2TG/New-Project-3-removebg-preview.png" alt="" className="img-fluid" />
                </Col>
                    <Col xs={12} md={12} lg={6} className="about-text"  >
                    <h3>Hello I am Rakib</h3>
                    <h5>
                        <Typical className="typeeffect"
                            steps={['I am a', 1000, 'I am a Font-end developer', 500, 'I am a App developer', 500]}
                            loop={Infinity}
                        />
                    </h5>
                    <p>as a Font-end Web developer. I am able to build a Web presence from the ground up - from concept, navigation, layout. Skilled in Front End technologies such as Html5 , Css3 , JavaScript , React , BootStrap, Material UI, and I also know Back End technologies such as Node.JS, Express JS and MongoDb. Learning a new scripting languages and problem solving is one of my strengths. I am also a hard worker and team player. I am looking for a challenging opportunity that will enable me to use my skills and abilities to achieve a challenging goal.
                    </p>
                </Col>
                
            </Row>
            </div>
        </div>
    );
};

export default Aboutme;