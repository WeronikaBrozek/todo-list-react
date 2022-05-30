import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    padding: 0px;
    margin: 10px 0px;
`;

export const Item = styled.li`
    padding: 10px;
    border-bottom: 2px solid  #ebe9e9;
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
    background-color: #e21c43;
    color: white;
    transition: 0.5s;
    cursor: pointer;

    &:hover {
        background-color: #eb3b5e;
    }

    &:active {
        border: solid 1px #414141;
    }

    ${({ toggleDone }) => toggleDone && css`
        background-color: green;
        transition: 0.5s;

        &:hover {
            background-color: rgb(3, 153, 3);
        }
    `}
`;