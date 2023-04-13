 import { ButtonGroup ,Button,styled} from '@mui/material'
import React from 'react'

const Component=styled(ButtonGroup)
`
margin-top:30px;
// background: #263A29;
// color:#DDFFBB;
`
const StyledButton=styled(Button)
`
border-radius:50%;
// border-color:red;

`

const GroupButton = () => {
  return (
  <Component>
    <StyledButton>-</StyledButton>
    <Button disabled>1</Button>
    <StyledButton>+</StyledButton>
  </Component>
  )
}

export default GroupButton;