import React from 'react'
import { Box, Dialog} from "@mui/material";
import styled from "@emotion/styled";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


const Listbox = styled(Box)`
  height: 70vh;
  width: 150vh;
  background:#DDFFBC;
`;
const Listdialog = ({ open, setOpen }) => {
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{ sx: { maxWidth: "unset" } }}
            
            >
                {/* style={{backgroundColor:"#DDFFBC"}} */}
            <Listbox >
                <Box>
                    <Table stickyHeader aria-label="sticky table" >
                        <TableHead >
                            <TableRow style={{ color: "#263A29"  }}>
                                <TableCell>
                                    Top Offers
                                </TableCell>
                                <TableCell>
                                    Grocery
                                </TableCell>
                                <TableCell>
                                    Mobile
                                </TableCell>
                                <TableCell>
                                    Fashion
                                </TableCell>
                                <TableCell>
                                    Electronics
                                </TableCell>
                                <TableCell>
                                    Home
                                </TableCell>
                                <TableCell>
                                    Appliances
                                </TableCell>
                                <TableCell>
                                    Personal Care
                                </TableCell>
                                <TableCell>
                                    Toys & Baby
                                </TableCell>
                            </TableRow>
                         </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Mobile</TableCell>
                                    <TableCell>Dry&Fruits</TableCell>
                                    <TableCell>Realme</TableCell>
                                    <TableCell>Men</TableCell>
                                    <TableCell>EarPhone</TableCell>
                                    <TableCell>Cleaning Tools</TableCell>
                                    <TableCell>ACs</TableCell>
                                    <TableCell>Skincare</TableCell>
                                    <TableCell>Babycare Essentials</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Summer Foods</TableCell>
                                    <TableCell>Oil&Ghee</TableCell>
                                    <TableCell>Vivo</TableCell>
                                    <TableCell>Women</TableCell>
                                    <TableCell>Laptop</TableCell>
                                    <TableCell>Kitchen Essentials</TableCell>
                                    <TableCell>Refrigerators</TableCell>
                                    <TableCell>Hair care</TableCell>
                                    <TableCell>Babycare Combos</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Toys</TableCell>
                                    <TableCell>Snaks</TableCell>
                                    <TableCell>POCO</TableCell>
                                    <TableCell>Kids</TableCell>
                                    <TableCell>Headphones</TableCell>
                                    <TableCell>Home Decor</TableCell>
                                    <TableCell>Fans</TableCell>
                                    <TableCell>Make-up</TableCell>
                                    <TableCell>Stationery</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Stationery</TableCell>
                                    <TableCell>Noodles</TableCell>
                                    <TableCell>Samsung</TableCell>
                                    <TableCell>Trend Shop</TableCell>
                                    <TableCell>Smart Watch</TableCell>
                                    <TableCell>Gardening Tools</TableCell>
                                    <TableCell>Air Coolers</TableCell>
                                    <TableCell>Fragrances</TableCell>
                                    <TableCell>Video Games</TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell>Trendy Kurts</TableCell>
                                    <TableCell>Beverages</TableCell>
                                    <TableCell>iPhone</TableCell>
                                    <TableCell>Summer Style</TableCell>
                                    <TableCell>Tablets</TableCell>
                                    <TableCell>Furnishing</TableCell>
                                    <TableCell>Televisions</TableCell>
                                    <TableCell>Daily Essentials</TableCell>
                                    <TableCell>School Supplies</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Grooming</TableCell>
                                    <TableCell>Dairy&egg</TableCell>
                                    <TableCell>Infinix</TableCell>
                                    <TableCell>Winter Style</TableCell>
                                    <TableCell>Cameras</TableCell>
                                    <TableCell>Bath Fittings</TableCell>
                                    <TableCell>Washing Machines</TableCell>
                                    <TableCell>Luxury</TableCell>
                                    <TableCell>Soft Toys</TableCell>
                                  
                                </TableRow>
                              
                               
                            </TableBody>
                            


                    </Table>

                </Box>
            </Listbox>
        </Dialog>
    )
}

export default Listdialog
