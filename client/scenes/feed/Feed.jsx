import Link from 'next/link';
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import CardComponent from '../../components/card/CardComponent';
import classes from './feed.module.css';
const dummyData = [
  {
    id: 1,
    title: 'پستی برای تست',
    image: '/images/inception-01.png',
  },
  {
    id: 2,
    title: 'پستی برای تست',
    image: '/images/poster02.png',
  },
  {
    id: 3,
    title: 'پستی برای تست',
    image: '/images/poster07.png',
  },
  {
    id: 4,
    title: 'پستی برای تست',
    image: '/images/poster04.png',
  },
  {
    id: 5,
    title: 'پستی برای تست',
    image: '/images/poster05.png',
  },
  {
    id: 6,
    title: 'پستی برای تست',
    image: '/images/poster06.png',
  },
];

const Feed = () => {
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
          {dummyData.map((item, index) => (
            <Col xs={12} sm={12} md={4} className={classes.feedCol}>
              <Link
                key={index}
                href={`/posts/${item.id}`}
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
                  description={'Hello World'}
                  image={item.image}
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
