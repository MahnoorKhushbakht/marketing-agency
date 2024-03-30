import { Wrap, WrapItem, Button } from '@chakra-ui/react';
import React from 'react';

export default function Buttons() {
  const handleCallUsClick = () => {
    window.location.href = 'tel:+923483715545';
  };

  const handleContactUsClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Wrap spacing={4}>
      <WrapItem>
        <Button
          size='lg'
          colorScheme='black'
          variant="outline"
          onClick={handleCallUsClick}
        >
          Call Us
        </Button>
      </WrapItem>
      <WrapItem>
        <Button
          size='lg'
          colorScheme='black'
          variant="outline"
          onClick={handleContactUsClick}
        >
          Contact Us
        </Button>
      </WrapItem>
    </Wrap>
  );
}
