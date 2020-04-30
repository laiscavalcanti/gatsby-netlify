import { createGlobalStyle } from "styled-components"
import img from "../images/bg-pattern.png"

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
    font-family: 'Montserrat', serif;
    background-image: url(${img});
}

  img {
    display: block;
  	width: 100%;
  	height: auto;
  }
  /*body.dark {
    --borders: #38444d;
    --texts: #8899a6;
    --postColor: #fff;
    --highlight: #1fa1f2;
    --mediumBackground: #192734;
    --background: #16202c;
    --white: #fff;
    --black: #222;
  }
  body.light {
    --borders: #dedede;
    --postColor: #111;
    --texts: #555555;
    --highlight: #1fa1f2;
    --mediumBackground: #f0f0f3;
    --background: #fff;
    --white: #fff;
    --black: #222;
  }*/

  body.light{
    --sameColorBlack: #191919;
    --sameColorWhite: #fff;
    --borders: #222;
    --texts: #222;
    --color: #900020;
    --background-color: #00000;
    --black:#222;
    --white:#191919;
    --mediumColor: #4c4c4c;
    --colorMenuBar: #900020;
    --backgroundMenuBar: #f5f5f5;
    --backgroundSideBar: #f5f5f5; 
    --borderSideBar: #222;
    --colorSideBar: #222;
    --colorHoverSideBar: #900020;
    --colorHoverPostItem:#900020;
    --backgroundHoverPostItem:#900020;
    --highlight: #ffd700;
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
    --mediumColor: #282828;
    --colorMenuBar: #000000;
    --backgroundMenuBar:#f5f5f5;
    --backgroundSideBar: #b1c0cd; 
    --borderSideBar: #fff;
    --colorSideBar: #222;
    --colorHoverSideBar: #900020;
    --colorHoverPostItem:#900020;
    --backgroundHoverPostItem:#e9e9e9;
    --highlight: #ffd700;
  }
`
export default GlobalStyles
