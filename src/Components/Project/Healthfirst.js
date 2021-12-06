import React from 'react';
import { Carousel } from 'react-bootstrap';

import { CgWebsite } from 'react-icons/cg';
import { ImGithub } from 'react-icons/im';
const Healthfirst = () => {
    return (
        <div className="details-body">
            < div className="container">
                
                <div className="details-img">
                    <h4>Projects Picture</h4>
                    <Carousel fade>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://i.ibb.co/8BjZVH2/Health1.png"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://i.ibb.co/Nrx1r02/Health2.png"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://i.ibb.co/72T1hBv/Health3.png"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://i.ibb.co/sbdNKGF/Health4.png"
                                alt="Fourth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://i.ibb.co/VBx9BSP/Health5.png"
                                alt="Fifth slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="detail-text pt-4" data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom">
                    <h3 className="text-primary">Health-first</h3>
                   <div className="social-link">
                    <div >
                            <a href="https://health-first-9d04f.web.app/"> <CgWebsite size="30px" /> Live Site </a>
                    </div>
                    <div>
                            <a href="https://github.com/Rakib602/HealthFirst"> <ImGithub size="30px" /> Client site github </a>
                    </div>

                </div>
                    

                    <h5 className="text-success"> Tecnology used </h5>
                    <div className="tecnology">
                        <div className="border border-3 border-success px-3 py-2 m-3">React</div>
                        <div className="border border-3 border-success px-3 py-2 m-3">React router </div>
                        <div className="border border-3 border-success px-3 py-2 m-3">React Icon </div>
                        <div className="border border-3 border-success px-3 py-2 m-3"> Bootstrap 5 </div>
                        <div className="border border-3 border-success px-3 py-2 m-3"> React ratings</div>
                        <div className="border border-3 border-success px-3 py-2 m-3">Firebase</div>
                        <div className="border border-3 border-success px-3 py-2 m-3">Context API</div>

                    </div>
                    <div className="pt-3">
                        <h5 className="text-danger">Some feature of this site</h5>
                        <ul className="text-start">
                            <li>This is a fully responsive website.</li>
                            <li>Here user use their email to log in this. For New user they also register to use this site. </li>
                            <li>Here I use only google Auttentication system for login</li>
                           
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Healthfirst;