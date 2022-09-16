import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaGithub, FaPager } from 'react-icons/fa';

const ProjectInfoPage = ({ title, subtitle, heroimg, githubLink, siteLink, rationale, img2, img3 }) => {
    return ( 
 
    <Container fluid>
        <Row className='align-items-center'>
            <Col md='7' className='px-0'>
                <img className='p-5'src={heroimg} style={{width: '100%'}}></img>
            </Col>
            <Col className='px-3 py-5 text-center'>
                <h1 style={{fontSize: '8vw', textAlign: 'center'}}>{title}</h1>
                <p style={{textAlign: 'center'}}>{subtitle}</p>
                <Button href={siteLink} target='blank' style={{width: '40%'}} className='mx-2'><FaPager className='mb-1 mx-1'/>Check it out</Button>
                <Button href={githubLink} target='blank' style={{width: '40%'}} className='mx-2'><FaGithub className='mb-1 mx-1'/>Github Repo</Button>
            </Col>
        </Row>
        <Row className='my-5 p-5 position-relative'>
            <Col md='5' className='p-0'>
                <h2 className='text-center' style={{fontSize: '6vw'}}>Rationale</h2>
                <p className='text-center'>{rationale}</p>
            </Col>
            <div style={{backgroundColor: '#ecf0f3', width: '70%', height: '120%', position: 'absolute', right: 0, top: 0, zIndex: '-5'}}></div>
            <Col style={{position: 'relative'}}>
                
                <img src={img2} width='50%' height='auto' style={{position: 'absolute', }}></img>
                <img src={img3} width='50%' height='auto' style={{position: 'absolute', right: '10%', top: '50%'}}></img>
                {/* <img src={img2} width='50%' height='auto' className='p-2'></img>
                <img src={img3} width='50%' height='auto' className='p-2'></img> */}
            </Col>
            <p>Challenges Faces and Solutions</p>
            <p>Notable features</p>
            <p>Technologies used</p>
            <p>Conclusions</p>

        </Row>
        
    </Container>
            

     );
}
 
export default ProjectInfoPage;