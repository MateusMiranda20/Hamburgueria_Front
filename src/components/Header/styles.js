import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.theme.mainBlack};
    width: 100%;
    height: 72px;
    padding: 0 56px;
`
export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
`
export const Navigation = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 74px;

    div{
        display: flex;
        justify-content: center;
        gap: 20px;
    }

    hr{
        height: 24px;
        border-radius: 1px solid ${(props) =>props.theme.mainBlack};
    }
`
export const HeaderLink = styled(Link)`
    color: ${props => props.$isLink ? props => props.theme.purple : props => props.theme.white };
    border-bottom: ${props => props.$isLink ? `1px solid ${(props) =>props.theme.purple}` : 'none'};
    text-decoration: none;
    font-size: 14px;
    transition: color 200ms;
    display: flex;
    align-items: center;
    gap: 10px;

`
export const Options = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;

`
export const Profile = styled.div`
    display: flex;
    justify-content: center;
    gap: 14px;
    font-size: 15px;
    align-items: center;

    P{
        color: ${(props) =>props.theme.white};
        line-height: 90%;
        font-weight: 300;
    }

    span{
        color: ${(props) =>props.theme.purple};
        font-weight: 700;
    }

`
export const LinkContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

export const Button = styled.button`
    color: ${(props) =>props.theme.red};
    text-decoration: none;
    font-weight: 700;
    background-color: transparent;
    border: none;
`