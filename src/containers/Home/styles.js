import styled from "styled-components";
import BannerImg from "../../assets/Banner-home.svg"
import  FundoImg from "../../assets/Fundo-login.svg"

export const Banner = styled.div`
    background: url('${BannerImg}');
    background-size: cover;
    background-position: center;
    height: 480px;

    h1{
        font-family: 'Road Rage', sans-serif;
        font-size: 80px;
        color: #f4f4f4;
        position: absolute;
        right: 20%;
        top: 10%;
    }
`
export const Container = styled.section`
    background: 
    linear-gradient(
        rgba(255,255,255, 0.5),
        rgba(255,255,255, 0.5)
    ),
    url('${FundoImg}');
   height: 100%;
   background-size: cover;
`
export const Content = styled.div`
    padding-bottom: 70px;
`

