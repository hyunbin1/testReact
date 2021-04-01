import React from 'react'
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';

const Navbar = () => {
    return (
        <>
            {/* NavbarElements.js에서 만든 Nav 함수 이용 */}
            <Nav>
                {/* NavbarElements.js에서 만든 NavLink 이용 */}
                {/* 터미널에 yarn add react-router 설치하기 => App.js - div-> Router로 바꾸기 + import ~ */}
                <NavLink to='/'>Pizza</NavLink>
                <NavIcon>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    );
};

export default Navbar;

// https://www.youtube.com/watch?v=GlROncAX4XI