import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SuccessPage = () => {
    return ( 
        <Container className='d-flex flex-column align-items-center justify-content-center' style={{height: '80vh'}}>
            <p>Email sent successfully</p>
            <Button as={Link} to='/'>Home Page</Button>
        </Container> 
    );
}
 
export default SuccessPage;