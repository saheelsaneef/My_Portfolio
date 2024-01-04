
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
const Contact = () => {
    return ( 
        <div>
            <h3 className="text-center mt-5">Contact me</h3>
            <Container>
            <div className='d-flex '>
                <div className="details">
                    <h3 className='fw-bold'>Get in Touch</h3>
                    <p>Hello!!! Let's Talk</p>
                    <div className="Name d-flex">
                        <div className="icon1 ">
                            <p>Hello everyone</p>
                        </div>
                        <div className="name">
                            <p className='mb-0 fw-bold'>Name</p>
                            <p>Saheel Saneef</p>
                        </div>
                    </div>
                    <div className="Address d-flex">
                        <div className="icon2 ">
                            <p>Hello everyone</p>
                        </div>
                        <div className="name">
                            <p className='mb-0 fw-bold'>Address</p>
                            <p>333/19,Sakkariya lane, Kuttikarachi,Kinniya -04</p>
                        </div>
                    </div>
                    <div className="Email d-flex">
                        <div className="icon3 ">
                        <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <div className="name">
                            <p className='mb-0 fw-bold'>Email</p>
                            <p>saneef1231@gmail.com</p>
                        </div>
                    </div>

                </div>
                <div className="form ">
                    <h3 className='fw-bold '>Message Me</h3>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridname">
                                <Form.Control type="name" placeholder="Name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridSubject">
                            <Form.Control placeholder="Subject" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridSubject">
                            <Form.Control placeholder="Message" style={{ height: '80px' }} />
                        </Form.Group>

                        <Button variant="danger" type="submit">Send Message</Button>

                    </Form>
                </div>
            </div>
            </Container>
        </div>
        
     );
}
 
export default Contact;
