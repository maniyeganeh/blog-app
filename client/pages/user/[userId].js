import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../store/authActions'
import { logOut } from "../../store/authSlice"

const Profile = () => {
    const { query, push } = useRouter()
    const dispatch = useDispatch()
    const { userInfo, error } = useSelector(state => state.auth)
    const userId = query.userId

    useEffect(() => {
        dispatch(getUser(userId))
    }, [])

    const logoutHandler = async () => {
        dispatch(logOut())
        push("/")
    }

    if (error !== null) return <h1>
        User Not Found
    </h1>
    return (
        <div>
            <h1>
                Profile
            </h1>
            <Button variant='danger' onClick={logoutHandler}>
                Log Out
            </Button>
        </div>
    )
}

export default Profile