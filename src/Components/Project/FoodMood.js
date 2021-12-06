import React from 'react';
import { Carousel } from 'react-bootstrap';

import { CgWebsite } from 'react-icons/cg';
import { ImGithub } from 'react-icons/im';
const FoodMood = () => {
    return (
            <div className="details-body">
                < div className="container">
                
                <div className="details-img">
                    <h4>Projects Picture</h4>
                        <Carousel fade>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://i.ibb.co/wWHNjsL/Food-Mood1.png"
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://i.ibb.co/5BtTxyQ/Food-Mood2.png"
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://i.ibb.co/Lk27dZm/Food-Mood3.png"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://i.ibb.co/q75cnbQ/Food-Mood4.png"
                                    alt="Fourth slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://i.ibb.co/H7LJ8Qt/Food-Mood5.png"
                                    alt="Fifth slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://i.ibb.co/3FcWSj1/Food-Mood6.png"
                                    alt="Sixth slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                <div className="detail-text pt-4" data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom">
                    <h3 className="text-primary">FoodMood</h3>
                    <div className="social-link">
                        <div >
                            <a href="https://food-mood-1467e.web.app/"> <CgWebsite size="30px" /> Live Site </a>
                        </div>
                        <div>
                            <a href="https://github.com/Rakib602/FoodMood"> <ImGithub size="30px" /> Client site github </a>
                        </div>
                        <div>
                            <a href="https://github.com/Rakib602/FoodMoodServer"> <ImGithub size="30px" /> Server site github </a>
                        </div>

                    </div>
                    
                    <h5 className="text-success"> Tecnology used </h5>
                    <div className="tecnology">
                        <div className="border border-3 border-success px-3 py-2 m-3">React</div>
                        <div className="border border-3 border-success px-3 py-2 m-3">React router </div>
                        <div className="border border-3 border-success px-3 py-2 m-3">React Icon </div>
                        <div className="border border-3 border-success px-3 py-2 m-3"> Bootstrap 5 </div>
                        <div className="border border-3 border-success px-3 py-2 m-3">Firebase</div>
                        <div className="border border-3 border-success px-3 py-2 m-3">Node js </div>
                        <div className="border border-3 border-success px-3 py-2 m-3"> Express js</div>
                        <div className="border border-3 border-success px-3 py-2 m-3">MongoDB</div>
                        <div className="border border-3 border-success px-3 py-2 m-3">Context API</div>
                        <div className="border border-3 border-success px-3 py-2 m-3">HeroKu</div>
                       
                    </div>
                    <div className="pt-3">
                        <h5 className="text-danger">Some feature of this site</h5>
                        <ul className="text-start">
                            <li>This is a fully responsive website.</li>
                            <li>I use MongoDB for store data. All the data are store in MongoDB.</li>
                            <li>Here user use their email to log in this. For New user they also register to use this site. </li>
                            <li>User add product from dashborad. Admin also add another admin.</li>
                            <li>User can see all order. Admin also manage all order. Admin can delete order.</li>
                            <li>All the data of user, all the order data are store in database.</li>
                        </ul>
                   </div>
                    </div>
                </div>

            </div>

    );
};

export default FoodMood;