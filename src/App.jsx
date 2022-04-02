import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Text, Box, Flex, Icon } from '@chakra-ui/react'
import { FiGithub, FiLinkedin, FiInstagram, FiCode } from "react-icons/fi";

function App() {

  return (
    <div className="App">
      <Box className="container">
        <Box h={"100vh"} position={"absolute"} left={"15%"}>
            <Text fontSize="5xl" mt={"30vh"}>Hey! I am Michael Li</Text>
            
            <span>
              <p>Student</p>
              <p>Developer</p>
              <p>Thinker</p>
            </span>
            
            <Flex mx={"auto"} w={"200px"} justify={"space-around"}>
              <a href="https://github.com/Michaell14" target="_blank"><FiGithub size={25}/></a>
              <a href="https://github.com/Michaell14" target="_blank"><FiLinkedin size={25}/></a>
              <a href="https://github.com/Michaell14" target="_blank"><FiInstagram size={25}/></a>
              <a href="https://github.com/Michaell14" target="_blank"><FiCode size={25}/></a>
             
            </Flex>
          
        </Box>
        
      
      </Box>

      

      <canvas className="webgl"></canvas>
    </div>
  )
}

export default App
