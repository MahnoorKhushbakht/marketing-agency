import * as React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './css/ContactUs.css'
export default function Ab() {
  const handleMailClick = () => {
    window.location.href = 'mailto:neskomedia01@gmail.com';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+923483715545';
  };
  const handleWhatsappClick = () => {
    window.open('whatsapp://send?phone=+2349065956246', '_blank');
  };
  return (
    <Row xs={3} md={3} className="g-4">
      <Col>
        <Card
          className="contact-card"
          style={{
            size: {xs:'10px',md:'20px'},
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
            color: 'black',
            borderColor: '#f8d022',
            backgroundColor: '#f8d022',
          }}
        >
          <Card.Body>
            <LocalPhoneIcon  
            onClick={handlePhoneClick}
            style={{ fontSize: '30px',color: 'black'}} />
            <Card.Text className="contact-text">Call Us</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card
          className="contact-card"
          style={{
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
            color: 'black',
            borderColor: '#f8d022',
            backgroundColor: '#f8d022',
   }}
        >
          <Card.Body>
            <WhatsAppIcon onClick={handleWhatsappClick} style={{ fontSize: '30px', color: 'black' }} />
            <Card.Text className="contact-text">Whatsapp Us</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card
          className="contact-card"
          style={{
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
            color: 'black',
            borderColor: '#f8d022',
            backgroundColor: '#f8d022',
          }}
        >
          <Card.Body>   
            <MailOutlineIcon onClick={handleMailClick} style={{ fontSize: '30px', color: 'black' }} />
            <Card.Text className="contact-text">Mail Us</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
