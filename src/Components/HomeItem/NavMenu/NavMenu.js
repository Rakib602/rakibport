import React from 'react';
import { Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const NavMenu = () => {
    return (
        <div className="bg-black">
            <div className="container">
                <Navbar collapseOnSelect expand="lg" variant="dark" bg="black" className="fixed-top">
                    <Container>
                        <Navbar.Brand as={HashLink} to="/home#home"><img src="https://i.ibb.co/WDJwBTY/Logo.png" alt="" className="img-fluid logo" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto">
                                <NavLink as={HashLink} to="/home#home" >HOME</NavLink>
                                <NavLink as={HashLink} to="/home#about">ABOUT ME</NavLink>
                                <NavLink as={HashLink} to="/home#projects" >PROJECTS</NavLink>
                                <NavLink as={HashLink} to="/home#contact">CONTACT ME</NavLink>
                                <NavLink as={Link} to="/Blog">BLOGS</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    )
};

export default NavMenu;