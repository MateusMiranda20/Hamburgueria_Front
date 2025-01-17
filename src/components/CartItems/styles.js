import styled from "styled-components";

export const ProductImg = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 16px;
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    border: none;
    gap: 12px;
    background-color: ${(props) =>props.theme.white};

    button{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        background-color: ${(props) =>props.theme.purple};
        border-radius: 6px;
        transition: all 0.4s;
        border: none;

        &:hover{
            background-color: ${(props) =>props.theme.secondDarkPurple};
        }
    }
`
export const Emptycart = styled.p`
    font-size: 20px;
    text-align: center;
    font-weight: bolder;
`
export const ThashImage = styled.img`
   height: 30px;
   width: 30px;
   cursor: pointer;
`