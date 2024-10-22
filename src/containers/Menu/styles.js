import styled from "styled-components";

import BannerFundoo from '../../assets/Banner-fundo.svg'

export const Container = styled.div `

    width: 100%;
    min-width: 100vh;
    background-color: #f0f0f0;

`
export const Banner = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 480px;
    width: 100%;
    position: relative;

    background: url('${BannerFundoo}'), no-repeat;
    background-size: cover;
    background-color: #1f1f1f;
    background-position: center;
    
    color: #fafafa;

    h1{
        font-family: "Road Rage", sans-serif;
        font-size: 80px;
        line-height: 65px;
        position: absolute;

        right: 20%;
        top: 20%;

        span{
            display: block;
            font-size: 20px;
            font-weight: 400;
        }
    }

`
export const CategoryMenu = styled.div `

`
export const ProductMenu = styled.div `

`