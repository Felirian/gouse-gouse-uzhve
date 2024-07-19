import { createGlobalStyle } from 'styled-components';
import {Fonts} from "@/styles/textTags";
import {COLORS} from "@/styles/variables";

const GlobalStyles = createGlobalStyle`
  ${Fonts};
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    //border: 1px pink solid;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding: 0;
    
    background-color: rgba(0, 0, 0, 0);
    background-image: url('/noize.png'),
    radial-gradient(200.88% 50.12% at 105.04% 50.01%,
    rgba(255, 255, 255, 0.70) 0%,
    rgba(171, 162, 158, 0.70) 47.59%,
    rgba(111, 95, 88, 0.00) 100%),
    radial-gradient(101.19% 118.42% at 2.7% 87.29%,
    #635246 0%, #735242 100%);
    background-repeat: repeat;
    background-blend-mode: multiply;
  }

  body {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    max-width: 100vw;
  }

  main {
    overflow-x: hidden;
    max-width: 100vw;
  }

  p,
  a,
  br,
  span,
  img,
  div,
  ul,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  input,
  textarea {
    color: ${COLORS.white};
  }

  button {
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
    outline: none;
    border: none;
    background: transparent;
    color: inherit;

    &:focus {

    }

    &:disabled {

    }
  }

  a {
    text-decoration: none;
    color: inherit;
    -webkit-tap-highlight-color: transparent;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyles;