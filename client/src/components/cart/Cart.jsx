import { Grid, Typography,Box, styled, Button } from '@mui/material'
import React from 'react'
import CartItem from './CartItem'
import EmptyCart from './EmptyCart'
import TotalView from './TotalView'
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addToCart, removeFromCart } from '../../redux/actions/cartAction';


const Component = styled(Grid)(({ theme }) => ({
  padding: '30px 135px',
  display: 'flex',
 

  [theme.breakpoints.down('sm')]: {
      padding: '15px 0'
  }
}));

const Header=styled(Box)
`
padding: 15px 24px;
background: #263A29;
color:#DDFFBC;

`
const BottomWrapper = styled(Box)`
    padding: 16px 22px;
    // background: #DDFFBC;
    background: #263A29;
    box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
    border-top: 1px solid #f0f0f0;
`;
const StyledButton = styled(Button)`
    display: flex;
    margin-left: auto;
    background: #DDFFBC;
    color: #263A29;
    border-radius: 2px;
    width: 250px;
    height: 51px;
    transition: all 0.5s $easeInOut;
   
    &:hover{
      background: #91C788;
      color:#263A29;
    }
`;
const LeftComponent = styled(Grid)(({ theme }) => ({
  paddingRight: 15,
  background: '#263A29',
  [theme.breakpoints.down('sm')]: {
      marginBottom: 15
  }
}));

export const Cart = () => {

  const cartDetails = useSelector(state => state.cart);
  const { cartItems } = cartDetails;
  const { id } = useParams();

  const dispatch = useDispatch();
  
  useEffect(() => {
      if(cartItems && id !== cartItems.id)   
          dispatch(addToCart(id));
  }, [dispatch, cartItems, id]);

  const removeItemFromCart = (id) => {
      dispatch(removeFromCart(id));
  }


  return (
    <>
  { cartItems.length ? 
            <Component container>
                <LeftComponent item lg={9} md={9} sm={12} xs={12}>
                    <Header>
                        <Typography style={{fontWeight: 600, fontSize: 18}}>My Cart ({cartItems?.length})</Typography>
                    </Header>
                        {   cartItems.map(item => (
                                <CartItem item={item} removeItemFromCart={removeItemFromCart}/>
                            ))
                        }
                    <BottomWrapper>
                        <StyledButton variant="contained">Place Order</StyledButton>
                    </BottomWrapper>
                </LeftComponent>
                <Grid item lg={3} md={3} sm={12} xs={12}>
                    <TotalView cartItems={cartItems} />
                </Grid>
            </Component> : <EmptyCart />
        }

    </>
  )
}
