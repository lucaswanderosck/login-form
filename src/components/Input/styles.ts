import styled from "styled-components";

export const Container = styled.div`
  > label {
    color: ${({ theme }) => theme.colors.textBase};
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    font-weight: 500;
  }

  > div {
    position: relative;
    margin: 6px 0 16px;

    > input {
      font-family: "Roboto", sans-serif;
      font-size: 14px;
      border-radius: 4px;
      border: 2px solid ${({ theme }) => theme.colors.textBase};
      width: 100%;
      height: 100%;
      padding: 12px 36px;
      background: ${({ theme }) => theme.colors.inputBackground};
      color: ${({ theme }) => theme.colors.textInput};

      &:focus {
        outline: none;
        box-shadow: 0px 1px 6px ${({ theme }) => theme.colors.focusColor};
        border: 2px solid ${({ theme }) => theme.colors.focusColor};
        transition: all 0.2s;
      }
    }

    > svg {
      position: absolute;
      top: 50%;
      left: 10px;
      transform: translateY(-50%);
      color: ${({ theme }) => theme.colors.textBase};
    }
  }
`;
