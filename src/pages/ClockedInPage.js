import ProjectInfoPage from "./ProjectInfoPage";
import screenshot_1 from '../assets/images/clockedin/screenshot_1.png';
import img2 from '../assets/images/clockedin/screenshot_2.png';
import img3 from '../assets/images/clockedin/screenshot_3.png';
import img4 from '../assets/images/clockedin/screenshot_4.png';
import img5 from '../assets/images/clockedin/screenshot_5.png';
import img6 from '../assets/images/clockedin/screenshot_6.png';
import img7 from '../assets/images/clockedin/screenshot_7.png';
import { GrReactjs } from 'react-icons/gr';
import { TbBrandBootstrap } from 'react-icons/tb';
import { DiSass } from 'react-icons/di';
import { FaNode, FaDatabase, FaServer } from 'react-icons/fa'

const ClockedInPage = () => {
    return ( 
        <ProjectInfoPage 
            title='Clocked In'
            subtitle='A modern and user-friendly solution for businesses to track employee hours.'
            heroimg={screenshot_1}
            githubLink='https://github.com/jdwyer6/time-tracker'
            siteLink='https://clocked-in.netlify.app/'
            rationale="I wanted to create a fullstack application to really test my development skills which would also provide a solution to a real-world problem. A few friends and family members run their own businesses and are still using pen and paper to clock employees in and out and were excited to start using this new app. It was created with React, MongoDB, NodeJS and Express. This project was an amazing learning opportunity for me and really helped to improve my backend skills as well as strenghen my understanding of more complex frontend concepts."
            img2={img4}
            img3={img3}
            img4={img2}
            img5={img7}
            img6={img5}
            img7={img6}
            feature1='A fully functional front and back end.'
            feature2='User validation and login/out functionality.'
            feature3='User authentication and use of tokens and password hashing.'
            feature4='A clean UI and responsive mobile design.'
            challenges='I faced many challenges when developing this app. I learned so much about cyber security and the various methods to keep customer and site data safe. I am continuing to improve in this area and will keep updating my app as I keep researching and building upon my knowledge. I also improved a lot with error handling. Also, I used a lot of javascript with this project and learned a lot about working with javascript dates and how to pass and store information related to the date method.'
            techUsed={<h3 className='fs-1'><FaNode className="mx-md-4 mx-1" />NodeJS< FaDatabase className="mx-md-4 mx-1" />MongoDB<FaServer className="mx-md-4 mx-1" />Express<GrReactjs className="mx-md-4 mx-1"/> React <TbBrandBootstrap className="mx-md-4 mx-1"/>Bootstrap<DiSass className="mx-md-4 mx-1"/>SASS</h3>}
            conclusion="I loved working on this project and can't wait to continue to expand the app, add new features and polish the current code. This is exactly the type of project that excites me and keeps me wanting to learn more and more about software development."
        />
     );
}
 
export default ClockedInPage;