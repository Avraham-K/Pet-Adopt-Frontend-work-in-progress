import React, { useState, useContext } from "react";
import { Tabs, Tab, Button, Form, Modal } from "react-bootstrap";
import UserContext from "../../Context/UserContext";
import SignupTab from "./SignupTab";
import LoginTab from "./LoginTab";


export default function SignupLoginModal() {
  const { updateShowSignupLogin, showSignupLogin , signinLoginModalSubmit , updateSignupUserData} = useContext(UserContext);

  

  return (
    <Modal show={showSignupLogin} onHide={updateShowSignupLogin}>
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body >
        <Tabs
          defaultActiveKey="signup"
          className="mb-3"
          justify
        >
          <Tab eventKey="signup" title="Signup">
            <SignupTab  />
          </Tab>
          <Tab eventKey="login" title="Login">
            <LoginTab />
          </Tab>
        </Tabs>
      </Modal.Body>
    </Modal>
  );
}
