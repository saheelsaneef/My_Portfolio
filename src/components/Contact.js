
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return ( 
        <div>
            <h3 className="text-center fw-bold mt-5">Contact me</h3>

            <Container>

            <div className='d-flex justify-content-around mt-5'>

                <div className="details">
                    <h3 className='fw-bold mb-3'>Get in Touch</h3>

                    <div className="Name d-flex">

                        <div className="icon1 text-danger fs-3">
                        <FontAwesomeIcon icon={faUser} />
                        </div>

                        <div className="name">
                            <p className='mb-0  mt-0 m-4 fw-bold '>Name</p>
                            <p className='mt-0 m-4'>Saheel Saneef</p>
                        </div>

                    </div>

                    <div className="Address d-flex">

                        <div className="icon2 text-danger fs-3">
                        <FontAwesomeIcon icon={faLocation} />
                        </div>

                        <div className="name">
                            <p className='mb-0  mt-0 m-4 fw-bold'>Address</p>
                            <p className='mt-0 m-4'>333/19,Sakkariya lane, Kuttikarachi,Kinniya -04</p>
                        </div>

                    </div>

                    <div className="Email d-flex">

                        <div className="icon3 mt-1 text-danger fs-3">
                        <FontAwesomeIcon icon={faEnvelope} />
                        </div>

                        <div className="email ">
                            <p className='mb-0 mt-0 m-4 fw-bold'>Email</p>
                            <p className='mt-0 m-4'>saneef1231@gmail.com</p>
                        </div>

                    </div>

                </div>

                <div className="form ">
                    <h3 className='fw-bold mb-3'>Message Me</h3>

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
