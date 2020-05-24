import React from 'react';
import {Navbar, Toolbar, Container, Text, useTheme} from 'sancho';
const Header = () => {
  const theme = useTheme();
  return ( 
      <Navbar css={{
        position: 'absolute',
        width:100+'%',
        top:0,
        left:0
        
      }}>
      <Toolbar>
        <Container>
          <Text>This text will have a padding on the left and right</Text>
        </Container>
      </Toolbar>
    </Navbar>

   );
}
 
export default Header;