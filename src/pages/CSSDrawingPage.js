import { Container, Row, Col } from 'react-bootstrap';
import hero from '../assets/images/cssDrawing/hero.png';

const CSSDrawingPage = () => {
    return ( 
        <Container fluid>
            <Row className='position-relative'>
                <img src={hero} width='100vw'/>
                <div className='position-absolute d-flex flex-column align-items-end p-5' style={{top: '0', right: '0', width: '60%'}}>
                    <h1 className=' xl-font-size text-end'>CSS Single Div Drawing</h1>
                    <p className='w-75 text-end fs-4'>Each drawing below was done only with CSS and only with one div. I really enjoy CSS and have been adding to this collection as often as possible in order to constantly exercise and improve my CSS skills.</p>
                </div>

            </Row>
            <Row className='y-margin-large'>
                <Col md='4' className='drawing-container position-relative'>
                    <div className='bottle'></div>
                </Col>
                <Col className='text-center'>
                    2nd image
                </Col>
                <Col className='text-center'>
                    3nd image
                </Col>
            </Row>
        </Container>
        
     );
}
 
export default CSSDrawingPage;