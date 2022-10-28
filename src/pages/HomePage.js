import NBar from "../components/Navbar";
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';
import OtherProjectsCard from "../components/OtherProjectsCard";
import PawPrintsPreview from '../assets/images/PawPrintsPreview.png';
import CSSDrawingPreview from '../assets/images/cssDrawing/thumbnail.png';
import FlecksPreview from '../assets/images/FlecksPreview.png';
import farahPreview from '../assets/images/farah/preview.png';
import basketball from '../assets/images/basketball.jpg';
import tackticalballoons from '../assets/images/tackticalballoonsthumbnail.png'
import dog from '../assets/images/dog.png';
import clockedin from '../assets/images/clockedin.png';


const HomePage = () => {
    return ( 
        <>

            <Container fluid className=''>
                <Row className='home-header-container' width='100vw' height='100vh'>
                        <div className="image-primary"></div>
                        <div className="image-secondary"></div>
                        <div className="home-header-text">
                            <h1>Hi, I'm Jake</h1>
                            <h5>I love to build beautiful websites.</h5>
                        </div>

                </Row>
                {/* <Row> */}
                    {/* Skills: Design(photoshop, figma)  Frontend:(HTML, CSS, Javascript, React, Bootstrap, Github) Backend:(node, express, mongodb)    */}
                {/* </Row> */}
                <Row className='mx-3 mx-md-5'>
                    <h1 id='projects' className="px-0">My Projects</h1>
                </Row>
                <ProjectCard 
                    title='ClockedIn' 
                    subtitle='A fullstack application offering a streamlined solution for businesses to keep track of employee hours.' 
                    tech='MongoDB | Express | NodeJS | React  |  Redux | Bootstrap' 
                    img={clockedin}
                    projectLink=''
                    githubLink='https://github.com/jdwyer6/time-tracker'
                    projectPage=''
                />
                <ProjectCard 
                    title='Paw Portraits' 
                    subtitle='A fun website for creating personalized artwork featuring for pet-lovers.' 
                    tech='React  |  Bootstrap | SASS' 
                    img={PawPrintsPreview}
                    projectLink='https://pawportraits.netlify.app/'
                    githubLink='https://github.com/jdwyer6/silhouettes'
                    projectPage='PawPrintsPage'
                />
                <ProjectCard 
                    title='Farah Arquitectura' 
                    subtitle='A modern business page and gallery for an arquitecture company in Mexico City.' 
                    tech='React  |  Bootstrap | SASS' 
                    img={farahPreview}
                    projectLink='https://www.faraharquitectura.com/'
                    githubLink='https://github.com/jdwyer6/fara-arquitectura'
                    projectPage='FarahPage'
                />
                {/* <ProjectCard 
                title='Single Div'
                img={CSSDrawingPreview}
                /> */}
                <Row className='mx-3 mx-md-5 my-5 text-center d-flex justify-content-between'>
                    <h1 className='my-5'>Games and Other Projects</h1>
                    <OtherProjectsCard title='Flecks Appliance Center' img={FlecksPreview} tech='React - Bootstrap - SASS' description='A business website for a local appliance retail store.' siteLink='https://flecksappliancecenter.com/'/>
                    <OtherProjectsCard title='Doodle Ball' img={basketball} tech='C# - Unity' description='A puzzle game to test your creativity and basketball skills. Draw barriers, turn off gravity and much more!'/>
                    <OtherProjectsCard title='TACKtical Balloons' img={tackticalballoons} tech='C# - Unity' description='Armed with tacks as projectiles, blast your way through hordes of evil balloons.'/>
                    <OtherProjectsCard title='Fetch!' img={dog} tech='C# - Unity' description='Stack abilities by catching frisbees and collect bones for points in an epic platformer.'/>
                </Row>
                

                {/* Other projects Section: Flecks and Carb Counter */}
                {/* Games Section */}
                {/* Single Div */}
            </Container>

            
        </>
     );
}
 
export default HomePage;