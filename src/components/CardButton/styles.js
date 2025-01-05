import styled from "styled-components";


export const ContainerButton = styled.div`
    background-color: ${(props) =>props.theme.purple};
    width: 100%;
    height: 45px;
    border: 0;
    border-radius: 6px;
    font-size: 30px;
    color: ${(props) =>props.theme.white};

    &:hover{
        background-color: #6f357f;
    }

    img{
        width: 100%;
        height: 20px;
        margin: auto;
    }
`