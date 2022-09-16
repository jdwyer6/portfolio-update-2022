import NBar from "../components/Navbar";
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';
import PawPrintsPreview from '../assets/images/PawPrintsPreview.png';
import FADMPreview from '../assets/images/FADMPreview.png';
import FlecksPreview from '../assets/images/FlecksPreview.png';

const HomePage = () => {
    return ( 
        <>

            <Container fluid className=''>
                <Row className='header-container' width='100vw' height='100vh'>
                        <div className="image-primary"></div>
                        <div className="image-secondary"></div>
                        <div className="header-text">
                            <h1 className='text-end'>Hi I'm Jake</h1>
                            <h5 className='text-end'>I create modern, beautiful websites and love what I do.</h5>
                        </div>

                </Row>
                <Row className='mx-5'>
                    <h1 id='projects' className="px-0">My Projects</h1>
                </Row>
                <ProjectCard 
                    title='Paw Portraits' 
                    subtitle='A fun website for creating personalized artwork featuring for pet-lovers.' 
                    tech='React  |  React-Bootstrap' 
                    img={PawPrintsPreview}
                    projectLink='https://pawportraits.netlify.app/'
                    githubLink='https://github.com/jdwyer6/silhouettes'
                />
                <ProjectCard title='Employee Portal' />
                <ProjectCard title='FADM' img={FADMPreview} />
                <ProjectCard title='Flecks Appliance Center' img={FlecksPreview} />
                <ProjectCard title='Single Div' />
                <p>Carb Counter</p>
                <Row>
                    <h1>Games</h1>
                    <p>C# and Unity</p>
                </Row>
            </Container>

            
        </>
     );
}
 
export default HomePage;