import React,{useState} from 'react';
import {Button,Modal} from 'react-bootstrap';
import gif from './gif.gif';

const Modals = () => {
  const [show, setShow] = useState(true);
  return <div>
       <Button className='invisible'  variant="primary" onClick={() => setShow(true)}>
            Custom Width Modal
        </Button>
       <Modal  show={show}  >
                <Modal.Body >
               
                  <img className="img-fluid" src={gif}/> 
                </Modal.Body>
                <Modal.Footer>
                   
                   <button type="button" className="btn btn-secondary" show={show} onClick={() => setShow(false)}>WEBSITE PREVIEW   <i className="fas fa-times-circle"></i></button></Modal.Footer>
            </Modal>
  </div>
};

export default Modals;
