import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
    const { userInfo } = useSelector(state => state.auth)
    console.log(userInfo);
    return (
        <div><h1>
            {userInfo.firstName} {userInfo.lastName}
        </h1>
            <img
                src={`http://localhost:8080/${userInfo.picturePath[0].path}`}

            />

        </div>
    )
}

export default Profile