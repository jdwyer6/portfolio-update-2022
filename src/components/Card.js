import { Col } from 'react-bootstrap';

const Card = ({title, description, buttonText, image, buttonLink}) => {
    return ( 
        <Col className='card card__color-2'>
            <a href={buttonLink} target='_blank'>
                <div className={image}></div>
                <div className='card-text text-center p-3'>
                    <p>{title}</p>
                    <p className='p-small'>{description}</p>
                    <a href={buttonLink} target='_blank'><button className='btn-secondary my-2'>{buttonText}</button></a>
                </div>
            </a>

        </Col>
     );
}
 
export default Card;