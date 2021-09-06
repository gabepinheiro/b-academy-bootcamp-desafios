import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, #root{
    width:90vw;
    height: 100vh;
    margin: auto;
  }

  #root {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    padding: 1rem;
    position: relative;
  }

  img {
    display: block;
    width: 100%;
    object-fit: cover;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);