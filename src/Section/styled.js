import styled, { css } from "styled-components";

export const MainSection = styled.section` 
    margin: 10px 0px;
    background-color: #fff;
    box-shadow: 0px 0px 7px 2px #e3e3e3;
`;

export const Title = styled.h1`
    margin: 5px 0px;
    font-size: 125%;
    width: 100%;
`;

export const Header = styled.header`
    padding: 15px;
    border-bottom: solid 2px #ebe9e9;
    display: flex;
    justify-content: center;

    @media (max-width: 767px) {
        display: flex;
        flex-wrap: wrap;
    }
`;

export const Container = styled.div` 
    padding: 5px 15px;
`;