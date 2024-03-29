import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typewriter from 'typewriter-effect';
export default function Faq() {
  return (
    <div id="faq" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <Typography  sx={{ fontSize: { xs: '20px', md: '25px' }}} marginBottom={6} color='white'>
      <Typewriter 
 onInit={(typewriter) => {
     typewriter
         .typeString("Frequently asked Questions")
         .pauseFor(3000)
         .start();
 }}

/>
      </Typography>
      <Accordion defaultExpanded style={{ width: '80%', maxWidth: '600px', backgroundColor: 'black', marginBottom: '10px' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:'#f8d022'}}/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography color='#f8d022'>What service is best for my business?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography textAlign='left' color='white'>
            We analyze your business goals and needs to recommend the most effective digital solutions customized just for you.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ width: '80%', maxWidth: '600px', backgroundColor: 'black', marginBottom: '10px' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:'#f8d022'}} />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography color='#f8d022'>Do you offer short-term and long-term solutions?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography textAlign='left' color='white'> 
            Absolutely! Whether you need quick boosts or sustainable growth, we have flexible plans tailored to your timeline and objectives.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ width: '80%', maxWidth: '600px', backgroundColor: 'black' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:'#f8d022'}}/>}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography color='#f8d022'>How long will it take until we see results?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography textAlign='left' color='white'>
            Like planting a garden, it takes time to nurture and grow. You can expect to see noticeable progress within a few weeks as our strategies take root and flourish.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
