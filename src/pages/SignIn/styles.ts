import styled from "styled-components";
import backgroundImg from "../../assets/images/side-image.jpg";

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 42px;

  @media (max-width: 481px) {
    padding: 16px;
  }
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

    .remember {
      display: flex;
      justify-content: space-between;
      margin-bottom: 16px;

      span:first-child {
        display: flex;
        align-items: center;
        gap: 6px;

        > input[type="checkbox"] {
          width: 20px;
          height: 20px;
          border-radius: 4px;
          border: 1px solid #574c3a;
          background-color: #efeae2;
          cursor: pointer;
        }

        label {
          color: #574c3a;
          font-family: Roboto;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
      }

      span:last-child {
        a {
          color: #574c3a;
          font-family: "Poppins", sans-serif;
          font-size: 14px;
          font-weight: 600;
        }
      }
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

    @media (max-width: 481px) {
      background: none;
      padding: 0;
    }
  }

  @media (max-width: 481px) {
    place-content: start center;
    padding-top: 12vh;
  }
`;

export const Background = styled.div`
  background: url(${backgroundImg}) no-repeat right;
  background-size: cover;

  @media (max-width: 1024px) {
    display: none;
  }
`;
