import {FiMail} from 'react-icons/fi';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ContactPage = () => {
    return ( 
        <Container>
            <Row style={{height: '90vh'}}>

                <Col className='d-flex justify-content-center align-items-center px-4 flex-column'>
                    <h1>Let's talk!</h1>
                    <div className='d-flex flex-row justify-content-center align-items-center px-4'>
                        <FiMail style={{width: '5em', height: '5em'}} className='mx-3'/>
                        <p className='my-0 fs-3 fw-light' style={{letterSpacing: '2px', fontFamily: 'sans-serif'}}>dwyerjakej@gmail.com</p>
                    </div>
                    <Form className='w-100' action="https://formsubmit.co/31b3c32ff56df3ad8800eb7f3d8a14fc" method="POST">
                        <input type="hidden" name="_next" value="https://jakedwyer.com/success"></input>
                        <Form.Group className='mb-3'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name" required placeholder='Enter your name'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='formBasicEmail'>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" name="email" require placeholder='Enter email address' />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" aria-label="With textarea" placeholder='Type your message here'></Form.Control>
                        </Form.Group>
                        <Button type="submit">Submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container> 
    );
}
 
export default ContactPage;