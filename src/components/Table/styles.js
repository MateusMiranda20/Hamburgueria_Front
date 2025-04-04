import styled from "styled-components";

export const Root = styled.table`

    width: 90%;
    border-collapse: collapse;
    background-color: ${(props) =>props.theme.white};
    border-radius: 20px;
`

export const Header = styled.thead``

export const Tr = styled.tr``

export const Th = styled.th`
    padding: 16px;
    text-align: left;
    color: #000;
    background-color: ${(props) =>props.theme.secondBlack};

    &:last-child {
        border-top-right-radius: 20px;
    }    

    &:first-child {
        border-top-left-radius: 20px;
    }  
    
`

export const Td = styled.td`
    padding: 16px;
    color: #000;
    font-weight: 500;
    line-height: 115%;
`

export const Body = styled.tbody`
    

`

