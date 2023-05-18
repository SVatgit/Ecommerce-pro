import { InputBase ,Box ,styled, ListItem,List} from '@mui/material'
 import SearchIcon from '@mui/icons-material/Search';
 import CameraAltIcon from '@mui/icons-material/CameraAlt';
import React, { useEffect } from 'react'
import { useState } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {getProducts}from "../../redux/actions/productAction"
import {Link} from 'react-router-dom';
import { Camera } from './Camera';
// import {Webcam} from 'react-webcam';
const SearchContainer = styled(Box)`
background : #DDFFBC;
width:38%;
border-radius:3px;
margin-left : 10px;
display:flex
`;
const InputSearchBase= styled(InputBase)`
padding-left:20px;
width:100%;
font-size:unset;
color:#263A29;
`;
const SearchIconWrapper=styled(Box)`
color:#263A29;
padding:9px;
display:flex;
`;

const ListWrapper=styled(List)
`
position:absolute;
background:#263A29;
color:#DDFFBB;
margin-top:36px;

`

const Search = () => {
    const [text,setText]=useState("");
    const {products }= useSelector(state => state.getProducts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
  const getText=(text)=>{
      setText(text)
  }
  const Camerac=()=>{
    <Camera/>
  }

  
  return (
    <SearchContainer>
        <InputSearchBase placeholder='Search for products, brands and more' onChange={(e)=>getText(e.target.value)}
        value={text}/>
       
        <SearchIconWrapper>
          <SearchIcon/>
          </SearchIconWrapper>
          <CameraAltIcon onClick={Camerac()} style={{cursor:"pointer", color:"#263A29",padding:"9px", display:"flex"}}/>
          {
            text &&
            <ListWrapper>
              {
                  products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product=>(
                  <ListItem>
                    <Link
                     to={`/product/${product.id}`} 
                     style={{ textDecoration:'none', color:'inherit'}}
                     onClick={() => setText('')} 
                    >
                      {product.title.longTitle}
                    </Link>
                  </ListItem>

                ))
              }
              </ListWrapper>
          }
    </SearchContainer>
  )
}

export default Search;