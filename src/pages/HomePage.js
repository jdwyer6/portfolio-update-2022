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
import clockedInBG from "../assets/images/ClockedInBG.png";
import clockedInBGHand from "../assets/images/ClockedInBGHand.png";
import PawPortraitsBG from "../assets/images/PawPortraitsBG.jpg";
import { useState } from "react";

const HomePage = () => {

    const [backgroundPos, setBackgroundPos] = useState('0% 0%');

    return ( 
        <>
            <Container fluid className='position-relative px-0'>
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
                        <a><button className='btn-primary' onClick={()=>console.log('click')} >GO TO PROJECTS</button></a>
                        <p className="my-3 position-relative" style={{zIndex: '9'}}>Software Developer</p>
                    </Col>
                </Row>
                <div className='gradient-vertical'>
                    <Row>
                        <Col md='4'>
                            <h1 className='text-start'>WHO</h1>
                            <h1 className='text-start'>AM</h1>
                            <h1 className='text-start'>I?</h1>
                        </Col>
                        <Col>
                            <h4 className='h4-bold text-start'>SUMMARY</h4>
                            <ul>
                                <li>Frontend developer</li>
                                <li>Fluent in English and Spanish</li>
                                <li>React, HTML, Javascript, CSS</li>
                                <li>Fullstack certification (MongoDB, Express, React, NodeJS)</li>
                                <li>Experience with game development in C#.</li>
                                <li>8 Years professional education experience.</li>
                            </ul>
                        </Col>
                        <Col>
                            <h4 className='h4-bold text-start'>EDUCATION</h4>
                            <div className='mb-3'>
                                <p className='mb-0'>Full Stack Web Development Certification</p>
                                <p className='mb-0 p-small'>Nucamp Coding Bootcamp</p>
                                <p className='mb-0 p-small'>Graduated: 2022 with honors</p>
                            </div>
                            <div className='mb-3'>
                                <p className='mb-0'>Bachelor's Degree in Education</p>
                                <p className='mb-0 p-small'>Belmont University</p>
                                <p className='mb-0 p-small'>Graduated: 2014</p>
                            </div>
                            <div className='mb-3'>
                                <p className='mb-0'>Associate Degree in Computer Science</p>
                                <p className='mb-0 p-small'>St. Charles Community College</p>
                                <p className='mb-0 p-small'>Expected Graduation: 2025</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs='12'>
                            <h4 className='text-center h4-spaced-dark'>EXPERIENCE</h4>
                            <div className='d-flex mt-5'>
                                <Col className='text-center'>
                                    <p className='mb-0'>2014-2022</p>
                                    <p className='p-large mb-0'><b>Math and Spanish Educator</b></p>
                                    <p className='mb-0'>Oakvill High School - St. Louis, MO</p>
                                    <p className='mb-0 p-small'>2020-2022</p>
                                    <p className='mb-0'>ASF & Colegio Northridge - Mexico City, MX</p>
                                    <p className='mb-0 p-small'>2017-2020</p>
                                    <p className='mb-0'>Belleview Middle School - Nashville, TN</p>
                                    <p className='mb-0 p-small'>2014-2017</p>
                                </Col>
                                <Col className='text-center'>
                                    <p className='mb-0'>2020-present</p>
                                    <p className='p-large mb-0'><b>Freelance Web Developer</b></p>
                                    <p className='mb-0'>Recent Projects:</p>
                                    <p className='mb-0 p-small'>Farah Architecture</p>
                                    <p className='mb-0 p-small'>Flecks Appliance Center</p>
                                    <p className='mb-0 p-small'>FADM Impresos</p>

                                </Col>

                            </div>
                        </Col>
                    </Row>


                    <Row className='top-space'>
                        <Col className='d-flex flex-column align-items-center'>
                            <ul>
                                <h4 className='h4-bold text-start'>FRONTEND</h4>
                                <li>React</li>
                                <li>Redux</li>
                                <li>Javascript</li>
                                <li>HTML</li>
                                <li>CSS/SASS</li>
                                <li>Bootstrap</li>
                            </ul>
                        </Col>
                        <Col className='d-flex flex-column align-items-center'>
                            <ul>
                                <h4 className='h4-bold text-start'>BACKEND</h4>
                                <li>NodeJS</li>
                                <li>MongoDB</li>
                                <li>Express</li>
                            </ul>
                        </Col>
                        <Col className='d-flex flex-column align-items-center'>
                            <ul>
                                <h4 className='h4-bold text-start'>OTHER</h4>
                                <li>Git</li>
                                <li>Adobe Photoshop</li>
                                <li>Adobe Premiere</li>
                                <li>Adobe After Effects</li>
                                <li>Blender</li>
                                <li>Unity & C#</li>
                            </ul>
                        </Col>

                    </Row>
                    <div className='d-flex justify-content-center'>
                        <button className='btn-primary w-75 d-flex justify-content-around' style={{marginTop: '6rem'}}>
                            <div className='d-flex'>
                                <p>Email:</p>
                                <p className='mx-3 p-normal'>dwyerjakej@gmail.com</p>
                            </div>
                            <div className='d-flex'>
                                <p>LinkedIn:</p>
                                <p className='mx-3 p-normal'>linkedin.com/in/dwyer-jake25</p>
                            </div>
                        </button>
                    </div>
                </div>
                <Row className='height-screen d-flex align-items-center position-relative'>
                    <Col className='position-relative text-center'>
                        <h1 style={{zIndex: '5', position: 'relative'}}>PROJECTS</h1>
                        <h1 className='bg-text-large' style={{zIndex: '1', opacity: '25%'}}>PROJECTS</h1>
                        <h1 className='bg-text-large' style={{zIndex: '3', opacity: '10%', top: '30%'}}>PROJECTS</h1>
                        <h1 className='bg-text-large' style={{zIndex: '2', opacity: '15%', top: '15%'}}>PROJECTS</h1>
                        <h1 className='bg-text-large' style={{zIndex: '3', opacity: '10%', top: '70%'}}>PROJECTS</h1>
                        <h1 className='bg-text-large' style={{zIndex: '4', opacity: '5%', top: '75%'}}>PROJECTS</h1>
                        <div className='color-splash-1'></div>
                        <div className='color-splash-2'></div>
                        <h4 style={{marginTop: '-30px'}}>FEATURED</h4>
                    </Col>
                </Row>
                <Row>
                    <div className='clock-bg position-relative'>
                        <img src={clockedInBG} style={{visibility: 'hidden'}}/>
                        <div className='featured-project-text-container'>
                            <h1 className='text-white text-start'>ClockedIn</h1>  
                            <p className='text-white p-normal'>A fullstack application offering a streamlined solution for businesses to keep track of employee hours.</p>
                            <div className='menu d-flex align-items-center' style={{height: '50vh'}}>
                                <div className="menu-items d-flex flex-column ">
                                    <a href='' className='menu-item text-decoration-none' onMouseEnter={()=>setBackgroundPos('0% -10%')}><h3 className='text-white'>Visit the site</h3></a>
                                    <a href='' className='menu-item text-decoration-none' onMouseEnter={()=>setBackgroundPos('0% -20%')}><h3 className='text-white'>Details and Design</h3></a>
                                    <a href='' className='menu-item text-decoration-none' onMouseEnter={()=>setBackgroundPos('0% -30%')}><h3 className='text-white'>Git Hub Repo</h3></a>
                                </div>
                                <div className='menu-background-pattern' style={{backgroundPosition: backgroundPos}}></div>
                            </div>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div className='paw-portraits-bg position-relative' style={{backgroundPosition: backgroundPos}}>
                        <img src={PawPortraitsBG} style={{visibility: 'hidden'}}/>
                        <div className='featured-project-text-container'>
                            <h2 className='text-start'>Paw Portraits</h2>  
                            <p className='p-normal'>A fun website for creating personalized artwork for pet-lovers.</p>
                            <div className='menu d-flex align-items-center' style={{height: '50vh'}}>
                                <div className="menu-items d-flex flex-column ">
                                    <a href='' className='menu-item text-decoration-none' onMouseEnter={()=>setBackgroundPos('0% 20%')}><h3>Visit the site</h3></a>
                                    <a href='' className='menu-item text-decoration-none' onMouseEnter={()=>setBackgroundPos('0% 40%')}><h3>Details and Design</h3></a>
                                    <a href='' className='menu-item text-decoration-none' onMouseEnter={()=>setBackgroundPos('0% 60%')}><h3>Git Hub Repo</h3></a>
                                </div>
                                {/* <div className='menu-background-pattern' style={{backgroundPosition: backgroundPos}}></div> */}
                            </div>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div className='gradient-vertical'>
                        <h1>OTHER PROJECTS</h1>
                    </div>
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