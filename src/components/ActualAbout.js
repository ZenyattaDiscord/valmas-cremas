import React from "react";
import styled from "styled-components";
import { AboutDiv, Statement, PhotoCard, Line } from "./AboutPage";
import sig from '../img/sig.png';
import banner from '../img/aboutBanner.jpg';
import cocoPour from '../img/cocoPour.jpg';
import { pageAnimation, fade } from "../Animations";
import {motion} from "framer-motion";

function ActualAbout(){

    return(
        <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show">
 
        <Cover>
            <AboutText>
                <motion.div className="about" variants={fade} initial="hidden" animate="show" transition={{delay: 1}}>
                    <h1>ABOUT</h1>
                    <h3>Home   |   About</h3>
                </motion.div>
            </AboutText>
        </Cover>
        <AboutDiv style={{marginTop: "5rem", marginBottom: "3rem"}}>
            <Statement>
                <h3>WELCOME TO</h3>
                <h1>VALMAS!</h1>
                <Line/>
                <p>Established in 2015, Valmas Cremas is steeped in tradition dating back decades.
                    Cremas has its beginnings in Haiti and variants of its recipes have been passed
                     through generations. Mr. Val Marius took a well-guarded family recipe and adjusted
                      its elements in order to create what today is a unique blend of cremas. It is a 
                      drink that caters to different tastes as it is enjoyed at room temperature or served
                       cold. Go to the link for recipes.</p>
                <img src={sig} alt=""/>
                
            </Statement>
            <PhotoCard>
                <img src={cocoPour} alt=""/>
                <button>View Cremas</button>
            </PhotoCard>

        </AboutDiv>


        </motion.div>

    );
}

export const Cover = styled.div`
    height: 70vh;
    width:100%;
    background-image: url(${banner});
    background-size: cover;
    background-position: center;
    justify-content: center;
    align-items: center;
    text-align: center;
    display: flex;
    color: white;
    margin: auto;
    opacity: 80%;
`;

export const AboutText = styled.div`
    width: 100%;
    color: white;
    justify-content: center;
    text-align: center;
    margin: auto;
    h1{
        font-size: 6rem;
        letter-spacing: 0.5rem;
    }
    h3{
        margin-top: 2rem;
    }
    
`;

export default ActualAbout;