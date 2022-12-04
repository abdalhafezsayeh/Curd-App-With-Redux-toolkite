import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPosts } from "../state/postesSlice";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Add = () => {
  // UseState used In Form
  const [title, setTitle] = useState("");
  const [dis, setDis] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();



  // Function Handel Add New Post
  const formHandelCotrol = (e) => {
    e.preventDefault();

    const id = Math.floor(Math.random() * 500);
    if (!title == "" && !dis == "") {
      // faire The Dispatch New
      dispatch(addPosts({ id, title, dis }))
        
        .then(() => {
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
          // Handel Error 
        });
    }
  };





  return (
    <Form onSubmit={formHandelCotrol}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Add Title</Form.Label>
        <Form.Control
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Add Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={dis}
          onChange={(e) => setDis(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Add;
