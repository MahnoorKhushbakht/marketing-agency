import { ChakraProvider, Box } from '@chakra-ui/react';
import * as React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppBtn() {
  const handleWhatsappClick = () => {
    window.open('whatsapp://send?phone=+2349065956246', '_blank');
  };

  return (
    <ChakraProvider>
      <Box
        sx={{
          position: 'fixed',
          bottom: '16px',
          right: '16px',
          zIndex: 1000, 
          backgroundColor: 'white',
          borderRadius: '50%',
          padding: '10px',
          transition: 'background-color 0.3s ease',
          '&:hover': {
            backgroundColor: '#f0f0f0',
            cursor: 'pointer',
          },
        }}
        onClick={handleWhatsappClick}
      >
        <FaWhatsapp
          size={30}
          color='green'
          sx={{
            '&:hover': {
              color: '#735DA5',
            },
          }}
        />
      </Box>
    </ChakraProvider>
  );
}
