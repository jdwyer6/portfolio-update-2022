import ProjectInfoPage from "./ProjectInfoPage";
import screenshot_1 from '../assets/images/PawPortraits/screenshot_1.png';
import img2 from '../assets/images/PawPortraits/screenshot_2.png';
import img3 from '../assets/images/PawPortraits/screenshot_3.png';
import img4 from '../assets/images/PawPortraits/screenshot_4.png';
import img5 from '../assets/images/PawPortraits/screenshot_5.png';
import img6 from '../assets/images/PawPortraits/screenshot_6.png';
import img7 from '../assets/images/PawPortraits/screenshot_7.png';
import { GrReactjs } from 'react-icons/gr';
import { TbBrandBootstrap } from 'react-icons/tb';
import { DiSass } from 'react-icons/di';

const PawPrintsPage = () => {
    return ( 
        <ProjectInfoPage 
            title='Paw Portraits'
            subtitle='An interactive and dynamic web application to create personalized artwork.'
            heroimg={screenshot_1}
            githubLink='https://github.com/jdwyer6/silhouettes'
            siteLink='https://pawportraits.netlify.app/'
            rationale="I wanted to create a fun project that reflected my interests. I love photography and the outdoors and I also have two awesome dogs named Pancho and Mati. This site is allows the user to create a personalized canvas by selecting from a collection of images which best encapsulate themselves and their pet. The preview updates in real time so the user can see the changes they are making without reloading the page."
            img2={img2}
            img3={img3}
            img4={img4}
            img5={img5}
            img6={img6}
            img7={img7}
            feature1='Layerd png images exported with transparency allow the user to build custom artwork piece by piece.'
            feature2='Users can filter and search for specific images to match a specific look.'
            feature3='A cart system. I plan to build this feature out in the future adding Stripe to accept payments.'
            feature4='Mobile responsive.'
            challenges='The first challenge I ran into with this project was finding a way to get my images to line up. Since each layer is rendered as a separate png layer with transparency I had to find a way to keep everything together even when changing screen sizes. It was a interesting problem that I was able to solve fairly easily by changing the way I grouped my divs in the JSX and experimenting with relative and absolute positioning. After receiving feedback from the project, I also realized users needed a way to view the preview on mobile while selecting different options since screen size was presenting an issue. I fixed this by using sticky positioning on small devices to keep the preview window in frame.'
            techUsed={<h3 className='fs-1 '><GrReactjs className="mx-md-5 mx-1"/> React <TbBrandBootstrap className="mx-md-5 mx-1"/>Bootstrap<DiSass className="mx-md-5 mx-1"/>SASS</h3>}
            conclusion='Overall I really enjoyed this project and it really helped to solidify a lot of the react concepts I had been working on. In the future I would love to continue building this project out and maybe eventually find a printing company to fulfill orders, connect it with Stripe to accept payments and finally launch it and see what happens.'
        />
     );
}
 
export default PawPrintsPage;