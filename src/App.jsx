import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Text, Box, Flex, Image, Center, Grid, GridItem  } from '@chakra-ui/react'
import { FiGithub, FiLinkedin, FiInstagram, FiCode } from "react-icons/fi";


function App() {

  return (
    <div className="App">
      <canvas className="webgl"></canvas>

      {/*<div id="cursor"></div>*/}

      <Box className="container">
        <Box h={"100vh"} mt={"40px"} pr={"25%"} w={"100%"} id="starting" opacity={0}>
            <Text fontSize="5xl" pt={"28vh"} id="start">Hey! <br/>I&apos;m Michael Li, a...</Text>
            
            <Text fontSize={"5xl"}><span className="strike">Student</span></Text>
          

            <Flex mx={"auto"} w={"200px"} mt={5} justify={"space-around"}>
              <a href="https://github.com/Michaell14" target="_blank" rel="noreferrer" className="link"><FiGithub size={25}/></a>
              <a href="https://www.linkedin.com/in/itsmichaelli/" target="_blank" rel="noreferrer"><FiLinkedin size={25}/></a>
              <a href="https://www.instagram.com/michaells19/" target="_blank" rel="noreferrer"><FiInstagram size={25}/></a>
              <a href="https://github.com/Michaell14/threejs-portfolio" target="_blank" rel="noreferrer"><FiCode size={25}/></a>
            </Flex>
        </Box>
        
        <Box h={"100vh"} className="item" id="one">
          <Flex justify={"space-around"} mx={10}>
            <Box maxW={"500px"}>
              <Text fontSize={"45px"} className="title"><a href="https://encryption-visualizer.vercel.app/" target="_blank" rel="noreferrer" className="titleUnderline" id="underline3">Encryption Visualizer</a></Text>
              <Text fontSize={"large"} my={5} className="description">This project was created to help visualize different encryption ciphers.</Text>
              <Flex justify={"center"} mt={5}>
                <Box className={"tag"} mr={5}>Anime.js</Box>
                <GridItem className={"tag"} mr={5}>Chakra UI</GridItem>
                <GridItem className={"tag"}>ReactJS</GridItem>
              </Flex>
            </Box>

            <Box className={"shadow"} w="640px" h="340px">
              <video width="640" height="480" controls>
              <source src='encryptable.webm' type="video/webm"/>
            </video>
            </Box>
            
          </Flex>
        </Box>

        <Box h={"100vh"} className="item" id="two">
          <Flex justify={"space-around"} mx={10}>

          <Box className="shadow" w="620px" h="380px">
          <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRblQR59jj5sWuERpCp2QdSZB2HaJ6ouDOL9GNO8jBRs-A2mLR2KnCnED-in7fEVn8TnTZ_lzgEuJPf/embed?start=false&loop=false&delayms=10000" frameBorder="0" width="624" height="388.7" allowFullScreen={true}></iframe>
            </Box>

            <Box maxW={"500px"}>
              <Text fontSize={"5xl"} className="title"><a href="https://sites.google.com/umd.edu/ai4allproject-showcase2021/leaves" target="_blank" rel="noreferrer" className="titleUnderline" id="underline4">Unbe-leaf-able AI</a></Text>
              <Text fontSize={"large"} my={5} className="description">This research project was created during my participation 2021 AI4ALL program at the University of Maryland. This project uses Machine learning and Image recognition to differentiate between 185 different species of leaves. We tested the accuracy of using the Resnet18 and VGG11 models over 5 Epochs.</Text>
            
              <Flex justify={"center"} mt={5}>
                <Box className={"tag"} mr={5}>Tensorflow</Box>
                <Box className={"tag"}>Python</Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      
        <Box h={"600px"} className="item" id="three">
          <Flex justify={"space-around"} mx={10}>

          <Box maxW={"500px"}>
              <Text fontSize={"5xl"} className="title"><a href="https://codele.vercel.app/" target="_blank" rel="noreferrer" className="titleUnderline" id="underline5">Codele</a></Text>
              <Text fontSize={"large"} my={5} className="description">This is a parody of the New York Times, Wordle, but with different coding languages</Text>
              <Flex justify={"center"} mt={5}>
                <Box className={"tag"} mr={5}>Anime.js</Box>
                <Box className={"tag"} mr={5}>Chakra UI</Box>
                <Box className={"tag"}>ReactJS</Box>
              </Flex>
            </Box>
            <Box className={"shadow"} w="640px" h="335px">
              <video width="640" height="480" controls>
                  <source src='codele.webm' type="video/webm"/>
                </video>
            </Box>
            
          </Flex>
        </Box>
        
        <Box position={"absolute"} left={"-500px"} id="person1">
          <Text fontSize={"large"} ml={20} w={40}>View my <a href="https://github.com/Michaell14" target="_blank" rel="noreferrer" className="underline" id="underline1">Github</a> for more of my projects</Text>
          <Image src={"personup.svg"} w={"300px"} id={"personup"}/>
        </Box>

        <Box position={"absolute"} right={"-500px"} id={"person2"}>
      
          <Text fontSize={"large"} w={"180px"} ml={"70px"}>Take a look at my</Text><Text fontSize={"large"}><a href="https://open.spotify.com/user/yvymj5dyeqm16d6ndcf6quctp" target="_blank" rel="noreferrer" className="underline" id="underline2">Spotify</a> playlist!</Text>
      
          
          <Image src={"person2.svg"} w={"300px"} id={"personright"}/>
        </Box>


        <Box id="about" height={"600px"} mt={"500px"}>
          <Text fontSize={"5xl"} className="title">About Me</Text>
          <Center>
          <Flex w={"800px"} justify={"space-around"} align={"center"}>

            <Box mt={20}>
            <Text fontSize={"large"} textAlign={"left"} w={"400px"} lineHeight={"30px"}>I'm a high school student in Maryland who loves to code, listen to music, and watch tv shows! I am interested in a career in tech and my mind is open to all kinds of possibilities.</Text>
            <Text fontSize={"large"} textAlign={"left"} mt={5} w={"400px"} lineHeight={"30px"}>Feel free to contact me through <a href="mailto: limichael319@gmail.com" className="socials" alt="michael_li_resume" target="_blank" rel="noreferrer">email</a>, <a href="https://www.instagram.com/michaells19/" className="socials" alt="michael_li_resume" target="_blank" rel="noreferrer">instagram</a>, or <a href="https://www.linkedin.com/in/itsmichaelli/" className="socials" alt="michael_li_resume" target="_blank" rel="noreferrer">linkedin</a>. Find my resume <a href="resume.pdf" className="socials" alt="michael_li_resume" target="_blank" rel="noreferrer">here</a>.</Text>
            </Box>
              <Image src="me.png" borderRadius='50%' width="450px"/>
              <Box position={"absolute"}> 


              </Box>
        
          </Flex>
          </Center>
        </Box>
      </Box>
    </div>
  )
}

export default App
