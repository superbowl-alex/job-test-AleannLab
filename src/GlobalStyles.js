import { Global, css } from '@emotion/react';

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        @import-normalize; /* bring in normalize.css styles */

        html {
          box-sizing: border-box;
          width: 100vw;
          overflow-x: hidden;
        }

        *,
        *::before,
        *::after {
          box-sizing: inherit;
        }

        body {
          margin: 0;
          background-color: #def2f1;
          font-family: Proxima Nova Rg, Roboto, serif;
        }

        body::-webkit-scrollbar {
          width: 16px;
          height: 0;
        }

        body::-webkit-scrollbar-track {
          background: #70c8c3;
        }

        body::-webkit-scrollbar-thumb {
          background-color: #feffff;
          border-radius: 3px;
        }

        h1,
        h2,
        h3,
        h4,
        ul,
        p {
          margin: 0;
          padding: 0;
        }

        ul {
          list-style: none;
        }

        a {
          text-decoration: none;
        }

        img {
          display: block;
          height: auto;
          max-width: 100%;
        }

        button {
          outline: none;
        }

        button:hover {
          cursor: pointer;
        }
      `}
    />
  );
};

export default GlobalStyles;
