import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --accent: #3470ff;
    --accentActive: #0B44CD;
    --white: #FFF;
    --black: #121417;
    --transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--white);
    color: var(--black);
  }

  ul, ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  img {
    display: block;
  }

  input, button {
    font: inherit;
  }

`;

export const ButtonStyled = styled.button`
  display: flex;
  padding: 12px 99px;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  border: none;
  border-radius: 12px;
  color: var(--white);
  background-color: var(--accent);
  transition: background-color var(--transition);
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: var(--accentActive);
  }
`;
