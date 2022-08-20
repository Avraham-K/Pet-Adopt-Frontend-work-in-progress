import React, { useState } from "react";
import UserContext from "../Context/UserContext"

export default function UserContextProvider(props) {

    const {children} = props;
    const [userIdContext, setuserIdContext] = useState(null); // needed??
    const [showSignupLogin, setshowSignupLogin] = useState(false);
    const [signinLoginModalSubmit, setSigninLoginModalSubmit]  = useState(true);
    const [signupUserData, setsignupUserData]  = useState({});
    const [loginUserData, setLoginUserData]  = useState(null);

    const updateShowSignupLogin = (showState) => {
        setshowSignupLogin(showState);
      };

    
    const updateUserIdContext = (newUser) => {
      setuserIdContext(newUser);
    };

    const updateSigninLoginModalSubmit = (state) =>{
        setSigninLoginModalSubmit(state);
    };

    const updateSignupUserData = (signupData ) =>{
        setsignupUserData(signupData);
    };

    const updateLoginpUserData = (loginData ) =>{
        setLoginUserData(loginData);
    };

  
    return (
      <UserContext.Provider
        value={{
          userIdContext,
          updateUserIdContext,
          updateShowSignupLogin,
          showSignupLogin,
          signinLoginModalSubmit,
          updateSigninLoginModalSubmit,
          signupUserData,
          updateSignupUserData,
          loginUserData,
          updateLoginpUserData,
        }}
      >
        {children}
      </UserContext.Provider>
    );
  }