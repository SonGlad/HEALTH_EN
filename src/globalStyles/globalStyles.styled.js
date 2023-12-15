import { createGlobalStyle } from "styled-components";
import "modern-normalize";

export const GlobalStyle = createGlobalStyle`
   
    html,
    body {
    height: 100%;
    font-family: 'Poppins', sans-serif; 
    font-weight: 500;
    letter-spacing: 0.02em;
    /* color: #FFFFFF; */
    /* background-color: #050505; */
    color: ${(props) => props.theme.color.primary_white};
    background-color: ${(props) => props.theme.color.primary_black};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }

    a {
    text-decoration: none;
    color: inherit;
    }

    ul,
    ol {
    list-style: none;
    margin: 0;
    padding: 0;
    }

    img {
    display: block;
    max-width: 100%;
    height: auto;
    }

    h1, 
    h2, 
    h3, 
    h4, 
    h5, 
    h6, 
    p {
    margin: 0;
    }

    *{
    box-sizing: border-box;
    }
`;
