import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ProjectModal = ({show, setShow, title, design}) => {
    return ( 
        <>
        <Modal
          show={show}
          onHide={() => setShow(false)}
          size='xl'
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              {title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={design} width='100%'/>
          </Modal.Body>
        </Modal>
      </>
     );
}
 
export default ProjectModal;