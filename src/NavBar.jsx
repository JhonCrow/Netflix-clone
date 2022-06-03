import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './NavBar.css';
import avatar from './AvatarN.png'

export default function NavBar() {
    const [show, handleShow] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll", null);
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className='nav__contents'>
                <img
                    onClick={() => navigate("/")}
                    className='nav__logo'
                    src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
                    alt='Netflix Logo'
                />
                <img
                    onClick={() => navigate("/profile")}
                    className='nav__avatar'
                    src={avatar}
                    alt='Netflix Avatar'
                />
            </div>
        </div>
    );
};
