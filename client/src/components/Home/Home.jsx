import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import Banner from './Banner'
import NavBar from './NavBar'
import {styled} from "@mui/material";
import { getProducts } from '../../redux/actions/productAction';
import {useDispatch , useSelector} from 'react-redux';
import Slide from './Slide.jsx';
import MidSlide from './MidSlide.jsx';
import { MidSection } from './MidSection';
// import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

const Container = styled(Box)
`
padding: 10px 10px;
background: #DDFFBC;
`
const Home = () => {

  const {products} = useSelector(state=> state.getProducts);
 


  const dispatch = useDispatch();
  useEffect(()=>{
   dispatch (getProducts())
  },[dispatch])
  return (
    <>
    <NavBar/>
    <Container>

    <Banner/>
    <MidSlide products = {products} title="Deal of the Day" timer={true}/>
    <MidSection/>
    

    <Slide products = {products} title="Discounts for you" timer={false}/>
    <Slide products = {products} title="Suggesting Items"  timer={false}/>
    <Slide products = {products} title="Top selection"  timer={false}/>
    <Slide products = {products} title="Recommondation Items"  timer={false}/>
    <Slide products = {products} title="Trending Offers"  timer={false}/>
    <Slide products = {products} title="Season's top picks"  timer={false}/>
    </Container>
    </>
  )
}
export default Home;




