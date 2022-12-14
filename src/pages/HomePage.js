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
import PawPortraitsBG from "../assets/images/PawPortraitsBG.jpg";
import Architecture from '../assets/images/Architecture/Architecture.png';
import Card from "../components/Card";
import ProjectModal from "../components/ProjectModal";
import clockedInFigma from '../assets/images/clockedInFigma.png';
import PawPortraitsFigma from '../assets/images/PawPortraitsFigma.png';
import FarahFigma from '../assets/images/FarahFigma.png';
import { Link } from "react-scroll";
import EurekaWatch from '../assets/images/eureka-watch.png';
import FarahEmail from '../assets/images/farah-email.png';
import Email_Card from "../components/Email_Card";
import eurekapreview from '../assets/images/eureka-preview.png';
import farahpreview from '../assets/images/farah-preview.png';
import EmailTemplateModal from "../components/EmailTemplateModal";

import { useState } from "react";

const HomePage = () => {

    const [backgroundPos, setBackgroundPos] = useState('0% 0%');
    const [scale, setScale] = useState('100%');
    const [showClockedIn, setShowClockedIn] = useState(false);
    const [showPawPortraits, setShowPawPortraits] = useState(false);
    const [showFarah, setShowFarah] = useState(false);
    const [showFarahEmail, setShowFarahEmail] = useState(false);
    const [showEureka, setShowEureka] = useState(false);

    return ( 
        <>
            <Container fluid className='position-relative px-0'>
                <Row className='height-screen d-flex align-items-center position-relative px-3' id="home">
                    <Col className='position-relative text-center'>
                        <h1 style={{zIndex: '5', position: 'relative'}} className='mt-5 pt-5'>JAKE DWYER</h1>
                        {/* <h1 style={{zIndex: '5', position: 'relative', fontSize: '36px'}} className='d-md-none'>JAKE DWYER</h1> */}
                        <h1 className='bg-text-large' style={{zIndex: '1', opacity: '25%'}}>JAKE DWYER</h1>
                        <h1 className='bg-text-large' style={{zIndex: '3', opacity: '10%', top: '30%'}}>JAKE DWYER</h1>
                        <h1 className='bg-text-large' style={{zIndex: '2', opacity: '15%', top: '15%'}}>JAKE DWYER</h1>
                        <h1 className='bg-text-large' style={{zIndex: '3', opacity: '10%', top: '70%'}}>JAKE DWYER</h1>
                        <h1 className='bg-text-large' style={{zIndex: '4', opacity: '5%', top: '75%'}}>JAKE DWYER</h1>
                        <div className='color-splash-1'></div>
                        <div className='color-splash-2'></div>
                        <h4 style={{marginTop: '-20px'}} className='d-none d-xl-block'>PORTFOLIO</h4>
                        <Link to='projects'>
                            <button className='btn-primary'>GO TO PROJECTS</button>
                        </Link>
                        
                        <p className="my-3 position-relative" style={{zIndex: '9'}}>Software Developer</p>
                    </Col>
                </Row>
                <div className='gradient-vertical' id='about'>
                    <Row>
                        <Col xs='12' md='4' className='d-flex align-items-center'>
                            <h2 className='text-start'>WHO AM I?</h2>
                        </Col>
                        <Col xs='12' md='4'>
                            <h4 className='h4-bold text-start'>SUMMARY</h4>
                            <ul>
                                <li>Frontend developer</li>
                                <li>Fluent in English and Spanish</li>
                                <li>2+ years with React, HTML, Javascript, CSS</li>
                                <li>Fullstack certification (MongoDB, Express, React, NodeJS)</li>
                                <li>Experience with game development in C#.</li>
                                <li>8 Years professional education experience.</li>
                            </ul>
                        </Col>
                        <Col xs='12' md='4' className='my-3 my-md-0'>
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
                    <Row className='top-space'>
                            <Row className='d-md-flex'>
                                <Col xs='12' md='4' className='d-flex align-items-center'>
                                    <h2 className='text-start'>EXPERIENCE</h2>
                                </Col>
                                <Col xs='12' md='4' className='text-start my-5 my-md-0'>
                                    <p className='mb-0'>2020-present</p>
                                    <h4 className='h4-bold mb-0 text-start'>FREELANCE WEB DEVELOPER</h4>
                                    <p className='mb-0'>Recent Projects:</p>
                                    <p className='mb-0 p-small'>Farah Architecture</p>
                                    <p className='mb-0 p-small'>Flecks Appliance Center</p>
                                    <p className='mb-0 p-small'>FADM Impresos</p>
                                </Col>
                                <Col xs='12' md='4' className='text-start'>
                                    <p className='mb-0'>2014-2022</p>
                                    <h4 className='h4-bold mb-0 text-start'>MATH AND SPANISH EDUCATOR</h4>
                                    <p className='mb-0'>Oakvill High School - St. Louis, MO</p>
                                    <p className='mb-0 p-small'>2020-2022</p>
                                    <p className='mb-0'>ASF & Colegio Northridge - Mexico City, MX</p>
                                    <p className='mb-0 p-small'>2017-2020</p>
                                    <p className='mb-0'>Belleview Middle School - Nashville, TN</p>
                                    <p className='mb-0 p-small'>2014-2017</p>
                                </Col>
                            </Row>
                    </Row>
                    <Row className='top-space'>
                        <Col xs='12' md='4' className='d-flex align-items-center'>
                            <h2 className='text-start'>SKILLS</h2>
                        </Col>
                         
                        <Col xs='6' md='3' className='d-flex flex-column'>
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
                        <Col xs='6' md='3' className='d-flex flex-column'>
                            <ul>
                                <h4 className='h4-bold text-start'>BACKEND</h4>
                                <li>NodeJS</li>
                                <li>MongoDB</li>
                                <li>Express</li>
                            </ul>
                        </Col>
                        <Col xs='12' md='2' className='d-flex flex-column'>
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
                    <Row className="top-space d-flex align-items-center" id='contact'>
                        <Col xs='12' lg='4'>
                            <h2 className='text-start'>CONTACT</h2>
                        </Col>
                        <Col xs='12' lg='4'>
                            <div className='d-flex align-items-center'>
                                <h4 className='h4-bold mb-0'>Email:</h4>
                                <p className='mx-3 p-normal'>dwyerjakej@gmail.com</p>
                            </div>
                        </Col>
                        <Col xs='12' lg='4'>
                            <div className='d-flex align-items-center'>
                                <h4 className='h4-bold mb-0'>LinkedIn:</h4>
                                <p className='mx-3 p-normal d-block d-md-none'>.../dwyer-jake25</p>
                                <p className='mx-3 p-normal d-none d-md-block'>linkedin.com/in/dwyer-jake25</p>
                            </div>
                        </Col>
                    </Row>
                </div>
                <Row className='height-screen d-flex align-items-center position-relative' id='projects'>
                    <Col className='position-relative text-center'>
                        <h1 className='d-md-none' style={{zIndex: '5', position: 'relative', fontSize: '48px'}} >PROJECTS</h1>
                        <h1 className='d-none d-md-block' style={{zIndex: '5', position: 'relative'}} >PROJECTS</h1>
                        <h1 className='bg-text-large' style={{zIndex: '1', opacity: '25%'}}>PROJECTS</h1>
                        <h1 className='bg-text-large' style={{zIndex: '3', opacity: '10%', top: '30%'}}>PROJECTS</h1>
                        <h1 className='bg-text-large' style={{zIndex: '2', opacity: '15%', top: '15%'}}>PROJECTS</h1>
                        <h1 className='bg-text-large' style={{zIndex: '3', opacity: '10%', top: '70%'}}>PROJECTS</h1>
                        <h1 className='bg-text-large' style={{zIndex: '4', opacity: '5%', top: '75%'}}>PROJECTS</h1>
                        <div className='color-splash-1'></div>
                        <div className='color-splash-2'></div>
                    </Col>
                </Row>
                <Row>
                    <div className='clock-bg position-relative'>
                        <img src={clockedInBG} style={{visibility: 'hidden'}}/>
                        <div className='featured-project-text-container'>
                            <h2 className='text-white text-start'>ClockedIn</h2>  
                            <p className='text-white p-normal'>A fullstack application offering a streamlined solution for businesses to keep track of employee hours.</p>
                            <div className='menu d-flex align-items-center' style={{height: '50vh'}}>
                                <div className="menu-items d-flex flex-column ">
                                    <a href='https://clocked-in.netlify.app/' className='menu-item text-decoration-none' target='_blank' onMouseEnter={()=>setBackgroundPos('0% -10%')}><h3 className='text-white'>Visit the site</h3></a>
                                    <a onClick={()=>setShowClockedIn(true)} className='menu-item text-decoration-none link' onMouseEnter={()=>setBackgroundPos('0% -20%')}><h3 className='text-white'>Details</h3></a>
                                    <a href='https://github.com/jdwyer6/time-tracker' className='menu-item text-decoration-none'  target='_blank' onMouseEnter={()=>setBackgroundPos('0% -30%')}><h3 className='text-white'>Git Hub: Frontend</h3></a>
                                    <a href='https://github.com/jdwyer6/time-tracker-server' className='menu-item text-decoration-none'  target='_blank' onMouseEnter={()=>setBackgroundPos('0% -40%')}><h3 className='text-white'>Git Hub: Backend</h3></a>
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
                                    <a href='https://pawportraits.netlify.app/' target='_blank' className='menu-item text-decoration-none' onMouseEnter={()=>setBackgroundPos('0% 20%')}><h3>Visit the site</h3></a>
                                    <a onClick={()=>setShowPawPortraits(true)} className='menu-item text-decoration-none link' onMouseEnter={()=>setBackgroundPos('0% 40%')}><h3>Details</h3></a>
                                    <a href='https://github.com/jdwyer6/silhouettes' target='_blank' className='menu-item text-decoration-none' onMouseEnter={()=>setBackgroundPos('0% 60%')}><h3>Git Hub Repo</h3></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>
                <Row className='position-relative'>
                    <div className='farah-bg position-relative' style={{backgroundSize: scale}}>
                        <img src={Architecture} style={{visibility: 'hidden'}}/>
                        <div className='featured-project-text-container'>
                            <h2 className='text-start'>Farah Architecture</h2>  
                            <p className='p-normal'>A modern business page and gallery for an arquitecture company in Mexico City.</p>
                            <div className='menu d-flex align-items-center' style={{height: '50vh'}} onMouseEnter={()=>setScale('110%')} onMouseLeave={()=>setScale('100%')}>
                                <div className="menu-items d-flex flex-column ">
                                    <a href='https://faraharquitectura.com/' target='_blank' className='menu-item text-decoration-none'><h3>Visit the site</h3></a>
                                    <a onClick={()=>setShowFarah(true)} className='menu-item text-decoration-none link'><h3>Details</h3></a>
                                    <a href='https://github.com/jdwyer6/fara-arquitectura' target='_blank' className='menu-item text-decoration-none'><h3>Git Hub Repo</h3></a>
                                </div>
                            </div>
                        </div>
                    </div>


                </Row>

                <Row className='xy-padding-adjusted'>
                        <h1 className='y-padding d-none d-md-block'>MY EMAIL TEMPLATES</h1>
                        <h1 className='y-padding d-block d-md-none text-center' style={{fontSize: '36px'}}>EMAIL TEMPLATES</h1>
                        <Col xs='12' lg='6' className='my-2 d-flex justify-content-center'>
                            <Email_Card 
                            title='Farah Architecture'
                            image={FarahEmail}
                            codeLink='https://github.com/jdwyer6/farah-architecture-email-marketing'
                            figmaLink='https://www.figma.com/file/d0W6UlH6pCuP6PkAC7KscY/FARAH-Architecture-Email-Template?node-id=0%3A1&t=5IQHZK8mOaLijwHz-1'
                            previewLink={()=>setShowFarahEmail(true)}
                            />
                        </Col>
                        <Col xs='12' lg='6' className='my-2 d-flex justify-content-center' >
                            <Email_Card
                                title='Eureka Watch'
                                image={EurekaWatch}
                                codeLink='https://github.com/jdwyer6/eureka-watch-email'
                                figmaLink='https://www.figma.com/file/5Sz0eYfk7QharKk6ufpHTk/Eureka-Watch?node-id=1%3A15&t=0bfC3KhMkVEzgxBp-1'
                                previewLink={()=>setShowEureka(true)}
                            />
                           
                        </Col>
                        <h1 className='y-padding d-none d-md-block'>OTHER PROJECTS</h1>
                        <h1 className='y-padding d-block d-md-none text-center' style={{fontSize: '36px'}}>OTHER PROJECTS</h1>

                        <Col xs='12' md='6' lg='3' className='my-2'>
                            <Card 
                                title='FETCH' 
                                description='Stack abilities by catching frisbees and collect bones for points in an epic platformer. (UNITY/C#)' 
                                buttonText='Play the game!' 
                                image='card-image-4'
                                buttonLink="https://whospayingformike.itch.io/dogrungame"
                            />
                        </Col>
                        <Col xs='12' md='6' lg='3' className='my-2'>
                        
                            <Card 
                                title='DOODLE BALL' 
                                description='A puzzle game to test your creativity and basketball skills. Draw barriers, turn off gravity and much more! (UNITY/C#)' 
                                buttonText='Play the game!' 
                                image='card-image-2'
                                buttonLink='https://whospayingformike.itch.io/doodle-ball'
                            />
                        </Col>
                        <Col xs='12' md='6' lg='3' className='my-2'>
                            <Card 
                                title="'TACK'TICAL BALLOONS" 
                                description='Armed with tacks as projectiles, blast your way through hordes of evil balloons. (UNITY/C#)' 
                                buttonText='Play the game!' 
                                image='card-image-3'
                                buttonLink='https://whospayingformike.itch.io/tackticalballoons'
                            />
                        </Col>
                        <Col xs='12' md='6' lg='3' className='my-2'>
                            <Card 
                                title='FLECKS APPLIANCE CENTER' 
                                description='A business website for a local appliance retail store. (REACT)' 
                                buttonText='Visit project' 
                                image='card-image-1'
                                buttonLink='https://flecksappliancecenter.com/'
                            />
                        </Col>
                </Row>
                <Row className='x-padding mt-5'>
                    <footer className="d-flex flex-wrap justify-content-between align-items-center py- my-4 border-top border-secondary">
                        <p className="col-md-4 mb-0 text-muted p-2">Jake Dwyer</p>

                        <ul className="nav col-md-4 justify-content-md-end justify-content-start">
                            <Link to="home" className="nav-item nav-link px-2 text-muted link">Home</Link>
                            <Link to='about' className="nav-item nav-link px-2 text-muted link">About</Link>
                            <Link to='projects' className="nav-item nav-link px-2 text-muted link">Projects</Link>
                            <Link to='contact' offset={-500} className="nav-item nav-link px-2 text-muted link">Contact</Link>
                        </ul>
                    </footer>
                </Row>



            </Container>
            <ProjectModal show={showClockedIn} setShow={setShowClockedIn} design={clockedInFigma}/>
            <ProjectModal show={showPawPortraits} setShow={setShowPawPortraits} design={PawPortraitsFigma}/>
            <ProjectModal show={showFarah} setShow={setShowFarah} design={FarahFigma}/>
            <EmailTemplateModal show={showFarahEmail} setShow={setShowFarahEmail} design={farahpreview}/>
            <EmailTemplateModal show={showEureka} setShow={setShowEureka} design={eurekapreview}/>
            
        </>
     );
}
 
export default HomePage;