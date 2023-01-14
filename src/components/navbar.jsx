import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
 
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Home } from '../Pages/Home';
import { About } from '../Pages/About';
import { Education } from '../Pages/Education';
import { Skill } from '../Pages/Skill';
import { Project } from '../Pages/Project';
import { Contact } from '../Pages/Contact';
import { Link } from "react-scroll";
const Links = [ 

  <Link to="home">home</Link>,
  <Link to="about">about</Link>,
  <Link to="education">education</Link>,
  <Link to="project">project</Link>,
  <Link to="contact">contact</Link>,
];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'} >
    {children}
    
  </Link>
);

export default function  Navbar() {
  const { isOpen,isClose, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box className='spart' bg={useColorModeValue('#1976d2', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            _hover={{background:"none"}}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            background="none"
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>Ashutosh Sharma</Box>
          
          </HStack>

          <Flex gap="15px">
          <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
              
            </HStack>
          <Button background="none"  _hover={{background:"none"}} onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
          </Flex>
         
        
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack textAlign="center" as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink      key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : isClose}
      </Box>

      <Box id='bodypart'>
         <Home/>
         <About/>
         <Education/>
         <Skill/>
         <Project/>
         <Contact/>



      </Box>
    </>
  );
}

