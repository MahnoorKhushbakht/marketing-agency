import React from 'react';
import { Carousel, Card } from 'react-bootstrap';
import review from './images/review.png';
function Reviews() {
  return (
    <div id='review' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '20px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img src={review} alt="Review GIF" style={{ width: '100%', maxWidth: '600px', height: 'auto', objectFit: 'cover' }} />
        <Carousel controls={false} indicators={false} style={{ width: '100%', maxWidth: '400px', marginBottom: '20px' }}>
          <Carousel.Item>
          <Card style={{ backgroundColor: 'transparent',borderColor:'transparent', color: 'white' }}>          
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>Exceptional results, surpassed expectations. Boosted online visibility, increased traffic and conversions. Valuable partner for digital success.</p>
                  <footer style={{ color: '#f8d022' }} className="blockquote-footer">Akram</footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card style={{ backgroundColor: 'transparent',borderColor:'transparent', color: 'white' }}>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>Innovative strategies, impressive ROI. Enhanced social media presence, higher engagement and brand loyalty. Game-changer for business growth.</p>
                  <footer style={{ color: '#f8d022' }} className="blockquote-footer">Zahid</footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
          <Card style={{ backgroundColor: 'transparent',borderColor:'transparent', color: 'white' }}>
  
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>Transformed online presence, highly recommended! Expertise in web design, optimization, and driving conversions. Valuable asset for digital success.</p>
                  <footer style={{ color: '#f8d022' }} className="blockquote-footer">Ali</footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Carousel.Item>
        </Carousel>    
      </div>
    </div>
  );
}

export default Reviews;
