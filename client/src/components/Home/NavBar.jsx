import { Box ,styled, Typography} from '@mui/material'
import React, { useState } from 'react'
import {navData} from '../../constants/data.js'
import Listdialog from '../login/Listdialog.jsx';

const Component=styled(Box)(({theme})=>({
display:'flex',
margin: '55px 130px 0 130px',
justifyContent:'space-between',
overflow:'hidden',
cursor:'pointer',

[theme.breakpoints.down('lg')]:{
   margin:'0',
}
}));
const Conatiner = styled(Box)`
padding :12px 8px;
text-align:center;
`
const Text = styled(Typography)`
font-size:14px;
font-weight:600;
font-family: inherit;
`

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const openDialog = () => {
    setOpen(true);
}

  return (
    <Box style={{background:'#DDFFBC'}}>

    <Component to = "/listpage">
        {
          navData.map(data =>(
            <Conatiner >
                    <img src={data.url} alt="nav" style={{width:64}} />
                    <Text  onClick={() => openDialog()}
                    style={{cursor:"pointer"}}
                    >{data.text}            
                    </Text>
                    </Conatiner>
            ))
          }
    </Component>
    <Listdialog open={open} setOpen={setOpen} />
          </Box>
  )
}

export default NavBar