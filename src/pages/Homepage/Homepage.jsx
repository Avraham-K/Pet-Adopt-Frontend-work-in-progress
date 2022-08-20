import "./Homepage.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import SignupLoginModal from "../../components/SignupLogin/SignupLoginModal";
import UserContext from "../../Context/UserContext";

export default function Homepage() {
  const { updateShowSignupLogin, loginUserData } = useContext(UserContext);

  return (
    <div className="homepage d-flex flex-row">
      <Link to="/PetCarousel">
        <img
          src="https://i.imgur.com/virp4HL.jpeg"
          alt=""
          className="homePicture d-flex ps-3"
        />
      </Link>
      <div className="content d-flex flex-column justify-content-center p-5 me-3">
        {!loginUserData ? (
          <>
            <div className="d-flex justify-content-center">
              <div className="aLittleAboutUs d-flex p-3">
                Take the first step to providing a loving home to a pet.
                Our pets are in need of a home, adopt or foster today.
                Our pet adoption tool is easy to use and will
                help you locate cats and dogs. Pet Adopt is a
                national animal welfare charity like no other. 
                We help people find their pet for a forever home.
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <Button
                className=""
                variant="primary"
                onClick={() => updateShowSignupLogin(true)}
              >
                Signup and Login
              </Button>
            </div>
          </>
        ) : (
          <div className="contentPostLogin d-flex flex-row justify-content-center">
            <div className="myPetsContainer flex-column">
              <Link
                className="d-flex justify-content-end"
                to="/ProfileSettings"
              >
              </Link>
              <Link to="/MyPets">
                <div className="myPets d-flex">
                  <img
                    src="https://i.imgur.com/ztoq9tc.gif"
                    alt=""
                    className="myPetGif d-flex"
                  />
                  <div className="myPetsTitle d-flex p-2">My Pets</div>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>

      <SignupLoginModal />
    </div>
  );
}
