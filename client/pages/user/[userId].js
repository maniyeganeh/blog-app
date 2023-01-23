import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../store/authActions'
import { logOut } from "../../store/authSlice"

const Profile = () => {
    const { query, push } = useRouter()
    const dispatch = useDispatch()
    const { userInfo, token } = useSelector(state => state.auth)
    const userId = query.userId
    const req = {
        userId,
        token
    }
    useEffect(() => {
        dispatch(getUser(req))
        console.log(req);
    }, [dispatch, userId])

    const logoutHandler = async () => {
        dispatch(logOut())
        push("/")
    }


    return (
        <div>
            <h1>
                {userInfo.firstName}
            </h1>
            <Button variant='danger' onClick={logoutHandler}>
                Log Out
            </Button>
        </div>
    )
}

export default Profile