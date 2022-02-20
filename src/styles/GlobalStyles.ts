import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    background-repeat: no-repeat;
  }
  body {
    font-family: 'Poiret One', cursive;
    position: relative;
  }
  body, h1, h2, h3, h4, h5, h6, p, figure {
    margin: 0;
  }
  ol, ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  input, textarea {
    &::placeholder {
      overflow: visible;
      whitespace: nowrap;
    }
  }
  button {
    border: none;
    cursor: pointer;
    user-select: none;
    background-color: transparent;
    padding: 0;
    background-size: contain;
    background-position: center;
    font-size: 1rem;
  }
  a {
    outline: none;
    text-decoration: none;
    &:hover{
      text-decoration: none;
    }
  }
  figure {
    text-align: center;
    figcaption {
      text-align: left;
    }
  }
  img {
    object-position: center;
    object-fit: contain;
    vertical-align: middle;
    user-select: none;
  }
`;

export default GlobalStyles;