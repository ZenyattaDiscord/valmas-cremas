import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0%;
        box-sizing: border-box;
    }
    html{
        @media(max-width: 1300px){
            font-size: 75%;
            display: block;
            
        }
        font-family: 'Montserrat', sans-serif;
        font-weight: normal;

    }
    body{
        margin-top: 10vh;
        background: #1b1b1b;
        font-family: 'Vidaloka', serif;
        overflow-x: hidden;
        background-color: white;
        @media(max-width: 1300px){
            font-size: 75%;
            display: block;
        }

        
    }
    h1{
        font-family: 'Vidaloka', serif;
        font-weight: normal;
        font-size: 4rem;
    }
    p{
        font-family: 'Lato', sans-serif;
        font-weight: 300;
        font-size: 1.2rem;
    }
    h3{
        font-family: 'Montserrat', sans-serif;
        font-weight: lighter;
    }
    button{
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        background: #BE2329;
        border: none;
        color: white;
        font-family: 'Montserrat', sans-serif;
        margin-bottom: 2rem;

        transition: all 0.5s ease;
        &:hover{
            background-color:#2c3136;
            color: white;
        }
    }
    a{
        font-family: "Montserrat", sans-serif;
        font-weight: 300;
        font-size: 1rem;
    }

`

export default GlobalStyle;