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

  const navItems = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Projects', href: '#service' },
    { title: 'Skills', href: '#skills' },
    { title: 'Contact', href: '#contact' }
  ];

  return ( 
    <Navbar expand="lg" className= {scrolled ? 'bg-danger' : 'bg-black'} sticky='top' >
      <Container>
        <Navbar.Brand href="#home" className="text-white fs-2 fw-bold ">SaHe<span className={scrolled ? 'text-white' : 'text-danger'}>eL.</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end ">
          <Nav className="mr-auto ">
            {navItems.map((item, index) => (
              <Nav.Link key={index} href={item.href} className="text-white fs-5 fw-bold">{item.title}</Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
  );
}
 
export default NavBar;

