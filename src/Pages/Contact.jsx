import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Contactelement from "./contact_element";
import Fade from "react-reveal/Fade";
import CallIcon from "@mui/icons-material/Call";
import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
export const Contact = () => {
  return (
    <>
    
      <section id="contact">
        
      <h1 marginBottom="15px">Contact</h1>

          <Contactelement />
        
       
      <div>

      <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}>
          <Stack spacing={6}>
            
            <Text fontSize={'sm'}>
              © Ashutosh Sharma. Thanks For Visiting 
            </Text>
          </Stack>
         
         
        </SimpleGrid>
      </Container>
    </Box>
      </div>
       
      </section>
      
    </>
  );
};
