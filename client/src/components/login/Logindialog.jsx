import React from "react";
import { Box, Button, Dialog, TextField, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { useState, useContext } from "react";
import { authenticateSignup, authenticateLogin } from "../../service/api.js";
import { DataContext } from "../../context/DataProvider.jsx";

const LoginBox = styled(Box)`
  height: 70vh;
  width: 90vh;
`;
const Image = styled(Box)`
  background: #2874f0;
  height: 82.5%;
  width: 28%;
  padding: 45px 35px;
  & > p,
  & > h5 {
    color: #ffffff;
    font-weightt: 600;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;
const ReqButton = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;
const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
`;
const Error = styled(Typography)`
font-size:10px;
color:#ff6161;
line-height:0;
margin-top:10px;
font-weight:600;


`
const RightWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 10px 35px;
  flex: 1;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const Createaccount = styled(Typography)`
  font-size: 12px;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  cursor: pointer;
`;
const accountIntitialValues = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like, you are new here",
    subHeading: "Sign up with your mobile number to get started",
  },
};
const signupIntitialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

const loginIntitialValues = {
  username: "",
  password: "",
};

const Logindialog = ({ open, setOpen }) => {
  const [account, toggleAcoount] = useState(accountIntitialValues.login);
  const [signup, setSignup] = useState(signupIntitialValues);
  const { setAccount } = useContext(DataContext);
  const [login, setLogin] = useState(loginIntitialValues);
  const [error , setError]=useState(false);
  const handleClose = () => {
    setOpen(false);
    toggleAcoount(accountIntitialValues.login);
    setError(false);
  };

  const toggleSignup = () => {
    toggleAcoount(accountIntitialValues.signup);
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };
  const signupUser = async () => {
    let response = await authenticateSignup(signup);
    if (!response) return;
    handleClose();
    setAccount(signup.firstname);
  };
  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const loginUser = async () => {
    let response = await authenticateLogin(login);
    console.log(response);
    if (response.status === 200) {
      handleClose();
      setAccount(response.data.data.firstname);
    }
    else{
      setError(true);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <LoginBox>
        <Box style={{ display: "flex", height: "100%" }}>
          <Image>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{ marginTop: "20px" }}>
              {account.subHeading}
            </Typography>
          </Image>
          {account.view === "login" ? (
            <RightWrapper>
              <TextField
                variant="standard"
                label="Enter Username"
                onChange={(e) => onValueChange(e)}
                name="username"
              />
              { error &&
              <Error>
                please enter valid username or password
              </Error>
               }
              <TextField
                variant="standard"
                label="Enter Password"
                onChange={(e) => onValueChange(e)}
                name="password"
              />
              <Text>
                By contaning , you agree to company Terms of use and Privacy
                policy.
              </Text>
              <LoginButton onClick={() => loginUser()}>Login</LoginButton>
              <Typography style={{ textAlign: "center" }}>OR</Typography>
              <ReqButton>Request OTP</ReqButton>
              <Createaccount onClick={() => toggleSignup()}>
                New to Company? Create an account
              </Createaccount>
            </RightWrapper>
          ) : (
            <RightWrapper>
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="firstname"
                label="Enter Firstname"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="lastname"
                label="Enter Lastname"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="username"
                label="Enter Username"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="email"
                label="Enter Email"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="password"
                label="Enter Password"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="phone"
                label="Enter Phone"
              />
              <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
              <Createaccount>New to Company? Create an account</Createaccount>
            </RightWrapper>
          )}
        </Box>
      </LoginBox>
    </Dialog>
  );
};

export default Logindialog;
