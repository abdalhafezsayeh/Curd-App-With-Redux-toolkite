import React, { useState } from "react";
import { Button, ButtonGroup, Modal, Form } from "react-bootstrap";

import {useDispatch } from 'react-redux'
import {editePost, fetchPostsApi} from '../state/postesSlice'



function PostsItems({ records, deleteRecord }) {
  // Handel Model Show
  const [show, setShow] = useState(false);
  // Handel Model Edite 
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [dis, setDis] = useState('')
  // Use Dispatch 
  const dispatch = useDispatch()



  // Function Handel Close Model
  const handleClose = () => setShow(false);
  // Function Handel Show Model
  const handleShow = (itemOne) => {
    setId(itemOne.id)
    setTitle(itemOne.title)
    setDis(itemOne.dis)

    setShow(true)


  }
  
  // Function Handel Edite Post 
  const handleFieldChange = (e) => {
    e.preventDefault();

    dispatch(editePost({id,title, dis}))
    .unwrap()
    .then(() => {
      // Restart The All Postes After Edite 
      dispatch(fetchPostsApi())
    })
    .catch((error) => {
      console.log(error)
    });
    // console.log({id,title, dis})
  
  }

  // Function Handel Delete
  const handelDelete = (item) => {
    if (window.confirm(`Do you want to delete this item: ${item.title} ?`)) {
      deleteRecord(item.id);
    }
  };

  // Create Map Return Elemenets Extract Data From selectore
  const data = records.map((el, index) => (
    <tr key={index}>
      <td>#{++index}</td>
      <td>{el.title}</td>
      <td>{el.dis}</td>
      <td>
        <ButtonGroup aria-label="Basic example">
          {/* Button Edite  */}
          <Button variant="success" onClick={()=> handleShow(el)}>
            Edit
          </Button>
          {/* Start Model  */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleFieldChange}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>discription</Form.Label>
                  <Form.Control as="textarea" rows={3}
                  value={dis}
                  onChange={(e) => setDis(e.target.value)}
                  />
                </Form.Group>
              <Button variant="primary" type="submit">
                Save Changes
              </Button>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
          {/* End Model  */}
          {/* Button Delete  */}
          <Button variant="danger" onClick={() => handelDelete(el)}>
            Delete
          </Button>
        </ButtonGroup>
      </td>
    </tr>
  ));

  return <>{data}</>;
}

export default PostsItems;
