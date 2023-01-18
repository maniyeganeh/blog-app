import React, { useState } from 'react'
import { Button, Col, Container, Row } from "react-bootstrap"
import { useRouter } from 'next/router'

import classes from "./user.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../store/authActions'
const Login = () => {
    const { token, userInfo } = useSelector(state => state.auth)
    const userId = typeof window !== "undefined" ? localStorage.getItem("userId") : null
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const router = useRouter()
    const dispatch = useDispatch();
    const handleInputChange = (e) => {
        const value = e.target.value;
        setForm({
            ...form,
            [e.target.name]: value,
        });
    };
    const userLoginHandler = async (e) => {
        e.preventDefault()
        const data = await dispatch(loginUser(form))
        if (data.type === "auth/login/fulfilled") {
            router.push("/")
        }


    }

    if (token) {
        router.push(`/user/${userId}`)
    }
    return (
        <Container  >
            <div className={classes.loginWrapper}>


                <Row className={classes.loginRow}>
                    <Col xs={12} sm={12} md={4}>
                        <form onSubmit={userLoginHandler}>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                placeholder='ایمیل خود را وارد کنید'
                                autoComplete="false"
                                onChange={handleInputChange}
                            />
                            <input
                                type="password"
                                name="password"
                                value={form.password}
                                onChange={handleInputChange}
                                placeholder='رمزعبور خود را وارد کنید'
                            />
                            <Button variant='success' type='submit'>
                                ورود
                            </Button>
                        </form>
                        <h6>
                            حساب کاربری ندارید؟
                            <span>
                                <a href="/">                        اینجا ثبت نام کنید
                                </a>
                            </span>
                        </h6>
                    </Col>
                    <Col xs={12} sm={12} md={8}>
                        <div className={classes.loginPic}></div>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Login