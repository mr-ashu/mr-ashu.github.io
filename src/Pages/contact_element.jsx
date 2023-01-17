import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Center,
  SimpleGrid,
  Grid,
  Image,
  Toast,
  useToast,
} from "@chakra-ui/react";
 
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import {
  BsGithub,
  BsDiscord,
  BsPerson,
  BsFacebook,
  BsLinkedin,
} from "react-icons/bs";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FormGroup } from "@mui/material";
export default function Contactelement() {
   const tost =useToast()
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c8e685a', 'template_wrzp4tp', form.current, 'ZmdJbHototUngJG7O')
      .then((result) => {
          console.log(result.text);
        tost({
          title: 'Message send sucessfully.',
         
          status: 'success',
          duration: 4000,
          isClosable: true,
          position: 'top',
        })
      }, (error) => {
          console.log(error.text);
          tost({
            title: 'Something wrong',
           
            status: 'error',
            duration: 4000,
            isClosable: true,
            position: 'top',
          })
      });
  };
  return (
    <SimpleGrid
      columns={{ base: 1, sm: 1, md: 2, lg: 2 }}
      boxShadow={"2xl"}
      gap={0}
      width="90%"
    
      margin="auto"
      padding ="40px"
      borderRadius="lg"
    >
      <Box   borderRadius="lg">
        <Box m={8}  >
          <form onSubmit={sendEmail} style={{width:"100%",boxShadow:"none"}}  ref={form}>
         
              <FormLabel>Your Name</FormLabel>
              <InputGroup borderColor="#E0E1E7">
                <InputLeftElement
                  pointerEvents="none"
                  children={<BsPerson color="gray.800" />}
                />
                <Input type="text" size="md" name="user_name" />
              </InputGroup>
            
          
              <FormLabel>Mail</FormLabel>
              <InputGroup borderColor="#E0E1E7">
                <InputLeftElement
                  pointerEvents="none"
                  children={<MdOutlineEmail color="gray.800" />}
                />
                <Input type="text" size="md" name="user_email" />
              </InputGroup>
          
            
              <FormLabel>Message</FormLabel>
              <Textarea
                borderColor="gray.300"
                _hover={{
                  borderRadius: "gray.300",
                }}
                placeholder="message"
                name="message"
              />
         
            
              <Input marginTop="15px" w="fit-content" value=" Send Message"  variant="solid" bg="#0D74FF" color="white" _hover={{cursor:"pointer",bg:"teal"}} type={"submit"}/>
               
              
         
          </form>
        </Box>
      </Box>

      <Box  alignItems="center" justifyContent="center" >
        <Grid gap="15px" alignItems="center" justifyContent="center">
            <a href="tel:8825180626" target="_blank">
            <Button
              size="md"
           
              
              leftIcon={<MdPhone color="#1970F1" size="20px" />}
            >
              +91-8825180626
            </Button>
            </a>
         


          <a href="mailto:ashutosh15th@gmail.com" target="_blank">
            <Button
              size="md"
             
              variant="ghost"
              
              leftIcon={<MdEmail color="#1970F1" size="20px" />}
            >
              ashutosh15th@gmail.com
            </Button></a>
            
            <Button
              size="md"
         
              variant="ghost"
              
              leftIcon={<MdLocationOn color="#1970F1" size="20px" />}
            >
              Samastipur, Bihar
            </Button>
       
        </Grid>

        <Image margin="auto" marginTop="30px" src="https://i.ibb.co/RvjwTnT/105-1052182-call-us-contact-us-images-png-removebg-preview.png"/>
        <Flex justifyContent="center"  >
         <a href="https://www.facebook.com/mr.ashutosh22/" target="_blank">
          <IconButton
            aria-label="facebook"
            variant="ghost"
            size="lg"
            isRound={true}
            _hover={{ bg: "#0D74FF" }}
            icon={<MdFacebook size="28px" />}
          />
          </a>
          <a href="https://github.com/mr-ashu" target="_blank">
          <IconButton
            aria-label="github"
            variant="ghost"
            size="lg"
            isRound={true}
            _hover={{ bg: "#0D74FF" }}
            icon={<BsGithub size="28px" />}
          />
          </a>
       <a href="https://www.linkedin.com/in/ashutosh-sharma-b960b023b/" target="_blank">
          <IconButton
            aria-label="discord"
            variant="ghost"
            size="lg"
            isRound={true}
            _hover={{ bg: "#0D74FF" }}
             
            icon={<BsLinkedin size="28px" />}
          />
          </a>
        </Flex>

      </Box>
    </SimpleGrid>
  );
}
