import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default function SocialNav() {
  const handleFacebookClick = () => {
    window.open('https://www.facebook.com/neskomedia', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/neskomedia.pk/', '_blank');
  };
  const handleLinkedinClick = () => {
    window.open('https://www.linkedin.com/company/nesko-media', '_blank');
  };

  const handleMailClick = () => {
    window.location.href = 'mailto:neskomedia01@gmail.com';
  };
 



  return (
    <Box sx={{ '& > :not(style)': { m: 2 } }}>
      <Fab size='medium' style={{ backgroundColor:"#f8d022",color:'black'}} aria-label="Facebook" onClick={handleFacebookClick}>
        <FacebookIcon />
      </Fab>
      <Fab size='medium' style={{ backgroundColor:"#f8d022",color:'black'}} aria-label="Instagram" onClick={handleInstagramClick}>
        <InstagramIcon />
      </Fab>
      <Fab size='medium' style={{ backgroundColor:"#f8d022",color:'black'}}aria-label="Linkedin" onClick={handleLinkedinClick}>
        <LinkedInIcon />
      </Fab>
      <Fab size='medium' style={{ backgroundColor:"#f8d022",color:'black'}} aria-label="Mail" onClick={handleMailClick}>
        <MailOutlineIcon />
      </Fab>
    </Box>
  );
}

