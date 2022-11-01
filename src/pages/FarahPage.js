import { GrReactjs } from 'react-icons/gr';
import { TbBrandBootstrap } from 'react-icons/tb';
import { DiSass } from 'react-icons/di';
import ProjectInfoPage from "./ProjectInfoPage";
import farahPreview from '../assets/images/farah/preview.png';
import img3 from '../assets/images/farah/img3.png';
import img4 from '../assets/images/farah/img4.png';
import img5 from '../assets/images/farah/img5.png';
import img6 from '../assets/images/farah/img6.png';
import img7 from '../assets/images/farah/img7.png';
import img2 from '../assets/images/farah/img2.png';
import img8 from '../assets/images/farah/img8.png';

const FarahPage = () => {
    return ( 
        <ProjectInfoPage 
            title='Farah Arquitectura'
            subtitle='A clean and modern solution for a company specializing in design, arquitecture, construction and property management.'
            heroimg={farahPreview}
            githubLink='https://github.com/jdwyer6/fara-arquitectura'
            siteLink='https://www.faraharquitectura.com/'
            rationale="This was a great opportunity to put everything together I had learned through my experience and education with frontend development. I focused a lot on the design making sure everything flowed and echoed the clean, modern asthetic of today's architecture. I also used this project as an opportunity to improve accessibility. I did a lot of research when completing this project and incorporated what I learned about maintaining high contrast text, aria labels, information not based on color as an aid for color blindness, lowering text-density, and using correct html for screen readers for example: using 'button' instead of a clickable div."
            img2={img3}
            img3={img4}
            img4={img2}
            img5={img7}
            img6={img8}
            img7={img5}
            feature1="A responsive gallery was created to showcase the company's work."
            feature2='Clean, easy-to-navigate UI.'
            feature3='Emphasis on design and user experience'
            feature4='Mobile Responsive'
            challenges='One thing I learned a lot about with this project was web-optomized images. I used a lot of images in this project and started to notice the slow performance. I learned about how to export images for a web-friendly image size of 72 pixels per inch instead of the print standard of 300 px/inch and became more familiar with the webp file format. It was also a great experience to work with the client to implement the desired changes and respond to feedback in a timely manner.'
            techUsed={<h3 className='fs-1'><GrReactjs className="mx-5"/> React <TbBrandBootstrap className="mx-5"/>Bootstrap<DiSass className="mx-5"/>SASS</h3>}
            conclusion='This was a great learning opportunity from initial design all the way to deployment and hosting. I feel like I improved a lot as a developer and acquired valuable information about the web development process I will take with me to future projects.'
        />
     );
}
 
export default FarahPage;