import React from "react";
import { AboutDiv } from "./AboutPage";
import { Cover, AboutText } from './ActualAbout';
import { fade, pageAnimation } from '../Animations';
import {motion} from 'framer-motion';
import styled from "styled-components";
import { Line } from "./AboutPage";


function Contact(){

    return(

        <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">

            <Cover>
            <AboutText>
                <motion.div className="about" variants={fade} initial="hidden" animate="show" transition={{delay: 1}}>
                    <h1>CONTACT</h1>
                    <h3>HOME   |   CONTACT</h3>
                </motion.div>
            </AboutText>
            </Cover>
            <ContactDiv>
                <CardsDiv>
                    <Card>
                        <h3>HOURS</h3>  
                        <Line/>
                        <p>Mon - Fri 9AM - 7PM<br/>
                        Sat - Sun 10AM - 6PM</p>
                    </Card>
                    <Card>
                        <h3>LOCATION</h3>
                        <Line/>
                        <p>Serving you from<br/>
                            Pembroke Pines, FL</p>
                    </Card>
                    <Card>
                        <h3>PHONES + EMAIL</h3>
                        <Line/>
                        <p>+1954-410-3852
                        sirval@valmascremas.com</p>
                    </Card>
                </CardsDiv>
                <h3>HAVE A QUESTION?</h3>
                <h1>GET IN<br/>TOUCH</h1>

                <Input placeholder="NAME*"/>
                <Input placeholder="EMAIL*"/>
                <Input placeholder="MESSAGE*" style={{height: '30vh'}} />
                <button type="submit">SEND MESSAGE</button>

                


            </ContactDiv>

        </motion.div>

    )

};

export default Contact;

const ContactDiv = styled.div`
    min-height: 100vh;
    width: 100%;
    background: #f7f7f7;
    justify-content: center;
    text-align: center;
    display: flex;
    flex-direction: column;
    h1{
        font-size: 6rem;
    }
    h3{
        color: #BE2329;
        letter-spacing: .3rem;
    }
    button{
        width: 30%;
        margin: 2rem auto 2rem auto;
    }
`;
const CardsDiv = styled(motion.div)`
    min-height: 40vh;
    width: 80%;
    display: flex;
    margin: auto;
    justify-content: space-around;
    align-items: center;
    padding: 1rem 2rem;
    margin-bottom: 4rem;

`

const Card = styled.div`
    min-height: 35vh;
    padding: 2rem 2rem;
    margin-top: 2rem;
    width: 30%;
    background: white;
    display: block;
    justify-content: center;
    text-align: center;
    h3{
        color: #BE2329;
        font-weight: bold;
        letter-spacing: .2rem;
    }
    p{
        margin-top: 2rem;
        letter-spacing: 3%;
        font-size: 1.2rem;
        opacity: .7;
        line-height: 1.7rem;
    }
`
const Input = styled.input`
    width: 30%;
    min-height: 2.5rem;
    background: #f7f7f7;
    border: 1px solid #ccc;
    padding: 20px 15px;
    
    box-sizing: border-box;
    margin: auto;
    margin-top: 2rem;
    

`

