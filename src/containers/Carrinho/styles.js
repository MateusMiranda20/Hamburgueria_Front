import styled from "styled-components";
import Fundo from '../../assets/Fundo negro.svg'
import  FundoImg from "../../assets/Fundo-login.svg"


export const Container = styled.div`
    width: 100%;
    background: 
    linear-gradient(
        rgba(255,255,255, 0.5),
        rgba(255,255,255, 0.5)
    ),
    url('${FundoImg}');
    min-height: 100vh;
    background-size: cover;
`
export const Banner = styled.div`
    background-image: url('${Fundo}');
    background-repeat: none;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;

    height: 190px;
`

export const Title = styled.h1`
    font-size: 32px;
    font-weight: 800;
    padding-bottom: 12px;
    color: #61a120;
    text-align: center;
`
export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 20%;
    gap: 40px;
    width: 100%;
    max-width: 1280px;
    padding: 40px;
    margin: 0 auto;
`