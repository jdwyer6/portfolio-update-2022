import { Col } from 'react-bootstrap';

const Card = ({title, description, buttonText, image}) => {
    return ( 
        <Col className='card card__color-2'>
            <div className={image}></div>
            <div className='card-text text-center p-3'>
                <p>{title}</p>
                <p className='p-small'>{description}</p>
                <button className='btn-secondary my-2'>{buttonText}</button>
            </div>

        </Col>
     );
}
 
export default Card;