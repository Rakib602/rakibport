import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { BiPaperPlane } from 'react-icons/bi';
import emailjs from 'emailjs-com';
import '../Contactme/Contactme.css';
const Contactme = () => {

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_t36wwq9', 'template_4xp9t8r', e.target, 'user_5LNozvvNqJPrcZXVDSXqp')
            .then(res => {
                
                console.log(res);
            }).catch(err => console.log(err))
    }

    return (
        <div className=" contact" id="contact">
            <div className="container">
                <Container>
                    <Row className="p-4" data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom">
                        <h2 className="text-success">Contact Me</h2>
                        <div className="form">
                            <Col >
                                <Form onSubmit={sendEmail}>
                                    <Form.Group className="mb-3 border-success" >
                                        <Form.Control type="text" name="name" placeholder="Name" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" >

                                        <Form.Control type="email" name="emalil" placeholder="Enter email" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" >

                                        <Form.Control as="textarea" name="message" placeholder="Leave your message" style={{ height: '200px' }} />
                                    </Form.Group>
                                    <Button className="sub-btn" type="submit" >
                                        <BiPaperPlane /> Submit
                                    </Button>
                                </Form>
                            </Col>
                        </div>
                    </Row>
                </Container>

            </div>

        </div>
    );
};

export default Contactme;