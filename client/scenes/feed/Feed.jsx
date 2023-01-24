import Link from 'next/link';
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import CardComponent from '../../components/card/CardComponent';
import classes from './feed.module.css';

const Feed = ({ data }) => {
  const { mode } = useSelector((state) => state.mode);

  return (
    <Container>
      <div
        className={
          mode !== 'dark'
            ? classes.feedWrapper
            : `${classes.feedWrapper} ${classes.feedWrapperDark}`
        }
      >
        <h3>آخرین مطالب</h3>
        <Row>
          {data.map((item, index) => (
            <Col xs={12} sm={12} md={4} className={classes.feedCol} key={index}>
              <Link
                href={`/posts/${item._id}`}
                style={{ textDecoration: 'none' }}
              >
                <CardComponent
                  //   style={{
                  //     width: '18rem',
                  //     textAlign: 'center',
                  //     backgroundColor: '#f5f6fa',
                  //     color: '#2f3640',
                  //     border: 'none',
                  //   }}
                  classStyle={classes.feedCard}
                  title={item.title}
                  description={item.description}
                  image={`http://localhost:8080/${item.picturePath[0].path}`}
                />
              </Link>
            </Col>
          ))}
        </Row>
        <div className={classes.buttonWrapper}>
          <Link href="/posts">
            <Button>بیشتر</Button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Feed;
