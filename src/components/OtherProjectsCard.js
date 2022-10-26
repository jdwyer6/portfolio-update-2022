
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function OtherProjectsCard({title, img, tech, description, siteLink}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} height='60%' style={{objectFit: 'cover'}}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
            {description}
        </Card.Text>
        <Card.Text className='border-top border-bottom'>
            {tech}
        </Card.Text>
        <Button variant="primary" className='my-1 w-100' href={siteLink}>Visit Project</Button>
        <Button variant="primary" className='my-1 w-100'>Details</Button>
      </Card.Body>
    </Card>
  );
}

export default OtherProjectsCard;