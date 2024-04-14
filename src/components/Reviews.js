import React from 'react';
import { Carousel, Card } from 'react-bootstrap';
import review from './images/review.png';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import Typography from '@mui/material/Typography';
function Reviews() {
  return (
    <div id='review' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
        
        <img src={review} alt="Review GIF" style={{ width: '100%', maxWidth: '500px', height: 'auto', objectFit: 'cover' }} />
        
        <Carousel controls={false} indicators={false} style={{ width: '100%', maxWidth: '400px', marginBottom: '20px' }}>
          <Carousel.Item>
            <Card style={{ backgroundColor: 'black', borderColor: 'black', color: 'white' }}>
              <Card.Body >
                <blockquote className="blockquote mb-0">
                <Typography component="p" sx={{ fontSize: { xs: '15px', md: '20px' } }}>
  <FaQuoteLeft style={{ color: '#f8d022' }} />
  Exceptional results, surpassed expectations. Boosted online visibility, increased traffic and conversions. Valuable partner for digital success.
  <FaQuoteRight style={{ color: '#f8d022', float: 'right' }} />
</Typography>

                  <footer style={{ color: '#f8d022',marginTop:'5px' ,fontSize:'15px'}} className="blockquote-footer">Akram</footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card style={{ backgroundColor: 'black', borderColor: 'black', color: 'white' ,fontSize: { xs: '15px', md: '20px' }}}>
            <Card.Body >

                <blockquote className="blockquote mb-0">
                <Typography component="p" sx={{ fontSize: { xs: '15px', md: '18px' } }}>
  <FaQuoteLeft style={{ color: '#f8d022' }} />
  Innovative strategies, impressive ROI. Enhanced social media presence, higher engagement and brand loyalty. Game-changer for business growth.
  <FaQuoteRight style={{ color: '#f8d022', float: 'right' }} />
</Typography>
                  <footer style={{ color: '#f8d022',marginTop:'5px',fontSize:'15px' }} className="blockquote-footer">Zahid</footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card style={{ backgroundColor: 'black', borderColor: 'black', color: 'white' }}>
            <Card.Body >

                <blockquote className="blockquote mb-0">
                <Typography component="p" sx={{ fontSize: { xs: '15px', md: '18px' } }}>
  <FaQuoteLeft style={{ color: '#f8d022' }} />
  Transformed online presence, highly recommended! Expertise in web design, optimization, and driving conversions. Valuable asset for digital success.
  <FaQuoteRight style={{ color: '#f8d022', float: 'right' }} />
</Typography>
                <footer style={{ color: '#f8d022' ,marginTop:'5px',fontSize:'15px'}} className="blockquote-footer">Ali</footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Carousel.Item>
        </Carousel>
      </div>
  );
}

export default Reviews;
