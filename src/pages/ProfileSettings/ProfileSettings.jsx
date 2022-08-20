import "./ProfileSettings.css";
import { useState, useContext } from "react";
// import { useNavigate  } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import UserContext from "../../Context/UserContext";
import axios from "axios";

export default function ProfileSettings() {
  const { loginUserData, updateLoginpUserData } = useContext(UserContext);
  const baseUrl = "http://localhost:8080";
  // const navigate = useNavigate();
  
  const [updateError, setUpdateError] = useState(null);

  const profileSettingsUser = JSON.parse(JSON.stringify(loginUserData));

  function handleEventChange(e) {
    profileSettingsUser[e.target.name] = e.target.value;
  }
  
  async function handleSubmit(e){
    e.preventDefault();
    const {email, userName, password, repassword, firstLast, phoneNumber, bio } = profileSettingsUser;
    try {
      const res = await axios.put(
        `${baseUrl}/users/update?email=${email}&userName=${userName}&password=${password}&repassword=${repassword}&firstLast=${firstLast}&phoneNumber=${phoneNumber}&bio=${bio}`
        );
        e.target.reset();
        updateLoginpUserData(res.data);
        setUpdateError(null);
    } catch (err) {
      setUpdateError(`${err.response.data}`)
      console.log(err.response.data);
    }


  }

  return (
    <div className="d-flex justify-content-center mt-1">
      <div className="w-25">
        <Form className="d-flex flex-column" onSubmit={(e)=>handleSubmit(e)}>
          <Form.Label>User Name: {loginUserData.userName}</Form.Label>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label className="d-flex">Email address: {loginUserData.email}</Form.Label>
            <Form.Control name="email" type="email" placeholder="Update email" onChange={(e)=>handleEventChange(e)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label className="d-flex">Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="Update Password" onChange={(e)=>handleEventChange(e)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="repassword">
            <Form.Label className="d-flex">Retype-Password</Form.Label>
            <Form.Control name="repassword" type="password" placeholder="Retype Password" onChange={(e)=>handleEventChange(e)}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="firstlast">
            <Form.Label className="d-flex">First and Last Name: {loginUserData.firstLast}</Form.Label>
            <Form.Control name="firstLast" type="string" placeholder="Update First and Last Name" onChange={(e)=>handleEventChange(e)}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="phoneNumber">
            <Form.Label className="d-flex">Phone number: {loginUserData.phoneNumber}</Form.Label>
            <Form.Control name="phoneNumber" type="integer" placeholder="Update Phone number" onChange={(e)=>handleEventChange(e)}/>
          </Form.Group>

          <Form.Group className="d-flex flex-column mb-3" controlId="Bio">
            <Form.Label className="d-flex">Short Bio</Form.Label>
            <textarea rows="3" name="Bio" className="d-flex" placeholder="Tell us about yourself" onChange={(e)=>handleEventChange(e)}/>
          </Form.Group>

          <div  className="d-flex justify-content-between">
           {updateError ? <div className="ps-2" >{updateError}</div>: <div></div> }
            <Button variant="primary" type="submit">
              Update
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
