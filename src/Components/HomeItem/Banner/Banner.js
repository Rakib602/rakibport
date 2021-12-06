import React from 'react';
import { Col, Row } from 'react-bootstrap';
import '../Banner/Banner.css';
import Typical from 'react-typical';
import Particles from "react-tsparticles";
import { ImFacebook2 } from 'react-icons/im';
import { ImGithub } from 'react-icons/im';
import { ImLinkedin } from 'react-icons/im';
const Banner = () => {
    const particlesInit = (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <div className="body">
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fpsLimit: 100,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: false,
                                
                            },
                            resize: true,
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.1,
                                size: 40,
                            },
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.1,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                value_area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.1,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            random: true,
                            value: 5,
                        },
                    },
                    detectRetina: true,
                }}
            />

        <div className="container">
            <Row >
                <Col xs={12} md={12} lg={6} className="banner-text" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                    <h3>Hi</h3>
                    <h1>I'm <span className="neonText">RAKIB HOSSAN</span></h1>
                    <h3>
                        <Typical className="typeeffect"
                            steps={['I am a', 1000, 'I am a Font-end developer', 500, 'I am a App developer', 500]}
                            loop={Infinity}
                        />
                   </h3>
                    <div className="social-link">
                        <div>
                            <a href="https://www.facebook.com/rakibhossain.hridoy/"> <ImFacebook2 size="30px" /></a>
                        </div>
                        <div>
                            <a href="https://github.com/Rakib602"> <ImGithub size="30px" /></a>
                        </div>
                        <div>
                        <a href="https://www.linkedin.com/in/rakibhossan410/"><ImLinkedin size="30px" /></a>
                    </div>
                    </div>

                        <button className="btn"> <a href="https://www.linkedin.com/in/rakibhossan410/"> HIRE ME </a></button>
                        <button className="btn2"> <a href="Resume.pdf" download="Resume of Rakib Hossan Redoy"> Download Resume </a></button>
                </Col>
                    <Col xs={12} md={12} lg={6} className="bg-img" data-aos="fade-left"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="500" >
                    <img src="https://i.ibb.co/vqPF5ts/New-Project-2-removebg-preview.png" alt="" className="img-fluid"/>
                </Col>
            </Row>
            </div>
        </div>

    );
};

export default Banner;