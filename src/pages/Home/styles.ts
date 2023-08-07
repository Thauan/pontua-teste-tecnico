import styled from "styled-components";

export const Container = styled.div`
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 15px;
    grid-row-gap: 15px;

    .item-penult {
        grid-row-start: 3;
        grid-column-start: 1;

        grid-row-end: 3;
        grid-column-end: 3;
    }

    .item-last {
        grid-row-start: 3;
        grid-column-start: 3;

        grid-row-end: 3;
        grid-column-end: 5;
    }
`