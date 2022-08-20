import React, { useState, useContext } from "react";
import { Button, Form } from "react-bootstrap";
import UserContext from "../../Context/UserContext";
import axios from "axios";

export default function LoginTab() {
  const baseUrl = "http://localhost:8080";
  const { updateShowSignupLogin, updateLoginpUserData } = useContext(UserContext);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [signupError, setSignupError] = useState(null);

 async function LoginButtonHandle () {
   try {
     const res = await axios.post(`${baseUrl}/users/login?userName=${userName}&password=${password}`);
     updateLoginpUserData(res.data);
     setSignupError(null);
     updateShowSignupLogin(false);
    } catch (err) {
        console.log(err);
        setSignupError(`${err.response.data}`)
    }
  }

  return (
    <Form>
      <Form.Group className="" controlId="loginUserInput.ControlInput7">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="string" placeholder="User Name" autoFocus 
        onChange={(e) => {setUserName(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="" controlId="loginPasswordInput.ControlInput8">
        <Form.Label>Password</Form.Label>
        <Form.Control type="passwoard" placeholder="Password" 
        onChange={(e) => {setPassword(e.target.value)}}/>
      </Form.Group>


      

        <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex m-2">{signupError}</div>
        <Button
          className="d-flex mt-2"
          variant="primary"
          onClick={() => LoginButtonHandle()}
        >
          Login
        </Button>
      </div>


    </Form>
  );
}
