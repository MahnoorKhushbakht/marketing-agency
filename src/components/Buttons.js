import { Wrap,WrapItem,Button } from '@chakra-ui/react'
export default function Buttons(){
    return(
        <Wrap spacing={4}>
    <WrapItem>
      <Button size='lg' colorScheme='black' variant="outline">Call Us</Button>
    </WrapItem>
    <WrapItem>
      <Button size='lg' colorScheme='black' variant="outline">Contact Us</Button>
    </WrapItem>
    </Wrap>
    )
}