import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row, Spinner } from 'react-bootstrap'
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../store/authActions'
import { logOut } from "../../store/authSlice"
import classes from "./user.module.css"
import CardComponent from "../../components/card/CardComponent"
import AddModal from '../../components/modal/AddModal';
const Profile = () => {
    const [showModal, setShowModal] = useState(false)
    const { query } = useRouter()
    const dispatch = useDispatch()
    const { userInfo, token, loading, error } = useSelector(state => state.auth)
    const { mode } = useSelector(state => state.mode)
    const userId = query.userId || userInfo._id
    const req = {
        userId,
        token
    }
    useEffect(() => {
        if (token) {
            dispatch(getUser(req))
        }


    }, [dispatch, userId])

    const logoutHandler = async () => {
        dispatch(logOut())

    }
    const modalShowHandler = () => {
        setShowModal(prevState => !prevState)
    }
    if (loading || error || !userId) {
        return <Spinner />
    }
    if (!token || !userInfo) {
        return <h1>
            Not Found
        </h1>
    }
    return (
        <div className={mode !== "dark" ? classes.profileWrapper : `${classes.profileWrapper} ${classes.profileWrapperDark} `}>
            <Container>
                <div className={classes.profileHeader}>
                    <div className={classes.profileImage}>
                        {userInfo &&
                            <img src={`http://localhost:8080/${userInfo.picturePath[0].path}`}
                                alt="profile picture"
                                title={`${userInfo.firstName} ${userInfo.lastName}`}
                            />

                        }

                    </div>
                    <div className={classes.profileInfo}>
                        <h3>
                            {`${userInfo.firstName} ${" "} ${userInfo.lastName}`}
                        </h3>
                    </div>
                    <div className={classes.profilePost}>
                        <Row>
                            {userInfo?.posts.map((post, index) => (
                                <Col xs={12} sm={12} md={4} key={index}>
                                    <CardComponent
                                        title={post.title}
                                        image={`http://localhost:8080/${post?.picturePath[0].path}`}
                                        classStyle={classes.profileCard}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
                <Button variant='danger' onClick={logoutHandler}>
                    Log Out
                </Button>
                <Button className={classes.addBtn} onClick={modalShowHandler}>
                    <BsFillPlusCircleFill />
                </Button>
                {showModal &&
                    <AddModal
                        setShowModal={setShowModal}
                        userId={userId}
                        showModal={showModal}
                    />
                }
            </Container>

        </div>
    )
}

export default Profile