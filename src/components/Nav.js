import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import valmasLogo from "../img/valmas-logo.png";
import { Link } from "react-router-dom";
import banner from '../img/banner.jpg';

function Nav(){
    const {pathname} = useLocation();
    return(
        <StyledNav>
            <Link to='/'><img src={valmasLogo} alt=""/></Link>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/'>Where To Buy</Link></li>
                <li><Link to={{pathname: "https://blurack.com/valmas-cremas"}} target="_blank">Buy Online</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/'>Cremas</Link></li>
                <li><Link to='/'>Media</Link></li>


            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.div`
    height: 12vh;
    width: 100vw;
    position: fixed;
    top: 0; 
    background-color: grey;
    opacity: 100%;
    display: flex;
    margin-bottom: 10rem;
    z-index: 2;
    justify-content: space-between;
    background-image: url(${banner});
    object-fit: cover;
    img{
        height: 100%;
        margin-left: 8rem;
    }
    ul{
        display: flex;
        list-style: none;
        justify-content: space-between;
        align-items: center;
    }
    a{
        color: white;
        text-decoration: none;
        margin: 0rem 2rem 0rem 3rem;

    }
`;

export default Nav;