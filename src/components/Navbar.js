import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';





const CustomNavbar = () => {
  return ( 
    
    <Navbar expand="lg" className="bg-black">
      <Container>
        <Navbar.Brand href="#home" className="text-white fs-2 fw-bold ">SaHe<span className='text-danger'>eL.</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end py-2">
          <Nav className="mr-auto ">
            <Nav.Link href="Home.js" className="text-white fw-bold"  >Home</Nav.Link>
            <Nav.Link href="About.js" className="text-white fw-bold">About</Nav.Link>
            <Nav.Link href="service.js" className="text-white fw-bold">Service</Nav.Link>
            <Nav.Link href="#skills" className="text-white fw-bold">Skills</Nav.Link>
            <Nav.Link href="#contact" className="text-white fw-bold">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
  );
}
 
export default CustomNavbar;
