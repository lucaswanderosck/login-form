import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: ${({ theme }) => theme.colors.background};
    -webkit-font-smoothing: antialiased;

    @media (max-width: 481px) {
        background-color: ${({ theme }) => theme.colors.formBackground};

    }
}

a {
    text-decoration: none;
}

`;