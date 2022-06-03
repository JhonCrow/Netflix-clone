import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { logOut } from '../firebase';
import NavBar from '../NavBar';
import './ProfileScreen.css';
import avatar from '../AvatarN.png'

export default function ProfileScreen() {
    const user = useSelector(selectUser);

    return (
        <div className='profileScreen'>
            <NavBar />
            <div className='profileScreen__body'>
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img src={avatar} alt='avatar' />
                </div>
                <div className="profileScreen_detail">
                    <h2>{user.email}</h2>
                    <div className="profileScreen__plans">
                        <h3>Plans</h3>
                        <button
                            onClick={() => logOut()}
                            className='porfileScreen__signout'>sign out</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
