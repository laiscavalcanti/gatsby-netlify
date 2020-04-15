import { createGlobalStyle } from "styled-components"

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
    font-family: 'Merriweather', serif;
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
    --borders: #222;
    --texts: #222;
    --color: #900020;
    --background-color: #f5f5f5;
    --black:#222;
    --white:#fff;
    --mediumColor: #4c4c4c;
    --colorMenuBar: #900020;
    --backgroundMenuBar: #f5f5f5;
    --backgroundSideBar: #f5f5f5; 
    --borderSideBar: #222;
    --colorSideBar: #222;
    --colorHoverSideBar: #900020;
    --colorHoverPostItem:#900020;
    --backgroundHoverPostItem:#900020;
  }

  body.dark{
    --borders: #fff;
    --texts: #fff;
    --color: #4c4c4c;
    --background-color: #28324e;
    --black: #fff;
    --white:#222;
    --mediumColor: #282828;
    --colorMenuBar: #28324e;
    --backgroundMenuBar:#f5f5f5;
    --backgroundSideBar: #b1c0cd; 
    --borderSideBar: #fff;
    --colorSideBar: #222;
    --colorHoverSideBar: #900020;
    --colorHoverPostItem:#900020;
    --backgroundHoverPostItem:#b1c0cd;
  }
`
export default GlobalStyles
