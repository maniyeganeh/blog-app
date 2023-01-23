import Link from 'next/link';
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import CardComponent from '../../components/card/CardComponent';
import { getPosts } from '../../utils/api';
import classes from "./posts.module.css"

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
    {
        id: 7,
        title: 'پستی برای تست',
        image: '/images/poster06.png',
    },
    {
        id: 8,
        title: 'پستی برای تست',
        image: '/images/poster06.png',
    },
    {
        id: 9,
        title: 'پستی برای تست',
        image: '/images/poster06.png',
    },
    {
        id: 10,
        title: 'پستی برای تست',
        image: '/images/poster06.png',
    },
];

const Posts = ({ data }) => {
    const { mode } = useSelector(state => state.mode)
    return (
        <Container >
            <div className={mode !== "dark" ? classes.postsWrapper : `${classes.postsWrapper} ${classes.postsWrapperDark}`}>


                <Row>
                    {data.map((item, index) => (
                        <Col xs={12} sm={12} md={4} key={index}>
                            <Link href={`/posts/${item._id}`} style={{ textDecoration: 'none' }}>
                                <CardComponent
                                    title={item.title}
                                    description={item.description}
                                    image={`http://localhost:8080/${item.picturePath[0].path}`}
                                    classStyle={classes.postsCard}
                                />
                            </Link>
                        </Col>
                    ))}
                </Row>
            </div>
        </Container>
    )
}

export default Posts

export const getStaticProps = async () => {
    const data = await getPosts()
    if (!data) {
        return {
            notFound: true
        }
    }
    return {
        props: {
            data
        }
    }
}