import { createGlobalStyle } from "styled-components";
import MontserratRegular from "./assets/fonts/Montserrat-Regular.ttf";
import MontserratMedium from "./assets/fonts/Montserrat-Medium.ttf";
import AbrilFatface from "./assets/fonts/AbrilFatface-Regular.ttf";

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html{
    &::-webkit-scrollbar{
        width: 0.5rem; 
    }
    &::-webkit-scrollbar-thumb{
        background-color: darkgrey;  
    }
    @font-face {
            src: url(${MontserratRegular}) format("truetype");
            font-family: "Montserrat";
            font-weight: normal;
            font-display: swap;
          }
    @font-face {
            src: url(${MontserratMedium}) format("truetype");
            font-family: "Montserrat";
            font-weight: medium;
            font-display: swap;
        }
    @font-face {
            src: url(${AbrilFatface}) format("truetype");
            font-family: "AbrilFatface";
            font-weight: normal;
            font-display: swap;
          }
}
body{
    font-family: "Montserrat", sans-serif;
    background-color: #121212;
    color: white;
}
h2{
    font-size: 3rem;
    font-family: "AbrilFatface", cursive;
    font-weight: lighter;
}
h3{
    font-size: 1.3rem;
    padding: 1.5rem;
}
p {
    font-size: 0.8rem;
    line-height: 2;
    color: #BB86FC;
}
a{
text-decoration: none;
color: #03DAC6;
}
`;

export default GlobalStyles;
