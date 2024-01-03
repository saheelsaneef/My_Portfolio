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
            <Nav.Link href="#home" className="text-white">Home</Nav.Link>
            <Nav.Link href="#about" className="text-white">About</Nav.Link>
            <Nav.Link href="#service" className="text-white">Service</Nav.Link>
            <Nav.Link href="#skills" className="text-white">Skills</Nav.Link>
            <Nav.Link href="#contact" className="text-white">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
 
export default CustomNavbar;
