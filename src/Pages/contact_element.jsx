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

export default function Contactelement() {
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
          <VStack spacing={5}>
            <FormControl id="name">
              <FormLabel>Your Name</FormLabel>
              <InputGroup borderColor="#E0E1E7">
                <InputLeftElement
                  pointerEvents="none"
                  children={<BsPerson color="gray.800" />}
                />
                <Input type="text" size="md" />
              </InputGroup>
            </FormControl>
            <FormControl id="name">
              <FormLabel>Mail</FormLabel>
              <InputGroup borderColor="#E0E1E7">
                <InputLeftElement
                  pointerEvents="none"
                  children={<MdOutlineEmail color="gray.800" />}
                />
                <Input type="text" size="md" />
              </InputGroup>
            </FormControl>
            <FormControl id="name">
              <FormLabel>Message</FormLabel>
              <Textarea
                borderColor="gray.300"
                _hover={{
                  borderRadius: "gray.300",
                }}
                placeholder="message"
              />
            </FormControl>
            <FormControl id="name" float="right">
              <Button variant="solid" bg="#0D74FF" color="white" _hover={{}}>
                Send Message
              </Button>
            </FormControl>
          </VStack>
        </Box>
      </Box>

      <Box  alignSelf="baseline" marginTop="0%" >
        <Grid >
            <a href="callto:8825180626" target="_blank">
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

        <Image margin="auto" marginTop="30px" src="https://o.remove.bg/downloads/601dcffd-aa83-4e56-a00d-7437e81ce126/png-clipart-graphy-contact-miscellaneous-text-removebg-preview.png"/>
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
