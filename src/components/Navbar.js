
import { Navbar,Nav,Container } from 'react-bootstrap';

const NavBar = () => {
 
  return ( 
    <Navbar expand="lg" className= "bg-black" sticky='top' >
      <Container>
        <Navbar.Brand href="#home" className="text-white fs-2 fw-bold ">SaHe<span className='text-danger'>eL.</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end py-2 ">
          <Nav className="mr-auto ">
            <Nav.Link href="#home" className="text-white fw-bold"  >Home</Nav.Link>
            <Nav.Link href="#about" className="text-white fw-bold">About</Nav.Link>
            <Nav.Link href="#service" className="text-white fw-bold">Projects</Nav.Link>
            <Nav.Link href="#skills" className="text-white fw-bold">Skills</Nav.Link>
            <Nav.Link href="#contact" className="text-white fw-bold">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
  );
}
 
export default NavBar;
