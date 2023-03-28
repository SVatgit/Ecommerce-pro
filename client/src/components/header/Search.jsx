import { InputBase ,Box ,styled, ListItem,List} from '@mui/material'
 import SearchIcon from '@mui/icons-material/Search';
 import CameraAltIcon from '@mui/icons-material/CameraAlt';
import React, { useEffect } from 'react'
import { useState } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {getProducts}from "../../redux/actions/productAction"
import {Link} from 'react-router-dom';
import {Webcam} from 'react-webcam';
const SearchContainer = styled(Box)`
background : #ffffff;
width:38%;
border-radius:3px;
margin-left : 10px;
display:flex
`;
const InputSearchBase= styled(InputBase)`
padding-left:20px;
width:100%;
font-size:unset;
`;
const SearchIconWrapper=styled(Box)`
color:blue;
padding:9px;
display:flex;
`;

const ListWrapper=styled(List)
`
position:absolute;
background:#FFFFFF;
color:#000;
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
    <Webcam/>
  }
  return (
    <SearchContainer>
        <InputSearchBase placeholder='Search for products, brands and more' onChange={(e)=>getText(e.target.value)}
        value={text}/>
       
        <SearchIconWrapper>
          <SearchIcon/>
        <CameraAltIcon onClick={Camerac()}/>
          </SearchIconWrapper>
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