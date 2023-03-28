import React from 'react'
import { Box ,Typography,styled, TableCell,Table,TableBody,TableRow} from "@mui/material";
import { LocalOffer as Badge } from '@mui/icons-material';

const SmallText=styled(Box)`
font-size:14px;
vertical-align:baseline;
& > p{
  font-size:14px;
  margin-top:10px
}
`
const StyleBadge=styled(Badge)`
margin-right:10px;
color:#00CC00;
font-size:15px
`
const ColumnText=styled(TableRow)`
font-size:14px;
vertical-align:baseline;
& > td{
  font-size:14px;
  margin-top:10px;
  border:none;
}
`



export const ProductDetail = ({product}) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const date=new Date(new Date().getTime()+(5*24*60*60*1000))
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

  return (
    <>
    <Typography>{product.title.longTitle}</Typography>
                        <Typography style={{marginTop: 5, color: '#878787', fontSize: 14 }}>
                            8 Ratings & 1 Reviews
                            <Box component="span"><img src={fassured} style={{width:77,marginLeft:20}}/></Box>
                        
                            </Typography>
                            <Typography>
                                <Box component="span" style={{fontSize:28}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                                <Box component="span" style={{color:'#878787'}}><strike> ₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                                <Box component="span" style={{color:"#388E3C"}}>{product.price.discount} off</Box>
                            </Typography>
                            <Typography>Available offers</Typography>
            <SmallText>
                <Typography><StyleBadge /> Get extra 20% lt upto £50 on 1 Rem(s) TEC</Typography>
                <Typography><StyleBadge />Get entra 13% of (orice incisive of count) TEC.</Typography>
                <Typography><StyleBadge />Sign up for Fipkat Pay Later and get Fiokat Git Card worth 2100" Know More</Typography>
                <Typography><StyleBadge />Buy 2 toms save S%-Buy 3 or more save 10% TEC</Typography>
                <Typography><StyleBadge />5% Cashback on Fipkart Axis Bark Card</Typography>
                <Typography><StyleBadge />No Cost Ellon Baa Fiserv Ell Card on cart value abowe £2909 TC </Typography>
            </SmallText>
            <Table>
              <TableBody>
                <ColumnText>
                  <TableCell style={{color:'#878787'}}>Delivery</TableCell>
                  <TableCell style={{fontWeight:600}}>Delivery By {date.toDateString()} | ₹40</TableCell>
                </ColumnText>
                <ColumnText>
                  <TableCell style={{color:'#878787'}}>Warranty</TableCell>
                  <TableCell> No Warranty</TableCell>
                </ColumnText>
                <ColumnText>
                  <TableCell style={{color:'#878787'}}>Seller</TableCell>
                  <TableCell > 
                  <Box component="span" style={{color:'#2874f0'}}>
                    SuperComNet
                  </Box>
                  <Typography>GST invoice available</Typography>
                  <Typography>View more sellers starting from ₹{product.price.cost}</Typography>
                  
                  </TableCell>
                </ColumnText>
                <ColumnText>
                  <TableCell colSpan={2}>
                    <img src={adURL}  style={{width:390}}/>
                  </TableCell>
                 
                </ColumnText>
                <ColumnText>
                  <TableCell style={{color:'#878787'}}>Description</TableCell>
                  <TableCell>{product.description}</TableCell>
                </ColumnText>
              </TableBody>

            </Table>
    </>
  )
}
