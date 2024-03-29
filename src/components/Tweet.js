import { Card, CardHeader, CardBody, CardFooter,Flex,Box,Heading,Text,Button } from '@chakra-ui/react'
import { BiLike, BiChat,BiShare } from 'react-icons/bi'
import { ChakraProvider } from '@chakra-ui/react';
export default function Reviews(){
  return(
    <ChakraProvider>
  <div id="tweet" height="100vh" >
  <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" marginTop='100px'  marginBottom='20px'>
    <Card backgroundColor='black' sx={{width: { base: '85%', sm: '85%', md: '60%', lg: '50%' }}}>
  <CardHeader>
    <Flex spacing='2'>
      <Flex flex='1' gap='2' alignItems='left' flexWrap='wrap'>


        <Box>
          <Heading color='white' size='sm' textAlign='left' >Elon Musk</Heading>
          <Text color='white' fontSize={{ base: "14x", md: "14px", lg: "18px" }}>CEO of Tesla Motors</Text>
        </Box>
      </Flex>
<Text style={{ color:'white'}}>May 1, 2022</Text>
    </Flex>
  </CardHeader>
  <CardBody>
    <Text color='white' display='flex' alignContent='left' textAlign='left' fontSize={{ base: "16px", md: "16px", lg: "18px" }}>
        Since I’ve been asked a lot:<br/><br/>
        Buy stock in several companies that make products & services that you believe in.<br/><br/>
        Only sell if you think their products & services are trending worse. Don’t panic when the market does.<br/><br/>
        This will serve you well in the long-term.
        
    </Text>
    <Text textAlign={'left'}><a href="https://twitter.com/elonmusk/status/1520650036865949696?ref_src=twsrc%5Etfw" style={{ color: 'yellow', textDecoration: 'none' }}>Show Tweet</a></Text>
  </CardBody>


  <CardFooter
    justify='space-between'
    flexWrap='wrap'
    sx={{
      '& > button': {
        maxW: '116px'
      },
    }}
  >
    <Button color='white' flex='1' variant='ghost' leftIcon={<BiLike />}>
      Like
    </Button>
    <Button color='white' flex='1' variant='ghost' leftIcon={<BiChat />}>
      Comment
    </Button>
    <Button color='white' flex='1' variant='ghost' leftIcon={<BiShare />}>
      Share
    </Button>
  </CardFooter>
</Card>
</Box>
</div>
</ChakraProvider>
  )
}