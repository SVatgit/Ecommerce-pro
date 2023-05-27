import { AppBar, Toolbar, styled, Box, Typography,IconButton ,Drawer, List, ListItem} from "@mui/material";
import Search from "./Search";
import CustomButton from "./CustomButton.jsx";
import { Link } from "react-router-dom";
import { Menu} from '@mui/icons-material';
import { useState } from "react";
const StyledHeader = styled(AppBar)`
  background:  #263A29;
  height: 58px;
`;
const Component = styled(Link)`
  margin-left: 12%;
  line-height: 0;
  text-decoration:none;
  color:inherit;
`;
const SubHeading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
  color:#DDFFBC;
`;
const CustombuttonWrapper = styled(Box)(({theme})=>({
  margin:' 0 5% 0 auto',
  [theme.breakpoints.down('md')]:
{
   display:'none'
}
}))
 
const MenuButton = styled(IconButton)(({theme})=>({
   display:'none',
   [theme.breakpoints.down('md')]:
   {
      display:'block'
   }
}))





const Header = () => {
  
  const logoURL ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuONPSLoK-cCaMn9lGfPMqqofBLyiXZhhF7DXzzeEqVds3-d_iKpHBNAa6aIp7b1-NzXk&usqp=CAU";
  const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const list = () => (
        <Box style={{ width: 250 }} onClick={handleClose}>
            <List>
                <ListItem button>
                    <CustomButton />
                </ListItem>
            </List>
        </Box>
    );

  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: 55}}>
          <MenuButton color="inherit" onClick={handleOpen}>
             <Menu />
          </MenuButton> 
          <Drawer open={open} onClose={handleClose}>
            {list()}
            </Drawer>
        <Component to='/'>
          <img src={logoURL} alt="logo" style={{ width: 40, height: 25 }} />
          <Box >
            <SubHeading style={{textDecoration:"none"}}>
              Explore&nbsp;
              <Box component="span" style={{ color: "#91C788" }}>
                Plus
              </Box>
            </SubHeading>
          </Box>
        </Component>
        <Search />
        <CustombuttonWrapper>
          <CustomButton />
        </CustombuttonWrapper>
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;
