import { Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGithub, FaPager, FaInfoCircle } from 'react-icons/fa';

const ProjectCard = ({ title, subtitle, tech, img, projectLink, githubLink }) => {
    return ( 
        <>
            <Row className='d-flex align-items-center project-card mx-5'>
                <Col lg='6' className='text-center my-3'>
                    <h1>{title}</h1>
                    <p>{subtitle}</p>
                    <div>
                        <h4>Technologies:</h4>
                        <pre>{tech}</pre>
                    </div>
                    <Button as={Link} to='PawPrintsPage' className='col m-2 myBtn'><FaInfoCircle className='mb-1 me-1'/>Details</Button>
                    <Button className='col m-2' href={projectLink} target="_blank"><FaPager className='mb-1 me-1'/>Visit Project</Button>
                    <Button className='col m-2' href={githubLink} target="_blank"><FaGithub className='mb-1 me-1'/>GitHub Repo</Button>
                </Col>
                <Col lg='6' className='text-center my-3'>
                    <img src={img} className='p-3 image-preview'/>
                    <div className="image-preview__bg"></div>
                </Col>
            </Row>
        </>

     );
}
 
export default ProjectCard;