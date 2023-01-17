import React from "react";
import "../components/Navbar.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
export const Projectelement = () => {
 let data=[
  {
    imge:"https://user-images.githubusercontent.com/105920688/208405066-668ca6c8-6d31-4f17-a055-623228bed1a0.png",
    image:"https://i.ibb.co/pxVwrzb/Whats-App-Image-2022-12-17-at-00-35-18.jpg",
    name:"CARE & fit",
    description:" cult.fit is a health and fitness platform where you can Buy online checkup tests and also book session for mind therapy and consult doctors .",
    tool:"Javascript | CSS | HTML | React | MUI | Chakra | Redux | Typescript | MongoDB | Node.js | Express | Animation",
    netlify:"https://moonlit-gumption-211089.netlify.app/",
    github:"https://github.com/mr-ashu/Care-fit"
  },
  {
    imge:"https://camo.githubusercontent.com/98a925e04c15e3b611043ba2b70d2ac86792286e12f5768d87b19020c263e9f9/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f3634302f312a7a6931395431587846564e51656f6e51366a65756e512e77656270",
    image:"https://i.ibb.co/QXPbkgh/Trouper.png",
    name:"TROUPER",
    description:" Trouper, the world's largest marketplace for digital services offers both buyers and sellers a digitally streamlined transactional platform.",
    tool:"Javascript | CSS | HTML | React | Bootstrap | MUI | Chakra UI | Redux  | MongoDB | Node.js | Express",
    netlify:"https://jazzy-lokum-73584a.netlify.app/",
    github:"https://github.com/mr-ashu/nutty-form-5506"
  },

  {
    imge:"https://user-images.githubusercontent.com/97459069/200315726-944f0769-9cd1-444f-90e2-7439d51a3884.PNG",
    image:"data:image/png;base64,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",
    name:"BEWAKOOF",
    description:" Bewakoof is an Online Shopping site for Men and Women's Clothing. This is a group project and we build this in just four days with five teammates.",
    tool:"Javascript | CSS | HTML | React",
    netlify:"https://stellar-choux-d17a1b.netlify.app",
    github:"https://github.com/mr-ashu/freezing-vacation-7444"
  },
  {
    imge:"https://user-images.githubusercontent.com/101327895/167396624-c2fbb47d-8d7a-4109-91de-c8d4f2bf15db.png",
    image:"data:image/png;base64,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",
    name:"ZEE 5  ",
    description:"ZEE5 is one of the leading online streaming Over The Top (OTT) platform with 90+ live TV channels & 1.25 lac+ hours of viewing across multiple languages.",
    tool:"Javascript | CSS | HTML | Local-Storage",
    netlify:"https://jade-hummingbird-b3ab78.netlify.app",
    github:"https://github.com/mr-ashu/zee5"
  },
  {
    imge:"https://www.luxurydaily.com/wp-content/uploads/2020/03/nordstrom-site.png",
    image:"data:image/png;base64,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",
    name:"NORDSTROM ",
    description:"Nordstrom, Inc. is a leading fashion retailer offering compelling clothing, shoes and accessories for men, women and kids.",
    tool:"Javascript | CSS | HTML | Local-Storage",
    netlify:"https://radiant-pavlova-be3d56.netlify.app/",
    github:"https://github.com/mr-ashu/NordStrom-clone"
  }
 
 ]
 
  return (

<>


     
<div className="project-div">
          {
            data.map((el)=>(
              <Center py={6}>
              <Box
               
                w={'full'}
                
                boxShadow={'2xl'}
                rounded={'md'}
                overflow={'hidden'}>
                <Image
                  h={'120px'}
                  w={'full'}
                  src={
                     el.imge
                  }
                  objectFit={'cover'}
                />
                <Flex justify={'center'} mt={-12}>
                  <Avatar
                    size={'xl'}
                    backgroundSize= "cover"
                    src={
                      el.image
                    }
                   
                    alt={'Author'}
                    css={{
                      border: '2px solid white',
                    }}
                  />
                </Flex>
        
                <Box p={4}>
                  <Stack spacing={1} textAlign="justify" align={'center'} height="80px"    >
                    <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                      {el.name}
                    </Heading>
                    <Text   color={'gray.500'}>{el.description}</Text>
                   
                  </Stack>
                   <Stack textAlign="justify"  height="70px" mb="10px">
                   <Text fontWeight="bold"><span className="tool">TOOLS : </span >{el.tool}</Text> 
                   </Stack>
                  
                 
                 <Flex justifyContent="space-between">
                 <Button
                  bg="#1976d2"
                  color="white"
                  _hover={{backgroundColor:"teal"}}
                  >
                   <a href={el.netlify} target="_blank"> <ArrowOutwardIcon/></a>
                 </Button>
                 <Button color="white"  bg="#1976d2" _hover={{backgroundColor:"teal"}}><a href={el.github} target="_blank"><GitHubIcon/></a></Button>
                 </Flex>
                
                </Box>
              </Box>
            </Center>
            ))
          }


    </div>




</>
  );
};
