import { Heading } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { ChakraProvider,VStack,Text} from '@chakra-ui/react';
import Footer from './Footer';
export default function About(){
    return(
        <div id='about' style={{  display: 'flex',flexDirection:'column', position: 'relative', alignItems: 'center', justifyContent: 'center',marginTop:'50px'}}>
        <ChakraProvider>
        <Container  color='black' width='70%' centerContent marginBottom='100px'>
        <VStack>
        <Heading>About Us</Heading>
        <Text fontSize='md'>At Nesko Media, we're more than just a digital marketing agency. We're your strategic partner in driving growth, maximizing your online presence, and achieving your business goals. With a team of experienced professionals, cutting-edge technology, and a passion for innovation, we're dedicated to delivering exceptional results and exceeding your expectations.</Text>
        </VStack>
        </Container>
        </ChakraProvider>
<Footer/>
      
        </div>
    )}