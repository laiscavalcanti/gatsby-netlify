import { createGlobalStyle } from "styled-components"
import img from "../images/pontos(1).png"

const GlobalStyles = createGlobalStyle`

*, 
*:after,
*:before {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
    list-style-type: none;
    text-decoration: none;
}

body{
    font-size: 100%;
    background-color: black;
    background: white;
    line-height: 1;
    font-size: 100%;
    font-family: "Montserrat", sans-serif;
    background-image: url(${img});
}

  img {
    display: block;
  	width: 100%;
  	height: auto;
  }
  
  body.light{
    --sameColorBlack: #191919;
    --sameColorWhite: #fff;
    --borders: #222;
    --texts: #000000;
    --color: #900020;
    --background-color: #00000;
    --black:#222;
    --white:#191919;
    --borderSideBar: #222;
    --colorSideBar: #222;
    --highlight: #ffd700;
    --colorSelection: #fff;
    --backgroundSelection: #900020;
  }

  body.dark{
    --sameColorBlack: #191919;
    --sameColorWhite: #fff;
    --borders: #fff;
    --texts: #fff;
    --color: #900020;
    --background-color: #191919;
    --black: #fff;
    --white:#191919;
    --borderSideBar: #fff;
    --colorSideBar: #222;
    --highlight: #ffd700;
    --colorSelection: #900020;
    --backgroundSelection: #fff;
   
  }
`
export default GlobalStyles
