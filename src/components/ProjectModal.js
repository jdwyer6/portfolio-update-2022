import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ProjectModal = ({show, setShow, design}) => {
    return ( 
        <>
        <Modal
          show={show}
          onHide={() => setShow(false)}
          size='xl'
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <img src={design} width='100%'/>
          </Modal.Body>
        </Modal>
      </>
     );
}
 
export default ProjectModal;