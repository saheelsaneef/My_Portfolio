
import { Navbar,Nav,Container } from 'react-bootstrap';

const NavBar = () => {
 

  return ( 
    <Navbar expand="lg" className= "bg-black" sticky='top' >
      <Container>
        <Navbar.Brand href="#home" className="text-white fs-2 fw-bold ">SaHe<span className='text-danger'>eL.</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end ">
          <Nav className="mr-auto ">
            <Nav.Link href="#home" className="text-white fs-5 fw-600 ">Home</Nav.Link>
            <Nav.Link href="#about" className="text-white fs-5 fw-600 ">About</Nav.Link>
            <Nav.Link href="#service" className="text-white fs-5 fw-600">Projects</Nav.Link>
            <Nav.Link href="#skills" className="text-white fs-5 fw-600">Skills</Nav.Link>
            <Nav.Link href="#contact" className="text-white fs-5 fw-600">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
  );
}
 
export default NavBar;
