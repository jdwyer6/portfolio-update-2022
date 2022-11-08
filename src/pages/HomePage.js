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
import { BsStackOverflow } from "react-icons/bs";
import Button_Primary from "../components/Button_Primary";

const HomePage = () => {
    return ( 
        <>
            <Container fluid>
                <Row className='height-screen d-flex align-items-center position-relative'>
                    <Col className='position-relative text-center'>
                        <h1 style={{zIndex: '5', position: 'relative'}}>JAKE DWYER</h1>
                        <h1 className='bg-text-large' style={{zIndex: '1', opacity: '25%'}}>JAKE DWYER</h1>
                        <h1 className='bg-text-large' style={{zIndex: '3', opacity: '10%', top: '30%'}}>JAKE DWYER</h1>
                        <h1 className='bg-text-large' style={{zIndex: '2', opacity: '15%', top: '15%'}}>JAKE DWYER</h1>
                        <h1 className='bg-text-large' style={{zIndex: '3', opacity: '10%', top: '70%'}}>JAKE DWYER</h1>
                        <h1 className='bg-text-large' style={{zIndex: '4', opacity: '5%', top: '75%'}}>JAKE DWYER</h1>
                        <div className='color-splash-1'></div>
                        <div className='color-splash-2'></div>
                        <h4 style={{marginTop: '-30px'}}>PORTFOLIO</h4>
                        <Button_Primary text='GO TO PROJECTS'/>
                        <p className="my-3">Software Developer</p>
                    </Col>
                    

                    
                </Row>
            </Container>

            {/* <Container fluid className=''>
                <Row className='home-header-container' width='100vw' height='100vh'>
                        <div className="image-primary"></div>
                        <div className="image-secondary"></div>
                        <div className="home-header-text">
                            <h1>Hi, I'm Jake</h1>
                            <h5>I'm a software developer.</h5>
                        </div>

                </Row>
                <Row className='mx-3 mx-md-5'>
                    <h1 id='projects' className="px-0">My Projects</h1>
                </Row>
                <ProjectCard 
                    title='ClockedIn' 
                    subtitle='A fullstack application offering a streamlined solution for businesses to keep track of employee hours.' 
                    tech='MongoDB | Express | NodeJS | React  |  Redux | Bootstrap' 
                    img={clockedin}
                    projectLink='https://clocked-in.netlify.app/'
                    githubLink='https://github.com/jdwyer6/time-tracker'
                    projectPage='clockedin'
                />
                <ProjectCard 
                    title='Paw Portraits' 
                    subtitle='A fun website for creating personalized artwork for pet-lovers.' 
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
                <Row className='mx-3 mx-md-5 my-5 text-center d-flex justify-content-between'>
                    <h1 className='my-5'>Games and Other Projects</h1>
                    <OtherProjectsCard 
                        title='Flecks Appliance Center' 
                        img={FlecksPreview} buttonText='Visit project' 
                        tech='React - Bootstrap - SASS' 
                        description='A business website for a local appliance retail store.' 
                        siteLink='https://flecksappliancecenter.com/'
                    />
                    <OtherProjectsCard 
                        title='Doodle Ball' 
                        siteLink='https://whospayingformike.itch.io/doodle-ball' 
                        img={basketball} 
                        tech='C# - Unity' 
                        buttonText='Play the game!' 
                        description='A puzzle game to test your creativity and basketball skills. Draw barriers, turn off gravity and much more!'
                    />
                    <OtherProjectsCard 
                        title='TACKtical Balloons' 
                        siteLink='https://whospayingformike.itch.io/tackticalballoons' 
                        img={tackticalballoons} 
                        tech='C# - Unity' 
                        buttonText='Play the game!' 
                        description='Armed with tacks as projectiles, blast your way through hordes of evil balloons.'
                    />
                    <OtherProjectsCard 
                        title='Fetch!' 
                        siteLink='https://whospayingformike.itch.io/dogrungame' 
                        img={dog} tech='C# - Unity' 
                        buttonText='Play the game!' 
                        description='Stack abilities by catching frisbees and collect bones for points in an epic platformer.'
                        />
                </Row>
            
            </Container> */}

            
        </>
     );
}
 
export default HomePage;