import { Container, Row, Col, Button } from 'react-bootstrap';
import { AiOutlineMail, AiOutlineLinkedin } from 'react-icons/ai';
import {FaCircle} from 'react-icons/fa';
import {BsBriefcase} from 'react-icons/bs';

const ResumePage = () => {
    const mainColor = '#6C9BB3'
    return (
        <Container className='d-flex justify-content-center flex-column'>
            <Row className='mt-5'>
                <Col>
                    <h1 style={{fontSize: '3rem'}}>Jake Dwyer</h1>
                    <h2 className='w-100' style={{fontSize: '2rem'}}>Software Developer</h2>
                </Col>
                <Col className='d-flex flex-column align-items-end'>
                    <p className='fw-normal mx-4 alt-font' style={{letterSpacing: '2px'}}> dwyerjakej@gmail.com  <AiOutlineMail /></p>
                    <p className='fw-normal mx-4 alt-font' style={{letterSpacing: '2px'}}>  jakedwyer.com  <BsBriefcase /></p>
                    <p className='fw-normal mx-4 alt-font' style={{letterSpacing: '2px'}}>dwyer-jake25 <AiOutlineLinkedin /> </p>
                </Col>
            </Row>
            <Row className='p-0 m-0' style={{borderBottom: `3px solid ${mainColor}`}}></Row>
            <Row className='mt-5'>
                <Col md='4' className='pe-md-5 resume-text'>
                    <h3>Education</h3>
                    <div className='resume-text resume-section'>
                        <h4>Full Stack Web Development Certification</h4>
                        <h5>Nucamp Coding Bootcamp</h5>
                        <h5>Graduated: 2022 with honors</h5>
                    </div>

                    <div className='resume-text'>
                        <h4>Bachelor's Degree in Education</h4>
                        <h5>Belmont University</h5>
                        <h5>Graduated: 2014</h5>
                    </div>

                    <div className='resume-text'>
                        <h4>Associate Degree in Computer Science</h4>
                        <h5>St. Charles Community College</h5>
                        <h5>Expected Graduation Date: 2025</h5>
                    </div>

                    <div style={{borderTop: `3px solid ${mainColor}`}}></div>
                    <h3 >Skills</h3>

                    <Row>
                        <Col md='6' className='resume-text m-0 p-0'>
                            <h4>Frontend</h4>
                            <ul style={{listStyle: 'none', padding: 0}} className='resume-text'>
                                <li>React</li>
                                <li>Redux</li>
                                <li>Javascript</li>
                                <li>HTML</li>
                                <li>CSS/SASS</li>
                                <li>Bootstrap</li>
                                <li>React Native</li>
                            </ul>
                            <h4>Backend</h4>
                            <ul style={{listStyle: 'none', padding: 0}} className='resume-text'>
                                <li>NodeJS</li>
                                <li>MongoDB</li>
                                <li>Express</li>
                            </ul>
                        </Col>
                        <Col md='6' className='resume-text m-0 p-0'>

                            <h4>Other</h4>
                            <ul style={{listStyle: 'none', padding: 0}} className='resume-text'>
                                <li>Git</li>
                                <li>Adobe Photoshop</li>
                                <li>Adobe Premiere</li>
                                <li>Adobe After Effects</li>
                                <li>Blender (3D Rendering)</li>
                                <li>Unity & C#</li>
                            </ul>
                        </Col>
                    </Row>
                        <div style={{borderTop: `3px solid ${mainColor}`}}></div>
                        <h3>Interests</h3>
                        <ul style={{listStyle: 'none', padding: 0}} className='resume-text'>
                            <li>Software and Game Development</li>
                            <li>Film and Photography</li>
                            <li>Mountain Biking</li>
                            <li>Board Games</li>
                            <li>Backpacking</li>
                        </ul>

                </Col>
                <Col className='ps-md-5 resume-text'>
                    <h3>Summary</h3>
                    <ul className='resume-text' style={{listStyle: 'none', padding: 0}}>
                        <li className='li-summary'><FaCircle style={{color: '#6C9BB3', width: '8px', height: '8px'}}/> &#160; Frontend React developer.</li>
                        <li className='li-summary'><FaCircle style={{color: '#6C9BB3', width: '8px', height: '8px'}}/> &#160; Fluent in English and Spanish.</li>
                        <li className='li-summary'><FaCircle style={{color: '#6C9BB3', width: '8px', height: '8px'}}/> &#160; 2 years experience with html, css and javascript.</li>
                        <li className='li-summary'><FaCircle style={{color: '#6C9BB3', width: '8px', height: '8px'}}/> &#160; 1+ year experience with React.</li>
                        <li className='li-summary'><FaCircle style={{color: '#6C9BB3', width: '8px', height: '8px'}}/> &#160; Full stack certification (NodeJS, MongoDB, React and Express).</li>
                        <li className='li-summary'><FaCircle style={{color: '#6C9BB3', width: '8px', height: '8px'}}/> &#160; 2 years experience with game development in C#.</li>
                        <li className='li-summary'><FaCircle style={{color: '#6C9BB3', width: '8px', height: '8px'}}/> &#160; 8 years professional education experience.</li>
                    </ul>
                    <div style={{borderTop: `3px solid ${mainColor}`}}></div>
                    <h3>Professional Experience</h3>
                    <h4 className='mb-2'>Web Developer</h4>
                    <h5>Freelance - 2021 - present</h5>
                    <p>Designed, developed and deployed modern and responsive websites for various companies.</p>
                    <h6>Recent Projects:</h6>
                    <ul style={{listStyle: 'none', padding: 0}} className='resume-text'>
                        <li><FaCircle style={{color: '#6C9BB3', width: '8px', height: '8px'}}/> &#160; FARAH ARCHITECTURE: Created and online business website and project gallery. <a target="_blank" href='https://www.faraharquitectura.com'>faraharquitectura.com</a></li>
                        <li><FaCircle style={{color: '#6C9BB3', width: '8px', height: '8px'}}/> &#160; FLECKS APPLIANCE CENTER: Added efficiency to the business by creating a react application to develop a responsive search feature giving customers access to products and information which solved many issues in the company. <a target="_blank" href='https://www.flecksappliancecenter.com'>flecksappliancecenter.com</a></li>
                        <li><FaCircle style={{color: '#6C9BB3', width: '8px', height: '8px'}}/> &#160; <b>FADM IMPRESOS</b>: Overhauled an existing site. Updated UI and UX to a user and mobile friendly environment. <a target="_blank" href='https://www.fadm.com.mx'>fadm.com.mx</a></li>
                    </ul>
                    <div className='resume-text'>
                        <h4 className='mt-4 mb-2'>Math and Spanish Educator</h4>
                        <h5>Oakville High School - St. Louis, MO - 2020 - 2022</h5>
                        <h5>American School Foundation & Colegio Northridge - Mexico City, Mexico - 2017 - 2020</h5>
                        <h5>Bellevue Middle School - Nashville, TN - 2014 - 2017</h5>
                        <h6 className='mt-4'>Recent Accomplishments: </h6>
                        <ul style={{listStyle: 'none', padding: 0}} className='resume-text'>
                            <li><FaCircle style={{color: '#6C9BB3', width: '8px', height: '8px'}}/> &#160; Achieved 85% annual student growth as measured by Mehlville School District's "Student Learning Objective" program.</li>
                            <li><FaCircle style={{color: '#6C9BB3', width: '8px', height: '8px'}}/> &#160; Increased math proficiency of 5th-8th grade students from below basic (under 50%) to proficiency (80% or higher).</li>
                            {/* <li>Developed and presented challenging lessons and courses which promted critical thinking and creativity from students.</li> */}
                            <li><FaCircle style={{color: '#6C9BB3', width: '8px', height: '8px'}}/> &#160; Worked with curriculum team leads and senior curriculum directors as part of a professional learning community to develop new course material.</li>
                            {/* <li>Reviewed and provided feedback on work from students and other team members and incorporated feedback from others into my own work.</li> */}
                            <li><FaCircle style={{color: '#6C9BB3', width: '8px', height: '8px'}}/> &#160; Presented on classroom management during professional development seminars.</li>
                        </ul>
                    </div>



                </Col>
            </Row>
        </Container>
    );
}
 
export default ResumePage;