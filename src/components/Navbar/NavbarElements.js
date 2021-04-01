import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom';
import { FaPizzaSlice } from 'react-icons/fa';


// Nav 요소 만들어주기 + css
export const Nav = styled.nav`
    background: black;
    height: 80px;
    display: flex;
    justify-content: center;
    font-weight: 70;
`;

// NavLink 만들기
export const NavLink = styled(Link)`
    color: #fff;
    font-size: 2rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;

    @media screen and (max-width: 400px){
        position: absolute;
        top: 10px;
        left: 25px;
    }
`;
// Icon
export const NavIcon = styled.div`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    color: #fff;

    p {
        transform: translate(-175%, 100%);
        font-weight: bold;
    }
`;


export const Bars = styled(FaPizzaSlice)`
    font-size: 2rem;
    transform: translate(-50%, -15%);
`;




