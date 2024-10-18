import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    gap: 40px;  
    border-radius: 10px;
    background-color: #ffffff;
    cursor: pointer;
    box-shadow: rgba(0,0,0, 0.35) 0px 5px 15px;

    font-family: sans-serif;

    div{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 5px;
    }

    p{
        color: #ff8c05;
        font-size: 18px;
        line-height: 20px;
        font-weight: 700;
        margin-top: 40px;
    }

    strong{
        font-size: 20px;
        color: #363636;
        font-weight: 800;
        line-height: 20px;
    }
`
export const CardImage = styled.img`
    height: 100px;
    position: absolute;
    top: -20px
`