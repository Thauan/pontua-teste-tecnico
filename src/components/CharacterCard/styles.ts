import styled from "styled-components";

export const Card = styled.div`
    background-color: #EAECF0;
    display: flex;
    flex-direction: row;
    border-radius: 15px;
    padding: 20px;
`;

export const Image = styled.div<any>`
    background-image: url(${props => props.bg});
    border-radius: 15px;
    height: 119px;
    width: 83px;
    background-size: cover;
`