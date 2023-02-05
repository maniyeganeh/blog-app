
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { getPosts, getSinglePost } from '../../utils/api'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade } from 'swiper';
import { motion, AnimatePresence } from "framer-motion"
import 'swiper/css';
import "swiper/css/pagination";
import classes from "./posts.module.css"
const SinglePost = () => {
    const [current, setCurrent] = useState(0)
    const [imageModal, setImageModal] = useState(false)
    const [image, setImage] = useState(null)
    const { mode } = useSelector(state => state.mode)
    const { query } = useRouter()


    const [post, setPost] = useState({})
    const [posts, setPosts] = useState([])
    const data = async () => {
        setPost(await getSinglePost(query.postId))
        setPosts(await getPosts())
    }
    const imageModalHadler = () => {
        setImageModal(prevState => !prevState)
    }
    const curretImage = () => {
        post.picturePath &&
            post?.picturePath.map((pic, index) => (
                current === index && setImage(pic)
            ))
    }
    useEffect(() => {
        data()

    }, [query])
    console.log(image);
    const filteredPost = posts.filter(post => post._id !== query.postId)


    if (!post) return <h1>Loadig</h1>
    return (
        <Container >
            <div className={mode !== "dark" ? classes.siglePostWrapper : `${classes.siglePostWrapper} ${classes.siglePostWrapperDark}`}>
                <Row className="align-items-center">
                    <Col xs={12} sm={12} md={6}>

                        <div >
                            <Swiper
                                pagination={{
                                    dynamicBullets: true,
                                }}
                                modules={[Pagination, EffectFade]}
                                effect="fade"
                                className="mySwiper"
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log(current)}
                            >
                                {post.picturePath &&
                                    <>
                                        {post?.picturePath.map((pic, index) => (
                                            <AnimatePresence>

                                                {current === index &&
                                                    <motion.img
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        transition={{
                                                            type: "spring",
                                                            bounce: 0.5,
                                                            opacity: { duration: 0.8 },
                                                        }}
                                                        className={classes.pictureFrame} key={index}

                                                        src={`http://localhost:8080/${pic.path}`}
                                                    />
                                                    // <SwiperSlide className={classes.pictureFrame} key={index} >
                                                    //     <img


                                                    //         src={`http://localhost:8080/${pic.path}`}
                                                    //     />
                                                    // </SwiperSlide>
                                                    // :
                                                    // <SwiperSlide className={classes.pictureFrame} key={index} >
                                                    //     <img


                                                    //         src={`http://localhost:8080/${pic.path}`}
                                                    //     />
                                                    // </SwiperSlide>

                                                }

                                            </AnimatePresence>


                                        ))}</>
                                }

                            </Swiper>

                            {/* <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={50}
                                slidesPerView={3}
                                navigation
                                pagination={{ clickable: true }}
                                scrollbar={{ draggable: true }}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}

                            >
                                {post.picturePath &&
                                    <>
                                        {post?.picturePath.map((pic, index) => (
                                            <SwiperSlide>
                                                <img
                                                    key={index}
                                                    src={`http://localhost:8080/${pic.path}`}
                                                />
                                            </SwiperSlide>

                                        ))}</>
                                }

                            </Swiper> */}


                            {/* <img
                                src={`http://localhost:8080/${post?.picturePath[0].path}`}
                            /> */}
                        </div>
                        <div className={classes.pictureRow}>
                            {post.picturePath &&
                                <>
                                    {post?.picturePath.map((pic, index) => (
                                        <img
                                            onClick={() => setCurrent(index)}
                                            className={current === index ? `${classes.pictureBox} ${classes.pictureBoxActive}` : classes.pictureBox}
                                            key={index}
                                            src={`http://localhost:8080/${pic.path}`}
                                        />
                                    ))}
                                </>}


                        </div>

                    </Col>
                    <Col xs={12} sm={12} md={6}>
                        <h2 className={classes.title}>
                            {post.title}
                        </h2>
                        <h6 className={classes.creator}>
                            سازنده : {post?.creator?.firstName} {" "} {post?.creator?.lastName}
                        </h6>

                        <h4>
                            {post.subtitle}
                        </h4>
                        {post.description ?
                            <p>
                                {post.description}
                            </p>
                            :
                            <p>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                            </p>
                        }

                    </Col>
                </Row>
            </div>

        </Container>
    )
}

export default SinglePost

// export const getServerSideProps = async ({ res, query }) => {
//     console.log(res);
//     // res.setHeader('Cache-Control', `s-maxage=60, stale-while-revalidate`)
//     const postId = query.postId;
//     const post = await getSinglePost(postId)
//     return {
//         props: {
//             post
//         }
//     }
// }