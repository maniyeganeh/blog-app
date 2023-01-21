import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
    const { userInfo } = useSelector(state => state.auth)
    if (!userInfo) return <h1>Not Found </h1>
    return (
        <div>
            <h1>
                Profile
            </h1>
        </div>
    )
}

export default Profile