import { Container, Row, Col, Button } from 'react-bootstrap';
import resume from '../assets/images/resume.png'

const ResumePage = () => {
    const mainColor = '#6C9BB3'
    return (
        <Container className='d-flex justify-content-center flex-column'>
            <Row className=' text-center my-5'>
                <h1 style={{fontSize: '3rem'}}>Jake Dwyer</h1>
                <div className='' style={{backgroundColor: '#6C9BB3'}}>
                    <h2 className='w-100 text-white my-0' style={{fontSize: '2rem'}}>Software Developer</h2>
                    <p className='my-0 text-white fw-normal' style={{letterSpacing: '2px'}}>Email: dwyerjakej@gmail.com - Portfolio: jakedwyer.com - LinkedIn: dwyer-jake25</p>
                </div>
            </Row>
            <Row>
                <Col md='3'>
                    <h3 style={{borderBottom: `5px solid ${mainColor}`}}>Education</h3>
                    <div>
                        <h4>Full Stack Web Development Certification</h4>
                        <h5>Nucamp Coding Bootcamp</h5>
                        <p>Graduated: 2022 with honors</p>
                    </div>

                    <div>
                        <h4>Bachelor's Degree in Education</h4>
                        <h5>Belmont University</h5>
                        <p>Graduated: 2014</p>
                    </div>

                    <div>
                        <h4>Associate Degree in Computer Science</h4>
                        <h5>St. Charles Community College</h5>
                        <p>Expected Graduation Date: 2025</p>
                    </div>


                    <h3 style={{borderBottom: `5px solid ${mainColor}`}}>Skills</h3>
                    <h4>Frontend</h4>
                    <ul style={{listStyle: 'none'}} >
                        <li>React</li>
                        <li>Redux</li>
                        <li>Javascript</li>
                        <li>HTML</li>
                        <li>CSS/SASS</li>
                        <li>Bootstrap</li>
                        <li>React Native</li>
                    </ul>
                    <h4>Backend</h4>
                    <ul style={{listStyle: 'none'}}>
                        <li>NodeJS</li>
                        <li>MongoDB</li>
                        <li>Express</li>
                    </ul>
                    <h4>Other</h4>
                    <ul style={{listStyle: 'none'}} >
                        <li>Git</li>
                        <li>Adobe Photoshop</li>
                        <li>Adobe Premiere</li>
                        <li>Adobe After Effects</li>
                        <li>Blender (3D Rendering)</li>
                        <li>Unity & C#</li>
                    </ul>

                    <h3 style={{borderBottom: `5px solid ${mainColor}`}}>Interests</h3>
                    <ul style={{listStyle: 'none'}} >
                        <li>Software and Game Development</li>
                        <li>Film and Photography</li>
                        <li>Mountain Biking</li>
                        <li>Board Games</li>
                        <li>Backpacking</li>
                    </ul>

                </Col>
                <Col>
                    <h3 style={{borderBottom: `5px solid ${mainColor}`}}>Summary</h3>
                    <ul>
                        <li>Frontend React developer.</li>
                        <li>Fluent in English and Spanish.</li>
                        <li>2 years experience with html, css and javascript.</li>
                        <li>1+ year experience with React.</li>
                        <li>Full stack certification (NodeJS, MongoDB, React and Express).</li>
                        <li>2 years experience with game development in C#.</li>
                        <li>8 years professional education experience.</li>
                    </ul>

                    <h3 style={{borderBottom: `5px solid ${mainColor}`}}>Professional Experience</h3>
                    <h4>Web Developer</h4>
                    <h5>Freelance - 2021 - present</h5>
                    <p>Designed, developed and deployed modern and responsive websites for various companies.</p>
                    <h6>Recent Projects:</h6>
                    <ul>
                        <li>FARAH ARCHITECTURE: Created and online business website and project gallery. <a target="_blank" href='https://www.faraharquitectura.com'>faraharquitectura.com</a></li>
                        <li>FLECKS APPLIANCE CENTER: Added efficiency to the business by creating a react application to develop a responsive search feature giving customers access to products and information which solved many issues in the company. <a target="_blank" href='https://www.flecksappliancecenter.com'>flecksappliancecenter.com</a></li>
                        <li>FADM IMPRESOS: Overhauled an existing site. Updated UI and UX to a user and mobile friendly environment. <a target="_blank" href='https://www.fadm.com.mx'>fadm.com.mx</a></li>
                    </ul>
                    <div>
                        <h4>Math and Spanish Educator</h4>
                        <h5>Oakville High School - St. Louis, MO - 2020 - 2022</h5>
                        <h5>American School Foundation & Colegio Northridge - Mexico City, Mexico - 2017 - 2020</h5>
                        <h5>Bellevue Middle School - Nashville, TN - 2014 - 2017</h5>
                        <p>Developed and presented challenging lessons to promote critical thinking and creativity in students. Worked with curriculum team leaders to improve standards and implement data-driven instruction.</p>
                        <ul>
                            <li>Achieved 85% annual student growth as measured by Mehlville School District's "Student Learning Objective" program.</li>
                            <li>Increased math proficiency of 5th-8th grade students from below basic (under 50%) to proficiency (80% or higher).</li>
                            <li>Developed and presented challenging lessons and courses which promted critical thinking and creativity from students.</li>
                            <li>Worked with curriculum team leads and senior curriculum directors as part of a professional learning community to develop new course material.</li>
                            <li>Reviewed and provided feedback on work from students and other team members and incorporated feedback from others into my own work.</li>
                            <li>Presented on classroom management during professional development seminars.</li>
                        </ul>
                    </div>



                </Col>
            </Row>
        </Container>
    );
}
 
export default ResumePage;