import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Projects/Projects.css';
const Projects = () => {
    return (
        <div className="project-body"id="projects">
        <div className="container">
                <Row className="g-4">
                    <h3>My Projects</h3>
                    <Col xs={12} md={6} lg={4} data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom" data-aos-duration="1500">
                        <Card className="shadow pb-3">
                            <Card.Img variant="top" src="https://i.ibb.co/YZR6LRH/ramoto.png" />
                            <Card.Body>
                                <Card.Title>RA-MOTO </Card.Title>
                                <Card.Text>
                                This is fully responsive bike selling website.React, React router,  Material UI, Bootstrap , Node js, Express js, MongoDB, Context API, HeroKu used to develop this site.
                                </Card.Text>
                            </Card.Body>
                            <Button variant="success" className="details-btn" as={Link}to="/Ramoto">Details</Button>
                        </Card>
                </Col>
                    <Col xs={12} md={6} lg={4} data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom" data-aos-duration="2000">
                        <Card className="shadow pb-3">
                            <Card.Img variant="top" src="https://i.ibb.co/5WXXzw4/foodMood.png" />
                        <Card.Body>
                            <Card.Title>FoodMood</Card.Title>
                                <Card.Text>
                                    This is fully responsive bike selling website.React, React router, React Icon, Bootstrap, Firebase, Node JS, Express JS, MongoDB, Context API, HeroKu used to develop this site
                            </Card.Text>
                            </Card.Body>
                            <Button variant="success" className="details-btn" as={Link} to="/FoodMood">Details</Button>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4}>
                        <Card className="shadow pb-3" data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom" data-aos-duration="2500">
                            <Card.Img variant="top" src="https://i.ibb.co/vXH4cm3/healthfirst.png" />
                        <Card.Body>
                            <Card.Title>Health-First</Card.Title>
                            <Card.Text>
                                   This is fully responsive Doctor portal website. React, React router, React Icon, Bootstrap, Firebase, Context API used to develop this site.
                            </Card.Text>
                            </Card.Body>
                            <Button variant="success" className="details-btn" as={Link} to="/Health">Details</Button>
                    </Card>
                </Col>
            </Row>
            </div>
        </div>
    );
};

export default Projects;