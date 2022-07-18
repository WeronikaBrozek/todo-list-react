import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 10px 0;
`;

export const Item = styled.li`
    padding: 10px;
    border-bottom: 2px solid  ${({ theme }) => theme.color.mercury};
    text-align: left;
    display: flex;
    justify-content: space-between;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    text-align: left;
    width: 100%;
    padding: 5px 15px;
    
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    min-height: 27px;
    min-width: 27px;
    max-height: 27px;
    max-width: 27px;
    border: none;
    background-color: ${({ theme }) => theme.color.crimson};
    color: ${({ theme }) => theme.color.white};
    transition: 0.5s;
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.color.amaranth};
    }

    &:active {
        border: solid 1px ${({ theme }) => theme.color.tundora};
    }

    ${({ toggleDone }) => toggleDone && css`
        background-color: ${({ theme }) => theme.color.japaneseLaurel};
        transition: 0.5s;

        &:hover {
            background-color: ${({ theme }) => theme.color.green};
        }
    `}
`;