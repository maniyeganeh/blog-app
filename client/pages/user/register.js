import React, { useState } from 'react'
import { Button, Col, Container, Row } from "react-bootstrap"
import { useRouter } from 'next/router'

import classes from "./user.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../../store/authActions'
const Register = () => {
    const { token, userInfo } = useSelector(state => state.auth)
    const [image, setImage] = useState(null)
    const userId = typeof window !== "undefined" ? localStorage?.getItem("userId") : null
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role: "",
        picturePath: image,
        occupation: ""
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
    const imageHandlerChange = e => {
        setImage(e.target.files)


    }
    const userRegisterHanlder = async (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append("firstName", form.firstName)
        formData.append("lastName", form.lastName)
        formData.append("email", form.email)
        formData.append("password", form.password)
        formData.append("occupation", form.occupation)
        // formData.append("image", e.target.files);
        for (let key of Object.keys(image)) {
            formData.append("image", image[key])
        }
        console.log(formData);
        console.log(Object.fromEntries(formData))
        const data = await dispatch(registerUser(formData))
        if (data.type === "auth/register/fulfilled") {
            router.push("/user/login")
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
                        <form onSubmit={userRegisterHanlder} encType="multipart/form-data">
                            <input type="text" name='firstName' value={form.firstName} placeholder="نام خود را وارد کنید" autoComplete="false"
                                onChange={handleInputChange} />
                            <input type="text" name='lastName' value={form.lastName} placeholder="نام خانوادگی خود را وارد کنید" autoComplete="false"
                                onChange={handleInputChange} />
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
                            <input type='file' name="image" onChange={imageHandlerChange} />
                            <input type="text" name="occupation" value={form.occupation} onChange={handleInputChange}
                                placeholder='شغل خود را وارد کنید' />
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

export default Register