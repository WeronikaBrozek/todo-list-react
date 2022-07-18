import styled from "styled-components";

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
    color: ${({ theme }) => theme.color.teal};
    transition: 0.5s;
    cursor: pointer;

    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
        border: solid 1px ${({ theme }) => theme.color.mineShaft};
    }

    &:disabled {
        color: ${({ theme }) => theme.color.nobel};
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        border: none;
        background: none;
        min-width: 160px;
        color: ${({ theme }) => theme.color.teal};
        margin: 5px;
    }
`;