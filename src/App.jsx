import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Text, Box, Flex, Image, AspectRatio  } from '@chakra-ui/react'
import { FiGithub, FiLinkedin, FiInstagram, FiCode } from "react-icons/fi";

function App() {

  return (
    <div className="App">
      
      <canvas className="webgl"></canvas>

      <div id="cursor"></div>

      <Box className="container">
        <Box h={"100vh"} pr={"25%"} w={"100%"} id="starting">
            <Text fontSize="5xl" pt={"28vh"}  id="start">Hey! I am Michael Li</Text>
            
            <span>
              <p>Student</p>
              <p>Developer</p>
              <p>Motion Artist</p>
            </span>
            

            <Flex mx={"auto"} w={"200px"} justify={"space-around"}>
              <a href="https://github.com/Michaell14" target="_blank" rel="noreferrer" className="link"><FiGithub size={25}/></a>
              <a href="https://www.linkedin.com/in/itsmichaelli/" target="_blank" rel="noreferrer"><FiLinkedin size={25}/></a>
              <a href="https://www.instagram.com/michaells19/" target="_blank" rel="noreferrer"><FiInstagram size={25}/></a>
              <a href="https://github.com/Michaell14/threejs-portfolio" target="_blank" rel="noreferrer"><FiCode size={25}/></a>
            </Flex>
        </Box>
        
        <Box h={"100vh"} className="item">
          <Flex justify={"space-around"} mx={10}>
            <Box maxW={"500px"}>
              <Text fontSize={"5xl"} >Encryption Visualizer</Text>
              <Text>This project was created to help visualize different encryption ciphers.</Text>
            </Box>

            <video width="640" height="480" controls>
              <source src='encryptable.webm' type="video/webm"/>
            </video>
          </Flex>
        </Box>

        <Box h={"100vh"} className="item">
          <Flex justify={"space-around"} mx={10}>

          {/*<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRblQR59jj5sWuERpCp2QdSZB2HaJ6ouDOL9GNO8jBRs-A2mLR2KnCnED-in7fEVn8TnTZ_lzgEuJPf/embed?start=false&loop=false&delayms=10000" frameBorder="0" width="624" height="388.7" allowFullScreen={true}></iframe>
*/}
            <Box maxW={"500px"}>
              <Text fontSize={"5xl"}>Leaves Image Recognition</Text>
              <Text>This research project was created during my participation 2021 AI4ALL program at the University of Maryland. This project uses Machine learning and Image recognition to differentiate between 185 different species of leaves. We tested the accuracy of using the Resnet18 and VGG11 models over 5 Epochs.</Text>
            </Box>
          </Flex>
        </Box>
      
        <Box h={"600px"} className="item">
          <Flex justify={"space-around"} mx={10}>

          <Box maxW={"500px"}>
              <Text fontSize={"5xl"}>Codele</Text>
              <Text>This is a parody of the popular, Worlde, but with different coding languages</Text>
            </Box>


          <video width="640" height="480" controls>
              <source src='codele.webm' type="video/webm"/>
            </video>

            
          </Flex>
        </Box>
        
        <Box id="about" height={"600px"}>
          <Text fontSize={"4xl"}>About Me</Text>
    
          <Image src="me.png" borderRadius='50%' width="450px"/>
        </Box>
      </Box>

    </div>
  )
}

export default App
