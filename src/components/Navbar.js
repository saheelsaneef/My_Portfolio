import React, { useState, useEffect } from 'react';
import { Navbar,Nav,Container } from 'react-bootstrap';


const NavBar = () => {
 
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return ( 
    <Navbar expand="lg" className= {scrolled ? 'bg-danger' : 'bg-black'} sticky='top' >
      <Container>
        <Navbar.Brand href="#home" className="text-white fs-2 fw-bold ">SaHe<span className={scrolled ? 'text-white' : 'text-danger'}>eL.</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end ">
          <Nav className="mr-auto ">
            <Nav.Link href="#home" className="text-white fs-5 fw-bold " >Home</Nav.Link>
            <Nav.Link href="#about" className="text-white fs-5 fw-bold ">About</Nav.Link>
            <Nav.Link href="#service" className="text-white fs-5 fw-bold">Projects</Nav.Link>
            <Nav.Link href="#skills" className="text-white fs-5 fw-bold">Skills</Nav.Link>
            <Nav.Link href="#contact" className="text-white fs-5 fw-bold">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
  );
}
 
export default NavBar;
