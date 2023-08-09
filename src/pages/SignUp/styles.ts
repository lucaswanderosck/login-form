import styled from "styled-components";
import backgroundImg from "../../assets/images/side-image.jpg";

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 42px;
`;

export const Content = styled.div`
  display: grid;
  place-content: center;

  > form {
    background-color: ${({ theme }) => theme.colors.formBackground};
    border-radius: 4px;
    padding: 60px 100px;

    > h1 {
      color: ${({ theme }) => theme.colors.textTitle};
      font-family: "Poppins", sans-serif;
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 6px;
      display: flex;
      align-items: center;
      gap: 12px;
    }

    > h2 {
      color: ${({ theme }) => theme.colors.primaryColor};
      font-family: "Roboto", sans-serif;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      margin-bottom: 24px;
    }

    > p {
      color: ${({ theme }) => theme.colors.primaryColor};
      text-align: center;
      margin-top: 14px;
      font-family: "Poppins", sans-serif;
      font-size: 14px;

      > a {
        color: ${({ theme }) => theme.colors.primaryColor};
        font-weight: bold;
      }
    }
  }
`;

export const Background = styled.div`
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;
