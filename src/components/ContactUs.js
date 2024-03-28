import * as React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import './css/Ab.css'
export default function Ab() {
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
            <LocalPhoneIcon style={{ fontSize: '30px', color: '#f8d022' }} />
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
            <ChatBubbleOutlineIcon style={{ fontSize: '30px', color: '#f8d022' }} />
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
            <MailOutlineIcon style={{ fontSize: '30px', color: '#f8d022' }} />
            <Card.Text className="contact-text">Mail Us</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
