
import { Box  , styled , Button} from '@mui/material'
import React, { useState } from 'react'
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from "react-redux";
import {addToCart} from "../../redux/actions/cartAction.js"
import { payUsingPaytm } from '../../service/api.js';
import { post } from '../../utils/paytm.js';




const LeftConatiner =styled(Box)(({theme})=>({
  minWidth:'40%',
padding: '40px 0 0 80px',
  [theme.breakpoints.down('lg')]:{
      padding:'20px 40px'
  }
}))


const Image = styled('img')({
  border: '1px solid #f0f0f0',
  width: '95%'
});
const StyledButton = styled(Button)(({theme})=>({
  width: '48%',
    borderRadius: '2px',
    height: '50px',
  [theme.breakpoints.down('lg')]:{
    width: '44%',
  },
  [theme.breakpoints.down('sm')]:{
    width: '48%',
  }
}))

 const ActionItem = ({product}) => {

  const navigate =useNavigate();
  const dispatch= useDispatch();
  const [quantity , setQuantity]=useState(1);
 
  const {id}=product;


  const addItemToCart=()=>{
    dispatch(addToCart(id, quantity));
      navigate('/cart');
  }
 const buyNow=()=>{
  let response=payUsingPaytm({amount:500,email:'codeforinterview01@gmail.com'});
  let information={
    action: 'https://securegw-stage.paytm.in/order/process',
     params:response
  }
   post(information);
 }


  return (
    

    <LeftConatiner>
        <Image src={product.detailUrl} alt="product" />
       <StyledButton variant="contained" onClick={()=>addItemToCart()} style={{marginRight: 10, background: '#ff9f00'}}><Cart />Add To Cart</StyledButton>
       <StyledButton variant="contained" onClick={()=>buyNow()} style={{background: '#fb641b'}}><Flash />Buy Now</StyledButton>
    </LeftConatiner>
   
  )
}
export default ActionItem;
