import { Heading } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { ChakraProvider,VStack,Text} from '@chakra-ui/react';
import 'animate.css';
import Buttons from './Buttons';
export default function Home(){
    return(
        <div id='home' >
        <ChakraProvider>
        <Container marginTop='150px' color='black' height='100vh' centerContent>
        <VStack>
        <Heading className='animate__animated animate__fadeInDown'>Digital Marketing that gets you more customers</Heading>
        <Text className='animate__animated animate__fadeIn' fontSize='md'> From innovative digital campaigns to captivating design and strategic consulting, we're here to bring your vision to life and propel your business forward. Explore our services and let's collaborate to unlock your brand's full potential today</Text>
        <Buttons/>
        </VStack>
        </Container>
        </ChakraProvider>
        </div>
    )}