import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
    :root{
        --dakest-navy: #010112;
        --dark-navy: #000020;
        --medium-navy: #171a4a;
        --light-navy: #2f2c79;
        --pink: #ff69b4;
        --light-pink: #ffa8d9;
        --white: #f0e7e7;
        scroll-behavior: smooth;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: var(--dark-navy);
        color: var(--white);
        font-family: var(--font-quicksand);
    }

`;

export default GlobalStyle;
