import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const AddCustomer = (props) =>{

    return(
                <div >

    <Modal show={true} size='lg'>
        <Modal.Header closeButton onClick={()=>props.hide()}>
          <Modal.Title>Customer Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Customer ID</Form.Label>
        <Form.Control  placeholder="Enter ID" />
      </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Customer Name</Form.Label>
        <Form.Control type='text' placeholder="Enter name" />
      </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Customer Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
            </Form>    
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>props.hide()}>Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
          </Modal>
      </div> 
    )
}