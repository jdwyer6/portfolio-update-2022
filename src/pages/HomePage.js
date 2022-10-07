import NBar from "../components/Navbar";
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';
import PawPrintsPreview from '../assets/images/PawPrintsPreview.png';
import CSSDrawingPreview from '../assets/images/cssDrawing/thumbnail.png';
import FlecksPreview from '../assets/images/FlecksPreview.png';
import farahPreview from '../assets/images/farah/preview.png';


const HomePage = () => {
    return ( 
        <>

            <Container fluid className=''>
                <Row className='home-header-container' width='100vw' height='100vh'>
                        <div className="image-primary"></div>
                        <div className="image-secondary"></div>
                        <div className="home-header-text">
                            <h1>Hi, I'm Jake</h1>
                            <h5>I love to design and build beautiful websites.</h5>
                        </div>

                </Row>
                {/* <Row> */}
                    {/* Skills: Design(photoshop, figma)  Frontend:(HTML, CSS, Javascript, React, Bootstrap, Github) Backend:(node, express, mongodb)    */}
                {/* </Row> */}
                <Row className='mx-3 mx-md-5'>
                    <h1 id='projects' className="px-0">My Projects</h1>
                </Row>
                <ProjectCard 
                    title='Paw Portraits' 
                    subtitle='A fun website for creating personalized artwork featuring for pet-lovers.' 
                    tech='React  |  Bootstrap' 
                    img={PawPrintsPreview}
                    projectLink='https://pawportraits.netlify.app/'
                    githubLink='https://github.com/jdwyer6/silhouettes'
                    projectPage='PawPrintsPage'
                />
                <ProjectCard 
                    title='Farah Arquitectura' 
                    subtitle='A modern business page and gallery for an arquitecture company in Mexico City.' 
                    tech='React  |  Bootstrap' 
                    img={farahPreview}
                    projectLink='https://www.faraharquitectura.com/'
                    githubLink='https://github.com/jdwyer6/fara-arquitectura'
                    projectPage='FarahPage'
                />
                <ProjectCard title='Flecks Appliance Center' img={FlecksPreview} />
                <ProjectCard 
                title='Single Div'
                img={CSSDrawingPreview}
                />

                {/* Other projects Section: Flecks and Carb Counter */}
                {/* Games Section */}
            </Container>

            
        </>
     );
}
 
export default HomePage;