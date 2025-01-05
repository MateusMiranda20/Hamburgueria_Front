import styled from "styled-components";

export const ContainerButton = styled.button`
    width: 100%;
    height: 52px;
    border: 0;
    border-radius: 5px;
    background-color: ${(props) =>props.theme.purple};
    font-size: 30px;
    font-family: "Road Rage", sans-serif;
    color: ${(props) =>props.theme.white};

    &:hover{
        background-color:${(props) =>props.theme.secondDarkPurple};
    }
`
