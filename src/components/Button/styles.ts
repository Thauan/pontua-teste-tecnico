import styled from "styled-components";

export const Wrapper = styled.button`
    background-color: #081B4E;
    height: 57px;
    border-radius: 10px;

    color: white;
    font-size: 24px;

    transition: all 400ms;

    &:disabled {
        opacity: 1;
        background-color: #C3C3C3;
    }

    &:hover {
        opacity: 0.9;
    }
`