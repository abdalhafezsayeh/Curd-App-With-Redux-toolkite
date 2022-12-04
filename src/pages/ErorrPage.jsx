import React from "react";
import { Button } from "react-bootstrap";
import { useRouteError } from "react-router-dom";
import { useNavigate } from "react-router-dom";



function ErorrPage() {
  const error = useRouteError();
//   console.error(error);

const navigate = useNavigate()


  return (
    <div id="error-page" className="text-center mt-5">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Button variant="dark" onClick={() => navigate('/', {replace:true})}>Go To Home</Button>
    </div>
  );
}

export default ErorrPage;
