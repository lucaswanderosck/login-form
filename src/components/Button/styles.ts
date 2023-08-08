import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    padding: 12px 24px;
    background-color: ${({theme}) => theme.colors.primaryColor};
    color: ${({theme}) => theme.colors.textBase};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    text-align: center;
    transition: filter .2s;

    text-transform: uppercase;
    font-weight: 600;
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    letter-spacing: .27px;

    &:hover {
        filter: brightness(.9);
    }
`;