import styled from "styled-components";

export const Container = styled.div``

export const ProductImg = styled.img`
    height: 80px;
    padding: 12px;
    border-radius: 16px;
    background-color: #f3f3f3;
`

export const EditeButton = styled.button`
    border: 0;
    background-color:${(props) => props.theme.darkWhite};
    height: 32px;
    width: 32px;
    border-radius: 8px;
    margin: 0 auto;
    font-size: 16px;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color:${(props) => props.theme.purple};
    }
`