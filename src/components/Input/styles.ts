import styled from "styled-components";

export const Container = styled.div`
  > label {
    color: ${({ theme }) => theme.colors.primaryColor};
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
  }

  > div {
    position: relative;
    margin: 6px 0 16px;

    > input {
      border-radius: 4px;
      border: 2px solid ${({ theme }) => theme.colors.primaryColor};
      width: 100%;
      height: 100%;
      padding: 12px 36px;
      background: ${({ theme }) => theme.colors.textBase};

      &::placeholder {
        color: ${({ theme }) => theme.colors.placeholder};
        font-family: "Roboto", sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: normal;
      }

      &:focus {
        outline: none;
        box-shadow: 0px 1px 4px ${({ theme }) => theme.colors.focusColor};
      }
    }

    > svg {
      position: absolute;
      top: 50%;
      left: 10px;
      transform: translateY(-50%);
      color: ${({ theme }) => theme.colors.placeholder};

      
    }
  }
`;
