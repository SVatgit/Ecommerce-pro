import { Typography, Box, styled } from '@mui/material';

const Component = styled(Box)`
    width: 80%%;
    height: 65vh;
    background: #52734D;
    margin: 80px 140px;
    color:#DDFFBC;
`;

const Container = styled(Box)`
    text-align: center;
    padding-top: 70px;
`;

const Image = styled('img')({
    width: '15%'
});


const EmptyCart = () => {
    const imgurl = 'https://o.remove.bg/downloads/904d5a66-630a-4ebb-8de4-eb7e0689019a/Empty_Cart-removebg-preview.png';
    
    return (
        <Component >
            <Container>
                <Image src={imgurl} />
                <Typography>Your cart is empty!</Typography>
                <Typography component="span">Add items to it now.</Typography>
            </Container>
        </Component>
    )
}

export default EmptyCart;