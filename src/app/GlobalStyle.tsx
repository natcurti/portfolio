import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
    :root{
        --darkest-navy: #010112;
        --dark-navy: #000020;
        --medium-navy: #080d52;
        --light-navy: #2f2c79;
        --light-blue: #2954a3;
        --white: #f0e7e7;
    }

    body::-webkit-scrollbar {
        width: 10px;
    }
    
    body::-webkit-scrollbar-thumb {
        background: var(--light-navy);
        border-radius: 10px;
    }
    
    body::-webkit-scrollbar-track {
        background: var(--dark-navy);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: var(--darkest-navy);
        color: var(--white);
        font-family: var(--font-quicksand);
    }

`;

export default GlobalStyle;
