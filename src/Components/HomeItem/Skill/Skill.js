import React from 'react';
import { Col, Row } from 'react-bootstrap';
import '../Skill/Skill.css';

const Skill = () => {
    return (
        <div className="skillbody">
        <div className="container">
            <h3 className="pb-3">My Skills</h3>
            <Row>
                    <Col xs={12} md={12} lg={6} data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="300"
                        data-aos-offset="0">
                    <h4>My creative skills</h4>
                    <p>As Font-end Web developer. I am able to build a Web presence from the ground up - from concept, navigation, layout. Skilled in Front End technologies such as Html5 , Css3 , JavaScript , React , BootStrap, Material UI, and I also know Back End technologies such as Node.JS, Express JS and MongoDb.</p>
                </Col>

                    <Col xs={12} md={12} lg={6} data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                    <div className="bars">
                        <div className="info">
                            <span>HTML</span>
                            <span>80%</span>
                        </div>
                        <div className=" htmlline"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>CSS</span>
                            <span>60%</span>
                        </div>
                        <div className="cssline"></div>
                    </div>
                    <div className="bars" >
                        <div className="info" >
                            <span>JavaScript</span>
                            <span>50%</span>
                        </div>
                        <div className="jsline"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>React JS</span>
                            <span>60%</span>
                        </div>
                        <div className="reactline"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>MongoDB</span>
                            <span>50%</span>
                        </div>
                        <div className="mongoline"></div>
                    </div>
                </Col>
            </Row>
            </div>
        </div>
    );
};

export default Skill;