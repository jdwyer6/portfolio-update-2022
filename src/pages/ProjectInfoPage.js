import { useEffect } from 'react';
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
    
    useEffect(() => {
      window.scroll(0,0)

    }, [])
    

    return ( 
    <Container fluid>
        <Row className='align-items-center p-3 p-lg-5'>
            <Col md='7'>
                <img src={heroimg} style={{width: '100%'}}></img>
            </Col>
            <Col className='py-5 text-center'>
                <h1 className='h1-responsive' style={{textAlign: 'center'}}>{title}</h1>
                <p className='p-responsive' style={{textAlign: 'center'}}>{subtitle}</p>
                <Button href={siteLink} target='blank' style={{width: '40%'}} className='m-2'><FaPager className='mb-1 mx-1'/>Check it out</Button>
                <Button href={githubLink} target='blank' style={{width: '40%'}} className='m-2'><FaGithub className='mb-1 mx-1'/>Github Repo</Button>
            </Col>
        </Row>
        <Row className='my-2 my-md-5 p-3 p-lg-5 position-relative'>
            <Col sm='12' xl='5'>
                <h2 className='text-center h2-responsive'>Rationale</h2>
                <p className='text-center p-responsive'>{rationale}</p>
            </Col>
            <div style={{backgroundColor: '#ecf0f3', width: '70%', height: '70vh', position: 'absolute', right: 0, top: 0, zIndex: '-5'}}></div>
            <Col style={{position: 'relative'}}>
                
                <img src={img2} width='50%' height='auto' className='display-xl-static'></img>
                <img src={img3} width='50%' height='auto' className='display-xl-static' style={{right: '5%', top: '50%'}}></img>
            </Col>
        </Row>
        <Row className='y-margin-large mx-1 p-3 p-lg-5'>
            <Col xl='7' className='d-none d-xl-inline' style={{boxShadow: '2px 2px 5px rgba(0, 0, 0, .5)', padding: '1rem'}}>
                <img src={img4} width='100%' height='auto'></img>
            </Col>
            <Col className='px-lg-3 d-flex justify-content-center flex-column'>
                <h2 className='text-center h2-responsive'>Notable Features</h2>
                <ul className='d-flex justify-content-center flex-column'>
                    <li className='p-responsive'>{feature1}</li>
                    <li className='p-responsive'>{feature2}</li>
                    <li className='p-responsive'>{feature3}</li>
                    <li className='p-responsive'>{feature4}</li>
                </ul>
            </Col>
            <Col xl='7' className='d-inline d-xl-none' style={{boxShadow: '2px 2px 5px rgba(0, 0, 0, .5)'}}>
                <img src={img4} width='100%' height='auto'></img>
            </Col>
        </Row>
        <section className='section-gradient'>
            <Row className='my-2 my-md-5 p-3 p-lg-5 position-relative'>
                <Col md='6' xl='5'>
                    <h2 className='text-center h2-responsive'>Challenges and Solutions</h2>
                    <p className='text-center p-responsive'>{challenges}</p>
                </Col>
                <div style={{width: '70%', height: '70vh', position: 'absolute', right: 0, top: 0, zIndex: '-5'}}></div>
                <Col style={{position: 'relative', textAlign: 'center'}}>
                    <img src={img5} width='auto' className='mx-auto' style={{boxShadow: '2px 2px 5px rgba(0, 0, 0, .5)'}}></img>
                    <img src={img6} width='auto' className='d-none d-xl-inline position-absolute' style={{right: '10%', top: '15%', boxShadow: '2px 2px 5px rgba(0, 0, 0, .5)'}}></img>
                </Col>
            </Row>
            <Row className='project-info-conclusion-section p-3 p-lg-5 d-flex justify-content-center'>
                <Col className='d-none d-lg-inline'>
                    <img src={img7} style={{boxShadow: '2px 2px 5px rgba(0, 0, 0, .5)'}} width='100%' height='auto'></img>
                </Col>
                <Col lg='5'>
                    <h2 className='text-center h2-responsive'>Conclusions</h2>
                    <p className='p-responsive text-center'>{conclusion}</p>
                </Col>
                <Col className='d-lg-none d-inline'>
                    <img src={img7} style={{boxShadow: '2px 2px 5px rgba(0, 0, 0, .5)'}} width='100%' height='auto'></img>
                </Col>
            </Row>
        </section>
            <Row className='my-5 my-md-5 p-3 p-lg-5'>
                <h2 className='text-center h2-responsive'><TbWorld className='mx-3'/>Technologies Used</h2>
                <div className='my-md-5 my-3 text-center p-responsive'>{techUsed}</div>
            </Row>
        
    </Container>
            

     );
}
 
export default ProjectInfoPage;