import { Navbar, Form, Button, NavDropdown, Dropdown } from "react-bootstrap";
import { Link, useNavigate  } from "react-router-dom";
import "./Navbarfunc.css";
import { useContext, } from "react";
import UserContext from "../../Context/UserContext";

export default function NavbarFunc() {
  const { loginUserData, updateLoginpUserData } = useContext(UserContext);
  const navigate = useNavigate();

  const UserProfilePicture = (
    <img
      className="userPicture"
      src="https://i.imgur.com/gvnDCC5.jpg"
      width="35"
      height="35"
      alt=""
    />
  );

  function handleSignOut(){
    updateLoginpUserData(null);
    navigate("/");
  }

  function handleProfileSettings(){
    navigate("/ProfileSettings");
  }


  function displayUserName() {
    if (loginUserData) {
      return loginUserData.firstLast;
    }
    return "Unknown user";
  }

  return (
    <>
      <Navbar bg="light" variant="light" className="d-flex p-2">
        <div className="d-flex w-100 justify-content-between">
          <Link to="/" className="homeLink">
            <Navbar.Brand>
              <img
                src="https://i.imgur.com/n07HFI3.png"
                alt=""
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
              Pet Adopt
            </Navbar.Brand>
          </Link>
          <div className="d-flex align-items-center">
            <div className="displayUserName pe-2">Hi, {displayUserName()}</div>

            {loginUserData && (
              <NavDropdown
                align="end"
                title={UserProfilePicture}
                id="dropdown-user"
              >
                <Dropdown.Item eventKey="1" onClick={() => handleProfileSettings()}>Profile Settings</Dropdown.Item>
                <Dropdown.Item eventKey="2" onClick={() => handleSignOut()}> Log out</Dropdown.Item>
              </NavDropdown>
            )}

            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="mx-2"
                aria-label="Search"
              />

              <Button variant="outline-success">Search</Button>
            </Form>
          </div>
        </div>
      </Navbar>
    </>
  );
}
