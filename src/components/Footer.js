import React from "react";
import styled from "styled-components";

function Footer(){

    return(
        <div>
        <FooterStyle>
        <h3>Valmas Cremas <span>&copy;</span>2023 All Rights Reserved</h3>
            <div className="socials">
                <p>linkedin</p>
                <p>linkedin</p>
                <p>linkedin</p>

            </div>
        </FooterStyle>
        </div>
    )
}


const FooterStyle = styled.div`
    height: 10vh;
    width: 100%;
    background: #2c3136;
    color: white;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    display: flex;
    h3{
        margin-left: 10%;
    }
    .socials{
        display: flex;
        width: 30%;
        justify-content: space-around;
    }
    
`
export default Footer;