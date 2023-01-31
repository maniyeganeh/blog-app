
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { getSinglePost } from '../../utils/api'
import classes from "./posts.module.css"
const SinglePost = () => {
    const { mode } = useSelector(state => state.mode)
    const { query } = useRouter()

    const [post, setPost] = useState({})
    const data = async () => {
        setPost(await getSinglePost(query.postId))
    }
    useEffect(() => {
        data()

    }, [query])

    if (!post) return <h1>Loadig</h1>
    return (
        <Container >
            <div className={mode !== "dark" ? classes.siglePostWrapper : `${classes.siglePostWrapper} ${classes.siglePostWrapperDark}`}>
                <Row className="align-items-center">
                    <Col xs={12} sm={12} md={6}>
                        <div className={classes.pictureFrame}>
                            {post.picturePath &&
                                <>
                                    {post?.picturePath.map((pic, index) => (
                                        <img
                                            key={index}
                                            src={`http://localhost:8080/${pic.path}`}
                                        />
                                    ))}</>
                            }

                            {/* <img
                                src={`http://localhost:8080/${post?.picturePath[0].path}`}
                            /> */}
                        </div>
                        <div className={classes.pictureRow}>
                            <div className={classes.pictureBox} />
                            <div className={classes.pictureBox} />
                        </div>

                    </Col>
                    <Col xs={12} sm={12} md={6}>
                        <h2 className={classes.title}>
                            {post.title}
                        </h2>
                        <h4>
                            {post.subtitle}
                        </h4>
                        <p>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        </p>
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