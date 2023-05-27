import { Box, Typography, Menu, MenuItem, styled } from "@mui/material";
import React from "react";
import { useState } from "react";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";


const Component = styled(Menu)`
  margin-top: 5px;
`;
const Logout = styled(Typography)`
  font-size: 12px;
  margin-left: 20px;
  color:"#263A29";
`;




const Profile = ({account , setAccount}) => {
  const [open, setOpen] = useState(false);

  const handleClick =(event) => {
    setOpen(event.currentTarget);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const LogoutUser = () => {
    setAccount("");
  };
  return (
    <>
      <Box onClick={handleClick}>
        <Typography style={{ marginTop:"2", cursor:"pointer", color:"#DDFFBB"}}>
          {account}
        </Typography>
      </Box>
      <Component anchorEl={open} open={Boolean(open)} onClose={handleClose}> 
        <MenuItem onClick={() => {handleClose(); LogoutUser();}} style={{color:"#263A29" , background:"#DDFFBB"}}>
          <PowerSettingsNewIcon color="primary" fontSize="small"/>
          <Logout  >Logout</Logout>
        </MenuItem>
      </Component>
    </>
  );
};

export default Profile;
