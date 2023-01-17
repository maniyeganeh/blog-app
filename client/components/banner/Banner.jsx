import React from 'react';
import { Col, Container, Row, InputGroup, Form, Button } from 'react-bootstrap';
import classes from './banner.module.css';
const Banner = () => {
  return (
    <Container>
      <div className={classes.bannerWrapper}>
        <Row className={classes.bannerRow}>
          <Col xs={12} sm={12} md={4}>
            <h4>اگه دنبال مطالب تازه میگردی٬ ایمیلت رو وارد کن </h4>
          </Col>
          <Col xs={12} sm={12} md={8}>
            <div className={classes.bannerInputGroup}>
              <InputGroup className="mb-3">
                <Form.Control placeholder="youremail@email.com" />
                <Button variant="success" id="button-addon2">
                  بفرست
                </Button>
              </InputGroup>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Banner;
