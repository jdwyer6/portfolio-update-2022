import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaGithub, FaPager } from 'react-icons/fa';
import { TbWorld } from 'react-icons/tb'

const ProjectInfoPage = ({ 
    title, 
    subtitle, 
    heroimg, 
    githubLink, 
    siteLink, 
    rationale, 
    img2, 
    img3, 
    img4, 
    img5,
    img6,
    img7,
    feature1, 
    feature2, 
    feature3, 
    feature4,
    challenges,
    techUsed,
    conclusion
}) => {
    
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
            <div style={{backgroundColor: '#ecf0f3', width: '70%', height: '70vh', position: 'absolute', right: 0, top: 0, zIndex: '-5'}}></div>
            <Col style={{position: 'relative'}}>
                
                <img src={img2} width='50%' height='auto' style={{position: 'absolute', }}></img>
                <img src={img3} width='50%' height='auto' style={{position: 'absolute', right: '10%', top: '50%'}}></img>
            </Col>
        </Row>
        <Row className='y-margin-large p-5 position-relative'>
            <Col md='7' style={{boxShadow: '2px 2px 5px rgba(0, 0, 0, .5)', padding: '1rem'}}>
                <img src={img4} width='100%' height='auto'></img>
            </Col>
            <Col className='px-3 d-flex justify-content-center flex-column'>
                <h2 className='text-center' style={{fontSize: '4vw'}}>Notable Features</h2>
                <ul className='d-flex justify-content-center flex-column'>
                    <li className='fs-5'>{feature1}</li>
                    <li className='fs-5'>{feature2}</li>
                    <li className='fs-5'>{feature3}</li>
                    <li className='fs-5'>{feature4}</li>
                </ul>
            </Col>
        </Row>
        <section className='section-gradient'>
            <Row className='my-0 p-5 position-relative'>
                <Col md='5' className='p-0'>
                    <h2 className='text-center' style={{fontSize: '4vw'}}>Challenges and Solutions</h2>
                    <p className='text-center'>{challenges}</p>
                </Col>
                <div style={{width: '70%', height: '70vh', position: 'absolute', right: 0, top: 0, zIndex: '-5'}}></div>
                <Col style={{position: 'relative'}}>
                    
                    <img src={img5} width='auto' style={{position: 'absolute', left: '10%', boxShadow: '2px 2px 5px rgba(0, 0, 0, .5)'}}></img>
                    <img src={img6} width='auto' style={{position: 'absolute', right: '20%', top: '15%', boxShadow: '2px 2px 5px rgba(0, 0, 0, .5)'}}></img>
                </Col>
            </Row>
            <Row className='y-margin-large p-5 d-flex justify-content-center'>
                <Col md='8'>
                    <img src={img7} style={{boxShadow: '2px 2px 5px rgba(0, 0, 0, .5)'}} width='100%' height='auto'></img>
                </Col>
                <Col>
                    <h2 className='text-center' style={{fontSize: '4vw'}}>Conclusions</h2>
                    <p>{conclusion}</p>
                </Col>
            </Row>
        </section>
            <Row className='y-margin-large p-5 position-relative'>
                <h2 className='text-center' style={{fontSize: '4vw'}}><TbWorld className='mx-3'/>Technologies Used</h2>
                <p className='my-5 text-center'>{techUsed}</p>
            </Row>
        
    </Container>
            

     );
}
 
export default ProjectInfoPage;