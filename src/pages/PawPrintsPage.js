import ProjectInfoPage from "./ProjectInfoPage";
import screenshot_1 from '../assets/images/PawPortraits/screenshot_1.png';
import img2 from '../assets/images/PawPortraits/screenshot_2.png';
import img3 from '../assets/images/PawPortraits/screenshot_3.png';

const PawPrintsPage = () => {
    return ( 
        <ProjectInfoPage 
            title='Paw Portraits'
            subtitle='An interactive and dynamic web application to create personalized artwork.'
            heroimg={screenshot_1}
            githubLink='https://github.com/jdwyer6/silhouettes'
            siteLink='https://pawportraits.netlify.app/'
            rationale="I wanted to create a fun project that reflected my interests. I love photography and the outdoors and I also have two awesome dogs named Pancho and Mati. This site is allows the user to create an amazing personalized canvas by selecting from a collection of images which best encapsulate themselves and their pet. The preview updates in real time so the user can see the changes they are making without reloading the page."
            img2={img2}
            img3={img3}

        />
     );
}
 
export default PawPrintsPage;