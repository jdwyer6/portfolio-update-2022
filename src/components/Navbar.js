import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const NBar = () => {
    return ( 
        <Navbar expand="lg">
            <Container fluid className='mx-3'>
                <Navbar.Brand as={Link} to='/' className='mx-3'>Jake Dwyer</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to='/' className='mx-3'>Home</Nav.Link>
                        <Nav.Link href="/#projects" className='mx-3'>Projects</Nav.Link>
                        <Nav.Link as={Link} to='resume' className='mx-3'>Resume</Nav.Link>
                        <Nav.Link as={Link} to='contact' className='mx-3'>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
      </Navbar>

     );
}
 
export default NBar;