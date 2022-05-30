import styled, { css } from "styled-components";

export const Filters = styled.div`
    display: flex;

    @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
        padding: 10px;
    }
`;

export const Button = styled.button`
    border: none;
    background: none;
    min-width: 160px;
    color: teal;
    transition: 0.5s;
    cursor: pointer;

    &:hover {
        color: rgb(13, 156, 156);
    }

    &:active {
        color: rgb(35, 194, 194);
        border: solid 1px rgb(41, 41, 41);
    }

    &:disabled {
        color: rgb(179, 179, 179);
    }

    @media (max-width: 767px) {
        border: none;
        background: none;
        min-width: 160px;
        color: teal;
        margin: 5px;
    }
`;