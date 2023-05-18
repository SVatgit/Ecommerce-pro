import React, { useState, useContext } from 'react';
import { Box, Typography, Button, styled,Badge } from '@mui/material';
import {ShoppingCart} from '@mui/icons-material';
import { DataContext } from '../../context/DataProvider';
import LoginDialog from '../login/Logindialog';
import Profile from './Profile';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import SimpleDialog from '../login/SimpleDialog';

const Container = styled(Link)(({ theme }) => ({
    display: 'flex',
    textDecoration:"none",
    color:"inherit",
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));

const Wrapper = styled(Box)(({theme})=>({
    margin: '0 3% 0 auto',
    display: 'flex',
    textDecoration:"none",
    color:"inherit",
    '& > *': {
        marginRight: '40px !important',
        textDecoration: 'none',
        fontSize: '12px',
        alignItems: 'center',
    
  },
    [theme.breakpoints.down('md')]:
{
   display:'block'
}
}))
   

const LoginButton = styled(Button)`
    color :#263A29;
    background: #DDFFBC;
    text-transform :none;
    font-weight: 600;
    border-radius: 2px;
    padding: 5px 40px;
    height: 32px;
    box-shadow: none;
    transition: all 0.5s $easeInOut;
   
    &:hover{
      background: #52734D;
      color:#DDFFBC;
    }
`;
const CustomButtons = () => {
    
    const [open, setOpen] = useState(false);
    const [listOpen, setListOpen] = useState(false);
    const {account ,setAccount}= useContext(DataContext);
    const cartDetails = useSelector(state => state.cart);
    const { cartItems } = cartDetails;

    const openDialog = () => {
        setOpen(true);
    }
    const simpleDialog = () => {
        setListOpen(true);
    }

    return (
        <Wrapper>
            {
                account? <Profile account={account} setAccount={setAccount}/>:
                <LoginButton variant="contained" onClick={() => openDialog()}>
                Login
                </LoginButton>
            }
            <Typography style={{ marginTop: 3, width: 135 ,color:'#DDFFBC', cursor:"pointer"}}
            
            
            >Become a Seller</Typography>



            
            <Typography style={{ marginTop: 3 ,color:"#DDFFBC",cursor:"pointer"}}
            onClick={()=>simpleDialog()}
            >More</Typography>
            <Container to ="/cart">
            <Badge badgeContent={cartItems?.length} color="secondary">
                  <ShoppingCart style={{color:'#DDFFBC'}}/>
             </Badge>   
                <Typography style={{ marginLeft: 10 ,color:'#DDFFBC '}}>Cart</Typography>
            </Container>
            <LoginDialog open={open} setOpen={setOpen} />
            <SimpleDialog listOpen={listOpen} setListOpen={setListOpen}/>
        </Wrapper>
    )
}

export default CustomButtons;