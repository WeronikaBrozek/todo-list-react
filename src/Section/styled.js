import styled from "styled-components";

export const MainSection = styled.section` 
    margin: 10px 0px;
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0px 0px 7px 2px ${({ theme }) => theme.color.mercury};
`;

export const Title = styled.h1`
    margin: 5px 0px;
    font-size: 125%;
    width: 100%;
`;

export const Header = styled.header`
    padding: 15px;
    border-bottom: solid 2px ${({ theme }) => theme.color.mercury};
    display: flex;
    justify-content: center;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        display: flex;
        flex-wrap: wrap;
    }
`;

export const Container = styled.div` 
    padding: 5px 15px;
`;