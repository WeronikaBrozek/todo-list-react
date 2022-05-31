import styled, { css } from "styled-components";

export const ListForm = styled.form`
    max-width: 1000px;
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    flex-wrap: wrap;
    align-self: flex-start;
    width: 100%;
    padding: 15px 0px;

    @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
    }
`;

export const Input = styled.input`
    height: 35px;
    max-width: 800px;
    display: flex;
    flex-grow: 1;
    margin:5px;
    padding: 5px;
`;

export const Button = styled.button`
    height: 35px;
    background-color: teal;
    color: white;
    border: none;
    font-weight: 400;
    margin:5px;
    padding: 5px;
    min-width: fit-content;
    transition: 1s;
    cursor: pointer;

    &:hover {
        background-color: rgb(5, 145, 145);
        transform: scale(1.1);
    }

    &:active {
        border: solid 1px rgb(44, 44, 44);
        background-color: rgb(38, 187, 187);  
    }
`;
