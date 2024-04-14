import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import WebIcon from '@mui/icons-material/Web';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import 'aos/dist/aos.css';
import 'animate.css';

const cardData = [
  {
    title: "Website Designer",
    text: "Craft visually stunning and user-friendly websites tailored to your brand's identity, ensuring a seamless and engaging online experience for your visitors.",
    icon: <WebIcon style={{ fontSize: 48, color: '#f8d022', margin: 'auto' }} />
  },
  {
    title: "Google Ads",
    text: "Maximize your online visibility and reach your target audience effectively with targeted advertising campaigns on Google's vast network.",
    icon: <AdsClickIcon style={{ fontSize: 48, color: '#f8d022', margin: 'auto' }} />
  },
  {
    title: "Search Engine Optimization",
    text: "Enhance your website's visibility and rank higher on search engine results pages to attract organic traffic and increase your online presence.",
    icon: <ScreenSearchDesktopIcon style={{ fontSize: 48, color: '#f8d022', margin: 'auto' }} />
  },
  {
    title: "Social Media Marketing",
    text: "Utilize the power of social media platforms to engage with your audience, build brand awareness, and drive conversions through strategic content creation and community management.",
    icon: <LocalGroceryStoreIcon style={{ fontSize: 48, color: '#f8d022', margin: 'auto' }} />
  }
];

function Services() {
  return (
    <Box id="services" display="flex" flexDirection="column" justifyContent="center" alignItems="center" color="white">
      <Typography sx={{ fontSize: { xs: '20px', md: '25px' }}} color='black' variant="h5" fontWeight='bold' marginBottom={'10px'} fontFamily="'Rubik', sans-serif">
        How can I assist?
      </Typography>
      <Typography sx={{ fontSize: { xs: '15px', md: '20px' }}} color='black' variant="h6" fontStyle='italic' marginBottom={'10px'} fontFamily="'Rubik', sans-serif">
        Empowering businesses with innovative digital strategies
      </Typography>
      <Container className="mt-4">
        <Row xs={1} md={2} className="g-4">
          {cardData.map((card, idx) => (
            <Col key={idx} className="d-flex align-items-stretch">
              <Card data-aos="fade-up" data-aos-delay={(idx + 1) * 100}  className='animate__animated animate__headShake' style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', color: 'white', backgroundColor: '#000000' }}>
                {card.icon}
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>
                    {card.text}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Box>
  );
}

export default Services;
