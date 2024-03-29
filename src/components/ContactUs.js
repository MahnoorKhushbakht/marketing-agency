import * as React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './css/Ab.css'
export default function Ab() {
  const handleMailClick = () => {
    window.open('https://www.facebook.com/mahnoor.khushbakht?mibextid=ZbWKwL', '_blank');
  };

  const handlePhoneClick = () => {
    window.open('https://instagram.com/noor_khushbakht?igshid=OGQ5ZDc2ODk2ZA==', '_blank');
  };
  const handleLocationClick = () => {
    window.open('http://www.linkedin.com/in/mahnoorkhushbakht', '_blank');
  };
  return (
    <Row xs={3} md={3} className="g-4">
      <Col>
        <Card
          className="contact-card"
          style={{
            size: {xs:'10px',md:'20px'},
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
            color: 'white',
            borderColor: '#f8d022',
            backgroundColor: 'transparent',
          }}
        >
          <Card.Body>
            <LocalPhoneIcon  
            onClick={handlePhoneClick}
            style={{ fontSize: '30px',color: '#f8d022'}} />
            <Card.Text className="contact-text">Call Us</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card
          className="contact-card"
          style={{
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
            color: 'white',
            borderColor: '#f8d022',
            backgroundColor: 'transparent',
          }}
        >
          <Card.Body>
            <LocationOnIcon  onClick={handleLocationClick} style={{ fontSize: '30px', color: '#f8d022' }} />
            <Card.Text className="contact-text">Message Us</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card
          className="contact-card"
          style={{
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
            color: 'white',
            borderColor: '#f8d022',
            backgroundColor: 'transparent',
          }}
        >
          <Card.Body>   
            <MailOutlineIcon onClick={handleMailClick} style={{ fontSize: '30px', color: '#f8d022' }} />
            <Card.Text className="contact-text">Mail Us</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
