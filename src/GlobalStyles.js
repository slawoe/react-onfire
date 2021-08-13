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
    &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #03dac6;
  }
  &::-webkit-scrollbar-track {
    background: #bb86fc;
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
    font-family: "Montserrat", sans-serif;
}
body{
    width: 100%;
    padding: 0 5rem;
    background-color: #121212;
    color: white;
    @media only screen and (max-width: 768px){
      
      padding: 0 5vw;
    }
}
h2{
    font-size: 3rem;
    font-family: "AbrilFatface", cursive;
    font-weight: lighter;
    @media only screen and (max-width: 768px){
      font-size: 1.5rem;
    }
}
h3{
    font-size: 1.3rem;
    padding: 1.5rem 0;
    @media only screen and (max-width: 768px){
      font-size: 1rem;
    }
}
h4{
    font-size: 1rem;
    padding: 1.5rem 0;
    text-transform: uppercase;
    @media only screen and (max-width: 768px){
      font-size: 0.8rem;
    }
}
p {
    font-size: 0.8rem;
    line-height: 2;
    color: #BB86FC;
    @media only screen and (max-width: 768px){
      font-size: 0.7rem;
    }
}
a{
text-decoration: none;
color: #03DAC6;
}
img{
  display: block;
}
`;

export default GlobalStyles;
