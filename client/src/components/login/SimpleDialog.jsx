import React from 'react'
import { Box, Dialog, DialogTitle, ListItem,List,Typography} from "@mui/material";
import styled from "@emotion/styled";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import RefreshIcon from '@mui/icons-material/Refresh';


const SimpleDialog = ({ listOpen, setListOpen }) => {
    const handleClose = () => {
        setListOpen(false);
    };
  return (
    <Dialog
            open={listOpen}
            onClose={handleClose}
         
            PaperProps={{ sx: { maxWidth: "unset" } }}
         style={{    marginTop: "-450px",marginLeft:"1000px"
         }}
         >

        <DialogTitle style={{cursor:"pointer",backgroundColor:" #263A29",color:"#DDFFBC"}}>
            More Details
        </DialogTitle>
        <List style={{color:" #263A29",backgroundColor:"#DDFFBC",fontWeight: "600"}}>
            <ListItem><NotificationsActiveIcon/>   Notification</ListItem>
            <ListItem><SupportAgentIcon/>  24x7 Customer care</ListItem>
            <ListItem> <RefreshIcon/>What's New</ListItem>

        </List>
        
        
        </Dialog>
  )
}

export default SimpleDialog;
