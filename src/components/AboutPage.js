import React from "react";
import styled from "styled-components";
import rumpour from "../img/rum-pour.jpg";
import sig from '../img/sig.png';
import croppeddark from '../img/cropped-dark.jpg';
import coconut from '../img/coconut2.jpeg';
import chocolate from '../img/chocolate.jpeg';
import almond from '../img/almond.jpeg';
import coffee from '../img/coffee.jpeg';
import cropped from '../img/cocoCropped.png';
import { pageAnimation } from "../Animations";
import { motion } from "framer-motion";
function AboutPage(){


    return(
        <motion.div variants={pageAnimation} exit="exit" initial="hidden" animate="show" >
        <AboutDiv>
            <Statement>
                <h3>WELCOME</h3>
                <h1>THE <br/>VALMAS <br/> PHILOSOPHY</h1>
                <Line/>
                <p>Our goal is to create cremas with delectable tastes — cremas with balance, complexity and harmony.
                    Our signature style has often been described as “an iron fist in a velvet glove,” a reference to 
                    the artful balance between power and restraint, softness and structure...</p>
                <img src={sig} alt=""/>
            </Statement>
            <PhotoCard>
                <img src={rumpour} alt=""/>
                <button>View Cremas</button>
            </PhotoCard>
        </AboutDiv>
        <SecondAbout>
            <Statement className="statement2">
                <h3>WHAT'S NEW?</h3>
                <h1>COCONUT CREMAS.<br/>DRINK UP.</h1>
            <Line/>
            </Statement>
            <div className="secondPhoto">
                <img src={cropped} alt="" />
                <p>The Caribbean's Premier Coconut Cream Liquor</p>
            </div>
            
        </SecondAbout>
        <TopProducts>
            <h1>TOP PRODUCTS</h1>
            <div className="cremas">
                <div className="card">
                    <img src={coconut} alt=''/>
                    <h3>Coconut</h3>

                </div>
                <div className="card">
                <img src={coffee} alt=''/>
                    <h3>Coffee</h3>
                </div>
                <div className="card">
                <img src={chocolate} alt=''/>
                    <h3>Chocolate</h3>
                </div>
                <div className="card">
                <img src={almond} alt=''/>
                    <h3>Almond</h3>
                </div>
            </div>
            <button>More Products</button>
        </TopProducts>
        
        </motion.div>
        
    )
}


export const AboutDiv = styled.div`
    min-height: 90vh;
    min-width: 100vw;
    background: white;
    display: flex;
    margin-top: 0rem;
`;


export const Statement = styled.div`
    width: 30%;
    background: #2c3136;
    opacity: 100%;
    min-height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    display: block;
    margin:0rem 0rem 0rem 10rem;
    padding: 2rem;
    z-index: 2;
    h3{
        color: #BE2329;
        font-weight: 200;
        margin: auto;
        font-size: 1rem;
        letter-spacing: .7rem;
        margin-top: 2rem;
        margin-bottom: 2rem;
    }
    h1{
        color: white;
        font-size: 4rem;
    }
    p{
        color: white;
        line-height: 2rem;
        padding:2rem 2rem;
    }
    img{
        margin-top: 2rem;
    }
    
`;
export const Line = styled.div`
    min-height: 0.2rem;
    width: 15%;
    background-color: #BE2329;
    margin: auto;
    margin-top: 2rem;
    margin-bottom: 1rem;
`;

export const PhotoCard = styled.div`
    width: 50%;
    margin: 0rem 0rem 0rem 0rem;
    position: relative;
    img{
        width: 100%;
        height: 30rem;
        position: absolute;
        right: 15%;
        z-index: 1;
    }
    button{
        z-index: 2;
        position: absolute;
        min-height: 5rem;
        right: 15%;
        top: 25%;
    }

`
const SecondAbout = styled.div`
    min-height: 100vh;
    width: 100%;
    background-image: url(${croppeddark});
    object-fit: cover;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    
    .statement2{
        background: transparent;
        width: 45%;
        
    }
    h3{
        margin-top: 8rem;
        color: #b2936d;
    }
    h1{
        font-size: 6rem;
    }
    img{
        height: 30rem;
    }
    p{
        color: white;
        margin-top: -10%;
        font-size: 1.5rem;
    }
    .secondPhoto{
        margin: auto;
        margin-right: 10rem;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
   
`;

const TopProducts = styled.div`
    min-height: 90vh;
    width: 100%;
    background-color: #f7f7f7;
    justify-content: center;
    text-align: center;
    align-items: center;
    

    h1{
        font-size: 6rem;
    }
    .cremas{
        display: flex;
        width:90%;
        padding: 1rem 2rem;
        justify-content: space-around;
        margin-left: 5%;
        margin-top: 3rem;
        color: #BE2329;
        font-weight: bold;
        img{
            height: 20rem;
            
        }
        h3{
            font-size: 1.5rem;
        }

    }
    button{
        margin-top: 2rem;
        min-height: 4rem;
        width: 30%;

    }

`




export default AboutPage;