import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import UserContext from "../../Context/UserContext";
import axios from "axios";

export default function SignupTab() {
  const { updateShowSignupLogin, updateLoginpUserData } =
    useContext(UserContext);
  const baseUrl = "http://localhost:8080";

  const [signupError, setSignupError] = useState(null);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [firstLast, setfirstLast] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");

  async function SignupButtonHandle() {
    try {
      const res = await axios.post(
        `${baseUrl}/users/signup?email=${email}&userName=${userName}&password=${password}&repassword=${repassword}&firstLast=${firstLast}&phoneNumber=${phoneNumber}`
        );
        updateLoginpUserData(res.data);
        updateShowSignupLogin(false);
        setSignupError(null);
    } catch (err) {
      setSignupError(`${err.response.data}`)
      console.log(err.response.data);
    }
  }

  return (
    <Form>
      <Form.Group className="" controlId="signupUserInput.ControlInput1">
        <Form.Label>User Name</Form.Label>
        <Form.Control
          type="string"
          placeholder="User Name"
          autoFocus
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className="" controlId="signupEmailInput.ControlInput2">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Email address"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className="" controlId="signupPasswordInput.ControlInput3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className="" controlId="signupRepasswordInput.ControlInput4">
        <Form.Label>Retype password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password again"
          onChange={(e) => {
            setRepassword(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className="" controlId="signupFirstLastInput.ControlInput5">
        <Form.Label>First and last Name</Form.Label>
        <Form.Control
          type="string"
          placeholder="First and last Name"
          onChange={(e) => {
            setfirstLast(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className="" controlId="signupPhoneInput.ControlInput6">
        <Form.Label>Phone number</Form.Label>
        <Form.Control
          type="number"
          placeholder="Phone number"
          onChange={(e) => {
            setphoneNumber(e.target.value);
          }}
        />
      </Form.Group>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex m-2">{signupError}</div>
        <Button
          className="d-flex mt-2"
          variant="primary"
          onClick={() => SignupButtonHandle()}
        >
          Signup
        </Button>
      </div>
    </Form>
  );
}
